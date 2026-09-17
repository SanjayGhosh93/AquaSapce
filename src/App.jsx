import React, { useState, useEffect, useRef } from 'react';
import { LandingPage } from './components/LandingPage';
import { Header } from './components/Header';
import { SidebarLeft } from './components/SidebarLeft';
import { SidebarRight } from './components/SidebarRight';
import { MapViewer } from './components/MapViewer';
import { RegionComparisonModal } from './components/RegionComparisonModal';
import { BandInspectorModal } from './components/BandInspectorModal';
import { ReportModal } from './components/ReportModal';
import { VillageModal } from './components/VillageModal';
import { AuthModal } from './components/AuthModal';
import { PRESET_REGIONS } from './services/presetsData';
import { 
  generateSyntheticMultiSpectralRaster, 
  renderIndexToCanvas 
} from './services/spectralEngine';
import { Check } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentRegion, setCurrentRegion] = useState(PRESET_REGIONS[0]); // Punjab default

  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('aqua_space_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('signin'); // 'signin' or 'signup'
  const [authPurposeNotice, setAuthPurposeNotice] = useState('');
  const [pendingTargetRegion, setPendingTargetRegion] = useState(null);

  const [viewMode, setViewMode] = useState('ndvi');
  const [opacity, setOpacity] = useState(0.85);

  // Modals
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isBandModalOpen, setIsBandModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isVillageModalOpen, setIsVillageModalOpen] = useState(false);
  const [selectedVillageData, setSelectedVillageData] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const [spectralCanvas, setSpectralCanvas] = useState(null);
  const offscreenCanvasRef = useRef(document.createElement('canvas'));

  useEffect(() => {
    const pType = currentRegion.type || 'agriculture';
    const rasterData = generateSyntheticMultiSpectralRaster(256, 256, pType, 1.0);
    const canvas = offscreenCanvasRef.current;

    const mode = viewMode === 'water' ? 'ndwi' : 'ndvi';
    const palette = viewMode === 'water' ? 'water' : 'agro';

    renderIndexToCanvas(
      canvas, 
      rasterData, 
      mode, 
      palette, 
      { min: -1.0, max: 1.0 }
    );

    setSpectralCanvas(canvas);
  }, [currentRegion, viewMode]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };


  const handleVillageBoxSelected = (village) => {
    setSelectedVillageData(village);
    setIsVillageModalOpen(true);
    showToast(`Village Box identified: ${village.name}`);
  };

  const handleApplyVillageAsActive = (village) => {
    // Create new region from village box
    const villageRegion = {
      id: village.id,
      name: village.name,
      fullName: `${village.name} (${village.district})`,
      state: village.state,
      country: 'India',
      category: 'Village Agricultural Mouza',
      type: 'agriculture',
      lat: village.center.lat,
      lng: village.center.lng,
      zoom: 13,
      bbox: [village.bounds.west, village.bounds.south, village.bounds.east, village.bounds.north],
      description: `Detailed village parcel analysis. Cultivation: ${village.primaryCrop} on ${village.soilType}. Area: ${village.areaKm2} km² with ~${village.farmHouseholds} farm households.`,
      satellite: 'Sentinel-2 (10m Resolution)',
      date: '10 Sept 2026',
      ndvi: village.metrics.ndvi,
      ndviCondition: village.metrics.ndvi >= 0.65 ? 'Healthy' : village.metrics.ndvi >= 0.5 ? 'Moderate' : 'Poor',
      ndviConditionColor: village.metrics.ndvi >= 0.65 ? '#10b981' : village.metrics.ndvi >= 0.5 ? '#eab308' : '#ef4444',
      waterQuality: village.metrics.pondQualityScore,
      waterCondition: village.metrics.waterCondition === '🟢 Good' ? 'Good' : 'Moderate',
      waterConditionColor: village.metrics.waterCondition === '🟢 Good' ? '#10b981' : '#eab308',
      turbidity: village.metrics.turbidityNTU,
      waterIndex: 0.68,
      pollution: village.metrics.pondQualityScore >= 75 ? 'Low' : 'Moderate',
      surfaceArea: `${village.areaKm2} km²`,
      vegetation: village.metrics.healthyCropPct,
      cropStress: village.metrics.stressedCropPct,
      environmentalRisk: village.metrics.riskLevel,
      riskColor: village.metrics.riskColor,
      beforeAfter: {
        beforeDate: 'Pre-Sowing',
        afterDate: 'Current Canopy',
        beforeNDVI: Number((village.metrics.ndvi * 0.6).toFixed(2)),
        afterNDVI: village.metrics.ndvi,
        percentChange: 65,
        trendType: 'positive',
        label: `🌱 Village Canopy Healthy (${village.metrics.healthyCropPct}%)`
      },
      alerts: village.metrics.riskLevel === 'High' ? [
        {
          id: 'alt-vil-1',
          type: 'warning',
          title: 'Village Water Deficit Notice',
          desc: 'High evapotranspiration in western sector; canal replenishment advised.',
          severity: 'Moderate'
        }
      ] : [],
      aiAnalysis: {
        summary: village.aiAdvisory[0] + ' ' + village.aiAdvisory[1],
        recommendations: [
          village.aiAdvisory[2],
          `🌾 Monitor pest emergence in ${village.primaryCrop} field blocks.`,
          `🛰️ Schedule 5-day Sentinel-2 revisit for village irrigation evaluation.`
        ]
      },
      timeSeries: {
        '7D': {
          labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7'],
          ndvi: [village.metrics.ndvi - 0.02, village.metrics.ndvi - 0.01, village.metrics.ndvi, village.metrics.ndvi, village.metrics.ndvi, village.metrics.ndvi + 0.01, village.metrics.ndvi],
          waterQuality: [village.metrics.pondQualityScore - 1, village.metrics.pondQualityScore, village.metrics.pondQualityScore, village.metrics.pondQualityScore, village.metrics.pondQualityScore, village.metrics.pondQualityScore, village.metrics.pondQualityScore],
          summary: `Village field vigor steady at ${village.metrics.ndvi} NDVI.`
        },
        '30D': {
          labels: ['W1', 'W2', 'W3', 'W4'],
          ndvi: [village.metrics.ndvi - 0.06, village.metrics.ndvi - 0.04, village.metrics.ndvi - 0.02, village.metrics.ndvi],
          waterQuality: [village.metrics.pondQualityScore - 3, village.metrics.pondQualityScore - 2, village.metrics.pondQualityScore - 1, village.metrics.pondQualityScore],
          summary: `Vegetation expanded +7.2% across village plots this month.`
        },
        '3M': {
          labels: ['Jun', 'Jul', 'Aug', 'Sep'],
          ndvi: [0.45, 0.58, village.metrics.ndvi - 0.04, village.metrics.ndvi],
          waterQuality: [64, 68, village.metrics.pondQualityScore - 2, village.metrics.pondQualityScore],
          summary: `Monsoon sowing cycle delivered strong canopy expansion.`
        },
        '1Y': {
          labels: ['Oct', 'Dec', 'Feb', 'Apr', 'Jun', 'Aug', 'Sep'],
          ndvi: [0.65, 0.70, 0.72, 0.44, 0.48, village.metrics.ndvi - 0.03, village.metrics.ndvi],
          waterQuality: [70, 72, 74, 65, 66, village.metrics.pondQualityScore - 1, village.metrics.pondQualityScore],
          summary: `Standard double-cropping pattern observed for this agro-ecological zone.`
        }
      }
    };

    setCurrentRegion(villageRegion);
    showToast(`Active Dashboard locked to: ${village.name}`);
  };

  const handleAnalyzeCustom = (lat, lng) => {
    const closest = PRESET_REGIONS.find((r) => {
      return Math.abs(r.lat - lat) < 0.5 && Math.abs(r.lng - lng) < 0.5;
    });

    if (closest) {
      setCurrentRegion(closest);
      showToast(`Locked location: ${closest.name} (${lat.toFixed(4)}, ${lng.toFixed(4)})`);
    } else {
      const custom = {
        ...PRESET_REGIONS[0],
        id: `custom-${Date.now()}`,
        name: `Custom ROI`,
        fullName: `Custom Area (${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E)`,
        state: 'Custom Coordinates',
        lat,
        lng,
        bbox: [lng - 0.2, lat - 0.2, lng + 0.2, lat + 0.2],
        zoom: 12
      };
      setCurrentRegion(custom);
      showToast(`Analyzing coordinates: ${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E`);
    }
  };

  const handleTakeSnapshot = () => {
    if (!spectralCanvas) return;
    const link = document.createElement('a');
    link.download = `AquaSpace_${currentRegion.name}_${viewMode}_Snapshot.png`;
    link.href = spectralCanvas.toDataURL('image/png');
    link.click();
    showToast(`Snapshot exported for ${currentRegion.name}`);
  };

  // Explore Dashboard Gate: if not signed in, pop up Auth Modal; upon sign in, go to Dashboard
  const handleExploreDashboard = () => {
    if (user) {
      setCurrentPage('dashboard');
    } else {
      setPendingTargetRegion(null);
      setAuthModalMode('signin');
      setAuthPurposeNotice('Sign in or create an account to access the Sentinel-2 Satellite Dashboard.');
      setIsAuthModalOpen(true);
    }
  };

  const handleSelectRegionAndExplore = (region) => {
    if (user) {
      setCurrentRegion(region);
      setCurrentPage('dashboard');
    } else {
      setPendingTargetRegion(region);
      setAuthModalMode('signin');
      setAuthPurposeNotice(`Sign in or create an account to explore ${region.name} in the dashboard.`);
      setIsAuthModalOpen(true);
    }
  };

  // Auth Handlers
  const handleOpenSignIn = () => {
    setAuthModalMode('signin');
    setAuthPurposeNotice('');
    setIsAuthModalOpen(true);
  };

  const handleOpenSignUp = () => {
    setAuthModalMode('signup');
    setAuthPurposeNotice('');
    setIsAuthModalOpen(true);
  };

  const handleAuthSuccess = (loggedUser) => {
    setUser(loggedUser);
    if (pendingTargetRegion) {
      setCurrentRegion(pendingTargetRegion);
      setPendingTargetRegion(null);
    }
    // Automatically transition to the dashboard upon successful sign in!
    setCurrentPage('dashboard');
    showToast(`Welcome, ${loggedUser.name}! Opening Satellite Dashboard...`);
  };

  const handleSignOut = () => {
    localStorage.removeItem('aqua_space_user');
    setUser(null);
    setCurrentPage('landing');
    showToast('Signed out successfully.');
  };

  if (currentPage === 'landing') {
    return (
      <>
        <LandingPage
          onExploreDashboard={handleExploreDashboard}
          onSelectRegionAndExplore={handleSelectRegionAndExplore}
          user={user}
          onOpenSignIn={handleOpenSignIn}
          onOpenSignUp={handleOpenSignUp}
          onSignOut={handleSignOut}
        />

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialMode={authModalMode}
          purposeNotice={authPurposeNotice}
          onAuthSuccess={handleAuthSuccess}
        />

        {toastMessage && (
          <div className="toast-notice">
            <Check size={16} color="#34d399" />
            <span>{toastMessage}</span>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="app-container">
      <Header
        currentRegion={currentRegion}
        onGoHome={() => setCurrentPage('landing')}
        onOpenCompareModal={() => setIsCompareModalOpen(true)}
        onOpenBandModal={() => setIsBandModalOpen(true)}
        onOpenReportModal={() => setIsReportModalOpen(true)}
        onTakeSnapshot={handleTakeSnapshot}
        user={user}
        onOpenSignIn={handleOpenSignIn}
        onSignOut={handleSignOut}
      />

      <main className="main-layout">
        <SidebarLeft
          currentRegion={currentRegion}
          setCurrentRegion={setCurrentRegion}
          onAnalyzeRegion={handleAnalyzeCustom}
        />

        <MapViewer
          currentRegion={currentRegion}
          setCurrentRegion={setCurrentRegion}
          viewMode={viewMode}
          setViewMode={setViewMode}
          spectralCanvas={spectralCanvas}
          opacity={opacity}
          setOpacity={setOpacity}
          onVillageBoxSelected={handleVillageBoxSelected}
        />

        <SidebarRight
          currentRegion={currentRegion}
        />
      </main>

      <RegionComparisonModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        onSelectRegion={setCurrentRegion}
        currentRegionId={currentRegion.id}
      />

      <BandInspectorModal
        isOpen={isBandModalOpen}
        onClose={() => setIsBandModalOpen(false)}
      />

      <ReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        currentRegion={currentRegion}
      />

      <VillageModal
        isOpen={isVillageModalOpen}
        onClose={() => setIsVillageModalOpen(false)}
        villageData={selectedVillageData}
        onApplyAsActiveRegion={handleApplyVillageAsActive}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authModalMode}
        purposeNotice={authPurposeNotice}
        onAuthSuccess={handleAuthSuccess}
      />

      {toastMessage && (
        <div className="toast-notice">
          <Check size={16} color="#34d399" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
