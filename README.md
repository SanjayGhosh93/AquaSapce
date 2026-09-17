# 🛰️ AquaSpace AI

> **Earth Observation & Multi-Spectral Environmental Intelligence Platform**  
> Powered by ESA Copernicus Sentinel-2 & NASA Earth Data for high-resolution crop health, water quality, and village-level ecological telemetry.

---

## 🌍 Overview

**AquaSpace** is an advanced Earth Observation (EO) satellite analytics platform designed to convert raw optical and near-infrared light spectrums into actionable environmental intelligence. By ingesting Sentinel-2 (10m GSD) multi-spectral imagery, AquaSpace calculates key ecological indicators across agricultural fields, reservoirs, wetlands, and Indian villages.

---

## ✨ Key Features

- **🌐 Interactive 3D Earth & Moon Simulation**: Photorealistic 3D Earth globe with interactive drag-rotation, real lunar orbit simulation, and distinct Sentinel-2 / GEO satellite constellation tracks.
- **🛰️ Multi-Spectral Spectral Engine**: Real-time pixel-level calculation of:
  - **NDVI** (Normalized Difference Vegetation Index) for agricultural crop vigor & biomass.
  - **NDWI** (Normalized Difference Water Index) for surface water delineations & drought detection.
  - **NDTI** (Normalized Difference Turbidity Index) for pond and river sediment monitoring.
  - **False Color & True Color Composites** (NIR/Red/Green) for canopy analysis.
- **🇮🇳 Village-Level Resolution & Indian Places Directory**:
  - Live search across Indian villages, towns, and districts (including Hooghly, Duadanda, Balipur, Punjab agricultural hubs, Sundarbans, and more).
  - 4km × 4km Village Area Intelligence bounding box sampling with AI agronomy advisory.
- **📱 Responsive Mobile & Tablet Architecture**:
  - Seamless touch experience with a single-pane mobile dashboard and fixed glassmorphic bottom navigation (`Map & Sat`, `Targets & Layers`, `Analytics`).
- **🔐 Frontend Authentication System**:
  - Role-based accounts (Agronomist, EO Scientist, Environmental Auditor) with persistent sessions, demo logins, and dashboard access gating.
- **📊 Comparative Analytics & Audit Reports**:
  - Multi-region comparison matrix and printable environmental audit reports with exportable JSON telemetry.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite 8, Vanilla CSS Design System
- **Mapping & Geospatial**: Leaflet, Google Maps (Satellite, Hybrid, Road, Terrain tiles)
- **Spectral Analytics**: Custom multi-spectral raster matrix generator & canvas rendering engine
- **Data Visualization**: Chart.js, React-ChartJS-2
- **Icons & Visuals**: Lucide Icons, Custom Aerospace SVGs

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/SanjayGhosh93/AquaSpace.git

# Navigate to project folder
cd AquaSpace

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be accessible at `http://localhost:5173`.

---

## 📜 License
This project is open-source and built for environmental monitoring and earth observation intelligence.
