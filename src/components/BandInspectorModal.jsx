import React, { useState } from 'react';
import { Layers, X, Info, Sparkles, Sliders } from 'lucide-react';
import { SENTINEL_2_BANDS, SPECTRAL_PROFILES } from '../services/spectralEngine';

export function BandInspectorModal({ isOpen, onClose }) {
  const [selectedProfileKey, setSelectedProfileKey] = useState('healthyCrop');
  const activeProfile = SPECTRAL_PROFILES[selectedProfileKey];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <Layers size={20} color="var(--accent-cyan)" />
            <span>Sentinel-2 MSI Multi-Spectral Instrument</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 14 }}>
            The European Space Agency (ESA) <strong>Sentinel-2</strong> constellation carries a state-of-the-art Multi-Spectral Instrument (MSI) sampling 13 optical bands spanning from Visible (443nm) to Short-Wave Infrared (2190nm).
          </p>

          {/* Electromagnetic Spectrum Visualizer Bar */}
          <div style={{ position: 'relative', marginBottom: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 4 }}>
              <span>Ultraviolet / Visible (400nm)</span>
              <span>Near-Infrared (800nm)</span>
              <span>Short-Wave IR (2200nm)</span>
            </div>
            
            <div className="spectrum-spectrum-bar">
              {SENTINEL_2_BANDS.map((b) => {
                const leftPct = Math.min(95, Math.max(2, ((b.wavelength - 400) / 1800) * 100));
                return (
                  <div
                    key={b.id}
                    className="spectrum-marker"
                    style={{ left: `${leftPct}%` }}
                    title={`${b.id} (${b.name}): ${b.wavelength}nm`}
                  >
                    <span style={{ 
                      display: 'block', 
                      width: 2, 
                      height: 10, 
                      background: '#ffffff', 
                      margin: '0 auto 2px' 
                    }}></span>
                    {b.id}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Surface Reflectance Profile Interactive Selector */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: 12, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                Target Surface Reflectance Curve:
              </span>
              <select
                value={selectedProfileKey}
                onChange={(e) => setSelectedProfileKey(e.target.value)}
                style={{
                  background: '#0a1120',
                  color: 'var(--accent-emerald)',
                  border: '1px solid var(--border-card)',
                  borderRadius: 4,
                  padding: '4px 8px',
                  fontSize: '0.74rem',
                  cursor: 'pointer'
                }}
              >
                <option value="healthyCrop">Healthy Crop Canopy</option>
                <option value="stressedCrop">Drought-Stressed Crop</option>
                <option value="clearWater">Clear Reservoir Water</option>
                <option value="turbidWater">Turbid / Algae-Laden Water</option>
                <option value="bareSoil">Bare Soil / Fallow Field</option>
              </select>
            </div>

            <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              {activeProfile.explanation}
            </p>

            {/* Reflectance Bar Comparison */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginTop: 12 }}>
              <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: 6, borderRadius: 4, textAlign: 'center' }}>
                <span style={{ fontSize: '0.65rem', color: '#60a5fa' }}>B2 (Blue)</span>
                <strong style={{ display: 'block', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  {Math.round(activeProfile.B02 * 100)}%
                </strong>
              </div>
              <div style={{ background: 'rgba(22, 163, 74, 0.1)', padding: 6, borderRadius: 4, textAlign: 'center' }}>
                <span style={{ fontSize: '0.65rem', color: '#4ade80' }}>B3 (Green)</span>
                <strong style={{ display: 'block', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  {Math.round(activeProfile.B03 * 100)}%
                </strong>
              </div>
              <div style={{ background: 'rgba(220, 38, 38, 0.1)', padding: 6, borderRadius: 4, textAlign: 'center' }}>
                <span style={{ fontSize: '0.65rem', color: '#f87171' }}>B4 (Red)</span>
                <strong style={{ display: 'block', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  {Math.round(activeProfile.B04 * 100)}%
                </strong>
              </div>
              <div style={{ background: 'rgba(124, 58, 237, 0.15)', padding: 6, borderRadius: 4, textAlign: 'center', border: '1px solid rgba(124, 58, 237, 0.4)' }}>
                <span style={{ fontSize: '0.65rem', color: '#c084fc' }}>B8 (NIR)</span>
                <strong style={{ display: 'block', color: '#00f2fe', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  {Math.round(activeProfile.B08 * 100)}%
                </strong>
              </div>
              <div style={{ background: 'rgba(51, 65, 85, 0.2)', padding: 6, borderRadius: 4, textAlign: 'center' }}>
                <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>B11 (SWIR)</span>
                <strong style={{ display: 'block', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  {Math.round(activeProfile.B11 * 100)}%
                </strong>
              </div>
            </div>
          </div>

          {/* Complete Band Table */}
          <table className="band-table">
            <thead>
              <tr>
                <th>Band</th>
                <th>Name</th>
                <th>Central λ</th>
                <th>GSD</th>
                <th>Application</th>
              </tr>
            </thead>
            <tbody>
              {SENTINEL_2_BANDS.map((b) => (
                <tr key={b.id}>
                  <td>
                    <span className="band-color-chip" style={{ background: b.color }}></span>
                    <strong style={{ fontFamily: 'var(--font-mono)' }}>{b.id}</strong>
                  </td>
                  <td>{b.name}</td>
                  <td style={{ fontFamily: 'var(--font-mono)' }}>{b.wavelength} nm</td>
                  <td style={{ fontFamily: 'var(--font-mono)' }}>{b.resolution}</td>
                  <td>{b.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="modal-footer">
          <button className="btn-header primary" onClick={onClose}>
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
