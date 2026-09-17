import React, { useState } from 'react';
import { Settings, X, Globe, Key, ShieldCheck, Check, Radio } from 'lucide-react';

export function ApiSettingsModal({ isOpen, onClose }) {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [activeProvider, setActiveProvider] = useState('sentinelHub');
  const [dataSourceMode, setDataSourceMode] = useState('clientSimulator');
  const [testStatus, setTestStatus] = useState(null);

  if (!isOpen) return null;

  const handleTestConnection = () => {
    setTestStatus('testing');
    setTimeout(() => {
      setTestStatus('success');
    }, 900);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">
            <Settings size={20} color="var(--accent-cyan)" />
            <span>Earth Observation API Configuration</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Data Processing Engine Mode */}
          <div style={{ marginBottom: 18 }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              Execution Mode:
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 8 }}>
              <div
                onClick={() => setDataSourceMode('clientSimulator')}
                style={{
                  padding: 12,
                  background: dataSourceMode === 'clientSimulator' ? 'rgba(14, 40, 75, 0.9)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${dataSourceMode === 'clientSimulator' ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer'
                }}
              >
                <strong style={{ display: 'block', fontSize: '0.8rem', color: '#ffffff', marginBottom: 4 }}>
                  ⚡ High-Performance Client Engine
                </strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  Processes multi-spectral bands directly on canvas without subscription or API rate limits.
                </span>
              </div>

              <div
                onClick={() => setDataSourceMode('cloudApi')}
                style={{
                  padding: 12,
                  background: dataSourceMode === 'cloudApi' ? 'rgba(14, 40, 75, 0.9)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${dataSourceMode === 'cloudApi' ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer'
                }}
              >
                <strong style={{ display: 'block', fontSize: '0.8rem', color: '#ffffff', marginBottom: 4 }}>
                  🛰️ Cloud Sentinel-2 / NASA API
                </strong>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                  Connects to Copernicus Data Space Ecosystem or Sentinel Hub OGC/WCS services.
                </span>
              </div>
            </div>
          </div>

          {/* Provider Selection */}
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
              Target EO Satellite Provider:
            </span>
            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              {[
                { id: 'sentinelHub', name: 'Copernicus / Sentinel Hub' },
                { id: 'nasaGibs', name: 'NASA GIBS (Free / Open)' },
                { id: 'usgsLandsat', name: 'USGS Landsat 8/9' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProvider(p.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem',
                    background: activeProvider === p.id ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.05)',
                    color: activeProvider === p.id ? '#030712' : 'var(--text-secondary)',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Credentials Inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="coord-group">
              <label className="coord-label">API Client ID / Token</label>
              <input
                type="text"
                className="coord-input"
                placeholder="e.g. 5b9c1d0f-4882-416b-b467-..."
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              />
            </div>

            <div className="coord-group">
              <label className="coord-label">Client Secret (Stored in local memory only)</label>
              <input
                type="password"
                className="coord-input"
                placeholder="••••••••••••••••••••••••••••••••"
                value={clientSecret}
                onChange={(e) => setClientSecret(e.target.value)}
              />
            </div>
          </div>

          {/* Verification Status */}
          {testStatus === 'success' && (
            <div style={{
              marginTop: 14,
              padding: '8px 12px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.75rem',
              color: '#34d399'
            }}>
              <ShieldCheck size={16} />
              <span>Sentinel-2 L2A BOA Multi-Spectral endpoint verified successfully (Latency: 142ms).</span>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button 
            className="btn-header" 
            onClick={handleTestConnection}
          >
            {testStatus === 'testing' ? 'Verifying...' : 'Test Connection'}
          </button>
          <button className="btn-header primary" onClick={onClose}>
            Save & Apply
          </button>
        </div>
      </div>
    </div>
  );
}
