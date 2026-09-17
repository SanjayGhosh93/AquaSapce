import React, { useState } from 'react';
import { 
  Satellite, 
  ArrowRight, 
  Droplets, 
  Sprout, 
  Activity, 
  Layers, 
  Globe2, 
  Sparkles,
  MapPin,
  TrendingUp,
  BarChart3,
  Move,
  RotateCw,
  LogIn,
  UserPlus,
  LogOut,
  User
} from 'lucide-react';
import { PRESET_REGIONS } from '../services/presetsData';
import { EOSatelliteSvg } from './EOSatelliteSvg';
import { GeoWeatherSatelliteSvg } from './GeoWeatherSatelliteSvg';
import { SpaceStationSvg } from './SpaceStationSvg';

export function LandingPage({ 
  onExploreDashboard, 
  onSelectRegionAndExplore,
  user,
  onOpenSignIn,
  onOpenSignUp,
  onSignOut
}) {
  const [modelLoading, setModelLoading] = useState(true);

  return (
    <div className="landing-page-container">
      {/* Top Navbar */}
      <nav className="landing-navbar">
        <div className="brand-section">
          <div className="brand-logo-icon">
            <Satellite size={22} />
          </div>
          <div className="brand-title-wrap">
            <div className="brand-title">
              Aqua-Space AI
              <span className="brand-badge">S-2 & NASA EO</span>
            </div>
            <span className="brand-sub">Earth Observation & Environmental Intelligence</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {user ? (
            <>
              <div className="user-profile-chip" title={`${user.name} (${user.role})`}>
                <div className="user-avatar-circle">{user.avatarInitial || 'U'}</div>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>{user.name}</span>
                  <span style={{ fontSize: '0.62rem', color: 'var(--accent-cyan)' }}>{user.role?.split(' ')[0] || 'Member'}</span>
                </div>
              </div>

              <button 
                className="btn-header-signout"
                onClick={onSignOut}
                title="Sign Out"
              >
                <LogOut size={13} />
                <span>Sign Out</span>
              </button>
            </>
          ) : (
            <>
              <button 
                className="btn-header"
                onClick={onOpenSignIn}
                style={{ padding: '7px 13px', fontSize: '0.8rem' }}
              >
                <LogIn size={14} color="var(--accent-cyan)" />
                <span>Sign In</span>
              </button>

              <button 
                className="btn-header"
                onClick={onOpenSignUp}
                style={{ padding: '7px 13px', fontSize: '0.8rem', borderColor: 'var(--accent-cyan)', background: 'rgba(0, 242, 254, 0.08)' }}
              >
                <UserPlus size={14} color="var(--accent-cyan)" />
                <span>Create Account</span>
              </button>
            </>
          )}

          <button 
            className="btn-header primary" 
            onClick={onExploreDashboard}
            style={{ padding: '8px 18px', fontSize: '0.85rem', marginLeft: 4 }}
          >
            <span>Launch Dashboard</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} color="var(--accent-cyan)" />
            <span>AI-Powered Earth Observation Platform</span>
          </div>

          <h1 className="hero-heading">
            Monitor Earth.<br />
            Understand Nature.<br />
            <span className="gradient-text">Protect Tomorrow.</span>
          </h1>

          <p className="hero-description">
            Aqua-Space AI analyzes Sentinel-2 and NASA multi-spectral satellite imagery to convert raw optical and near-infrared light spectrums into actionable intelligence for crop health, drought stress, and water pollution monitoring.
          </p>

          <div className="hero-cta-group">
            <button className="btn-hero-primary" onClick={onExploreDashboard}>
              <span>Explore Dashboard</span>
              <ArrowRight size={18} />
            </button>

            <div className="hero-revisit-badge">
              <span className="pulsing-dot"></span>
              <span>Sentinel-2 10m GSD Active Orbit</span>
            </div>
          </div>

          {/* Quick Region Selector Bar */}
          <div className="quick-launch-bar">
            <span className="quick-launch-label">Jump Directly To Region:</span>
            <div className="quick-launch-pills">
              {PRESET_REGIONS.map((region) => (
                <button
                  key={region.id}
                  className="quick-launch-pill"
                  onClick={() => onSelectRegionAndExplore(region)}
                >
                  <MapPin size={11} color="var(--accent-cyan)" />
                  <span>{region.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive 3D Earth Globe Model (Sketchfab Model: 41fc80d85dfd480281f21b74b2de2faa) */}
        <div className="hero-visual">
          <div className="cosmic-globe-wrapper">
            <div className="cosmic-atmosphere-glow"></div>

            {/* Multi-Orbital Constellation Tracks (3 Distinct Satellites) */}
            {/* Satellite 1: Sentinel-2 Earth Observation Satellite */}
            <div className="satellite-orbit-track orbit-track-1">
              <div className="orbiting-satellite sat-eos" title="Sentinel-2 Earth Observation Satellite (Multispectral)">
                <EOSatelliteSvg width={54} height={42} />
                <span className="satellite-flare"></span>
              </div>
            </div>

            {/* Satellite 2: Deep-Space Geo Weather & Comms Satellite (From User Image 1) */}
            <div className="satellite-orbit-track orbit-track-2">
              <div className="orbiting-satellite sat-geo" title="GEO Meteorological & Climate Weather Satellite (High-Gain Dish & Engine)">
                <GeoWeatherSatelliteSvg width={48} height={40} />
                <span className="satellite-flare flare-geo"></span>
              </div>
            </div>

            {/* Satellite 3: International Orbital Space Station & Shuttle (From User Image 2) */}
            <div className="satellite-orbit-track orbit-track-3">
              <div className="orbiting-satellite sat-station" title="International Orbital Space Station & Docked Transport Orbiter">
                <SpaceStationSvg width={52} height={46} />
                <span className="satellite-flare flare-station"></span>
              </div>
            </div>

            {/* Natural Satellite: Real Photorealistic 3D Moon Orbiting 3D Earth */}
            <div className="moon-orbit-track">
              <div className="orbiting-moon" title="The Moon • Earth's Natural Satellite (384,400 km Orbit)">
                <div className="moon-sphere-3d">
                  <img 
                    src="/moon_surface.jpg" 
                    alt="The Moon - Photorealistic 3D Natural Satellite" 
                    className="moon-real-img"
                  />
                  <div className="moon-shadow-overlay"></div>
                  <div className="moon-terminator-glow"></div>
                </div>
                <div className="moon-badge">
                  <span>🌙 Moon • 3,474 km</span>
                </div>
              </div>
            </div>
            
            {/* Interactive 3D Earth Sphere */}
            <div className="cosmic-earth-sphere">
              {modelLoading && (
                <div className="earth-3d-loader">
                  <img 
                    src="/earth_globe.jpg" 
                    alt="Loading 3D Earth..." 
                    className="earth-photorealistic-img loading-pulse"
                  />
                  <div className="loader-badge">
                    <span className="loader-spinner"></span>
                    <span>Initializing 3D Earth...</span>
                  </div>
                </div>
              )}

              <iframe 
                title="Interactive 3D Earth Model"
                className="sketchfab-earth-iframe"
                src="https://sketchfab.com/models/41fc80d85dfd480281f21b74b2de2faa/embed?autostart=1&transparent=1&ui_controls=0&ui_infos=0&ui_watermark=0&ui_stop=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&ui_hint=0&scrollwheel=0&preload=1"
                frameBorder="0" 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                allowFullScreen
                mozallowfullscreen="true" 
                webkitallowfullscreen="true"
                onLoad={() => setModelLoading(false)}
              ></iframe>

              <div className="earth-atmosphere-rim"></div>
            </div>

            {/* Pulsing Regional Telemetry Nodes */}
            <div 
              className="telemetry-node node-punjab" 
              title="Punjab: NDVI 0.78 (Healthy) - Click to inspect"
              onClick={() => {
                const punjab = PRESET_REGIONS.find(r => r.id === 'punjab');
                if (punjab) onSelectRegionAndExplore(punjab);
              }}
            >
              <span className="node-beacon healthy"></span>
              <span className="node-tooltip">Punjab: 0.78 NDVI</span>
            </div>
            <div 
              className="telemetry-node node-kolkata" 
              title="Kolkata: WQI 72 (Moderate) - Click to inspect"
              onClick={() => {
                const kolkata = PRESET_REGIONS.find(r => r.id === 'kolkata');
                if (kolkata) onSelectRegionAndExplore(kolkata);
              }}
            >
              <span className="node-beacon moderate"></span>
              <span className="node-tooltip">Kolkata: 72 WQI</span>
            </div>
            <div 
              className="telemetry-node node-sundarbans" 
              title="Sundarbans: NDVI 0.88 (Pristine) - Click to inspect"
              onClick={() => {
                const sundarbans = PRESET_REGIONS.find(r => r.id === 'sundarbans');
                if (sundarbans) onSelectRegionAndExplore(sundarbans);
              }}
            >
              <span className="node-beacon healthy"></span>
              <span className="node-tooltip">Sundarbans: 0.88</span>
            </div>

            {/* Touch to Move & Rotate Instruction Pill */}
            <div className="globe-touch-badge">
              <span className="touch-pulse-dot"></span>
              <Move size={13} className="touch-icon-animated" />
              <span>Touch / Drag to Rotate 3D Earth</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Feature Cards Section */}
      <section className="landing-features">
        <div className="feature-card">
          <div className="feature-card-icon icon-crop">
            <Sprout size={28} />
          </div>
          <h3 className="feature-card-title">🌱 Crop Health</h3>
          <p className="feature-card-text">
            Calculates Normalized Difference Vegetation Index (NDVI) using Red (B4) and Near-Infrared (B8) spectrum bands to detect crop stress, nitrogen deficiency, and canopy vitality before damage is visible to the naked eye.
          </p>
          <div className="feature-card-metric">
            <span>NDVI Accuracy:</span>
            <strong>0.01 Precision / 10m</strong>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-card-icon icon-water">
            <Droplets size={28} />
          </div>
          <h3 className="feature-card-title">💧 Water Monitoring</h3>
          <p className="feature-card-text">
            Computes NDWI and water turbidity to measure reservoir depletion, industrial pollutant discharge, suspended solids, and algal blooms across rivers, lakes, and coastal estuaries.
          </p>
          <div className="feature-card-metric">
            <span>Turbidity Sensor:</span>
            <strong>NTU & McFeeters NDWI</strong>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-card-icon icon-satellite">
            <Activity size={28} />
          </div>
          <h3 className="feature-card-title">🛰️ Satellite Analysis</h3>
          <p className="feature-card-text">
            Integrates ESA Copernicus Sentinel-2 Level-2A surface reflectance data. Explore True-Color RGB, False-Color Infrared (CIR), and multi-temporal Before vs After wipe comparisons.
          </p>
          <div className="feature-card-metric">
            <span>Revisit Time:</span>
            <strong>5-Day Global Cadence</strong>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <footer className="landing-footer">
        <p>© 2026 Aqua-Space AI • Earth Observation & Environmental Intelligence Platform</p>
      </footer>
    </div>
  );
}
