/**
 * Aqua-Space AI - Environmental Presets & Real-World Case Studies
 * Includes primary Indian agricultural & ecological zones + global comparative hubs
 */

export const PRESET_REGIONS = [
  {
    id: 'punjab',
    name: 'Punjab',
    fullName: 'Punjab Agricultural Belt',
    state: 'Punjab',
    country: 'India',
    category: 'Crop Health',
    type: 'agriculture',
    lat: 31.1471,
    lng: 75.3412,
    zoom: 11,
    bbox: [74.90, 30.80, 75.80, 31.50],
    description: 'The breadbasket of India; extensive wheat and rice rotational cropping under intense groundwater irrigation.',
    satellite: 'Sentinel-2B MSI (Level-2A)',
    date: '10 Sept 2026',
    resolution: '10m GSD',
    source: 'ESA Copernicus Sentinel-2',
    ndvi: 0.78,
    ndviCondition: 'Healthy',
    ndviConditionColor: '#10b981',
    waterQuality: 82,
    waterCondition: 'Good',
    waterConditionColor: '#10b981',
    turbidity: '18 NTU',
    waterIndex: 0.71,
    pollution: 'Low',
    surfaceArea: '92.4 km²',
    vegetation: 84,
    cropStress: 12,
    environmentalRisk: 'Low',
    riskColor: '#10b981',
    beforeAfter: {
      beforeDate: 'May 2026 (Pre-Sowing)',
      afterDate: 'Sept 2026 (Peak Canopy)',
      beforeNDVI: 0.35,
      afterNDVI: 0.78,
      percentChange: 122,
      trendType: 'positive',
      label: '🌱 Vegetation Increased 122% (Post-Monsoon)'
    },
    alerts: [
      {
        id: 'alert-pb-1',
        type: 'warning',
        title: 'Localized Groundwater Drawdown',
        desc: 'Tubewell cluster B-12 shows elevated extraction rate; monitor sub-surface aquifer levels.',
        severity: 'Moderate'
      }
    ],
    aiAnalysis: {
      summary: 'Crop vigor in Punjab is currently optimal following favorable monsoon precipitation. Over 84% of monitored agricultural acreage displays dense healthy chlorophyll reflection. Minor localized water table stress noted in southern districts.',
      recommendations: [
        '💧 Optimize canal delivery scheduling to preserve tubewell aquifer levels.',
        '🌱 Inspect northern wheat nurseries for early yellow rust signs.',
        '🛰️ Schedule Sentinel-2 revisit in 5 days to monitor pre-harvest dry-down.'
      ]
    },
    timeSeries: {
      '7D': {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        ndvi: [0.76, 0.77, 0.77, 0.78, 0.78, 0.79, 0.78],
        waterQuality: [81, 81, 82, 82, 82, 83, 82],
        summary: 'Vegetation index remained stable at 0.78 over the past 7 days.'
      },
      '30D': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        ndvi: [0.71, 0.74, 0.76, 0.78],
        waterQuality: [78, 80, 81, 82],
        summary: 'Vegetation increased by 9.8% compared with last month.'
      },
      '3M': {
        labels: ['Jun', 'Jul', 'Aug', 'Sep'],
        ndvi: [0.42, 0.62, 0.74, 0.78],
        waterQuality: [74, 77, 80, 82],
        summary: 'Canopy vigor surged +85% across the monsoon sowing cycle.'
      },
      '1Y': {
        labels: ['Oct', 'Dec', 'Feb', 'Apr', 'Jun', 'Aug', 'Sep'],
        ndvi: [0.65, 0.72, 0.79, 0.45, 0.42, 0.74, 0.78],
        waterQuality: [75, 78, 82, 72, 74, 80, 82],
        summary: 'Annual double-crop cycle shows consistent high yield potential.'
      }
    }
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    fullName: 'Kolkata & Lower Gangetic Basin',
    state: 'West Bengal',
    country: 'India',
    category: 'Water & Agriculture',
    type: 'agriculture',
    lat: 22.5726,
    lng: 88.3639,
    zoom: 12,
    bbox: [88.20, 22.42, 88.52, 22.70],
    description: 'Riparian deltaic hub bordered by the Hooghly river and the East Kolkata Wetlands, a Ramsar ecological site.',
    satellite: 'Sentinel-2A MSI (Level-2A)',
    date: '10 Sept 2026',
    resolution: '10m GSD',
    source: 'ESA Copernicus Sentinel-2',
    ndvi: 0.61,
    ndviCondition: 'Healthy',
    ndviConditionColor: '#10b981',
    waterQuality: 72,
    waterCondition: 'Moderate',
    waterConditionColor: '#eab308',
    turbidity: '28 NTU',
    waterIndex: 0.64,
    pollution: 'Moderate',
    surfaceArea: '84.2 km²',
    vegetation: 68,
    cropStress: 18,
    environmentalRisk: 'Medium',
    riskColor: '#eab308',
    beforeAfter: {
      beforeDate: 'Aug 2026',
      afterDate: 'Sept 2026',
      beforeNDVI: 0.68,
      afterNDVI: 0.61,
      percentChange: -10,
      trendType: 'negative',
      label: '⚠️ Vegetation Declined 10% (Urban Fringe)'
    },
    alerts: [
      {
        id: 'alert-ccu-1',
        type: 'danger',
        title: 'Hooghly River Turbidity Spike',
        desc: 'Water turbidity increased to 28 NTU following upstream runoff; moderate sediment load.',
        severity: 'Medium'
      }
    ],
    aiAnalysis: {
      summary: 'Vegetation health is currently balanced at 0.61 across peri-urban agricultural belts. The East Kolkata Wetlands continue natural biological sewage remediation, though river sediment turbidity has climbed to 28 NTU.',
      recommendations: [
        '💧 Enhance wetland inlet sluice maintenance to maximize sedimentation settling.',
        '🌱 Monitor paddy crop health in Barasat and Baruipur peri-urban rings.',
        '🛰️ Compare Sentinel-2 NDWI against tidal variations at Diamond Harbour.'
      ]
    },
    timeSeries: {
      '7D': {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        ndvi: [0.62, 0.62, 0.61, 0.61, 0.60, 0.61, 0.61],
        waterQuality: [74, 73, 73, 72, 72, 72, 72],
        summary: 'NDVI held constant at 0.61 with moderate riparian moisture.'
      },
      '30D': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        ndvi: [0.65, 0.63, 0.62, 0.61],
        waterQuality: [76, 75, 73, 72],
        summary: 'Vegetation slightly shifted by -6.1% due to post-monsoon weeding.'
      },
      '3M': {
        labels: ['Jun', 'Jul', 'Aug', 'Sep'],
        ndvi: [0.52, 0.58, 0.66, 0.61],
        waterQuality: [68, 70, 74, 72],
        summary: 'Wetland biomass expanded 17% during the monsoon peak.'
      },
      '1Y': {
        labels: ['Oct', 'Dec', 'Feb', 'Apr', 'Jun', 'Aug', 'Sep'],
        ndvi: [0.62, 0.60, 0.57, 0.48, 0.52, 0.66, 0.61],
        waterQuality: [73, 75, 76, 68, 68, 74, 72],
        summary: 'Stable deltaic vegetation with expected seasonal pre-monsoon dips.'
      }
    }
  },
  {
    id: 'delhi',
    name: 'Delhi NCR',
    fullName: 'Delhi National Capital Region',
    state: 'Delhi',
    country: 'India',
    category: 'Urban & Water Stress',
    type: 'water',
    lat: 28.6139,
    lng: 77.2090,
    zoom: 11,
    bbox: [77.00, 28.45, 77.40, 28.80],
    description: 'High-density urban megacity tracking Yamuna river contamination, Ridge forest cover, and urban heat island effects.',
    satellite: 'Sentinel-2B MSI',
    date: '10 Sept 2026',
    resolution: '10m GSD',
    source: 'ESA Copernicus Sentinel-2',
    ndvi: 0.42,
    ndviCondition: 'Moderate',
    ndviConditionColor: '#eab308',
    waterQuality: 58,
    waterCondition: 'Critical',
    waterConditionColor: '#ef4444',
    turbidity: '46 NTU',
    waterIndex: 0.48,
    pollution: 'High',
    surfaceArea: '36.8 km²',
    vegetation: 45,
    cropStress: 34,
    environmentalRisk: 'High',
    riskColor: '#ef4444',
    beforeAfter: {
      beforeDate: 'Jul 2026',
      afterDate: 'Sept 2026',
      beforeNDVI: 0.38,
      afterNDVI: 0.42,
      percentChange: 10,
      trendType: 'positive',
      label: '🌱 Ridge Canopy Recovered +10%'
    },
    alerts: [
      {
        id: 'alert-del-1',
        type: 'danger',
        title: 'Yamuna River Dissolved Oxygen Deficit',
        desc: 'Water quality fell to 58/100; elevated biochemical oxygen demand below Okhla barrage.',
        severity: 'High'
      }
    ],
    aiAnalysis: {
      summary: 'Aqua-Space AI detects high environmental risk in Delhi NCR. While Central Ridge and Asola Bhatti forests show moderate NDVI (0.42), the Yamuna corridor indicates high pollution with an index score of 58/100 and turbidity of 46 NTU.',
      recommendations: [
        '💧 Accelerate aeration barriers and bio-floating islands along Najafgarh drain.',
        '🌱 Preserve Ridge green corridors to mitigate urban microclimate heat traps.',
        '🛰️ Monitor monthly vegetation stress indices along industrial boundary rings.'
      ]
    },
    timeSeries: {
      '7D': {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        ndvi: [0.41, 0.41, 0.42, 0.42, 0.42, 0.42, 0.42],
        waterQuality: [59, 58, 58, 58, 58, 57, 58],
        summary: 'NDVI stabilized at 0.42 with critical river pollution indices.'
      },
      '30D': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        ndvi: [0.39, 0.40, 0.41, 0.42],
        waterQuality: [60, 59, 58, 58],
        summary: 'Water quality decreased by 3.4% over the last 30 days.'
      },
      '3M': {
        labels: ['Jun', 'Jul', 'Aug', 'Sep'],
        ndvi: [0.31, 0.36, 0.40, 0.42],
        waterQuality: [52, 55, 61, 58],
        summary: 'Seasonal greening peaked in August before tapering off.'
      },
      '1Y': {
        labels: ['Oct', 'Dec', 'Feb', 'Apr', 'Jun', 'Aug', 'Sep'],
        ndvi: [0.38, 0.35, 0.33, 0.28, 0.31, 0.40, 0.42],
        waterQuality: [55, 54, 53, 50, 52, 61, 58],
        summary: 'Pre-monsoon drought stress followed by brief seasonal recovery.'
      }
    }
  },
  {
    id: 'sundarbans',
    name: 'Sundarbans',
    fullName: 'Sundarbans UNESCO Biosphere Reserve',
    state: 'West Bengal',
    country: 'India',
    category: 'Mangrove Ecology',
    type: 'water',
    lat: 21.9497,
    lng: 89.1833,
    zoom: 11,
    bbox: [88.90, 21.65, 89.45, 22.25],
    description: 'The largest contiguous mangrove forest on Earth; tidal estuarine channels protecting the Bengal coastline from cyclonic storm surges.',
    satellite: 'Sentinel-2A MSI',
    date: '10 Sept 2026',
    resolution: '10m GSD',
    source: 'ESA Copernicus Sentinel-2',
    ndvi: 0.88,
    ndviCondition: 'Healthy',
    ndviConditionColor: '#10b981',
    waterQuality: 91,
    waterCondition: 'Good',
    waterConditionColor: '#10b981',
    turbidity: '24 NTU',
    waterIndex: 0.82,
    pollution: 'Low',
    surfaceArea: '1420.0 km²',
    vegetation: 94,
    cropStress: 6,
    environmentalRisk: 'Low',
    riskColor: '#10b981',
    beforeAfter: {
      beforeDate: 'Pre-Cyclone',
      afterDate: 'Post-Restoration',
      beforeNDVI: 0.74,
      afterNDVI: 0.88,
      percentChange: 19,
      trendType: 'positive',
      label: '🌱 Mangrove Canopy Recovered +19%'
    },
    alerts: [],
    aiAnalysis: {
      summary: 'Sundarbans exhibits exceptional ecosystem health. Dense Heritiera fomes (Sundari) and Avicennia mangrove canopy records high NDVI of 0.88 with 94% vigorous vegetative density. Estuarine water index remains pristine.',
      recommendations: [
        '💧 Continuously gauge salinity intrusion curves along inner distributaries.',
        '🌱 Maintain community mangrove afforestation along exposed mudflat embankments.',
        '🛰️ Track tidal erosion hotspots along Sagar and Ghoramara islands.'
      ]
    },
    timeSeries: {
      '7D': {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        ndvi: [0.87, 0.87, 0.88, 0.88, 0.88, 0.88, 0.88],
        waterQuality: [90, 91, 91, 91, 91, 92, 91],
        summary: 'Pristine canopy and tidal stability observed over 7 days.'
      },
      '30D': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        ndvi: [0.86, 0.87, 0.88, 0.88],
        waterQuality: [89, 90, 91, 91],
        summary: 'Canopy density increased by +2.3% during late monsoon.'
      },
      '3M': {
        labels: ['Jun', 'Jul', 'Aug', 'Sep'],
        ndvi: [0.82, 0.85, 0.87, 0.88],
        waterQuality: [87, 88, 90, 91],
        summary: 'Strong post-rain flourishing of tidal mangrove halophytes.'
      },
      '1Y': {
        labels: ['Oct', 'Dec', 'Feb', 'Apr', 'Jun', 'Aug', 'Sep'],
        ndvi: [0.86, 0.85, 0.83, 0.79, 0.82, 0.87, 0.88],
        waterQuality: [90, 91, 90, 86, 87, 90, 91],
        summary: 'Exceptional year-round evergreen resilience.'
      }
    }
  },
  {
    id: 'assam',
    name: 'Assam',
    fullName: 'Assam (Brahmaputra Valley)',
    state: 'Assam',
    country: 'India',
    category: 'Crop & Flood Monitoring',
    type: 'agriculture',
    lat: 26.2006,
    lng: 92.9376,
    zoom: 11,
    bbox: [92.60, 25.95, 93.30, 26.45],
    description: 'Rich tea garden plantations and extensive alluvial floodplain surrounding the mighty Brahmaputra river.',
    satellite: 'Sentinel-2B MSI',
    date: '10 Sept 2026',
    resolution: '10m GSD',
    source: 'ESA Copernicus Sentinel-2',
    ndvi: 0.84,
    ndviCondition: 'Healthy',
    ndviConditionColor: '#10b981',
    waterQuality: 89,
    waterCondition: 'Good',
    waterConditionColor: '#10b981',
    turbidity: '22 NTU',
    waterIndex: 0.79,
    pollution: 'Low',
    surfaceArea: '310.5 km²',
    vegetation: 88,
    cropStress: 8,
    environmentalRisk: 'Low',
    riskColor: '#10b981',
    beforeAfter: {
      beforeDate: 'July 2026 (Flood Peak)',
      afterDate: 'Sept 2026 (Receded)',
      beforeNDVI: 0.58,
      afterNDVI: 0.84,
      percentChange: 45,
      trendType: 'positive',
      label: '🌱 Floodwaters Receded, Crops Flourishing +45%'
    },
    alerts: [],
    aiAnalysis: {
      summary: 'Assam tea estates and riparian agricultural lowlands show high vegetative vigor at 0.84 NDVI. Post-monsoon silt deposition has revitalized soil nutrient density without ongoing flood inundation.',
      recommendations: [
        '💧 Continue monitoring Brahmaputra riverbank sandbar silt migration.',
        '🌱 Inspect tea foliage flush for shade tree canopy balance.',
        '🛰️ Re-evaluate river embankment stability prior to winter harvest.'
      ]
    },
    timeSeries: {
      '7D': {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        ndvi: [0.83, 0.83, 0.84, 0.84, 0.84, 0.85, 0.84],
        waterQuality: [88, 88, 89, 89, 89, 90, 89],
        summary: 'Excellent tea crop canopy and riverbed stability.'
      },
      '30D': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        ndvi: [0.79, 0.81, 0.83, 0.84],
        waterQuality: [84, 86, 88, 89],
        summary: 'Canopy health jumped +6.3% as river floodplains drained.'
      },
      '3M': {
        labels: ['Jun', 'Jul', 'Aug', 'Sep'],
        ndvi: [0.65, 0.58, 0.77, 0.84],
        waterQuality: [78, 72, 84, 89],
        summary: 'Rapid recovery following seasonal July floodwaters.'
      },
      '1Y': {
        labels: ['Oct', 'Dec', 'Feb', 'Apr', 'Jun', 'Aug', 'Sep'],
        ndvi: [0.82, 0.78, 0.74, 0.72, 0.65, 0.77, 0.84],
        waterQuality: [88, 89, 90, 85, 78, 84, 89],
        summary: 'High vegetative cover throughout the tea harvest calendar.'
      }
    }
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    fullName: 'Mumbai Coastal & Mangrove Rim',
    state: 'Maharashtra',
    country: 'India',
    category: 'Coastal Water',
    type: 'water',
    lat: 19.0760,
    lng: 72.8777,
    zoom: 11,
    bbox: [72.75, 18.90, 73.05, 19.25],
    description: 'Linear coastal peninsula flanked by Thane Creek flamingo sanctuary, Sanjay Gandhi National Park, and the Arabian Sea.',
    satellite: 'Sentinel-2A MSI',
    date: '10 Sept 2026',
    resolution: '10m GSD',
    source: 'ESA Copernicus Sentinel-2',
    ndvi: 0.52,
    ndviCondition: 'Moderate',
    ndviConditionColor: '#eab308',
    waterQuality: 64,
    waterCondition: 'Moderate',
    waterConditionColor: '#eab308',
    turbidity: '34 NTU',
    waterIndex: 0.68,
    pollution: 'Moderate',
    surfaceArea: '124.0 km²',
    vegetation: 56,
    cropStress: 24,
    environmentalRisk: 'Medium',
    riskColor: '#eab308',
    beforeAfter: {
      beforeDate: 'June 2026',
      afterDate: 'Sept 2026',
      beforeNDVI: 0.44,
      afterNDVI: 0.52,
      percentChange: 18,
      trendType: 'positive',
      label: '🌱 SGNP Forest Greenery Boosted +18%'
    },
    alerts: [
      {
        id: 'alert-bom-1',
        type: 'warning',
        title: 'Thane Creek Tidal Turbidity Elevated',
        desc: 'Urban stormwater outflow increased suspended solids in coastal wetland fringe.',
        severity: 'Medium'
      }
    ],
    aiAnalysis: {
      summary: 'Mumbai presents an intense contrast: dense tropical deciduous canopy in Sanjay Gandhi National Park (NDVI > 0.75) versus urban coastal creeks (NDVI < 0.20). Water quality in Thane Creek stands at 64/100.',
      recommendations: [
        '💧 Track solid waste traps along Mithi river ocean outfalls.',
        '🌱 Enforce mangrove conservation buffer zones around Malad and Mahim creeks.',
        '🛰️ Monitor coastal high-tide sea level incursions with Sentinel-2 SAR/MSI.'
      ]
    },
    timeSeries: {
      '7D': {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        ndvi: [0.51, 0.51, 0.52, 0.52, 0.52, 0.52, 0.52],
        waterQuality: [65, 64, 64, 64, 63, 64, 64],
        summary: 'Steady post-monsoon park greenery at 0.52 NDVI.'
      },
      '30D': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        ndvi: [0.49, 0.50, 0.51, 0.52],
        waterQuality: [66, 65, 64, 64],
        summary: 'Mangrove foliage remained stable throughout September.'
      },
      '3M': {
        labels: ['Jun', 'Jul', 'Aug', 'Sep'],
        ndvi: [0.38, 0.44, 0.50, 0.52],
        waterQuality: [60, 62, 65, 64],
        summary: 'Monsoon rainfall regenerated urban forest cover +36%.'
      },
      '1Y': {
        labels: ['Oct', 'Dec', 'Feb', 'Apr', 'Jun', 'Aug', 'Sep'],
        ndvi: [0.50, 0.47, 0.43, 0.36, 0.38, 0.50, 0.52],
        waterQuality: [66, 68, 67, 62, 60, 65, 64],
        summary: 'Seasonal foliage drop during dry pre-monsoon summer months.'
      }
    }
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    fullName: 'Bengaluru Urban Lake Cascade',
    state: 'Karnataka',
    country: 'India',
    category: 'Urban Lake Monitoring',
    type: 'water',
    lat: 12.9716,
    lng: 77.5946,
    zoom: 12,
    bbox: [77.45, 12.85, 77.75, 13.10],
    description: 'Deccan plateau tech hub with historical interconnected tank/lake cascade (Bellandur, Varthur, Ulsoor, Hebbal).',
    satellite: 'Sentinel-2B MSI',
    date: '10 Sept 2026',
    resolution: '10m GSD',
    source: 'ESA Copernicus Sentinel-2',
    ndvi: 0.66,
    ndviCondition: 'Healthy',
    ndviConditionColor: '#10b981',
    waterQuality: 70,
    waterCondition: 'Moderate',
    waterConditionColor: '#eab308',
    turbidity: '31 NTU',
    waterIndex: 0.59,
    pollution: 'Moderate',
    surfaceArea: '48.6 km²',
    vegetation: 62,
    cropStress: 16,
    environmentalRisk: 'Medium',
    riskColor: '#eab308',
    beforeAfter: {
      beforeDate: 'Pre-Desilting',
      afterDate: 'Post-Wetland Restored',
      beforeNDVI: 0.54,
      afterNDVI: 0.66,
      percentChange: 22,
      trendType: 'positive',
      label: '🌱 Lake Buffer Vegetation Restored +22%'
    },
    alerts: [
      {
        id: 'alert-blr-1',
        type: 'warning',
        title: 'Algal Growth Detected in Bellandur Inlet',
        desc: 'Nitrogen runoff causing localized weed proliferation in southern catchment canal.',
        severity: 'Medium'
      }
    ],
    aiAnalysis: {
      summary: 'Bengaluru urban tree canopy in Cubbon Park and Lalbagh remains lush (NDVI 0.66). The restored Bellandur & Varthur wetland corridors have elevated water quality to 70/100, although weed proliferation remains an active management priority.',
      recommendations: [
        '💧 Deploy automated weed harvesters to intercept floating biomass in Varthur lake.',
        '🌱 Expand Miyawaki urban forest patches across Whitefield and Electronic City corridors.',
        '🛰️ Monitor water storage capacity in Hebbal and Jakkur lake cascades.'
      ]
    },
    timeSeries: {
      '7D': {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        ndvi: [0.65, 0.65, 0.66, 0.66, 0.66, 0.66, 0.66],
        waterQuality: [71, 71, 70, 70, 70, 70, 70],
        summary: 'Tree cover and lake levels steady following intermittent showers.'
      },
      '30D': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        ndvi: [0.63, 0.64, 0.65, 0.66],
        waterQuality: [68, 69, 70, 70],
        summary: 'Vegetation increased by +4.8% over the past 30 days.'
      },
      '3M': {
        labels: ['Jun', 'Jul', 'Aug', 'Sep'],
        ndvi: [0.55, 0.59, 0.64, 0.66],
        waterQuality: [64, 66, 69, 70],
        summary: 'Southwest monsoon recharged primary lake retention basins.'
      },
      '1Y': {
        labels: ['Oct', 'Dec', 'Feb', 'Apr', 'Jun', 'Aug', 'Sep'],
        ndvi: [0.64, 0.62, 0.58, 0.50, 0.55, 0.64, 0.66],
        waterQuality: [70, 71, 69, 62, 64, 69, 70],
        summary: 'Seasonal water levels drop in April before monsoon replenishment.'
      }
    }
  }
];
