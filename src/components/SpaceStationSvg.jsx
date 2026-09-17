import React from 'react';

/**
 * Orbital Space Station & Docked Orbiter SVG
 * Modeled directly after Image 2 (International Space Station / Multi-module station with docked shuttle)
 * Features: Long central laboratory spine, transverse truss, multiple solar array wings,
 * thermal radiator panels, and docked delta-wing transport orbiter with engine bells.
 */
export function SpaceStationSvg({ width = 56, height = 50, className = "" }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 140 130" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`space-station-svg ${className}`}
    >
      <defs>
        {/* Solar Array Metallic/Bronze/Blue Gradients */}
        <linearGradient id="stationSolarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="30%" stopColor="#334155" />
          <stop offset="60%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id="stationSolarActiveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="40%" stopColor="#475569" />
          <stop offset="85%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#090d16" />
        </linearGradient>

        {/* Pressurized Module Metallic Cylinders */}
        <linearGradient id="moduleCylinderGrad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="35%" stopColor="#cbd5e1" />
          <stop offset="75%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        {/* Radiator White Fins */}
        <linearGradient id="radiatorFinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>

        {/* Shuttle White Heat Shield Gradients */}
        <linearGradient id="shuttleFuselageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Station Glow Filter */}
        <filter id="stationGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#38bdf8" floodOpacity="0.4" />
        </filter>
      </defs>

      <g filter="url(#stationGlow)">
        {/* ================= TRANSVERSE INTEGRATED TRUSS STRUCTURE ================= */}
        {/* Long Diagonal Truss Spine (from bottom-left to top-right) */}
        <line x1="30" y1="95" x2="108" y2="35" stroke="#94a3b8" strokeWidth="2.8" strokeLinecap="round" />
        <line x1="30" y1="95" x2="108" y2="35" stroke="#e2e8f0" strokeWidth="1.2" strokeDasharray="3 2" />

        {/* ================= UPPER RIGHT SOLAR ARRAY WINGS ================= */}
        {/* Upper Right Array Pair 1 (Topmost) */}
        <g transform="translate(86, 22)">
          <polygon points="0,0 26,-8 34,0 8,8" fill="url(#stationSolarActiveGrad)" stroke="#94a3b8" strokeWidth="0.8" />
          <line x1="13" y1="-4" x2="21" y2="4" stroke="#cbd5e1" strokeWidth="0.5" />
          <polygon points="6,9 32,1 38,9 12,17" fill="url(#stationSolarActiveGrad)" stroke="#94a3b8" strokeWidth="0.8" />
          <line x1="19" y1="5" x2="25" y2="13" stroke="#cbd5e1" strokeWidth="0.5" />
        </g>

        {/* Upper Right Array Pair 2 (Middle upper) */}
        <g transform="translate(74, 34)">
          <polygon points="0,0 26,-8 34,0 8,8" fill="url(#stationSolarActiveGrad)" stroke="#94a3b8" strokeWidth="0.8" />
          <line x1="13" y1="-4" x2="21" y2="4" stroke="#cbd5e1" strokeWidth="0.5" />
          <polygon points="6,9 30,2 36,10 12,17" fill="url(#stationSolarActiveGrad)" stroke="#94a3b8" strokeWidth="0.8" />
        </g>

        {/* ================= LOWER LEFT SOLAR ARRAY WINGS ================= */}
        {/* Lower Left Array Pair 1 */}
        <g transform="translate(24, 78)">
          <polygon points="0,0 12,10 6,24 -6,14" fill="url(#stationSolarActiveGrad)" stroke="#94a3b8" strokeWidth="0.8" />
          <polygon points="8,7 20,17 14,31 2,21" fill="url(#stationSolarActiveGrad)" stroke="#94a3b8" strokeWidth="0.8" />
        </g>

        {/* Lower Left Array Pair 2 (Bottom-most tip) */}
        <g transform="translate(18, 92)">
          <polygon points="0,0 12,10 6,24 -6,14" fill="url(#stationSolarActiveGrad)" stroke="#94a3b8" strokeWidth="0.8" />
        </g>

        {/* ================= THERMAL RADIATOR PANELS (WHITE FINS) ================= */}
        {/* Radiator assembly perpendicular to truss */}
        <polygon points="56,44 68,34 72,40 60,50" fill="url(#radiatorFinGrad)" stroke="#94a3b8" strokeWidth="0.6" />
        <line x1="59" y1="42" x2="69" y2="44" stroke="#64748b" strokeWidth="0.5" />
        <polygon points="62,49 74,39 77,44 65,54" fill="url(#radiatorFinGrad)" stroke="#94a3b8" strokeWidth="0.6" />

        <polygon points="40,58 52,48 56,54 44,64" fill="url(#radiatorFinGrad)" stroke="#94a3b8" strokeWidth="0.6" />

        {/* ================= CENTRAL PRESSURIZED HABITATION & LAB SPINE ================= */}
        {/* Main Habitation Module (Zvezda / Destiny / Harmony) */}
        <rect x="58" y="58" width="16" height="7" rx="3.5" transform="rotate(-40 66 61.5)" fill="url(#moduleCylinderGrad)" stroke="#f8fafc" strokeWidth="0.9" />
        {/* Node 2 / Docking Adapter Hub */}
        <circle cx="66" cy="62" r="4.5" fill="#e2e8f0" stroke="#475569" strokeWidth="0.8" />
        <circle cx="66" cy="62" r="2" fill="#0284c7" />

        {/* Columbus / Kibo Laboratory Module (extending outward) */}
        <line x1="66" y1="62" x2="42" y2="45" stroke="#cbd5e1" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="41" cy="44" r="2.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="0.6" />

        {/* Robotic Canadarm Boom */}
        <polyline points="63,58 52,56 46,62" fill="none" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" />

        {/* ================= DOCKED TRANSPORT SHUTTLE / ORBITER ================= */}
        {/* Docked to the nadir/forward port with delta wings and tail fin */}
        <g transform="translate(72, 60) rotate(-35)">
          {/* Main Shuttle Fuselage */}
          <polygon points="4,0 18,-6 24,0 18,6" fill="url(#shuttleFuselageGrad)" stroke="#475569" strokeWidth="0.8" />
          {/* Cockpit Window Windshield Band */}
          <polygon points="5,-1 9,-3 9,0" fill="#0f172a" />
          
          {/* Delta Wing Left */}
          <polygon points="12,-4 22,-14 20,-4" fill="url(#shuttleFuselageGrad)" stroke="#334155" strokeWidth="0.7" />
          {/* Delta Wing Right */}
          <polygon points="12,4 22,14 20,4" fill="url(#shuttleFuselageGrad)" stroke="#334155" strokeWidth="0.7" />

          {/* Vertical Tail Stabilizer Fin */}
          <polygon points="16,0 24,-1 22,0" fill="#e2e8f0" stroke="#64748b" strokeWidth="0.6" />

          {/* Rocket Engine Cluster Bells (3 main RS-25 engines) */}
          <circle cx="23" cy="-2.5" r="1.6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="0.6" />
          <circle cx="23" cy="2.5" r="1.6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="0.6" />
          <circle cx="24.5" cy="0" r="1.7" fill="#0f172a" stroke="#cbd5e1" strokeWidth="0.6" />
          {/* Engine Standby Glow */}
          <circle cx="23" cy="-2.5" r="0.8" fill="#38bdf8" />
          <circle cx="23" cy="2.5" r="0.8" fill="#38bdf8" />
          <circle cx="24.5" cy="0" r="0.8" fill="#38bdf8" />
        </g>

        {/* Docking Corridor Truss */}
        <line x1="66" y1="62" x2="74" y2="68" stroke="#64748b" strokeWidth="2.5" />

        {/* Communication Array Dish on Station Spine */}
        <circle cx="70" cy="54" r="2.8" fill="#ffffff" stroke="#64748b" strokeWidth="0.7" />
        <line x1="70" y1="54" x2="74" y2="50" stroke="#38bdf8" strokeWidth="0.9" />

        {/* Strobe Navigation Beacons */}
        <circle cx="106" cy="36" r="1.2" fill="#ef4444" />
        <circle cx="28" cy="97" r="1.2" fill="#10b981" />
        <circle cx="41" cy="44" r="1" fill="#ffffff" />
      </g>
    </svg>
  );
}
