import React from 'react';
import { Layers, X, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';
import { PRESET_REGIONS } from '../services/presetsData';

export function RegionComparisonModal({ isOpen, onClose, onSelectRegion, currentRegionId }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" style={{ maxWidth: '820px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <Layers size={20} color="var(--accent-cyan)" />
            <span>Multi-Region Environmental Comparison Matrix</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
            Compare crop vigor (NDVI), water quality scores, and ecological risk ratings across monitored agricultural and coastal regions simultaneously.
          </p>

          <table className="band-table" style={{ fontSize: '0.8rem' }}>
            <thead>
              <tr>
                <th>Region</th>
                <th>State / Zone</th>
                <th>NDVI Score</th>
                <th>Water Quality</th>
                <th>Vegetation</th>
                <th>Eco Risk</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {PRESET_REGIONS.map((r) => {
                const isSelected = r.id === currentRegionId;
                return (
                  <tr 
                    key={r.id} 
                    style={{ 
                      background: isSelected ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                      cursor: 'pointer' 
                    }}
                    onClick={() => {
                      onSelectRegion(r);
                      onClose();
                    }}
                  >
                    <td>
                      <strong style={{ color: isSelected ? 'var(--accent-cyan)' : '#ffffff' }}>
                        {r.name}
                      </strong>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{r.state}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)' }}>
                        <span style={{ 
                          color: r.ndviConditionColor, 
                          fontWeight: 700 
                        }}>
                          {r.ndvi.toFixed(2)}
                        </span>
                        <span style={{ 
                          fontSize: '0.65rem', 
                          padding: '1px 5px', 
                          borderRadius: 3, 
                          background: `${r.ndviConditionColor}20`,
                          color: r.ndviConditionColor 
                        }}>
                          {r.ndviCondition}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)' }}>
                        <strong style={{ color: r.waterConditionColor }}>
                          {r.waterQuality}/100
                        </strong>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                          ({r.turbidity})
                        </span>
                      </div>
                    </td>
                    <td style={{ fontFamily: 'var(--font-mono)', color: '#ffffff' }}>
                      {r.vegetation}%
                    </td>
                    <td>
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '3px 8px',
                        borderRadius: 4,
                        background: `${r.riskColor}22`,
                        color: r.riskColor,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4
                      }}>
                        {r.environmentalRisk === 'Low' ? '🟢 Low' : r.environmentalRisk === 'Medium' ? '🟡 Medium' : '🔴 High'}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-header"
                        style={{ padding: '4px 10px', fontSize: '0.72rem' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectRegion(r);
                          onClose();
                        }}
                      >
                        <span>Select</span>
                        <ArrowRight size={12} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="modal-footer">
          <button className="btn-header primary" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
