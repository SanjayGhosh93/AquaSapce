import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Sprout, 
  Droplets, 
  Navigation
} from 'lucide-react';
import { PRESET_REGIONS } from '../services/presetsData';

export function SidebarLeft({
  currentRegion,
  setCurrentRegion,
  onAnalyzeRegion
}) {
  const [selectedId, setSelectedId] = useState(currentRegion.id);
  const [latInput, setLatInput] = useState(currentRegion.lat.toString());
  const [lngInput, setLngInput] = useState(currentRegion.lng.toString());

  // Sync inputs when currentRegion changes
  useEffect(() => {
    setSelectedId(currentRegion.id);
    setLatInput(currentRegion.lat.toString());
    setLngInput(currentRegion.lng.toString());
  }, [currentRegion]);

  const handleDropdownChange = (e) => {
    const regionId = e.target.value;
    setSelectedId(regionId);
    const found = PRESET_REGIONS.find((r) => r.id === regionId);
    if (found) {
      setCurrentRegion(found);
      setLatInput(found.lat.toString());
      setLngInput(found.lng.toString());
    }
  };

  const handleAnalyze = (e) => {
    e.preventDefault();
    const lat = parseFloat(latInput);
    const lng = parseFloat(lngInput);
    if (!isNaN(lat) && !isNaN(lng)) {
      onAnalyzeRegion(lat, lng);
    }
  };


  return (
    <aside className="sidebar">
      {/* 1. Region Selector & Search */}
      <div className="sidebar-section">
        <div className="section-header">
          <span className="section-title">
            <Navigation size={14} />
            Target Region
          </span>
        </div>

        {/* Region Dropdown */}
        <div style={{ marginBottom: 10 }}>
          <label className="coord-label">Preset Location</label>
          <div style={{ position: 'relative', marginTop: 4 }}>
            <select
              value={selectedId}
              onChange={handleDropdownChange}
              style={{
                width: '100%',
                padding: '8px 10px',
                background: 'rgba(7, 12, 23, 0.9)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-sm)',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              {PRESET_REGIONS.map((r) => (
                <option key={r.id} value={r.id} style={{ background: '#0a1120' }}>
                  {r.name} ({r.state}) — NDVI {r.ndvi}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Coordinates Form */}
        <form onSubmit={handleAnalyze}>
          <div className="coord-grid">
            <div className="coord-group">
              <label className="coord-label">Latitude (°N)</label>
              <input
                type="number"
                step="any"
                className="coord-input"
                value={latInput}
                onChange={(e) => setLatInput(e.target.value)}
              />
            </div>
            <div className="coord-group">
              <label className="coord-label">Longitude (°E)</label>
              <input
                type="number"
                step="any"
                className="coord-input"
                value={lngInput}
                onChange={(e) => setLngInput(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="coord-submit-btn">
            <Search size={13} />
            <span>Analyze Coordinates</span>
          </button>
        </form>
      </div>

      {/* 2. NDVI Crop Health Module */}
      <div className="sidebar-section">
        <div className="section-header">
          <span className="section-title" style={{ color: '#34d399' }}>
            <Sprout size={15} color="#10b981" />
            Vegetation Index (NDVI)
          </span>
          <span style={{ 
            fontSize: '0.68rem', 
            fontWeight: 700, 
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            background: `${currentRegion.ndviConditionColor}22`,
            color: currentRegion.ndviConditionColor,
            fontFamily: 'var(--font-mono)'
          }}>
            {currentRegion.ndviCondition}
          </span>
        </div>

        <div style={{ background: 'rgba(7, 12, 24, 0.85)', padding: 14, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Canopy Density Score</span>
            <span style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: currentRegion.ndviConditionColor }}>
              {currentRegion.ndvi.toFixed(2)}
            </span>
          </div>

          {/* Smooth Modern Glowing Progress Bar */}
          <div style={{
            height: 7,
            width: '100%',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: 999,
            overflow: 'hidden',
            marginBottom: 8,
            position: 'relative'
          }}>
            <div style={{
              height: '100%',
              width: `${Math.min(100, Math.max(0, currentRegion.ndvi * 100))}%`,
              background: `linear-gradient(90deg, #10b981, ${currentRegion.ndviConditionColor})`,
              borderRadius: 999,
              boxShadow: `0 0 10px ${currentRegion.ndviConditionColor}`,
              transition: 'width 0.4s ease'
            }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            <span>0.0 (Sparse)</span>
            <span>0.5 (Moderate)</span>
            <span>1.0 (Dense)</span>
          </div>
        </div>
      </div>

      {/* 3. Water Monitoring Module */}
      <div className="sidebar-section">
        <div className="section-header">
          <span className="section-title" style={{ color: '#38bdf8' }}>
            <Droplets size={15} color="#38bdf8" />
            💧 Water Monitoring
          </span>
          <span style={{ 
            fontSize: '0.68rem', 
            fontWeight: 700, 
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            background: `${currentRegion.waterConditionColor}22`,
            color: currentRegion.waterConditionColor,
            fontFamily: 'var(--font-mono)'
          }}>
            {currentRegion.waterCondition}
          </span>
        </div>

        <div style={{ background: 'rgba(7, 12, 24, 0.85)', padding: 12, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Water Quality</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: currentRegion.waterConditionColor }}>
              {currentRegion.waterQuality} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ 100</span>
            </span>
          </div>

          {/* Water Metrics 2x2 Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '6px 8px', borderRadius: 4 }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block' }}>Turbidity</span>
              <strong style={{ fontSize: '0.78rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                {currentRegion.turbidity}
              </strong>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '6px 8px', borderRadius: 4 }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block' }}>Water Index</span>
              <strong style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)' }}>
                {currentRegion.waterIndex}
              </strong>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '6px 8px', borderRadius: 4 }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block' }}>Pollution</span>
              <strong style={{ 
                fontSize: '0.78rem', 
                color: currentRegion.pollution === 'Low' ? '#34d399' : currentRegion.pollution === 'Moderate' ? '#fbbf24' : '#f87171' 
              }}>
                {currentRegion.pollution}
              </strong>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '6px 8px', borderRadius: 4 }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block' }}>Surface Area</span>
              <strong style={{ fontSize: '0.78rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                {currentRegion.surfaceArea}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
