/**
 * Pan-India Cities with Real Coordinates and Realistic Simulated Junctions
 */

export const INDIAN_CITIES = {
  all_india: {
    id: "all_india",
    name: "All India Overview (National Arterials)",
    state: "National Grid",
    lat: 20.5937,
    lng: 78.9629,
    zoom: 5,
  },
  delhi: {
    id: "delhi",
    name: "Delhi NCR",
    state: "Delhi",
    lat: 28.6139,
    lng: 77.2090,
    zoom: 12,
  },
  mumbai: {
    id: "mumbai",
    name: "Mumbai Metropolitan",
    state: "Maharashtra",
    lat: 19.0760,
    lng: 72.8777,
    zoom: 12,
  },
  bengaluru: {
    id: "bengaluru",
    name: "Bengaluru Tech Corridor",
    state: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    zoom: 12,
  },
  hyderabad: {
    id: "hyderabad",
    name: "Hyderabad Cyberabad",
    state: "Telangana",
    lat: 17.3850,
    lng: 78.4867,
    zoom: 12,
  },
  chennai: {
    id: "chennai",
    name: "Chennai Coastal",
    state: "Tamil Nadu",
    lat: 13.0827,
    lng: 80.2707,
    zoom: 12,
  },
  kolkata: {
    id: "kolkata",
    name: "Kolkata Hub",
    state: "West Bengal",
    lat: 22.5726,
    lng: 88.3639,
    zoom: 12,
  },
  pune: {
    id: "pune",
    name: "Pune Expressway Corridor",
    state: "Maharashtra",
    lat: 18.5204,
    lng: 73.8567,
    zoom: 12,
  },
  ahmedabad: {
    id: "ahmedabad",
    name: "Ahmedabad Ring",
    state: "Gujarat",
    lat: 23.0225,
    lng: 72.5714,
    zoom: 12,
  },
  jaipur: {
    id: "jaipur",
    name: "Jaipur Heritage Arterial",
    state: "Rajasthan",
    lat: 26.9124,
    lng: 75.7873,
    zoom: 12,
  },
  lucknow: {
    id: "lucknow",
    name: "Lucknow Awadh Corridor",
    state: "Uttar Pradesh",
    lat: 26.8467,
    lng: 80.9462,
    zoom: 12,
  },
  chandigarh: {
    id: "chandigarh",
    name: "Chandigarh Tri-City",
    state: "Punjab/Haryana",
    lat: 30.7333,
    lng: 76.7794,
    zoom: 12,
  },
  kochi: {
    id: "kochi",
    name: "Kochi Port Link",
    state: "Kerala",
    lat: 9.9312,
    lng: 76.2673,
    zoom: 12,
  }
};

export const PAN_INDIA_JUNCTIONS = [
  // --- BENGALURU ---
  {
    id: "BLR-01",
    cityId: "bengaluru",
    code: "BLR-01",
    name: "Junction BLR-01 Silk Board Intersect",
    corridor: "Outer Ring Road - Hosur Corridor",
    lat: 12.9176,
    lng: 77.6234,
    controllerMode: "Adaptive",
    cycleLength: 120,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 34,
    currentPhaseDuration: 45,
    saturationFlowRate: 1850,
    approaches: {
      north: { name: "North Approach (Koramangala)", lanes: 4, queueVeh: 16, pcu: 15.2, countVeh: 980, detectorHealth: "NORMAL", lastAgeMs: 110 },
      south: { name: "South Approach (Electronic City)", lanes: 4, queueVeh: 18, pcu: 17.1, countVeh: 1040, detectorHealth: "NORMAL", lastAgeMs: 120 },
      east: { name: "East Approach (HSR Layout)", lanes: 3, queueVeh: 10, pcu: 9.3, countVeh: 610, detectorHealth: "NORMAL", lastAgeMs: 95 },
      west: { name: "West Approach (BTM Layout)", lanes: 3, queueVeh: 12, pcu: 11.2, countVeh: 680, detectorHealth: "NORMAL", lastAgeMs: 130 }
    },
    metrics: { avgDelaySec: 42.5, throughputVehH: 3310, congestionLevel: "high", stopsPerVeh: 1.25, vpH: 3310 },
    detectors: [
      { id: "DET-BLR01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.8, latencyMs: 18 },
      { id: "DET-BLR01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.5, latencyMs: 19 },
      { id: "DET-BLR01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 7 },
      { id: "DET-BLR01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },
  {
    id: "BLR-02",
    cityId: "bengaluru",
    code: "BLR-02",
    name: "Junction BLR-02 MG Road Central",
    corridor: "Metro Central Trunk",
    lat: 12.9756,
    lng: 77.6066,
    controllerMode: "Adaptive",
    cycleLength: 100,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 22,
    currentPhaseDuration: 35,
    saturationFlowRate: 1800,
    approaches: {
      north: { name: "North (Cubbon Park Rd)", lanes: 3, queueVeh: 7, pcu: 6.2, countVeh: 560, detectorHealth: "NORMAL", lastAgeMs: 105 },
      south: { name: "South (Brigade Rd)", lanes: 3, queueVeh: 8, pcu: 7.4, countVeh: 610, detectorHealth: "NORMAL", lastAgeMs: 115 },
      east: { name: "East (Trinity Circle)", lanes: 3, queueVeh: 6, pcu: 5.5, countVeh: 520, detectorHealth: "NORMAL", lastAgeMs: 100 },
      west: { name: "West (Kasturba Rd)", lanes: 2, queueVeh: 5, pcu: 4.3, countVeh: 430, detectorHealth: "NORMAL", lastAgeMs: 125 }
    },
    metrics: { avgDelaySec: 21.8, throughputVehH: 2120, congestionLevel: "low", stopsPerVeh: 0.62, vpH: 2120 },
    detectors: [
      { id: "DET-BLR02-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 30.0, latencyMs: 16 },
      { id: "DET-BLR02-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.7, latencyMs: 17 },
      { id: "DET-BLR02-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 8 },
      { id: "DET-BLR02-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 9 }
    ]
  },
  {
    id: "BLR-03",
    cityId: "bengaluru",
    code: "BLR-03",
    name: "Junction BLR-03 Hebbal Flyover Base",
    corridor: "Airport Highway Expressway",
    lat: 13.0358,
    lng: 77.5970,
    controllerMode: "Adaptive",
    cycleLength: 115,
    currentPhase: 2,
    phaseState: "GREEN",
    phaseTimer: 28,
    currentPhaseDuration: 40,
    saturationFlowRate: 1900,
    approaches: {
      north: { name: "North (Airport Corridor)", lanes: 4, queueVeh: 13, pcu: 12.2, countVeh: 890, detectorHealth: "NORMAL", lastAgeMs: 100 },
      south: { name: "South (Bellary Rd)", lanes: 4, queueVeh: 14, pcu: 13.1, countVeh: 930, detectorHealth: "NORMAL", lastAgeMs: 110 },
      east: { name: "East (Ring Road KR Puram)", lanes: 3, queueVeh: 9, pcu: 8.2, countVeh: 620, detectorHealth: "NORMAL", lastAgeMs: 120 },
      west: { name: "West (Yeshwanthpur Link)", lanes: 3, queueVeh: 8, pcu: 7.3, countVeh: 590, detectorHealth: "NORMAL", lastAgeMs: 125 }
    },
    metrics: { avgDelaySec: 31.4, throughputVehH: 3030, congestionLevel: "medium", stopsPerVeh: 0.94, vpH: 3030 },
    detectors: [
      { id: "DET-BLR03-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.8, latencyMs: 17 },
      { id: "DET-BLR03-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.6, latencyMs: 18 },
      { id: "DET-BLR03-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 8 },
      { id: "DET-BLR03-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 9 }
    ]
  },

  // --- DELHI NCR ---
  {
    id: "DEL-01",
    cityId: "delhi",
    code: "DEL-01",
    name: "Junction DEL-01 Connaught Circus",
    corridor: "Inner Ring Metropolitan",
    lat: 28.6315,
    lng: 77.2167,
    controllerMode: "Adaptive",
    cycleLength: 120,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 30,
    currentPhaseDuration: 45,
    saturationFlowRate: 1950,
    approaches: {
      north: { name: "North Approach (Barakhamba)", lanes: 4, queueVeh: 14, pcu: 13.2, countVeh: 940, detectorHealth: "NORMAL", lastAgeMs: 115 },
      south: { name: "South Approach (Janpath)", lanes: 4, queueVeh: 12, pcu: 11.5, countVeh: 890, detectorHealth: "NORMAL", lastAgeMs: 120 },
      east: { name: "East Approach (K.G. Marg)", lanes: 3, queueVeh: 8, pcu: 7.4, countVeh: 580, detectorHealth: "NORMAL", lastAgeMs: 110 },
      west: { name: "West Approach (Parliament St)", lanes: 3, queueVeh: 9, pcu: 8.3, countVeh: 610, detectorHealth: "NORMAL", lastAgeMs: 130 }
    },
    metrics: { avgDelaySec: 33.5, throughputVehH: 3020, congestionLevel: "medium", stopsPerVeh: 1.05, vpH: 3020 },
    detectors: [
      { id: "DET-DEL01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 30.0, latencyMs: 15 },
      { id: "DET-DEL01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.8, latencyMs: 16 },
      { id: "DET-DEL01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 7 },
      { id: "DET-DEL01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },
  {
    id: "DEL-02",
    cityId: "delhi",
    code: "DEL-02",
    name: "Junction DEL-02 AIIMS Square",
    corridor: "Mahatma Gandhi Ring Road",
    lat: 28.5672,
    lng: 77.2100,
    controllerMode: "Adaptive",
    cycleLength: 125,
    currentPhase: 1,
    phaseState: "GREEN",
    phaseTimer: 18,
    currentPhaseDuration: 30,
    saturationFlowRate: 1900,
    approaches: {
      north: { name: "North (Safdarjung)", lanes: 4, queueVeh: 17, pcu: 16.1, countVeh: 1020, detectorHealth: "NORMAL", lastAgeMs: 110 },
      south: { name: "South (Hauz Khas)", lanes: 4, queueVeh: 16, pcu: 15.3, countVeh: 990, detectorHealth: "NORMAL", lastAgeMs: 115 },
      east: { name: "East (South Extension)", lanes: 4, queueVeh: 18, pcu: 17.5, countVeh: 1080, detectorHealth: "NORMAL", lastAgeMs: 125 },
      west: { name: "West (Bhikaji Cama)", lanes: 3, queueVeh: 11, pcu: 10.2, countVeh: 720, detectorHealth: "NORMAL", lastAgeMs: 130 }
    },
    metrics: { avgDelaySec: 46.2, throughputVehH: 3810, congestionLevel: "high", stopsPerVeh: 1.38, vpH: 3810 },
    detectors: [
      { id: "DET-DEL02-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.5, latencyMs: 19 },
      { id: "DET-DEL02-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.6, latencyMs: 18 },
      { id: "DET-DEL02-E-CAM", type: "AI-CCTV", approach: "east", status: "OK", fps: 29.4, latencyMs: 20 },
      { id: "DET-DEL02-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },
  {
    id: "DEL-03",
    cityId: "delhi",
    code: "DEL-03",
    name: "Junction DEL-03 Dhaula Kuan Interchange",
    corridor: "Cantonment & Airport Expressway",
    lat: 28.5921,
    lng: 77.1616,
    controllerMode: "Adaptive",
    cycleLength: 110,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 26,
    currentPhaseDuration: 38,
    saturationFlowRate: 1900,
    approaches: {
      north: { name: "North (Vande Mataram)", lanes: 3, queueVeh: 8, pcu: 7.2, countVeh: 630, detectorHealth: "NORMAL", lastAgeMs: 120 },
      south: { name: "South (Gurugram Corridor)", lanes: 4, queueVeh: 15, pcu: 14.1, countVeh: 970, detectorHealth: "NORMAL", lastAgeMs: 110 },
      east: { name: "East (Chanakyapuri)", lanes: 3, queueVeh: 7, pcu: 6.4, countVeh: 540, detectorHealth: "NORMAL", lastAgeMs: 115 },
      west: { name: "West (Delhi Cantt)", lanes: 3, queueVeh: 8, pcu: 7.1, countVeh: 580, detectorHealth: "NORMAL", lastAgeMs: 125 }
    },
    metrics: { avgDelaySec: 27.8, throughputVehH: 2720, congestionLevel: "medium", stopsPerVeh: 0.85, vpH: 2720 },
    detectors: [
      { id: "DET-DEL03-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.9, latencyMs: 17 },
      { id: "DET-DEL03-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.7, latencyMs: 18 },
      { id: "DET-DEL03-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 9 },
      { id: "DET-DEL03-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 9 }
    ]
  },

  // --- MUMBAI ---
  {
    id: "BOM-01",
    cityId: "mumbai",
    code: "BOM-01",
    name: "Junction BOM-01 Bandra Western Express",
    corridor: "Western Express Highway - Sea Link Gateway",
    lat: 19.0596,
    lng: 72.8295,
    controllerMode: "Adaptive",
    cycleLength: 130,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 35,
    currentPhaseDuration: 50,
    saturationFlowRate: 1950,
    approaches: {
      north: { name: "North (WEH to Andheri)", lanes: 4, queueVeh: 19, pcu: 18.2, countVeh: 1120, detectorHealth: "NORMAL", lastAgeMs: 105 },
      south: { name: "South (Sea Link / Worli)", lanes: 4, queueVeh: 17, pcu: 16.4, countVeh: 1060, detectorHealth: "NORMAL", lastAgeMs: 115 },
      east: { name: "East (BKC Connector)", lanes: 4, queueVeh: 15, pcu: 14.1, countVeh: 930, detectorHealth: "NORMAL", lastAgeMs: 120 },
      west: { name: "West (SV Road Bandra)", lanes: 2, queueVeh: 9, pcu: 8.3, countVeh: 540, detectorHealth: "NORMAL", lastAgeMs: 135 }
    },
    metrics: { avgDelaySec: 48.9, throughputVehH: 3650, congestionLevel: "high", stopsPerVeh: 1.45, vpH: 3650 },
    detectors: [
      { id: "DET-BOM01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 30.0, latencyMs: 16 },
      { id: "DET-BOM01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.8, latencyMs: 17 },
      { id: "DET-BOM01-E-CAM", type: "AI-CCTV", approach: "east", status: "OK", fps: 29.7, latencyMs: 18 },
      { id: "DET-BOM01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },
  {
    id: "BOM-02",
    cityId: "mumbai",
    code: "BOM-02",
    name: "Junction BOM-02 BKC Financial Hub",
    corridor: "Bharat Diamond Bourse Arterial",
    lat: 19.0657,
    lng: 72.8687,
    controllerMode: "Adaptive",
    cycleLength: 105,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 24,
    currentPhaseDuration: 36,
    saturationFlowRate: 1850,
    approaches: {
      north: { name: "North (Kurla Link)", lanes: 3, queueVeh: 8, pcu: 7.4, countVeh: 620, detectorHealth: "NORMAL", lastAgeMs: 110 },
      south: { name: "South (Chunabhatti Connector)", lanes: 3, queueVeh: 9, pcu: 8.2, countVeh: 670, detectorHealth: "NORMAL", lastAgeMs: 120 },
      east: { name: "East (Bandra-Kurla Main)", lanes: 3, queueVeh: 7, pcu: 6.5, countVeh: 580, detectorHealth: "NORMAL", lastAgeMs: 115 },
      west: { name: "West (Kalanagar)", lanes: 3, queueVeh: 8, pcu: 7.1, countVeh: 610, detectorHealth: "NORMAL", lastAgeMs: 125 }
    },
    metrics: { avgDelaySec: 25.1, throughputVehH: 2480, congestionLevel: "medium", stopsPerVeh: 0.74, vpH: 2480 },
    detectors: [
      { id: "DET-BOM02-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.8, latencyMs: 18 },
      { id: "DET-BOM02-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.6, latencyMs: 19 },
      { id: "DET-BOM02-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 8 },
      { id: "DET-BOM02-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },
  {
    id: "BOM-03",
    cityId: "mumbai",
    code: "BOM-03",
    name: "Junction BOM-03 Dadar TT Circle",
    corridor: "Dr. Ambedkar Road Spine",
    lat: 19.0178,
    lng: 72.8478,
    controllerMode: "Adaptive",
    cycleLength: 115,
    currentPhase: 2,
    phaseState: "GREEN",
    phaseTimer: 21,
    currentPhaseDuration: 32,
    saturationFlowRate: 1800,
    approaches: {
      north: { name: "North (Sion / Matunga)", lanes: 3, queueVeh: 11, pcu: 10.3, countVeh: 740, detectorHealth: "NORMAL", lastAgeMs: 120 },
      south: { name: "South (Parel / Lalbaug)", lanes: 3, queueVeh: 12, pcu: 11.2, countVeh: 790, detectorHealth: "NORMAL", lastAgeMs: 125 },
      east: { name: "East (Wadala Link)", lanes: 2, queueVeh: 6, pcu: 5.3, countVeh: 450, detectorHealth: "NORMAL", lastAgeMs: 110 },
      west: { name: "West (Dadar Station West)", lanes: 2, queueVeh: 7, pcu: 6.1, countVeh: 490, detectorHealth: "NORMAL", lastAgeMs: 130 }
    },
    metrics: { avgDelaySec: 32.7, throughputVehH: 2470, congestionLevel: "medium", stopsPerVeh: 0.98, vpH: 2470 },
    detectors: [
      { id: "DET-BOM03-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.7, latencyMs: 17 },
      { id: "DET-BOM03-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.5, latencyMs: 19 },
      { id: "DET-BOM03-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 9 },
      { id: "DET-BOM03-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },

  // --- HYDERABAD ---
  {
    id: "HYD-01",
    cityId: "hyderabad",
    code: "HYD-01",
    name: "Junction HYD-01 Hitec City Cyber Towers",
    corridor: "Cyberabad IT Corridor",
    lat: 17.4504,
    lng: 78.3808,
    controllerMode: "Adaptive",
    cycleLength: 120,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 31,
    currentPhaseDuration: 42,
    saturationFlowRate: 1900,
    approaches: {
      north: { name: "North (Kondapur)", lanes: 3, queueVeh: 11, pcu: 10.2, countVeh: 790, detectorHealth: "NORMAL", lastAgeMs: 110 },
      south: { name: "South (Madhapur / Durgam Cheruvu)", lanes: 4, queueVeh: 15, pcu: 14.1, countVeh: 980, detectorHealth: "NORMAL", lastAgeMs: 115 },
      east: { name: "East (Jubilee Hills Link)", lanes: 3, queueVeh: 10, pcu: 9.3, countVeh: 720, detectorHealth: "NORMAL", lastAgeMs: 120 },
      west: { name: "West (Gachibowli Ring)", lanes: 4, queueVeh: 14, pcu: 13.2, countVeh: 950, detectorHealth: "NORMAL", lastAgeMs: 105 }
    },
    metrics: { avgDelaySec: 36.4, throughputVehH: 3440, congestionLevel: "medium", stopsPerVeh: 1.10, vpH: 3440 },
    detectors: [
      { id: "DET-HYD01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.9, latencyMs: 16 },
      { id: "DET-HYD01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.8, latencyMs: 17 },
      { id: "DET-HYD01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 7 },
      { id: "DET-HYD01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },

  // --- CHENNAI ---
  {
    id: "MAA-01",
    cityId: "chennai",
    code: "MAA-01",
    name: "Junction MAA-01 Gemini Flyover Anna Salai",
    corridor: "Anna Salai Arterial Highway",
    lat: 13.0524,
    lng: 80.2508,
    controllerMode: "Adaptive",
    cycleLength: 110,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 25,
    currentPhaseDuration: 38,
    saturationFlowRate: 1850,
    approaches: {
      north: { name: "North (Mount Road to Central)", lanes: 4, queueVeh: 12, pcu: 11.4, countVeh: 850, detectorHealth: "NORMAL", lastAgeMs: 110 },
      south: { name: "South (Guindy / Airport)", lanes: 4, queueVeh: 13, pcu: 12.3, countVeh: 890, detectorHealth: "NORMAL", lastAgeMs: 115 },
      east: { name: "East (Cathedral Rd to Marina)", lanes: 3, queueVeh: 8, pcu: 7.2, countVeh: 560, detectorHealth: "NORMAL", lastAgeMs: 125 },
      west: { name: "West (Nungambakkam High)", lanes: 3, queueVeh: 9, pcu: 8.1, countVeh: 610, detectorHealth: "NORMAL", lastAgeMs: 120 }
    },
    metrics: { avgDelaySec: 28.6, throughputVehH: 2910, congestionLevel: "medium", stopsPerVeh: 0.88, vpH: 2910 },
    detectors: [
      { id: "DET-MAA01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.8, latencyMs: 18 },
      { id: "DET-MAA01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.7, latencyMs: 18 },
      { id: "DET-MAA01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 8 },
      { id: "DET-MAA01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 9 }
    ]
  },

  // --- KOLKATA ---
  {
    id: "CCU-01",
    cityId: "kolkata",
    code: "CCU-01",
    name: "Junction CCU-01 Park Circus 7-Point",
    corridor: "AJC Bose Road - EM Bypass Connector",
    lat: 22.5411,
    lng: 88.3657,
    controllerMode: "Adaptive",
    cycleLength: 125,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 27,
    currentPhaseDuration: 42,
    saturationFlowRate: 1800,
    approaches: {
      north: { name: "North (Sealdah Trunk)", lanes: 3, queueVeh: 15, pcu: 14.1, countVeh: 890, detectorHealth: "NORMAL", lastAgeMs: 130 },
      south: { name: "South (Gariahat Link)", lanes: 3, queueVeh: 13, pcu: 12.2, countVeh: 830, detectorHealth: "NORMAL", lastAgeMs: 125 },
      east: { name: "East (EM Bypass Express)", lanes: 3, queueVeh: 14, pcu: 13.5, countVeh: 870, detectorHealth: "NORMAL", lastAgeMs: 110 },
      west: { name: "West (Park Street / Exide)", lanes: 3, queueVeh: 11, pcu: 10.4, countVeh: 720, detectorHealth: "NORMAL", lastAgeMs: 135 }
    },
    metrics: { avgDelaySec: 39.8, throughputVehH: 3310, congestionLevel: "high", stopsPerVeh: 1.20, vpH: 3310 },
    detectors: [
      { id: "DET-CCU01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.6, latencyMs: 20 },
      { id: "DET-CCU01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.5, latencyMs: 21 },
      { id: "DET-CCU01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 9 },
      { id: "DET-CCU01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 9 }
    ]
  },

  // --- PUNE ---
  {
    id: "PNQ-01",
    cityId: "pune",
    code: "PNQ-01",
    name: "Junction PNQ-01 Shivajinagar Sancheti",
    corridor: "Old Mumbai-Pune Highway Spine",
    lat: 18.5314,
    lng: 73.8446,
    controllerMode: "Adaptive",
    cycleLength: 105,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 23,
    currentPhaseDuration: 35,
    saturationFlowRate: 1800,
    approaches: {
      north: { name: "North (Aundh / University)", lanes: 3, queueVeh: 9, pcu: 8.1, countVeh: 670, detectorHealth: "NORMAL", lastAgeMs: 115 },
      south: { name: "South (FC Road / Deccan)", lanes: 3, queueVeh: 10, pcu: 9.2, countVeh: 710, detectorHealth: "NORMAL", lastAgeMs: 120 },
      east: { name: "East (RTO / Station)", lanes: 3, queueVeh: 8, pcu: 7.3, countVeh: 620, detectorHealth: "NORMAL", lastAgeMs: 110 },
      west: { name: "West (JM Road)", lanes: 2, queueVeh: 6, pcu: 5.4, countVeh: 480, detectorHealth: "NORMAL", lastAgeMs: 125 }
    },
    metrics: { avgDelaySec: 24.5, throughputVehH: 2480, congestionLevel: "medium", stopsPerVeh: 0.72, vpH: 2480 },
    detectors: [
      { id: "DET-PNQ01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.9, latencyMs: 17 },
      { id: "DET-PNQ01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.8, latencyMs: 17 },
      { id: "DET-PNQ01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 8 },
      { id: "DET-PNQ01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },

  // --- AHMEDABAD ---
  {
    id: "AMD-01",
    cityId: "ahmedabad",
    code: "AMD-01",
    name: "Junction AMD-01 SG Highway Iskcon Cross",
    corridor: "Sarkhej-Gandhinagar Expressway",
    lat: 23.0276,
    lng: 72.5065,
    controllerMode: "Adaptive",
    cycleLength: 115,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 27,
    currentPhaseDuration: 40,
    saturationFlowRate: 1900,
    approaches: {
      north: { name: "North (Gandhinagar Flow)", lanes: 4, queueVeh: 12, pcu: 11.2, countVeh: 880, detectorHealth: "NORMAL", lastAgeMs: 110 },
      south: { name: "South (Sanand / Sarkhej)", lanes: 4, queueVeh: 11, pcu: 10.3, countVeh: 840, detectorHealth: "NORMAL", lastAgeMs: 120 },
      east: { name: "East (Drive-in / Vastrapur)", lanes: 3, queueVeh: 8, pcu: 7.2, countVeh: 590, detectorHealth: "NORMAL", lastAgeMs: 115 },
      west: { name: "West (Bopal Ring Link)", lanes: 3, queueVeh: 9, pcu: 8.1, countVeh: 630, detectorHealth: "NORMAL", lastAgeMs: 130 }
    },
    metrics: { avgDelaySec: 27.2, throughputVehH: 2940, congestionLevel: "medium", stopsPerVeh: 0.82, vpH: 2940 },
    detectors: [
      { id: "DET-AMD01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 30.0, latencyMs: 15 },
      { id: "DET-AMD01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.7, latencyMs: 18 },
      { id: "DET-AMD01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 8 },
      { id: "DET-AMD01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },

  // --- JAIPUR ---
  {
    id: "JAI-01",
    cityId: "jaipur",
    code: "JAI-01",
    name: "Junction JAI-01 Ajmer Road 200ft Bypass",
    corridor: "Delhi-Ajmer National Highway Link",
    lat: 26.8906,
    lng: 75.7423,
    controllerMode: "Adaptive",
    cycleLength: 100,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 21,
    currentPhaseDuration: 32,
    saturationFlowRate: 1800,
    approaches: {
      north: { name: "North (Vaishali Nagar)", lanes: 3, queueVeh: 7, pcu: 6.2, countVeh: 540, detectorHealth: "NORMAL", lastAgeMs: 120 },
      south: { name: "South (Mansarovar)", lanes: 3, queueVeh: 8, pcu: 7.1, countVeh: 580, detectorHealth: "NORMAL", lastAgeMs: 125 },
      east: { name: "East (Civil Lines / MI Rd)", lanes: 3, queueVeh: 6, pcu: 5.3, countVeh: 480, detectorHealth: "NORMAL", lastAgeMs: 110 },
      west: { name: "West (Ajmer Expressway)", lanes: 3, queueVeh: 8, pcu: 7.2, countVeh: 590, detectorHealth: "NORMAL", lastAgeMs: 130 }
    },
    metrics: { avgDelaySec: 21.4, throughputVehH: 2190, congestionLevel: "low", stopsPerVeh: 0.61, vpH: 2190 },
    detectors: [
      { id: "DET-JAI01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.8, latencyMs: 17 },
      { id: "DET-JAI01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.6, latencyMs: 19 },
      { id: "DET-JAI01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 8 },
      { id: "DET-JAI01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 9 }
    ]
  },

  // --- LUCKNOW ---
  {
    id: "LKO-01",
    cityId: "lucknow",
    code: "LKO-01",
    name: "Junction LKO-01 Hazratganj Atal Chowk",
    corridor: "Vidhan Sabha - Ashok Marg Central",
    lat: 26.8528,
    lng: 80.9427,
    controllerMode: "Adaptive",
    cycleLength: 105,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 24,
    currentPhaseDuration: 35,
    saturationFlowRate: 1800,
    approaches: {
      north: { name: "North (Ashok Marg)", lanes: 3, queueVeh: 8, pcu: 7.4, countVeh: 620, detectorHealth: "NORMAL", lastAgeMs: 115 },
      south: { name: "South (Raj Bhavan Rd)", lanes: 3, queueVeh: 7, pcu: 6.3, countVeh: 570, detectorHealth: "NORMAL", lastAgeMs: 120 },
      east: { name: "East (Gomti Nagar Trunk)", lanes: 3, queueVeh: 9, pcu: 8.2, countVeh: 680, detectorHealth: "NORMAL", lastAgeMs: 110 },
      west: { name: "West (Charbagh Link)", lanes: 3, queueVeh: 10, pcu: 9.1, countVeh: 710, detectorHealth: "NORMAL", lastAgeMs: 130 }
    },
    metrics: { avgDelaySec: 26.8, throughputVehH: 2580, congestionLevel: "medium", stopsPerVeh: 0.79, vpH: 2580 },
    detectors: [
      { id: "DET-LKO01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.8, latencyMs: 18 },
      { id: "DET-LKO01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.6, latencyMs: 19 },
      { id: "DET-LKO01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 8 },
      { id: "DET-LKO01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },

  // --- CHANDIGARH ---
  {
    id: "IXC-01",
    cityId: "chandigarh",
    code: "IXC-01",
    name: "Junction IXC-01 Sector 17 Plaza Chowk",
    corridor: "Madhya Marg - Jan Marg Grid",
    lat: 30.7415,
    lng: 76.7797,
    controllerMode: "Adaptive",
    cycleLength: 95,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 22,
    currentPhaseDuration: 30,
    saturationFlowRate: 1850,
    approaches: {
      north: { name: "North (Jan Marg Sectors 1-4)", lanes: 3, queueVeh: 5, pcu: 4.2, countVeh: 420, detectorHealth: "NORMAL", lastAgeMs: 105 },
      south: { name: "South (Jan Marg Sectors 22-35)", lanes: 3, queueVeh: 6, pcu: 5.1, countVeh: 460, detectorHealth: "NORMAL", lastAgeMs: 115 },
      east: { name: "East (Madhya Marg Panchkula)", lanes: 3, queueVeh: 7, pcu: 6.2, countVeh: 540, detectorHealth: "NORMAL", lastAgeMs: 110 },
      west: { name: "West (Madhya Marg Mohali)", lanes: 3, queueVeh: 7, pcu: 6.0, countVeh: 520, detectorHealth: "NORMAL", lastAgeMs: 120 }
    },
    metrics: { avgDelaySec: 16.8, throughputVehH: 1940, congestionLevel: "low", stopsPerVeh: 0.48, vpH: 1940 },
    detectors: [
      { id: "DET-IXC01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 30.0, latencyMs: 15 },
      { id: "DET-IXC01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.9, latencyMs: 16 },
      { id: "DET-IXC01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 7 },
      { id: "DET-IXC01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  },

  // --- KOCHI ---
  {
    id: "COK-01",
    cityId: "kochi",
    code: "COK-01",
    name: "Junction COK-01 Edappally Toll Junction",
    corridor: "NH 66 / NH 544 Metro Junction",
    lat: 10.0252,
    lng: 76.3082,
    controllerMode: "Adaptive",
    cycleLength: 115,
    currentPhase: 0,
    phaseState: "GREEN",
    phaseTimer: 25,
    currentPhaseDuration: 38,
    saturationFlowRate: 1800,
    approaches: {
      north: { name: "North (Aluva / Airport)", lanes: 3, queueVeh: 10, pcu: 9.3, countVeh: 730, detectorHealth: "NORMAL", lastAgeMs: 115 },
      south: { name: "South (Palarivattom / MG Rd)", lanes: 3, queueVeh: 11, pcu: 10.1, countVeh: 780, detectorHealth: "NORMAL", lastAgeMs: 120 },
      east: { name: "East (Seaport-Airport Rd)", lanes: 2, queueVeh: 7, pcu: 6.2, countVeh: 510, detectorHealth: "NORMAL", lastAgeMs: 110 },
      west: { name: "West (Lulu Mall / Cheranallur)", lanes: 3, queueVeh: 9, pcu: 8.4, countVeh: 670, detectorHealth: "NORMAL", lastAgeMs: 125 }
    },
    metrics: { avgDelaySec: 30.5, throughputVehH: 2690, congestionLevel: "medium", stopsPerVeh: 0.91, vpH: 2690 },
    detectors: [
      { id: "DET-COK01-N-CAM", type: "AI-CCTV", approach: "north", status: "OK", fps: 29.8, latencyMs: 18 },
      { id: "DET-COK01-S-CAM", type: "AI-CCTV", approach: "south", status: "OK", fps: 29.6, latencyMs: 19 },
      { id: "DET-COK01-E-LOOP", type: "Inductive Loop", approach: "east", status: "OK", latencyMs: 8 },
      { id: "DET-COK01-W-LOOP", type: "Inductive Loop", approach: "west", status: "OK", latencyMs: 8 }
    ]
  }
];
