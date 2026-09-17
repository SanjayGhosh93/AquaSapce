/**
 * Comprehensive Directory of Indian Villages, Mouzas, Blocks, Districts & Cities
 * Includes small agricultural villages (Duadanda, Balipur, Thakuranichak, Singur, etc.)
 * Enables instant search and auto-zoom across India.
 */

export const ALL_INDIAN_PLACES = [
  // ==========================================
  // WEST BENGAL - SPECIAL FOCUS ON VILLAGES & MOUZAS
  // ==========================================
  // Hooghly District Villages (Khanakul, Arambagh, Singur, Tarakeswar)
  { 
    name: 'Duadanda', 
    state: 'West Bengal', 
    district: 'Hooghly (Khanakul I)',
    type: 'Agricultural Village Mouza', 
    lat: 22.6841, 
    lng: 87.8652, 
    zoom: 14, 
    ndvi: 0.77, 
    wqi: 80,
    pincode: '712613',
    details: 'Khanakul I Block, Thakuranichak GP, Census Code 325824. Fertile paddy and potato farmlands with canal irrigation.'
  },
  { 
    name: 'Balipur', 
    state: 'West Bengal', 
    district: 'Hooghly (Khanakul I)',
    type: 'Gram Panchayat Village', 
    lat: 22.7012, 
    lng: 87.8924, 
    zoom: 14, 
    ndvi: 0.75, 
    wqi: 78,
    pincode: '712613',
    details: 'Khanakul I Block, Balipur GP. High-density crop cultivation and local freshwater ponds.'
  },
  { 
    name: 'Balipur (North 24 Parganas)', 
    state: 'West Bengal', 
    district: 'North 24 Parganas',
    type: 'Rural Village Mouza', 
    lat: 22.6715, 
    lng: 88.5626, 
    zoom: 14, 
    ndvi: 0.71, 
    wqi: 75,
    details: 'Barasat II Block. Mixed paddy, jute, and aquaculture farming.'
  },
  { 
    name: 'Thakuranichak', 
    state: 'West Bengal', 
    district: 'Hooghly (Khanakul I)',
    type: 'Gram Panchayat & Village', 
    lat: 22.6790, 
    lng: 87.8710, 
    zoom: 14, 
    ndvi: 0.76, 
    wqi: 79,
    pincode: '712613',
    details: 'Khanakul I Block, Mundeswari River floodplain agriculture.'
  },
  { 
    name: 'Khanakul', 
    state: 'West Bengal', 
    district: 'Hooghly',
    type: 'CD Block & Rural Center', 
    lat: 22.7089, 
    lng: 87.8502, 
    zoom: 13, 
    ndvi: 0.76, 
    wqi: 79 
  },
  { 
    name: 'Arambagh', 
    state: 'West Bengal', 
    district: 'Hooghly',
    type: 'Sub-Divisional Agricultural Hub', 
    lat: 22.8800, 
    lng: 87.7800, 
    zoom: 13, 
    ndvi: 0.74, 
    wqi: 77 
  },
  { 
    name: 'Singur', 
    state: 'West Bengal', 
    district: 'Hooghly',
    type: 'Multi-Crop Farmland', 
    lat: 22.8100, 
    lng: 88.2300, 
    zoom: 13, 
    ndvi: 0.78, 
    wqi: 81 
  },
  { 
    name: 'Tarakeswar', 
    state: 'West Bengal', 
    district: 'Hooghly',
    type: 'Agricultural & Temple Town', 
    lat: 22.8900, 
    lng: 88.0200, 
    zoom: 13, 
    ndvi: 0.73, 
    wqi: 76 
  },
  { 
    name: 'Haripal', 
    state: 'West Bengal', 
    district: 'Hooghly',
    type: 'Paddy & Potato Basin', 
    lat: 22.8300, 
    lng: 88.1100, 
    zoom: 13, 
    ndvi: 0.75, 
    wqi: 78 
  },
  { 
    name: 'Champadanga', 
    state: 'West Bengal', 
    district: 'Hooghly',
    type: 'Rural Produce Trading Hub', 
    lat: 22.8350, 
    lng: 87.9620, 
    zoom: 13, 
    ndvi: 0.76, 
    wqi: 77 
  },
  { 
    name: 'Chandpara', 
    state: 'West Bengal', 
    district: 'North 24 Parganas',
    type: 'Gaighata Farming Village', 
    lat: 22.9560, 
    lng: 88.8250, 
    zoom: 13, 
    ndvi: 0.79, 
    wqi: 82 
  },
  { 
    name: 'Bongaon', 
    state: 'West Bengal', 
    district: 'North 24 Parganas',
    type: 'Ichamati Riparian Belt', 
    lat: 23.0485, 
    lng: 88.8270, 
    zoom: 13, 
    ndvi: 0.76, 
    wqi: 80 
  },
  { 
    name: 'Habra & Gaighata', 
    state: 'West Bengal', 
    district: 'North 24 Parganas',
    type: 'Agro-Vegetable Belt', 
    lat: 22.8300, 
    lng: 88.6600, 
    zoom: 13, 
    ndvi: 0.74, 
    wqi: 76 
  },
  { 
    name: 'Basirhat', 
    state: 'West Bengal', 
    district: 'North 24 Parganas',
    type: 'Ichamati Delta & Paddy Fields', 
    lat: 22.6600, 
    lng: 88.8700, 
    zoom: 13, 
    ndvi: 0.77, 
    wqi: 79 
  },
  { 
    name: 'Ghatal', 
    state: 'West Bengal', 
    district: 'Paschim Medinipur',
    type: 'Silabati Riverine Farmland', 
    lat: 22.6700, 
    lng: 87.7200, 
    zoom: 13, 
    ndvi: 0.76, 
    wqi: 80 
  },
  { 
    name: 'Daspur', 
    state: 'West Bengal', 
    district: 'Paschim Medinipur',
    type: 'Paddy & Jute Agricultural Belt', 
    lat: 22.6000, 
    lng: 87.7200, 
    zoom: 13, 
    ndvi: 0.75, 
    wqi: 78 
  },
  { 
    name: 'Kotulpur', 
    state: 'West Bengal', 
    district: 'Bankura',
    type: 'Lateritic Agro Farmland', 
    lat: 22.9800, 
    lng: 87.5800, 
    zoom: 13, 
    ndvi: 0.72, 
    wqi: 75 
  },
  { 
    name: 'Joypur', 
    state: 'West Bengal', 
    district: 'Bankura',
    type: 'Forest Fringe & Farmland', 
    lat: 23.0500, 
    lng: 87.4300, 
    zoom: 13, 
    ndvi: 0.81, 
    wqi: 83 
  },
  { 
    name: 'Bishnupur', 
    state: 'West Bengal', 
    district: 'Bankura',
    type: 'Heritage & Agricultural Hub', 
    lat: 23.0700, 
    lng: 87.3200, 
    zoom: 13, 
    ndvi: 0.73, 
    wqi: 77 
  },
  { 
    name: 'Kolkata', 
    state: 'West Bengal', 
    district: 'Kolkata',
    type: 'Metropolitan City', 
    lat: 22.5726, 
    lng: 88.3639, 
    zoom: 12, 
    ndvi: 0.61, 
    wqi: 72 
  },
  { 
    name: 'Sundarbans', 
    state: 'West Bengal', 
    district: 'South 24 Parganas',
    type: 'Mangrove Biosphere', 
    lat: 21.9497, 
    lng: 89.1833, 
    zoom: 11, 
    ndvi: 0.88, 
    wqi: 91 
  },
  { 
    name: 'Gosaba', 
    state: 'West Bengal', 
    district: 'South 24 Parganas',
    type: 'Delta Island Village', 
    lat: 22.1600, 
    lng: 88.8000, 
    zoom: 13, 
    ndvi: 0.84, 
    wqi: 88 
  },
  { 
    name: 'Canning', 
    state: 'West Bengal', 
    district: 'South 24 Parganas',
    type: 'Matla Estuary Farming & Fishery', 
    lat: 22.3100, 
    lng: 88.6600, 
    zoom: 13, 
    ndvi: 0.75, 
    wqi: 82 
  },
  { 
    name: 'Kakdwip', 
    state: 'West Bengal', 
    district: 'South 24 Parganas',
    type: 'Coastal Island Agriculture', 
    lat: 21.8700, 
    lng: 88.1900, 
    zoom: 13, 
    ndvi: 0.78, 
    wqi: 84 
  },
  { 
    name: 'Tamluk', 
    state: 'West Bengal', 
    district: 'Purba Medinipur',
    type: 'Rupnarayan Basin Agriculture', 
    lat: 22.3000, 
    lng: 87.9200, 
    zoom: 13, 
    ndvi: 0.76, 
    wqi: 79 
  },
  { 
    name: 'Contai (Kanthi)', 
    state: 'West Bengal', 
    district: 'Purba Medinipur',
    type: 'Coastal Rice & Betel Vine Belt', 
    lat: 21.7800, 
    lng: 87.7500, 
    zoom: 13, 
    ndvi: 0.77, 
    wqi: 81 
  },
  { 
    name: 'Nandigram', 
    state: 'West Bengal', 
    district: 'Purba Medinipur',
    type: 'Haldi River Estuary Farmland', 
    lat: 22.0100, 
    lng: 87.9800, 
    zoom: 13, 
    ndvi: 0.79, 
    wqi: 83 
  },
  { 
    name: 'Bardhaman (Burdwan)', 
    state: 'West Bengal', 
    district: 'Purba Bardhaman',
    type: 'Rice Bowl of Bengal', 
    lat: 23.2324, 
    lng: 87.8615, 
    zoom: 12, 
    ndvi: 0.81, 
    wqi: 84 
  },
  { 
    name: 'Memari', 
    state: 'West Bengal', 
    district: 'Purba Bardhaman',
    type: 'Paddy & Cold Storage Hub', 
    lat: 23.1800, 
    lng: 88.1100, 
    zoom: 13, 
    ndvi: 0.79, 
    wqi: 82 
  },
  { 
    name: 'Kalna', 
    state: 'West Bengal', 
    district: 'Purba Bardhaman',
    type: 'Bhagirathi Riparian Farmlands', 
    lat: 23.2200, 
    lng: 88.3700, 
    zoom: 13, 
    ndvi: 0.77, 
    wqi: 80 
  },
  { 
    name: 'Katwa', 
    state: 'West Bengal', 
    district: 'Purba Bardhaman',
    type: 'Ajay-Bhagirathi Confluence', 
    lat: 23.6400, 
    lng: 88.1300, 
    zoom: 13, 
    ndvi: 0.76, 
    wqi: 79 
  },
  { 
    name: 'Krishnanagar', 
    state: 'West Bengal', 
    district: 'Nadia',
    type: 'Jalangi Basin Agriculture', 
    lat: 23.4000, 
    lng: 88.5000, 
    zoom: 13, 
    ndvi: 0.78, 
    wqi: 81 
  },
  { 
    name: 'Santipur', 
    state: 'West Bengal', 
    district: 'Nadia',
    type: 'Alluvial Farmlands & Handloom', 
    lat: 23.2500, 
    lng: 88.4300, 
    zoom: 13, 
    ndvi: 0.77, 
    wqi: 80 
  },
  { 
    name: 'Ranaghat', 
    state: 'West Bengal', 
    district: 'Nadia',
    type: 'Churni River Plain Farmland', 
    lat: 23.1800, 
    lng: 88.5800, 
    zoom: 13, 
    ndvi: 0.76, 
    wqi: 79 
  },
  { 
    name: 'Bolpur (Shantiniketan)', 
    state: 'West Bengal', 
    district: 'Birbhum',
    type: 'Kopai River Valley & Farmland', 
    lat: 23.6700, 
    lng: 87.6800, 
    zoom: 13, 
    ndvi: 0.73, 
    wqi: 76 
  },
  { 
    name: 'Suri', 
    state: 'West Bengal', 
    district: 'Birbhum',
    type: 'Mayurakshi Valley Agriculture', 
    lat: 23.9100, 
    lng: 87.5300, 
    zoom: 13, 
    ndvi: 0.71, 
    wqi: 75 
  },
  { 
    name: 'Rampurhat', 
    state: 'West Bengal', 
    district: 'Birbhum',
    type: 'Red Laterite Farmland Zone', 
    lat: 24.1700, 
    lng: 87.7800, 
    zoom: 13, 
    ndvi: 0.72, 
    wqi: 74 
  },
  { 
    name: 'Berhampore', 
    state: 'West Bengal', 
    district: 'Murshidabad',
    type: 'Bhagirathi Alluvial Plain', 
    lat: 24.1000, 
    lng: 88.2500, 
    zoom: 13, 
    ndvi: 0.76, 
    wqi: 78 
  },
  { 
    name: 'Jalangi', 
    state: 'West Bengal', 
    district: 'Murshidabad',
    type: 'Border Riverine Agricultural Mouza', 
    lat: 24.1300, 
    lng: 88.7000, 
    zoom: 13, 
    ndvi: 0.78, 
    wqi: 82 
  },
  { 
    name: 'Siliguri', 
    state: 'West Bengal', 
    district: 'Darjeeling/Jalpaiguri',
    type: 'Sub-Himalayan Foothills', 
    lat: 26.7271, 
    lng: 88.3953, 
    zoom: 12, 
    ndvi: 0.79, 
    wqi: 84 
  },
  { 
    name: 'Darjeeling', 
    state: 'West Bengal', 
    district: 'Darjeeling',
    type: 'Himalayan Tea Plantations', 
    lat: 27.0410, 
    lng: 88.2663, 
    zoom: 12, 
    ndvi: 0.86, 
    wqi: 89 
  },
  { 
    name: 'Cooch Behar', 
    state: 'West Bengal', 
    district: 'Cooch Behar',
    type: 'Torsa River Floodplain Farmlands', 
    lat: 26.3200, 
    lng: 89.4500, 
    zoom: 13, 
    ndvi: 0.81, 
    wqi: 85 
  },

  // ==========================================
  // PUNJAB & HARYANA - AGRO CENTERS & VILLAGES
  // ==========================================
  { 
    name: 'Punjab (Central Wheat-Belt)', 
    state: 'Punjab', 
    district: 'Jalandhar/Ludhiana',
    type: 'Intensive Irrigation Belt', 
    lat: 31.1471, 
    lng: 75.3412, 
    zoom: 11, 
    ndvi: 0.78, 
    wqi: 82 
  },
  { 
    name: 'Dhariwal', 
    state: 'Punjab', 
    district: 'Gurdaspur',
    type: 'Rural Panchayat Village', 
    lat: 31.9500, 
    lng: 75.3100, 
    zoom: 14, 
    ndvi: 0.81, 
    wqi: 85 
  },
  { 
    name: 'Ludhiana Farmlands', 
    state: 'Punjab', 
    district: 'Ludhiana',
    type: 'Wheat & Rice Rotational Zone', 
    lat: 30.9010, 
    lng: 75.8573, 
    zoom: 12, 
    ndvi: 0.72, 
    wqi: 74 
  },
  { 
    name: 'Amritsar Rural', 
    state: 'Punjab', 
    district: 'Amritsar',
    type: 'Majha Agro-Ecological Basin', 
    lat: 31.6340, 
    lng: 74.8723, 
    zoom: 12, 
    ndvi: 0.76, 
    wqi: 78 
  },
  { 
    name: 'Bathinda Malwa', 
    state: 'Punjab', 
    district: 'Bathinda',
    type: 'Cotton & Wheat Canal Belt', 
    lat: 30.2110, 
    lng: 74.9455, 
    zoom: 12, 
    ndvi: 0.69, 
    wqi: 71 
  },
  { 
    name: 'Karnal', 
    state: 'Haryana', 
    district: 'Karnal',
    type: 'Basmati Rice Hub & Agro Research', 
    lat: 29.6857, 
    lng: 76.9905, 
    zoom: 12, 
    ndvi: 0.77, 
    wqi: 80 
  },
  { 
    name: 'Kurukshetra Farmlands', 
    state: 'Haryana', 
    district: 'Kurukshetra',
    type: 'Canal Irrigated Crop Plains', 
    lat: 29.9695, 
    lng: 76.8783, 
    zoom: 13, 
    ndvi: 0.76, 
    wqi: 79 
  },
  { 
    name: 'Sirsa', 
    state: 'Haryana', 
    district: 'Sirsa',
    type: 'Ghaggar Basin Farmlands', 
    lat: 29.5349, 
    lng: 75.0298, 
    zoom: 13, 
    ndvi: 0.71, 
    wqi: 73 
  },

  // ==========================================
  // UTTAR PRADESH & BIHAR
  // ==========================================
  { 
    name: 'Balipur (UP)', 
    state: 'Uttar Pradesh', 
    district: 'Etawah',
    type: 'Rural Village & Cropland', 
    lat: 26.9927, 
    lng: 79.1678, 
    zoom: 14, 
    ndvi: 0.72, 
    wqi: 74 
  },
  { 
    name: 'Varanasi Gangetic Plain', 
    state: 'Uttar Pradesh', 
    district: 'Varanasi',
    type: 'Ganges Sacred River Plain', 
    lat: 25.3176, 
    lng: 82.9739, 
    zoom: 12, 
    ndvi: 0.64, 
    wqi: 67 
  },
  { 
    name: 'Gorakhpur Terai', 
    state: 'Uttar Pradesh', 
    district: 'Gorakhpur',
    type: 'Sub-Himalayan Terai Farmland', 
    lat: 26.7606, 
    lng: 83.3732, 
    zoom: 12, 
    ndvi: 0.77, 
    wqi: 80 
  },
  { 
    name: 'Muzaffarpur', 
    state: 'Bihar', 
    district: 'Muzaffarpur',
    type: 'Burhi Gandak Alluvial Farmland', 
    lat: 26.1209, 
    lng: 85.3647, 
    zoom: 12, 
    ndvi: 0.74, 
    wqi: 76 
  },
  { 
    name: 'Purnia & Katihar', 
    state: 'Bihar', 
    district: 'Purnia',
    type: 'Mahananda-Kosi Maize & Jute Basin', 
    lat: 25.7771, 
    lng: 87.4753, 
    zoom: 12, 
    ndvi: 0.79, 
    wqi: 81 
  },

  // ==========================================
  // MAHARASHTRA & GUJARAT
  // ==========================================
  { 
    name: 'Khed (Pune Rural)', 
    state: 'Maharashtra', 
    district: 'Pune',
    type: 'Sugarcane & Onion Farming Village', 
    lat: 18.8400, 
    lng: 73.9100, 
    zoom: 14, 
    ndvi: 0.73, 
    wqi: 77 
  },
  { 
    name: 'Baramati', 
    state: 'Maharashtra', 
    district: 'Pune',
    type: 'Canal Irrigated Agro-Cluster', 
    lat: 18.1500, 
    lng: 74.5800, 
    zoom: 13, 
    ndvi: 0.74, 
    wqi: 79 
  },
  { 
    name: 'Nashik Vineyards', 
    state: 'Maharashtra', 
    district: 'Nashik',
    type: 'Godavari Basin Viticulture', 
    lat: 19.9975, 
    lng: 73.7898, 
    zoom: 12, 
    ndvi: 0.71, 
    wqi: 79 
  },
  { 
    name: 'Anand & Kheda', 
    state: 'Gujarat', 
    district: 'Anand',
    type: 'Charotar Dairy & Tobacco Farmlands', 
    lat: 22.5645, 
    lng: 72.9289, 
    zoom: 13, 
    ndvi: 0.72, 
    wqi: 76 
  },

  // ==========================================
  // SOUTH INDIA & ASSAM
  // ==========================================
  { 
    name: 'Hoskote Rural', 
    state: 'Karnataka', 
    district: 'Bengaluru Rural',
    type: 'Lake Cascade & Vegetable Farmlands', 
    lat: 13.0700, 
    lng: 77.7900, 
    zoom: 14, 
    ndvi: 0.71, 
    wqi: 74 
  },
  { 
    name: 'Mandya (Sugar City)', 
    state: 'Karnataka', 
    district: 'Mandya',
    type: 'Cauvery Sugarcane & Paddy Basin', 
    lat: 12.5200, 
    lng: 76.9000, 
    zoom: 13, 
    ndvi: 0.81, 
    wqi: 85 
  },
  { 
    name: 'Thanjavur Delta', 
    state: 'Tamil Nadu', 
    district: 'Thanjavur',
    type: 'Cauvery Delta Rice Bowl', 
    lat: 10.7870, 
    lng: 79.1378, 
    zoom: 12, 
    ndvi: 0.82, 
    wqi: 86 
  },
  { 
    name: 'Kuttanad', 
    state: 'Kerala', 
    district: 'Alappuzha',
    type: 'Below Sea Level Farming System', 
    lat: 9.4981, 
    lng: 76.3388, 
    zoom: 12, 
    ndvi: 0.85, 
    wqi: 88 
  },
  { 
    name: 'Nalbari Village', 
    state: 'Assam', 
    district: 'Nalbari',
    type: 'Brahmaputra Floodplain Jute & Tea', 
    lat: 26.4400, 
    lng: 91.4400, 
    zoom: 14, 
    ndvi: 0.84, 
    wqi: 89 
  }
];
