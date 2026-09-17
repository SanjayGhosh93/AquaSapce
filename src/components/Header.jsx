import React from 'react';
import { 
  Satellite, 
  Layers, 
  FileText, 
  Download, 
  Home, 
  BarChart3,
  Radio,
  LogIn,
  LogOut,
  User
} from 'lucide-react';

export function Header({ 
  currentRegion, 
  onGoHome,
  onOpenCompareModal,
  onOpenBandModal, 
  onOpenReportModal,
  onTakeSnapshot,
  user,
  onOpenSignIn,
  onSignOut
}) {
  return (
    <header className="header-bar">
      {/* Brand Identity at Proper Left */}
      <div 
        className="brand-section" 
        onClick={onGoHome} 
        title="Aqua-Space AI • Return to Home"
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        <div className="brand-logo-icon">
          <Satellite size={18} />
        </div>
        <div className="brand-title-wrap">
          <div className="brand-title">
            Aqua-Space AI
            <span className="brand-badge-live">LIVE</span>
          </div>
          <span className="brand-sub">Earth Observation & Environmental Intelligence</span>
        </div>
      </div>

      {/* Clean Telemetry Strip */}
      <div className="telemetry-strip">
        <div className="telemetry-pill">
          <span className="pulsing-dot"></span>
          <span style={{ color: 'var(--text-muted)' }}>Location:</span>
          <strong style={{ color: 'var(--accent-cyan)' }}>{currentRegion.name}</strong>
          {currentRegion.state && (
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.68rem' }}>({currentRegion.state})</span>
          )}
        </div>

        <div className="telemetry-pill">
          <Radio size={13} color="var(--accent-blue)" />
          <span style={{ color: 'var(--text-muted)' }}>Satellite:</span>
          <strong>Sentinel-2 (10m)</strong>
        </div>
      </div>

      {/* Action Buttons with Home on the Right */}
      <div className="header-actions">
        <button 
          className="btn-header" 
          onClick={onGoHome} 
          title="Return to Landing Page"
        >
          <Home size={14} color="var(--accent-cyan)" />
          <span>Home</span>
        </button>

        <button 
          className="btn-header" 
          onClick={onOpenCompareModal} 
          title="Compare regions side-by-side"
        >
          <BarChart3 size={14} color="var(--accent-cyan)" />
          <span>Compare</span>
        </button>

        <button 
          className="btn-header" 
          onClick={onOpenBandModal} 
          title="Inspect Multi-Spectral Bands"
        >
          <Layers size={14} />
          <span>Bands</span>
        </button>

        <button 
          className="btn-header primary" 
          onClick={onOpenReportModal} 
          title="Generate Environmental Audit Report"
        >
          <FileText size={14} />
          <span>Generate Report</span>
        </button>

        <button 
          className="btn-header" 
          onClick={onTakeSnapshot} 
          title="Export snapshot"
        >
          <Download size={14} />
          <span>Snapshot</span>
        </button>

        {/* User Account State */}
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginLeft: 6 }}>
            <div className="user-profile-chip" title={`${user.name} (${user.role})`}>
              <div className="user-avatar-circle">{user.avatarInitial || 'U'}</div>
              <span style={{ fontSize: '0.76rem', fontWeight: 600 }}>{user.name.split(' ')[0]}</span>
            </div>
            <button 
              className="btn-header-signout" 
              onClick={onSignOut} 
              title="Sign Out"
              style={{ padding: '6px 8px' }}
            >
              <LogOut size={13} />
            </button>
          </div>
        ) : (
          <button 
            className="btn-header" 
            onClick={onOpenSignIn} 
            title="Sign In to Aqua-Space"
            style={{ marginLeft: 6, borderColor: 'var(--accent-cyan)' }}
          >
            <LogIn size={14} color="var(--accent-cyan)" />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </header>
  );
}
