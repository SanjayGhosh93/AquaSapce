import React from 'react';
import { 
  FileText, 
  X, 
  Printer, 
  Download, 
  AlertTriangle, 
  CheckCircle2, 
  Satellite, 
  MapPin,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export function ReportModal({ isOpen, onClose, currentRegion }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    const reportData = {
      title: 'Aqua-Space Environmental Report',
      generatedAt: new Date().toISOString(),
      region: currentRegion.name,
      state: currentRegion.state,
      country: currentRegion.country,
      coordinates: { lat: currentRegion.lat, lng: currentRegion.lng },
      satelliteMetadata: {
        imagery: 'Sentinel-2 MSI (10m Resolution)',
        date: currentRegion.date || '10 Sept 2026',
        source: 'ESA / Copernicus'
      },
      environmentalMetrics: {
        ndvi: currentRegion.ndvi,
        ndviCondition: currentRegion.ndviCondition,
        waterQuality: `${currentRegion.waterQuality} / 100`,
        waterCondition: currentRegion.waterCondition,
        turbidity: currentRegion.turbidity,
        waterIndex: currentRegion.waterIndex,
        pollution: currentRegion.pollution,
        surfaceArea: currentRegion.surfaceArea,
        vegetationCoverage: `${currentRegion.vegetation}%`,
        cropStress: `${currentRegion.cropStress}%`,
        environmentalRisk: currentRegion.environmentalRisk
      },
      aiAnalysis: currentRegion.aiAnalysis?.summary,
      recommendations: currentRegion.aiAnalysis?.recommendations
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AquaSpace_Report_${currentRegion.name}_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-dialog" 
        style={{ maxWidth: '720px' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="modal-title">
            <FileText size={20} color="var(--accent-cyan)" />
            <span>Aqua-Space Environmental Report</span>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body" id="printable-report">
          {/* Top Banner */}
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
                  Region: {currentRegion.name}
                </h2>
                <span style={{ 
                  fontSize: '0.7rem', 
                  padding: '2px 8px', 
                  borderRadius: 4, 
                  background: 'rgba(0, 242, 254, 0.15)', 
                  color: 'var(--accent-cyan)',
                  fontWeight: 600
                }}>
                  {currentRegion.state}, {currentRegion.country}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 14, fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                <span>Lat: {currentRegion.lat}° N, Lng: {currentRegion.lng}° E</span>
                <span>• Date: {currentRegion.date || '10 Sept 2026'}</span>
              </div>
            </div>

            <div style={{
              background: 'rgba(56, 189, 248, 0.1)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-card)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--accent-cyan)'
            }}>
              Sentinel-2 (10m)
            </div>
          </div>

          {/* Core Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 10,
            marginBottom: 18
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6, border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>NDVI Score</span>
              <strong style={{ display: 'block', fontSize: '1.25rem', color: currentRegion.ndviConditionColor, fontFamily: 'var(--font-mono)' }}>
                {currentRegion.ndvi.toFixed(2)}
              </strong>
              <span style={{ fontSize: '0.65rem', color: currentRegion.ndviConditionColor }}>
                {currentRegion.ndviCondition}
              </span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6, border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Water Quality</span>
              <strong style={{ display: 'block', fontSize: '1.25rem', color: currentRegion.waterConditionColor, fontFamily: 'var(--font-mono)' }}>
                {currentRegion.waterQuality} / 100
              </strong>
              <span style={{ fontSize: '0.65rem', color: currentRegion.waterConditionColor }}>
                {currentRegion.waterCondition}
              </span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6, border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Pollution</span>
              <strong style={{ display: 'block', fontSize: '1.25rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                {currentRegion.pollution}
              </strong>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>
                {currentRegion.turbidity}
              </span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 6, border: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Environmental Risk</span>
              <strong style={{ display: 'block', fontSize: '1.25rem', color: currentRegion.riskColor, fontFamily: 'var(--font-mono)' }}>
                {currentRegion.environmentalRisk}
              </strong>
              <span style={{ fontSize: '0.65rem', color: currentRegion.riskColor }}>
                {currentRegion.environmentalRisk === 'Low' ? '🟢 Normal' : '⚠️ Elevated'}
              </span>
            </div>
          </div>

          {/* AI Analysis Section */}
          <div style={{ marginBottom: 18 }}>
            <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: 6, letterSpacing: '0.05em' }}>
              🤖 Aqua-Space AI Analysis
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, background: 'rgba(0,0,0,0.2)', padding: 10, borderRadius: 6 }}>
              {currentRegion.aiAnalysis?.summary}
            </p>
          </div>

          {/* Recommendations */}
          <div>
            <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent-emerald)', marginBottom: 8, letterSpacing: '0.05em' }}>
              📋 AI Recommended Interventions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {currentRegion.aiAnalysis?.recommendations.map((rec, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 8,
                    fontSize: '0.75rem',
                    color: '#e2e8f0',
                    lineHeight: 1.4,
                    padding: '6px 10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderLeft: '3px solid var(--accent-emerald)',
                    borderRadius: '0 4px 4px 0'
                  }}
                >
                  <CheckCircle2 size={14} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-header" onClick={handleDownloadJSON}>
            <Download size={14} />
            <span>Download JSON</span>
          </button>
          <button className="btn-header primary" onClick={handlePrint}>
            <Printer size={14} />
            <span>Download Environmental Report (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
