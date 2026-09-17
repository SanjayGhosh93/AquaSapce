import React from 'react';

/**
 * High-fidelity Earth Observation Satellite SVG
 * Modeled after real ESA Sentinel-2 / NASA Earth Observing satellites
 * Features: Gold thermal foil bus, deep blue photovoltaic solar wings with cell grids,
 * parabolic high-gain dish antenna, optical multispectral payload aperture, and thruster flares.
 */
export function EOSatelliteSvg({ width = 46, height = 38, className = "" }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 140 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`eo-satellite-svg ${className}`}
    >
      <defs>
        {/* Gold Thermal Foil Gradients */}
        <linearGradient id="goldBusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="30%" stopColor="#f59e0b" />
          <stop offset="70%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>

        <linearGradient id="goldBusTopGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        <linearGradient id="goldBusSideGrad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>

        {/* Photovoltaic Solar Panel Cell Gradients */}
        <linearGradient id="solarCellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="40%" stopColor="#1d4ed8" />
          <stop offset="80%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id="solarFrameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>

        {/* High Gain Parabolic Dish Gradients */}
        <radialGradient id="dishGrad" cx="45%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#cbd5e1" />
          <stop offset="90%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#334155" />
        </radialGradient>

        {/* Optical Sensor Aperture */}
        <radialGradient id="sensorLensGrad" cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="45%" stopColor="#0284c7" />
          <stop offset="85%" stopColor="#082f49" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>

        {/* Glow Filters */}
        <filter id="satelliteGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#00f2fe" floodOpacity="0.6" />
        </filter>
      </defs>

      <g filter="url(#satelliteGlow)">
        {/* ================= LEFT SOLAR ARRAY WING ================= */}
        {/* Left Yoke / Hinge Truss */}
        <path d="M54 54 L36 46 L38 52 L54 58 Z" fill="#334155" stroke="#475569" strokeWidth="0.8" />
        <rect x="36" y="44" width="3" height="12" rx="1" fill="#64748b" />

        {/* Left Solar Panel Frame (angled isometric perspective) */}
        <polygon 
          points="35,16 6,36 15,86 44,66" 
          fill="url(#solarCellGrad)" 
          stroke="#38bdf8" 
          strokeWidth="1.2" 
        />
        {/* Outer Panel Border Truss */}
        <polygon points="36,14 4,35 14,88 46,67" fill="none" stroke="#0ea5e9" strokeWidth="0.6" opacity="0.8" />

        {/* Left Solar Photovoltaic Grid Lines */}
        {/* Longitudinal divider */}
        <line x1="20.5" y1="26" x2="29.5" y2="76" stroke="#93c5fd" strokeWidth="0.75" opacity="0.85" />
        {/* Lateral cell strips */}
        <line x1="30" y1="26" x2="11" y2="40" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />
        <line x1="34" y1="36" x2="13" y2="50" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />
        <line x1="38" y1="46" x2="16" y2="60" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />
        <line x1="41" y1="56" x2="18" y2="70" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />
        <line x1="43" y1="63" x2="20" y2="78" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />

        {/* Left Panel Corner Highlights */}
        <circle cx="6" cy="36" r="1" fill="#bae6fd" />
        <circle cx="35" cy="16" r="1" fill="#bae6fd" />
        <circle cx="44" cy="66" r="1" fill="#bae6fd" />
        <circle cx="15" cy="86" r="1" fill="#bae6fd" />

        {/* ================= RIGHT SOLAR ARRAY WING ================= */}
        {/* Right Yoke / Hinge Truss */}
        <path d="M84 46 L100 36 L102 42 L85 50 Z" fill="#334155" stroke="#475569" strokeWidth="0.8" />
        <rect x="99" y="34" width="3" height="11" rx="1" fill="#64748b" />

        {/* Right Solar Panel Frame (angled upward/backward) */}
        <polygon 
          points="101,34 126,16 135,46 110,64" 
          fill="url(#solarCellGrad)" 
          stroke="#38bdf8" 
          strokeWidth="1.2" 
        />
        {/* Outer Panel Border */}
        <polygon points="100,32 127,14 137,47 110,66" fill="none" stroke="#0ea5e9" strokeWidth="0.6" opacity="0.8" />

        {/* Right Solar Photovoltaic Grid Lines */}
        <line x1="113.5" y1="25" x2="122.5" y2="55" stroke="#93c5fd" strokeWidth="0.75" opacity="0.85" />
        <line x1="106" y1="39" x2="131" y2="22" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />
        <line x1="110" y1="48" x2="133" y2="32" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />
        <line x1="113" y1="57" x2="134" y2="41" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />

        {/* ================= CENTRAL GOLD FOIL BUS BODY ================= */}
        {/* Main Body Shadow/Underside */}
        <polygon points="56,58 78,58 84,68 62,68" fill="#451a03" />

        {/* Main Front Face (Gold Foil Insulated Box) */}
        <polygon 
          points="54,42 78,38 78,65 54,68" 
          fill="url(#goldBusGrad)" 
          stroke="#fbbf24" 
          strokeWidth="1" 
        />

        {/* Top Face of Main Bus */}
        <polygon 
          points="54,42 66,32 88,29 78,38" 
          fill="url(#goldBusTopGrad)" 
          stroke="#fef08a" 
          strokeWidth="0.8" 
        />

        {/* Right Side Face of Main Bus */}
        <polygon 
          points="78,38 88,29 88,56 78,65" 
          fill="url(#goldBusSideGrad)" 
          stroke="#d97706" 
          strokeWidth="0.8" 
        />

        {/* Gold Foil Wrinkle / Seam Pattern Lines */}
        <line x1="56" y1="46" x2="76" y2="43" stroke="#fef08a" strokeWidth="0.5" opacity="0.7" />
        <line x1="55" y1="53" x2="77" y2="50" stroke="#b45309" strokeWidth="0.5" opacity="0.8" />
        <line x1="55" y1="60" x2="76" y2="58" stroke="#fef08a" strokeWidth="0.5" opacity="0.6" />
        <line x1="65" y1="40" x2="64" y2="67" stroke="#78350f" strokeWidth="0.5" opacity="0.7" />
        <line x1="81" y1="36" x2="81" y2="62" stroke="#451a03" strokeWidth="0.5" opacity="0.6" />

        {/* Radiator Louver Panels (Dark Rectangles) */}
        <rect x="58" y="46" width="6" height="4" rx="0.5" fill="#1e293b" stroke="#475569" strokeWidth="0.4" />
        <rect x="58" y="52" width="6" height="4" rx="0.5" fill="#1e293b" stroke="#475569" strokeWidth="0.4" />

        {/* Earth Observation Optical Sensor Aperture (Sentinel MSI / Landsat OLI) */}
        <ellipse cx="71" cy="55" rx="4.5" ry="5.5" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.9" />
        <ellipse cx="71" cy="55" rx="3.5" ry="4.2" fill="url(#sensorLensGrad)" />
        <circle cx="72.2" cy="53.8" r="1.2" fill="#ffffff" opacity="0.9" />

        {/* Star Tracker / Optical Baffle Cylinder */}
        <polygon points="62,35 65,31 68,34 65,38" fill="#334155" stroke="#94a3b8" strokeWidth="0.5" />

        {/* Antenna Mast / Boom */}
        <line x1="68" y1="30" x2="68" y2="19" stroke="#e2e8f0" strokeWidth="0.9" />
        <circle cx="68" cy="18" r="1.2" fill="#38bdf8" />
        <line x1="68" y1="22" x2="73" y2="20" stroke="#cbd5e1" strokeWidth="0.6" />

        {/* ================= HIGH-GAIN PARABOLIC DISH ANTENNA ================= */}
        {/* Antenna Gimbal Strut */}
        <path d="M84 42 L92 40 L93 45 Z" fill="#475569" />

        {/* Parabolic Dish Reflector */}
        <g transform="translate(93, 33) rotate(-15)">
          <ellipse cx="10" cy="11" rx="10.5" ry="14" fill="url(#dishGrad)" stroke="#e2e8f0" strokeWidth="1" />
          <ellipse cx="10" cy="11" rx="8.5" ry="11.5" fill="none" stroke="#94a3b8" strokeWidth="0.5" opacity="0.7" />
          
          {/* Sub-reflector Tripod Struts */}
          <line x1="2" y1="6" x2="10" y2="11" stroke="#475569" strokeWidth="0.7" />
          <line x1="2" y1="16" x2="10" y2="11" stroke="#475569" strokeWidth="0.7" />
          <line x1="17" y1="11" x2="10" y2="11" stroke="#475569" strokeWidth="0.7" />

          {/* Central Feed Horn */}
          <circle cx="10" cy="11" r="2.2" fill="#0f172a" stroke="#f59e0b" strokeWidth="0.8" />
          <circle cx="10" cy="11" r="1" fill="#fef08a" />
        </g>

        {/* ================= ATTITUDE THRUSTERS & SIGNAL WAVES ================= */}
        {/* Micro-thruster nozzle */}
        <polygon points="53,65 49,67 49,69 53,67" fill="#64748b" />
        {/* Subtle thruster plume glow */}
        <ellipse cx="47" cy="69" rx="2" ry="1.2" fill="#38bdf8" opacity="0.75" />

        {/* Signal transmission wavefront pulses */}
        <path d="M110 24 A 12 12 0 0 1 114 36" fill="none" stroke="#00f2fe" strokeWidth="1" strokeDasharray="2 2" opacity="0.85" />
        <path d="M114 20 A 18 18 0 0 1 119 39" fill="none" stroke="#00f2fe" strokeWidth="0.75" opacity="0.6" />
      </g>
    </svg>
  );
}
