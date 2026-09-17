import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { 
  AlertTriangle, 
  ShieldCheck, 
  Bot, 
  Clock, 
  TrendingUp
} from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function SidebarRight({ currentRegion, className }) {
  const [timeFilter, setTimeFilter] = useState('30D');

  const seriesData = currentRegion.timeSeries?.[timeFilter] || currentRegion.timeSeries['30D'];

  // Chart Data for Historical Analysis
  const chartData = {
    labels: seriesData.labels,
    datasets: [
      {
        label: 'NDVI Trend',
        data: seriesData.ndvi,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.15)',
        borderWidth: 2.5,
        fill: true,
        tension: 0.35,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: '#ffffff'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(10, 18, 36, 0.95)',
        titleColor: '#00f2fe',
        bodyColor: '#f1f5f9',
        borderColor: 'rgba(56, 189, 248, 0.3)',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#64748b', font: { size: 9, family: "'JetBrains Mono', monospace" } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#64748b', font: { size: 9, family: "'JetBrains Mono', monospace" } }
      }
    }
  };

  return (
    <aside id="dashboard-analytics" className={`sidebar sidebar-right ${className || ''}`}>
      {/* 1. Environmental Analytics 4 Cards */}
      <div className="sidebar-section">
        <div className="section-header">
          <span className="section-title">
            <TrendingUp size={14} />
            Environmental Analytics
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
            Live Telemetry
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {/* Card 1: Vegetation */}
          <div className="stat-box">
            <span className="stat-box-title">🌱 Vegetation</span>
            <span className="stat-box-val" style={{ color: '#34d399' }}>
              {currentRegion.vegetation}%
            </span>
            <div className="stat-box-badge">
              <span style={{ color: '#10b981' }}>{currentRegion.ndviCondition}</span>
            </div>
          </div>

          {/* Card 2: Water Quality */}
          <div className="stat-box">
            <span className="stat-box-title">💧 Water Quality</span>
            <span className="stat-box-val" style={{ color: '#38bdf8' }}>
              {currentRegion.waterQuality}/100
            </span>
            <div className="stat-box-badge">
              <span style={{ color: currentRegion.waterConditionColor }}>
                {currentRegion.waterCondition}
              </span>
            </div>
          </div>

          {/* Card 3: Crop Stress */}
          <div className="stat-box">
            <span className="stat-box-title">🌾 Crop Stress</span>
            <span className="stat-box-val" style={{ color: currentRegion.cropStress > 25 ? '#f87171' : '#fbbf24' }}>
              {currentRegion.cropStress}%
            </span>
            <div className="stat-box-badge">
              <span style={{ color: currentRegion.cropStress > 25 ? '#f87171' : '#34d399' }}>
                {currentRegion.cropStress > 25 ? 'Elevated' : 'Low Deficit'}
              </span>
            </div>
          </div>

          {/* Card 4: Environmental Risk */}
          <div className="stat-box">
            <span className="stat-box-title">🌍 Ecological Risk</span>
            <span className="stat-box-val" style={{ color: currentRegion.riskColor, fontSize: '1.05rem' }}>
              {currentRegion.environmentalRisk}
            </span>
            <div className="stat-box-badge">
              <span style={{ color: currentRegion.riskColor }}>
                {currentRegion.environmentalRisk === 'Low' ? 'Normal' : currentRegion.environmentalRisk === 'Medium' ? 'Watch' : 'Alert'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Historical Analysis with Time Filters */}
      <div className="sidebar-section">
        <div className="section-header">
          <span className="section-title">
            <Clock size={14} />
            Historical Analysis
          </span>

          {/* Time Filter Buttons */}
          <div style={{ display: 'flex', gap: 4, background: 'rgba(0,0,0,0.3)', padding: 2, borderRadius: 4 }}>
            {['7D', '30D', '3M', '1Y'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeFilter(tf)}
                style={{
                  padding: '2px 7px',
                  borderRadius: 3,
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  background: timeFilter === tf ? 'var(--accent-cyan)' : 'transparent',
                  color: timeFilter === tf ? '#030712' : '#94a3b8',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        <div style={{ height: 130, width: '100%', marginBottom: 8 }}>
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Dynamic Trend Callout */}
        <div style={{
          fontSize: '0.72rem',
          color: '#e2e8f0',
          background: 'rgba(16, 185, 129, 0.08)',
          borderLeft: '3px solid #10b981',
          padding: '6px 10px',
          borderRadius: '0 4px 4px 0',
          lineHeight: 1.35
        }}>
          📈 {seriesData.summary}
        </div>
      </div>

      {/* 3. Environmental Alerts Engine */}
      <div className="sidebar-section">
        <div className="section-header">
          <span className="section-title" style={{ color: '#f87171' }}>
            <AlertTriangle size={14} color="#ef4444" />
            Environmental Alerts
          </span>
          <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>
            {currentRegion.alerts?.length || 0} Active
          </span>
        </div>

        {currentRegion.alerts && currentRegion.alerts.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {currentRegion.alerts.map((a) => (
              <div
                key={a.id}
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '8px 10px',
                  fontSize: '0.72rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <strong style={{ color: '#f87171' }}>⚠️ {a.title}</strong>
                  <span style={{ 
                    fontSize: '0.62rem', 
                    padding: '1px 5px', 
                    borderRadius: 3, 
                    background: 'rgba(239, 68, 68, 0.2)', 
                    color: '#fca5a5' 
                  }}>
                    {a.severity}
                  </span>
                </div>
                <span style={{ color: '#fecaca', lineHeight: 1.35 }}>{a.desc}</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: 'var(--radius-sm)',
            padding: '8px 10px',
            fontSize: '0.72rem',
            color: '#34d399',
            display: 'flex',
            alignItems: 'center',
            gap: 6
          }}>
            <ShieldCheck size={14} color="#10b981" />
            <span>No active ecological alerts detected. Ecosystem stable.</span>
          </div>
        )}
      </div>

      {/* 4. AI Insight & Recommendations */}
      <div className="sidebar-section">
        <div className="section-header">
          <span className="section-title" style={{ color: 'var(--accent-cyan)' }}>
            <Bot size={15} color="var(--accent-cyan)" />
            Aqua-Space AI Analysis
          </span>
          <span style={{ 
            fontSize: '0.62rem', 
            background: 'rgba(0, 242, 254, 0.15)', 
            color: 'var(--accent-cyan)', 
            padding: '2px 6px', 
            borderRadius: 3, 
            fontFamily: 'var(--font-mono)' 
          }}>
            AI MODEL v2.4
          </span>
        </div>

        <div style={{
          background: 'rgba(7, 12, 24, 0.9)',
          border: '1px solid var(--border-card)',
          borderRadius: 'var(--radius-md)',
          padding: 10,
          marginBottom: 8
        }}>
          <p style={{ fontSize: '0.73rem', color: '#cbd5e1', lineHeight: 1.45, marginBottom: 8 }}>
            {currentRegion.aiAnalysis?.summary}
          </p>

          <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
            Recommended Interventions
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {currentRegion.aiAnalysis?.recommendations.map((rec, i) => (
              <div
                key={i}
                style={{
                  fontSize: '0.71rem',
                  lineHeight: 1.35,
                  padding: '6px 8px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderLeft: '2px solid var(--accent-cyan)',
                  borderRadius: '0 4px 4px 0',
                  color: 'var(--text-secondary)'
                }}
              >
                {rec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
