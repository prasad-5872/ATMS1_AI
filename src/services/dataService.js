/**
 * dataService.js
 * 
 * Unified Data Access Interface for ATLAS ATCMS.
 * Connects Frontend <-> Python Backend <-> SQLite Database.
 * With seamless automatic fallback to local simulation if backend is not started yet.
 */

import { simulationEngine } from '../simulation/engine';
import { INDIAN_CITIES, PAN_INDIA_JUNCTIONS } from '../data/indianCities';
import resultsData from '../data/results.json';
import timeOfDayPlansData from '../data/timeOfDayPlans.json';
import pcuConfigData from '../data/pcuConfig.json';

export const BACKEND_API_BASE = 'http://127.0.0.1:8000/api';

class DataService {
  constructor() {
    this.isBackendOnline = false;
    this.activeCityId = "all_india";
    this.pollInterval = null;
    this.subscribers = new Set();
    this.latestState = null;
    this.checkBackendConnection();
  }

  async checkBackendConnection() {
    try {
      const res = await fetch(`${BACKEND_API_BASE}/health`, { method: 'GET', signal: AbortSignal.timeout(1200) });
      if (res.ok) {
        this.isBackendOnline = true;
      } else {
        this.isBackendOnline = false;
      }
    } catch (e) {
      this.isBackendOnline = false;
    }
    return this.isBackendOnline;
  }

  setCity(cityId) {
    this.activeCityId = cityId;
    if (this.isBackendOnline) {
      this.fetchBackendState();
    } else {
      // Local filter
      this.notifyLocalSimulation();
    }
  }

  getCityInfo(cityId) {
    return INDIAN_CITIES[cityId || this.activeCityId] || INDIAN_CITIES.all_india;
  }

  getCitiesList() {
    return Object.values(INDIAN_CITIES);
  }

  subscribeSystemUpdates(callback) {
    this.subscribers.add(callback);

    // Initial check
    this.checkBackendConnection().then(() => {
      if (this.isBackendOnline) {
        this.fetchBackendState();
      } else {
        simulationEngine.subscribe((state) => {
          if (!this.isBackendOnline) {
            const enriched = this.filterByCity(state);
            callback(enriched);
          }
        });
      }
    });

    // Start background sync poll
    if (!this.pollInterval) {
      this.pollInterval = setInterval(async () => {
        const online = await this.checkBackendConnection();
        if (online) {
          await this.fetchBackendState();
        } else {
          this.notifyLocalSimulation();
        }
      }, 1000);
    }

    return () => {
      this.subscribers.delete(callback);
      if (this.subscribers.size === 0 && this.pollInterval) {
        clearInterval(this.pollInterval);
        this.pollInterval = null;
      }
    };
  }

  async fetchBackendState() {
    try {
      const res = await fetch(`${BACKEND_API_BASE}/state?city_id=${this.activeCityId}`, { signal: AbortSignal.timeout(2000) });
      if (res.ok) {
        const data = await res.json();
        this.isBackendOnline = true;
        // Merge with local history and emergency state
        const localState = simulationEngine.getState();
        const mergedState = {
          ...data,
          speedMultiplier: localState.speedMultiplier,
          scenario: localState.scenario,
          delayHistory: localState.delayHistory,
          emergencyCorridor: localState.emergencyCorridor,
          cycleHistory: localState.cycleHistory,
          simulatedSeconds: localState.simulatedSeconds,
          activeCity: this.getCityInfo(this.activeCityId)
        };
        this.latestState = mergedState;
        this.subscribers.forEach(cb => cb(mergedState));
        return mergedState;
      }
    } catch (e) {
      this.isBackendOnline = false;
      this.notifyLocalSimulation();
    }
  }

  notifyLocalSimulation() {
    const raw = simulationEngine.getState();
    const filtered = this.filterByCity(raw);
    this.subscribers.forEach(cb => cb(filtered));
  }

  filterByCity(state) {
    const cityInfo = this.getCityInfo(this.activeCityId);
    let filteredJunctions = state.junctions;

    if (this.activeCityId !== "all_india") {
      filteredJunctions = state.junctions.filter(j => j.cityId === this.activeCityId);
      if (filteredJunctions.length === 0) {
        // Fallback to Pan-India initial junctions for this city
        filteredJunctions = PAN_INDIA_JUNCTIONS.filter(j => j.cityId === this.activeCityId);
      }
    }

    return {
      ...state,
      junctions: filteredJunctions.length > 0 ? filteredJunctions : state.junctions,
      activeCity: cityInfo,
      serverStatus: {
        ...state.serverStatus,
        online: true,
        dataMode: this.isBackendOnline ? "CONNECTED_BACKEND_SQLITE" : "LOCAL_SIMULATION_ENGINE",
        database: this.isBackendOnline ? "atlas_traffic.db (SQLite)" : "Client Memory Cache",
        activeCityName: cityInfo.name
      }
    };
  }

  async getJunctions() {
    if (this.isBackendOnline) {
      try {
        const res = await fetch(`${BACKEND_API_BASE}/junctions?city_id=${this.activeCityId}`);
        if (res.ok) return await res.json();
      } catch (e) { /* fallback */ }
    }
    return this.filterByCity(simulationEngine.getState()).junctions;
  }

  async getJunction(id) {
    const junctions = await this.getJunctions();
    return junctions.find(j => j.id === id) || null;
  }

  async setControllerMode(junctionId, mode) {
    if (this.isBackendOnline) {
      try {
        const res = await fetch(`${BACKEND_API_BASE}/controller/mode`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ junctionId, mode })
        });
        if (res.ok) {
          simulationEngine.setControllerMode(junctionId, mode);
          return await res.json();
        }
      } catch (e) { /* fallback */ }
    }
    return simulationEngine.setControllerMode(junctionId, mode);
  }

  async forcePhase(junctionId, phaseId) {
    if (this.isBackendOnline) {
      try {
        const res = await fetch(`${BACKEND_API_BASE}/controller/phase/force`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ junctionId, phaseId })
        });
        if (res.ok) {
          simulationEngine.forcePhase(junctionId, phaseId);
          return await res.json();
        }
      } catch (e) { /* fallback */ }
    }
    return simulationEngine.forcePhase(junctionId, phaseId);
  }

  async triggerEmergencyPreemption() {
    return simulationEngine.triggerEmergencySimulation();
  }

  setSpeed(multiplier) {
    simulationEngine.setSpeed(multiplier);
  }

  setScenario(scenarioKey) {
    simulationEngine.setScenario(scenarioKey);
  }

  acknowledgeAlert(alertId) {
    if (this.isBackendOnline) {
      fetch(`${BACKEND_API_BASE}/alerts/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ alertId, status: 'ACKNOWLEDGED' })
      }).catch(() => {});
    }
    simulationEngine.acknowledgeAlert(alertId);
  }

  resolveAlert(alertId) {
    if (this.isBackendOnline) {
      fetch(`${BACKEND_API_BASE}/alerts/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ alertId, status: 'RESOLVED' })
      }).catch(() => {});
    }
    simulationEngine.resolveAlert(alertId);
  }

  toggleDetectorStatus(junctionId, detectorId) {
    simulationEngine.toggleDetectorStatus(junctionId, detectorId);
  }

  async getDelayHistory() {
    return simulationEngine.getState().delayHistory;
  }

  async getBenchmarkResults() {
    return resultsData;
  }

  async getSignalPlans() {
    return timeOfDayPlansData;
  }

  async getPCUConfig() {
    return pcuConfigData;
  }
}

export const dataService = new DataService();
