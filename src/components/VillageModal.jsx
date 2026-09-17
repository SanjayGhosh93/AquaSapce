import React from 'react';
import { 
  X, 
  MapPin, 
  Sprout, 
  Droplets, 
  ShieldCheck, 
  AlertTriangle, 
  Download, 
  CheckCircle2, 
  Maximize2,
  Users,
  Compass
} from 'lucide-react';

export function VillageModal({ isOpen, onClose, villageData, onApplyAsActiveRegion }) {
  if (!isOpen || !villageData) return null;

  const { name, district, state, primaryCrop, soilType, center, bounds, areaKm2, areaHectares, farmHouseholds, metrics, aiAdvisory } = villageData;

  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(villageData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AquaSpace_Village_${name.replace(/\s+/g, '_')}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-dialog" 
        style={{ maxWidth: '740px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title">
            <MapPin size={20} color="var(--accent-cyan)" />
            <span>Village Area Intelligence (Selected Box ROI)</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Village Banner */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: 14,
            marginBottom: 16
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>
                  {name}
                </h2>
                <span style={{ 
                  fontSize: '0.7rem', 
                  padding: '2px 8px', 
                  borderRadius: 4, 
                  background: 'rgba(0, 242, 254, 0.15)', 
                  color: 'var(--accent-cyan)',
                  fontWeight: 600
                }}>
                  {district}, {state}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 14, fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                <span>Center: {center.lat}° N, {center.lng}° E</span>
                <span>• Cultivation: <strong>{primaryCrop}</strong> ({soilType})</span>
              </div>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#34d399',
              textAlign: 'right'
            }}>
              <div>Area: <strong>{areaKm2} km²</strong></div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>({areaHectares} Hectares)</div>
            </div>
          </div>

          {/* Core Village Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 10,
            marginBottom: 18
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6, border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Field Crop NDVI</span>
              <strong style={{ display: 'block', fontSize: '1.3rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                {metrics.ndvi}
              </strong>
              <span style={{ fontSize: '0.65rem', color: '#34d399' }}>
                {metrics.condition}
              </span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6, border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Village Water Bodies</span>
              <strong style={{ display: 'block', fontSize: '1.3rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>
                {metrics.pondQualityScore}/100
              </strong>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>
                {metrics.surfaceWaterBodies} Monitored Tanks
              </span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6, border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Water Turbidity</span>
              <strong style={{ display: 'block', fontSize: '1.3rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                {metrics.turbidityNTU}
              </strong>
              <span style={{ fontSize: '0.65rem', color: '#fbbf24' }}>
                {metrics.waterCondition}
              </span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6, border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Village Risk</span>
              <strong style={{ display: 'block', fontSize: '1.3rem', color: metrics.riskColor, fontFamily: 'var(--font-mono)' }}>
                {metrics.riskLevel}
              </strong>
              <span style={{ fontSize: '0.65rem', color: metrics.riskColor }}>
                ~{farmHouseholds} Farm Families
              </span>
            </div>
          </div>

          {/* Land Allocation breakdown */}
          <div style={{
            background: 'rgba(7, 12, 24, 0.8)',
            padding: 12,
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            marginBottom: 16
          }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
              Field Vigor Breakdown in Selected Box
            </span>
            <div style={{ display: 'flex', height: 14, borderRadius: 4, overflow: 'hidden', marginBottom: 6 }}>
              <div style={{ width: `${metrics.healthyCropPct}%`, background: '#10b981' }} title={`Healthy: ${metrics.healthyCropPct}%`}></div>
              <div style={{ width: `${metrics.stressedCropPct}%`, background: '#eab308' }} title={`Stressed: ${metrics.stressedCropPct}%`}></div>
              <div style={{ width: `${metrics.fallowSoilPct}%`, background: '#64748b' }} title={`Fallow/Settlement: ${metrics.fallowSoilPct}%`}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: '#34d399' }}>🟢 Healthy Crops ({metrics.healthyCropPct}%)</span>
              <span style={{ color: '#fbbf24' }}>🟡 Moisture Deficit ({metrics.stressedCropPct}%)</span>
              <span style={{ color: '#94a3b8' }}>⚪ Fallow/Soil ({metrics.fallowSoilPct}%)</span>
            </div>
          </div>

          {/* AI Agronomic Advisory */}
          <div>
            <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: 8, letterSpacing: '0.05em' }}>
              🤖 AI Local Agricultural Advisory
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {aiAdvisory.map((adv, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: '0.75rem',
                    color: '#e2e8f0',
                    lineHeight: 1.4,
                    padding: '8px 12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderLeft: '3px solid var(--accent-cyan)',
                    borderRadius: '0 4px 4px 0'
                  }}
                >
                  <CheckCircle2 size={14} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-header" onClick={handleExportJSON}>
            <Download size={14} />
            <span>Export Village Data</span>
          </button>
          <button 
            className="btn-header primary" 
            onClick={() => {
              onApplyAsActiveRegion(villageData);
              onClose();
            }}
          >
            <span>Set as Active Dashboard Region</span>
          </button>
        </div>
      </div>
    </div>
  );
}
