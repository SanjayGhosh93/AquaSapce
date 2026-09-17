import React, { useState, useEffect } from 'react';
import { 
  X, 
  LogIn, 
  UserPlus, 
  Mail, 
  Lock, 
  User, 
  Building2, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  Check, 
  AlertCircle,
  Sparkles,
  Satellite
} from 'lucide-react';

export function AuthModal({ 
  isOpen, 
  onClose, 
  initialMode = 'signin',
  purposeNotice,
  onAuthSuccess 
}) {
  const [mode, setMode] = useState(initialMode); // 'signin' or 'signup'
  
  // Sign In Form State
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  
  // Sign Up Form State
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpOrg, setSignUpOrg] = useState('');
  const [signUpRole, setSignUpRole] = useState('Agronomist / Farmer');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  
  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setErrorMessage('');
      setShowPassword(false);
    }
  }, [isOpen, initialMode]);

  if (!isOpen) return null;

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!signInEmail || !signInPassword) {
      setErrorMessage('Please enter your email and password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // Derive display name from email or local users
      const existingUsers = JSON.parse(localStorage.getItem('aqua_space_registered_users') || '[]');
      const matched = existingUsers.find(
        (u) => u.email.toLowerCase() === signInEmail.toLowerCase() && u.password === signInPassword
      );

      let loggedUser;
      if (matched) {
        loggedUser = {
          name: matched.name,
          email: matched.email,
          org: matched.org || 'Independent',
          role: matched.role || 'Member',
          avatarInitial: matched.name.charAt(0).toUpperCase()
        };
      } else {
        // Allow instant sign in with reasonable fallback
        const derivedName = signInEmail.split('@')[0]
          .replace(/[._-]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase());
        loggedUser = {
          name: derivedName || 'Space Observer',
          email: signInEmail,
          org: 'Earth Research Institute',
          role: 'GIS & Remote Sensing Analyst',
          avatarInitial: (derivedName || 'S').charAt(0).toUpperCase()
        };
      }

      if (rememberMe) {
        localStorage.setItem('aqua_space_user', JSON.stringify(loggedUser));
      }

      onAuthSuccess(loggedUser);
      onClose();
    }, 600);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!signUpName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!signUpEmail.trim() || !signUpEmail.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (signUpPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    if (signUpPassword !== signUpConfirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const newUser = {
        name: signUpName.trim(),
        email: signUpEmail.trim().toLowerCase(),
        org: signUpOrg.trim() || 'Independent Farm/Research',
        role: signUpRole,
        password: signUpPassword,
        avatarInitial: signUpName.trim().charAt(0).toUpperCase(),
        createdAt: new Date().toISOString()
      };

      // Save to registered users list
      const existingUsers = JSON.parse(localStorage.getItem('aqua_space_registered_users') || '[]');
      existingUsers.push(newUser);
      localStorage.setItem('aqua_space_registered_users', JSON.stringify(existingUsers));

      // Save active session
      localStorage.setItem('aqua_space_user', JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        org: newUser.org,
        role: newUser.role,
        avatarInitial: newUser.avatarInitial
      }));

      onAuthSuccess(newUser);
      onClose();
    }, 700);
  };

  const handleQuickDemoSignIn = (roleType) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      let demoUser;
      if (roleType === 'agronomist') {
        demoUser = {
          name: 'Sanjay Ghosh',
          email: 'sanjay.ghosh@agri-farm.in',
          org: 'Hooghly Farmers Collective',
          role: 'Agricultural Agronomist',
          avatarInitial: 'S'
        };
      } else {
        demoUser = {
          name: 'Dr. Elena Rostova',
          email: 'elena.rostova@copernicus-eo.eu',
          org: 'Copernicus Sentinel Lab',
          role: 'Environmental Remote Sensing Scientist',
          avatarInitial: 'E'
        };
      }
      localStorage.setItem('aqua_space_user', JSON.stringify(demoUser));
      onAuthSuccess(demoUser);
      onClose();
    }, 450);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="auth-modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Brand Icon and Close */}
        <div className="auth-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div className="auth-logo-icon">
              <Satellite size={20} color="#030712" />
            </div>
            <div>
              <strong style={{ fontSize: '1.05rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: 6 }}>
                Aqua-Space AI
                <span className="brand-badge-live">PORTAL</span>
              </strong>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                Earth Observation & Environmental Intelligence
              </span>
            </div>
          </div>

          <button 
            onClick={onClose} 
            className="auth-close-btn"
            title="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Optional Purpose Notice */}
        {purposeNotice && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(0, 242, 254, 0.08)',
            border: '1px solid rgba(0, 242, 254, 0.28)',
            borderRadius: 'var(--radius-sm)',
            padding: '8px 12px',
            marginBottom: 14,
            fontSize: '0.74rem',
            color: 'var(--accent-cyan)',
            lineHeight: 1.35
          }}>
            <Sparkles size={15} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
            <span>{purposeNotice}</span>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="auth-tabs">
          <button 
            className={`auth-tab ${mode === 'signin' ? 'active' : ''}`}
            onClick={() => { setMode('signin'); setErrorMessage(''); }}
            type="button"
          >
            <LogIn size={14} />
            <span>Sign In</span>
          </button>
          <button 
            className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => { setMode('signup'); setErrorMessage(''); }}
            type="button"
          >
            <UserPlus size={14} />
            <span>Create Account</span>
          </button>
        </div>

        {/* Error Notice */}
        {errorMessage && (
          <div className="auth-error-banner">
            <AlertCircle size={15} color="#ef4444" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 1. SIGN IN FORM */}
        {mode === 'signin' && (
          <form onSubmit={handleSignInSubmit} className="auth-form">
            <div className="auth-field">
              <label className="auth-label">Email or Username</label>
              <div className="auth-input-wrap">
                <Mail size={15} className="auth-input-icon" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="auth-input"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  autoFocus
                />
              </div>
            </div>

            <div className="auth-field">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                <label className="auth-label">Password</label>
                <span style={{ fontSize: '0.68rem', color: 'var(--accent-cyan)', cursor: 'pointer' }}>
                  Demo: any password
                </span>
              </div>
              <div className="auth-input-wrap">
                <Lock size={15} className="auth-input-icon" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Enter your password"
                  className="auth-input"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="auth-eye-btn"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '4px 0 14px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: '0.74rem', color: '#94a3b8', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ accentColor: 'var(--accent-cyan)' }}
                />
                <span>Keep me signed in</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="btn-auth-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <LogIn size={15} />
                  <span>Sign In to Dashboard</span>
                </>
              )}
            </button>

            {/* Quick 1-Click Demo Accounts */}
            <div className="auth-divider">
              <span>OR ONE-CLICK DEMO LOGIN</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <button
                type="button"
                className="btn-demo-auth"
                onClick={() => handleQuickDemoSignIn('agronomist')}
              >
                <span>🌾 Farm Agronomist</span>
                <small>Sanjay Ghosh</small>
              </button>
              <button
                type="button"
                className="btn-demo-auth"
                onClick={() => handleQuickDemoSignIn('researcher')}
              >
                <span>🛰️ EO Scientist</span>
                <small>Dr. Elena Rostova</small>
              </button>
            </div>
          </form>
        )}

        {/* 2. CREATE ACCOUNT FORM */}
        {mode === 'signup' && (
          <form onSubmit={handleSignUpSubmit} className="auth-form">
            <div className="auth-field">
              <label className="auth-label">Full Name</label>
              <div className="auth-input-wrap">
                <User size={15} className="auth-input-icon" />
                <input 
                  type="text" 
                  placeholder="e.g. Sanjay Ghosh"
                  className="auth-input"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                  autoFocus
                />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-label">Email Address</label>
              <div className="auth-input-wrap">
                <Mail size={15} className="auth-input-icon" />
                <input 
                  type="email" 
                  placeholder="name@domain.com"
                  className="auth-input"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div className="auth-field">
                <label className="auth-label">Organization / Farm</label>
                <div className="auth-input-wrap">
                  <Building2 size={15} className="auth-input-icon" />
                  <input 
                    type="text" 
                    placeholder="e.g. Bengal Farmlands"
                    className="auth-input"
                    value={signUpOrg}
                    onChange={(e) => setSignUpOrg(e.target.value)}
                  />
                </div>
              </div>

              <div className="auth-field">
                <label className="auth-label">Primary Role</label>
                <select 
                  className="auth-select"
                  value={signUpRole}
                  onChange={(e) => setSignUpRole(e.target.value)}
                >
                  <option value="Agronomist / Farmer">Agronomist / Farmer</option>
                  <option value="GIS & Remote Sensing Analyst">GIS & RS Analyst</option>
                  <option value="Environmental Scientist">Environmental Scientist</option>
                  <option value="University Researcher">University Researcher</option>
                  <option value="Government / Water Board">Government / Water Board</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div className="auth-field">
                <label className="auth-label">Password</label>
                <div className="auth-input-wrap">
                  <Lock size={15} className="auth-input-icon" />
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="At least 6 chars"
                    className="auth-input"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="auth-field">
                <label className="auth-label">Confirm Password</label>
                <div className="auth-input-wrap">
                  <Lock size={15} className="auth-input-icon" />
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Re-type password"
                    className="auth-input"
                    value={signUpConfirmPassword}
                    onChange={(e) => setSignUpConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-auth-submit primary"
              disabled={isLoading}
              style={{ marginTop: 6 }}
            >
              {isLoading ? (
                <span>Creating Account...</span>
              ) : (
                <>
                  <Sparkles size={15} />
                  <span>Create Free Account</span>
                </>
              )}
            </button>

            <p style={{ fontSize: '0.67rem', color: '#64748b', textAlign: 'center', marginTop: 10 }}>
              By registering, you get full access to Sentinel-2 NDVI multi-spectral analytics and Indian village data.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
