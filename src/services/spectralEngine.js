/**
 * Aqua-Space Spectral Engine
 * Mathematical processing for Sentinel-2 / Landsat multi-spectral bands.
 * Computes NDVI (Vegetation Index), NDWI (Water Index), and EVI.
 */

// Sentinel-2 MSI Band Specifications
export const SENTINEL_2_BANDS = [
  { id: 'B01', name: 'Coastal Aerosol', wavelength: 443, resolution: '60m', color: '#4338ca', desc: 'Aerosol correction & deep water penetration' },
  { id: 'B02', name: 'Blue', wavelength: 490, resolution: '10m', color: '#2563eb', desc: 'Soil vs vegetation, water body mapping' },
  { id: 'B03', name: 'Green', wavelength: 560, resolution: '10m', color: '#16a34a', desc: 'Peak vegetation reflectance & water turbidity' },
  { id: 'B04', name: 'Red', wavelength: 665, resolution: '10m', color: '#dc2626', desc: 'Chlorophyll absorption & plant vigor' },
  { id: 'B05', name: 'Red Edge 1', wavelength: 705, resolution: '20m', color: '#b91c1c', desc: 'Vegetation boundary & stress detection' },
  { id: 'B06', name: 'Red Edge 2', wavelength: 740, resolution: '20m', color: '#991b1b', desc: 'Leaf area index & chlorophyll monitoring' },
  { id: 'B07', name: 'Red Edge 3', wavelength: 783, resolution: '20m', color: '#7f1d1d', desc: 'Canopy structure & senescence' },
  { id: 'B08', name: 'NIR (Near Infrared)', wavelength: 842, resolution: '10m', color: '#7c3aed', desc: 'High cellular leaf reflection & biomass density' },
  { id: 'B8A', name: 'Narrow NIR', wavelength: 865, resolution: '20m', color: '#6d28d9', desc: 'Biomass & water vapor absorption correction' },
  { id: 'B09', name: 'Water Vapour', wavelength: 945, resolution: '60m', color: '#475569', desc: 'Atmospheric water vapour measurement' },
  { id: 'B11', name: 'SWIR 1', wavelength: 1610, resolution: '20m', color: '#334155', desc: 'Soil moisture, snow/cloud discrimination' },
  { id: 'B12', name: 'SWIR 2', wavelength: 2190, resolution: '20m', color: '#1e293b', desc: 'Mineral detection & vegetation moisture stress' }
];

// Spectral Reflectance Profiles (% reflectance across bands for representative surfaces)
export const SPECTRAL_PROFILES = {
  healthyCrop: {
    name: 'Healthy Crop (Almonds / Wheat)',
    B02: 0.05, B03: 0.12, B04: 0.06, B08: 0.65, B11: 0.18,
    explanation: 'Strong chlorophyll absorption in Red (B4) and high cellular scattering in NIR (B8) generates peak NDVI > 0.70.'
  },
  stressedCrop: {
    name: 'Drought-Stressed Crop',
    B02: 0.08, B03: 0.14, B04: 0.15, B08: 0.32, B11: 0.35,
    explanation: 'Reduced chlorophyll absorption increases Red reflectance while cell dehydration lowers NIR, dropping NDVI to ~0.35.'
  },
  clearWater: {
    name: 'Deep Clear Water (Lake / Reservoir)',
    B02: 0.14, B03: 0.10, B04: 0.04, B08: 0.01, B11: 0.00,
    explanation: 'Almost total absorption of infrared radiation by pure water, yielding high NDWI and negative NDVI (-0.4).'
  },
  turbidWater: {
    name: 'Turbid / Algae-Laden Water',
    B02: 0.09, B03: 0.22, B04: 0.12, B08: 0.18, B11: 0.02,
    explanation: 'Suspended sediment and cyanobacteria reflect Green & NIR, giving elevated turbidity signals.'
  },
  bareSoil: {
    name: 'Bare Soil / Fallow Field',
    B02: 0.12, B03: 0.18, B04: 0.24, B08: 0.28, B11: 0.38,
    explanation: 'Monotonically rising reflectance from Blue to SWIR, resulting in near-zero NDVI (0.05 - 0.15).'
  }
};

/**
 * Normalized Difference Vegetation Index (NDVI)
 * Formula: (NIR - Red) / (NIR + Red)
 * Range: -1.0 to +1.0
 */
export function calculateNDVI(nir, red) {
  const denom = nir + red;
  if (denom === 0) return 0;
  const val = (nir - red) / denom;
  return Math.max(-1, Math.min(1, val));
}

/**
 * Normalized Difference Water Index (NDWI - McFeeters / Gao)
 * Formula: (Green - NIR) / (Green + NIR)
 * Range: -1.0 to +1.0
 */
export function calculateNDWI(green, nir) {
  const denom = green + nir;
  if (denom === 0) return 0;
  const val = (green - nir) / denom;
  return Math.max(-1, Math.min(1, val));
}

/**
 * Enhanced Vegetation Index (EVI)
 * Formula: 2.5 * ((NIR - Red) / (NIR + 6*Red - 7.5*Blue + 1))
 */
export function calculateEVI(nir, red, blue) {
  const denom = nir + 6 * red - 7.5 * blue + 1;
  if (denom === 0) return 0;
  const val = 2.5 * ((nir - red) / denom);
  return Math.max(-1, Math.min(1.5, val));
}

/**
 * Color Maps / LUT (Lookup Tables)
 */
export const COLOR_PALETTES = {
  agro: {
    id: 'agro',
    name: 'Agro-NDVI',
    description: 'Standard remote sensing crop vigor gradient (Brown -> Yellow -> Emerald)',
    gradientCss: 'linear-gradient(90deg, #1e3a8a 0%, #b45309 20%, #fef08a 45%, #84cc16 65%, #15803d 85%, #052e16 100%)',
    getColor: (val) => {
      // Normalized from -1 to 1 into color
      if (val < 0.0) {
        // Water: deep blue
        return [30, 58, 138, 220];
      } else if (val < 0.15) {
        // Bare soil / sand: brown/earthen
        const t = val / 0.15;
        return [Math.round(180 - t * 40), Math.round(130 - t * 30), Math.round(90 - t * 30), 220];
      } else if (val < 0.35) {
        // Sparse / stressed vegetation: yellow-orange to light yellow-green
        const t = (val - 0.15) / 0.20;
        return [Math.round(234 - t * 60), Math.round(200 + t * 40), Math.round(70 - t * 30), 230];
      } else if (val < 0.6) {
        // Moderate crop health: vibrant lime to emerald
        const t = (val - 0.35) / 0.25;
        return [Math.round(130 - t * 100), Math.round(210 + t * 20), Math.round(40 + t * 40), 240];
      } else {
        // Dense, flourishing canopy: dark rich green
        const t = Math.min(1, (val - 0.6) / 0.4);
        return [Math.round(21 - t * 15), Math.round(128 + t * 20), Math.round(61 - t * 20), 255];
      }
    }
  },
  water: {
    id: 'water',
    name: 'Aqua-Turbidity',
    description: 'Specialized water delineation & moisture gradient',
    gradientCss: 'linear-gradient(90deg, #78350f 0%, #d97706 25%, #67e8f9 50%, #0284c7 75%, #082f49 100%)',
    getColor: (val) => {
      // NDWI range: negative is land/soil, positive is open water
      if (val < -0.2) {
        // Dry soil / rock
        return [120, 53, 15, 200];
      } else if (val < 0.0) {
        // High soil moisture / wetland transition
        const t = (val + 0.2) / 0.2;
        return [Math.round(180 - t * 80), Math.round(150 + t * 30), Math.round(80 + t * 120), 210];
      } else if (val < 0.2) {
        // Shallow water / turbid edge / suspended algae
        const t = val / 0.2;
        return [Math.round(40 + t * 10), Math.round(210 - t * 40), Math.round(230 - t * 20), 235];
      } else {
        // Deep clear water body
        const t = Math.min(1, (val - 0.2) / 0.6);
        return [Math.round(2 + t * 4), Math.round(132 - t * 80), Math.round(199 - t * 70), 255];
      }
    }
  },
  turbo: {
    id: 'turbo',
    name: 'NASA Turbo',
    description: 'Scientific high-contrast pseudo-color spectrum',
    gradientCss: 'linear-gradient(90deg, #30123b 0%, #4662d8 20%, #29be56 45%, #ecc835 70%, #db381e 88%, #7a0403 100%)',
    getColor: (val) => {
      // Normalize -0.2 to 0.8 into 0 to 1
      const norm = Math.max(0, Math.min(1, (val + 0.2) / 1.0));
      // Approximate 5 color stops
      if (norm < 0.25) {
        const t = norm / 0.25;
        return [Math.round(48 + t * 22), Math.round(18 + t * 80), Math.round(59 + t * 157), 230];
      } else if (norm < 0.5) {
        const t = (norm - 0.25) / 0.25;
        return [Math.round(70 - t * 30), Math.round(98 + t * 92), Math.round(216 - t * 130), 240];
      } else if (norm < 0.75) {
        const t = (norm - 0.5) / 0.25;
        return [Math.round(41 + t * 195), Math.round(190 + t * 10), Math.round(86 - t * 33), 245];
      } else {
        const t = (norm - 0.75) / 0.25;
        return [Math.round(236 - t * 114), Math.round(200 - t * 196), Math.round(53 - t * 50), 255];
      }
    }
  },
  viridis: {
    id: 'viridis',
    name: 'Viridis',
    description: 'Perceptually uniform color scale for scientific telemetry',
    gradientCss: 'linear-gradient(90deg, #440154 0%, #3b528b 30%, #21918c 60%, #5ec962 85%, #fde725 100%)',
    getColor: (val) => {
      const norm = Math.max(0, Math.min(1, (val + 0.2) / 1.0));
      if (norm < 0.33) {
        const t = norm / 0.33;
        return [Math.round(68 - t * 9), Math.round(1 + t * 81), Math.round(84 + t * 55), 230];
      } else if (norm < 0.66) {
        const t = (norm - 0.33) / 0.33;
        return [Math.round(59 - t * 26), Math.round(82 + t * 63), Math.round(139 + t * 1), 240];
      } else {
        const t = (norm - 0.66) / 0.34;
        return [Math.round(33 + t * 220), Math.round(145 + t * 86), Math.round(140 - t * 103), 255];
      }
    }
  }
};

/**
 * Generate a realistic multi-spectral scene grid for testing & real-time client canvas visualization
 * Simulates real agricultural parcels, water bodies, urban roads, or algae blooms based on preset type.
 */
export function generateSyntheticMultiSpectralRaster(width = 256, height = 256, presetType = 'agriculture', dateFactor = 1.0) {
  // Returns multi-band data buffer: B2, B3, B4, B8, B11
  const b2 = new Float32Array(width * height);
  const b3 = new Float32Array(width * height);
  const b4 = new Float32Array(width * height);
  const b8 = new Float32Array(width * height);
  const b11 = new Float32Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const nx = x / width;
      const ny = y / height;

      // Base noise
      const noise = (Math.sin(x * 0.15) * Math.cos(y * 0.15) + Math.sin(x * 0.05 + y * 0.05)) * 0.04;

      if (presetType === 'agriculture') {
        // Grid pattern for agricultural parcels
        const parcelX = Math.floor(nx * 8);
        const parcelY = Math.floor(ny * 8);
        const parcelId = (parcelX * 13 + parcelY * 7) % 5;
        const isRoad = (x % 32 < 2) || (y % 32 < 2);

        if (isRoad) {
          // Dirt road / pathway
          b2[idx] = 0.16 + noise;
          b3[idx] = 0.20 + noise;
          b4[idx] = 0.24 + noise;
          b8[idx] = 0.26 + noise;
          b11[idx] = 0.32 + noise;
        } else if (parcelId === 0) {
          // Lush healthy almond orchard (high NIR, low Red)
          const vigor = 0.70 * dateFactor;
          b2[idx] = 0.04 + noise;
          b3[idx] = 0.11 + noise;
          b4[idx] = 0.05 + noise;
          b8[idx] = vigor + noise;
          b11[idx] = 0.15 + noise;
        } else if (parcelId === 1) {
          // Stressed field / partial irrigation deficit
          b2[idx] = 0.08 + noise;
          b3[idx] = 0.14 + noise;
          b4[idx] = 0.16 + noise;
          b8[idx] = 0.34 * dateFactor + noise;
          b11[idx] = 0.32 + noise;
        } else if (parcelId === 2) {
          // Moderate green crop (vineyard / wheat)
          b2[idx] = 0.06 + noise;
          b3[idx] = 0.13 + noise;
          b4[idx] = 0.08 + noise;
          b8[idx] = 0.52 * dateFactor + noise;
          b11[idx] = 0.19 + noise;
        } else if (parcelId === 3) {
          // Fallow / plowed dry soil
          b2[idx] = 0.13 + noise;
          b3[idx] = 0.19 + noise;
          b4[idx] = 0.25 + noise;
          b8[idx] = 0.27 + noise;
          b11[idx] = 0.38 + noise;
        } else {
          // Irrigation retention pond in field corner
          const isPond = (x % 32 > 20) && (y % 32 > 20);
          if (isPond) {
            b2[idx] = 0.14 + noise;
            b3[idx] = 0.10 + noise;
            b4[idx] = 0.04 + noise;
            b8[idx] = 0.01 + noise;
            b11[idx] = 0.00;
          } else {
            b2[idx] = 0.05 + noise;
            b3[idx] = 0.12 + noise;
            b4[idx] = 0.07 + noise;
            b8[idx] = 0.58 * dateFactor + noise;
            b11[idx] = 0.18 + noise;
          }
        }
      } else if (presetType === 'water' || presetType === 'aral' || presetType === 'mead') {
        // Water body with meandering shoreline
        const shoreline = 0.5 + Math.sin(nx * 6) * 0.15 + Math.cos(ny * 4) * 0.08;
        const isWater = (ny < shoreline);

        if (isWater) {
          // Water (deep to shallow gradient)
          const depth = Math.max(0, Math.min(1, (shoreline - ny) * 3));
          b2[idx] = 0.14 - depth * 0.04 + noise;
          b3[idx] = 0.11 - depth * 0.02 + noise;
          b4[idx] = 0.05 - depth * 0.03 + noise;
          b8[idx] = 0.02 + (1 - depth) * 0.04 + noise;
          b11[idx] = 0.01;
        } else {
          // Arid shoreline / desiccated salt flats
          b2[idx] = 0.22 + noise;
          b3[idx] = 0.26 + noise;
          b4[idx] = 0.30 + noise;
          b8[idx] = 0.34 + noise;
          b11[idx] = 0.44 + noise;
        }
      } else if (presetType === 'algae') {
        // Lake with intense cyanobacteria / algae blooms
        const bloomBlob = Math.sin(nx * 8) * Math.cos(ny * 8) + Math.sin(nx * 15 + ny * 12) * 0.5;
        if (bloomBlob > 0.3) {
          // Heavy algal scum: high green & high NIR over water!
          b2[idx] = 0.08 + noise;
          b3[idx] = 0.28 + noise; // High green
          b4[idx] = 0.10 + noise;
          b8[idx] = 0.38 + noise; // Unusually high NIR for water
          b11[idx] = 0.04;
        } else {
          // Normal turbid lake water
          b2[idx] = 0.10 + noise;
          b3[idx] = 0.12 + noise;
          b4[idx] = 0.06 + noise;
          b8[idx] = 0.03 + noise;
          b11[idx] = 0.01;
        }
      } else {
        // Rainforest vs Deforestation border
        const isForest = (nx + ny * 0.3 < 0.65);
        if (isForest) {
          // Dense tropical forest
          b2[idx] = 0.03 + noise;
          b3[idx] = 0.09 + noise;
          b4[idx] = 0.04 + noise;
          b8[idx] = 0.78 + noise;
          b11[idx] = 0.12 + noise;
        } else {
          // Cleared cattle pasture / soy field
          b2[idx] = 0.12 + noise;
          b3[idx] = 0.18 + noise;
          b4[idx] = 0.22 + noise;
          b8[idx] = 0.30 + noise;
          b11[idx] = 0.35 + noise;
        }
      }
    }
  }

  return { width, height, b2, b3, b4, b8, b11 };
}

/**
 * Render multi-band raster data onto a Canvas context
 */
export function renderIndexToCanvas(canvas, rasterData, mode = 'ndvi', paletteId = 'agro', thresholds = { min: -1, max: 1 }) {
  const { width, height, b2, b3, b4, b8, b11 } = rasterData;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  const palette = COLOR_PALETTES[paletteId] || COLOR_PALETTES.agro;

  let sumIndex = 0;
  let minIndex = Infinity;
  let maxIndex = -Infinity;
  let count = width * height;
  const histogram = new Array(25).fill(0);

  // Health categories count
  let vigorousCount = 0;
  let moderateCount = 0;
  let stressedCount = 0;
  let waterSoilCount = 0;

  for (let i = 0; i < count; i++) {
    let indexVal = 0;

    if (mode === 'ndvi') {
      indexVal = calculateNDVI(b8[i], b4[i]);
    } else if (mode === 'ndwi') {
      indexVal = calculateNDWI(b3[i], b8[i]);
    } else if (mode === 'evi') {
      indexVal = calculateEVI(b8[i], b4[i], b2[i]);
    } else if (mode === 'rgb') {
      // Natural True Color (B4, B3, B2)
      const r = Math.min(255, Math.max(0, Math.round(b4[i] * 255 * 2.5)));
      const g = Math.min(255, Math.max(0, Math.round(b3[i] * 255 * 2.5)));
      const b = Math.min(255, Math.max(0, Math.round(b2[i] * 255 * 2.5)));
      const p = i * 4;
      data[p] = r;
      data[p + 1] = g;
      data[p + 2] = b;
      data[p + 3] = 255;
      continue;
    } else if (mode === 'falseColor') {
      // False Color Infrared (B8, B4, B3) - healthy crops appear intense bright red
      const r = Math.min(255, Math.max(0, Math.round(b8[i] * 255 * 2.0)));
      const g = Math.min(255, Math.max(0, Math.round(b4[i] * 255 * 2.2)));
      const b = Math.min(255, Math.max(0, Math.round(b3[i] * 255 * 2.2)));
      const p = i * 4;
      data[p] = r;
      data[p + 1] = g;
      data[p + 2] = b;
      data[p + 3] = 255;
      continue;
    }

    sumIndex += indexVal;
    if (indexVal < minIndex) minIndex = indexVal;
    if (indexVal > maxIndex) maxIndex = indexVal;

    // Classify for telemetry
    if (mode === 'ndvi') {
      if (indexVal >= 0.6) vigorousCount++;
      else if (indexVal >= 0.4) moderateCount++;
      else if (indexVal >= 0.2) stressedCount++;
      else waterSoilCount++;
    } else {
      if (indexVal >= 0.3) waterSoilCount++; // Deep water
      else if (indexVal >= 0.0) moderateCount++; // Shallow water
      else if (indexVal >= -0.2) stressedCount++; // Moist soil
      else vigorousCount++; // Dry land
    }

    // Populate 25-bucket histogram (-1 to 1)
    const normBucket = Math.max(0, Math.min(24, Math.floor(((indexVal + 1) / 2) * 25)));
    histogram[normBucket]++;

    // Check threshold filter
    let [r, g, b, a] = palette.getColor(indexVal);
    if (indexVal < thresholds.min || indexVal > thresholds.max) {
      // Dim or semi-transparent if outside threshold
      a = 35;
    }

    const p = i * 4;
    data[p] = r;
    data[p + 1] = g;
    data[p + 2] = b;
    data[p + 3] = a;
  }

  ctx.putImageData(imgData, 0, 0);

  const mean = sumIndex / count;
  return {
    mean: Number(mean.toFixed(3)),
    min: Number(minIndex.toFixed(3)),
    max: Number(maxIndex.toFixed(3)),
    histogram,
    categories: {
      vigorousPct: Math.round((vigorousCount / count) * 100),
      moderatePct: Math.round((moderateCount / count) * 100),
      stressedPct: Math.round((stressedCount / count) * 100),
      waterSoilPct: Math.round((waterSoilCount / count) * 100)
    }
  };
}
