import React from 'react';

/**
 * Geo-Stationary / Weather & Deep-Space Observation Satellite SVG
 * Modeled directly after Image 1 (Telecom / GOES / Lunar & Earth Observation Satellite)
 * Features: High-gain dish antenna with tripod feed, dark conical/cylindrical bus,
 * apogee engine nozzle bell, dual blue solar array wings, secondary reflector dishes.
 */
export function GeoWeatherSatelliteSvg({ width = 52, height = 44, className = "" }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 130 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`geo-satellite-svg ${className}`}
    >
      <defs>
        {/* Parabolic Dish Gradients */}
        <radialGradient id="geoDishGrad" cx="40%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#94a3b8" />
          <stop offset="85%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </radialGradient>

        <linearGradient id="geoDishRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        {/* Bus Body Composite/Titanium Gradients */}
        <linearGradient id="geoBusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="35%" stopColor="#334155" />
          <stop offset="70%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id="geoFoilGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Solar Cell Gradients */}
        <linearGradient id="geoSolarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="45%" stopColor="#1d4ed8" />
          <stop offset="85%" stopColor="#172554" />
          <stop offset="100%" stopColor="#0a0f1d" />
        </linearGradient>

        {/* Engine Bell Metal Gradient */}
        <linearGradient id="engineBellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="40%" stopColor="#64748b" />
          <stop offset="85%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Luminous Glow Filter */}
        <filter id="geoGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#38bdf8" floodOpacity="0.5" />
        </filter>
      </defs>

      <g filter="url(#geoGlow)">
        {/* ================= LOWER LEFT SOLAR ARRAY ================= */}
        {/* Mounting Truss Arm */}
        <line x1="50" y1="46" x2="38" y2="52" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="38,50 34,48 35,55 39,53" fill="#475569" />

        {/* Solar Panel Wing (Angled downward left) */}
        <polygon 
          points="35,42 12,54 22,86 45,74" 
          fill="url(#geoSolarGrad)" 
          stroke="#60a5fa" 
          strokeWidth="1.2" 
        />
        {/* Solar Grid Dividers */}
        <line x1="23.5" y1="48" x2="33.5" y2="80" stroke="#93c5fd" strokeWidth="0.8" opacity="0.85" />
        <line x1="30" y1="45" x2="16" y2="52" stroke="#60a5fa" strokeWidth="0.6" opacity="0.8" />
        <line x1="34" y1="53" x2="18" y2="60" stroke="#60a5fa" strokeWidth="0.6" opacity="0.8" />
        <line x1="38" y1="61" x2="20" y2="68" stroke="#60a5fa" strokeWidth="0.6" opacity="0.8" />
        <line x1="41" y1="69" x2="21" y2="76" stroke="#60a5fa" strokeWidth="0.6" opacity="0.8" />

        {/* ================= UPPER RIGHT SOLAR ARRAY ================= */}
        {/* Mounting Truss Arm */}
        <line x1="72" y1="36" x2="84" y2="28" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="82,26 86,24 87,31 83,33" fill="#475569" />

        {/* Long Multi-Segment Solar Array (Angled upward right) */}
        <polygon 
          points="84,28 116,8 126,24 94,44" 
          fill="url(#geoSolarGrad)" 
          stroke="#60a5fa" 
          strokeWidth="1.2" 
        />
        {/* Longitudinal Cell String Divider */}
        <line x1="100" y1="18" x2="110" y2="34" stroke="#93c5fd" strokeWidth="0.8" opacity="0.85" />
        {/* Lateral Cell Strips */}
        <line x1="89" y1="25" x2="97" y2="38" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />
        <line x1="97" y1="20" x2="105" y2="33" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />
        <line x1="105" y1="15" x2="113" y2="28" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />
        <line x1="113" y1="10" x2="121" y2="23" stroke="#60a5fa" strokeWidth="0.65" opacity="0.8" />

        {/* ================= MAIN ENGINE NOZZLE (APOGEE MOTOR) ================= */}
        {/* Large Engine Bell at Base / Rear */}
        <path d="M68 56 Q85 58 92 72 Q78 84 62 82 Q56 70 68 56 Z" fill="url(#engineBellGrad)" stroke="#64748b" strokeWidth="1" />
        <ellipse cx="76" cy="74" rx="14" ry="7" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
        {/* Inner combustion chamber glow */}
        <ellipse cx="76" cy="74" rx="9" ry="4" fill="#0284c7" opacity="0.8" />
        <circle cx="76" cy="74" r="3" fill="#38bdf8" />

        {/* ================= SATELLITE CORE CENTRAL BUS ================= */}
        {/* Conical Composite Module */}
        <polygon 
          points="46,38 72,28 80,48 56,60" 
          fill="url(#geoBusGrad)" 
          stroke="#94a3b8" 
          strokeWidth="1" 
        />

        {/* Thermal Blanket Foil Sections */}
        <polygon points="52,42 68,36 71,48 55,54" fill="url(#geoFoilGoldGrad)" stroke="#fef08a" strokeWidth="0.6" />
        <line x1="56" y1="46" x2="67" y2="42" stroke="#b45309" strokeWidth="0.5" />

        {/* Equipment Radiator Panels & Truss Framework */}
        <rect x="58" y="38" width="6" height="5" rx="0.5" fill="#e2e8f0" stroke="#64748b" strokeWidth="0.4" />
        <line x1="54" y1="36" x2="62" y2="52" stroke="#cbd5e1" strokeWidth="0.7" opacity="0.7" />
        <line x1="66" y1="32" x2="74" y2="48" stroke="#cbd5e1" strokeWidth="0.7" opacity="0.7" />

        {/* Secondary Small Dish Reflectors */}
        <g transform="translate(68, 28) scale(0.65)">
          <ellipse cx="6" cy="6" rx="6" ry="8" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" />
          <circle cx="6" cy="6" r="1.5" fill="#1e293b" />
        </g>
        <g transform="translate(56, 52) scale(0.6)">
          <ellipse cx="6" cy="6" rx="6" ry="8" fill="#cbd5e1" stroke="#475569" strokeWidth="0.8" />
          <circle cx="6" cy="6" r="1.5" fill="#1e293b" />
        </g>

        {/* ================= HIGH-GAIN PARABOLIC DISH ANTENNA ================= */}
        {/* Main Dish Mount Collar */}
        <polygon points="40,26 48,22 52,28 44,32" fill="#334155" stroke="#64748b" strokeWidth="0.8" />

        {/* Deep Parabolic Main Dish */}
        <g transform="translate(24, 14) rotate(-20)">
          <ellipse cx="14" cy="14" rx="14" ry="17" fill="url(#geoDishGrad)" stroke="url(#geoDishRimGrad)" strokeWidth="1.4" />
          <ellipse cx="14" cy="14" rx="11" ry="13.5" fill="none" stroke="#64748b" strokeWidth="0.6" strokeDasharray="2 1.5" />
          
          {/* Sub-reflector Tripod Support Boom */}
          <line x1="2" y1="6" x2="14" y2="14" stroke="#e2e8f0" strokeWidth="0.9" />
          <line x1="3" y1="22" x2="14" y2="14" stroke="#e2e8f0" strokeWidth="0.9" />
          <line x1="25" y1="14" x2="14" y2="14" stroke="#e2e8f0" strokeWidth="0.9" />

          {/* High-frequency Feed Horn Assembly */}
          <circle cx="14" cy="14" r="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="14" cy="14" r="1.2" fill="#38bdf8" />
        </g>

        {/* ================= SENSOR APERTURE & COMMUNICATIONS WAVEFRONT ================= */}
        {/* Telemetry wave pulses */}
        <path d="M22 10 A 14 14 0 0 0 16 26" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" opacity="0.9" />
        <path d="M16 6 A 20 20 0 0 0 9 28" fill="none" stroke="#38bdf8" strokeWidth="0.7" opacity="0.6" />

        {/* Attitude Control Micro-Thrusters Plume */}
        <ellipse cx="88" cy="80" rx="3.5" ry="1.5" fill="#00f2fe" opacity="0.8" />
      </g>
    </svg>
  );
}
