import React from 'react';
import { useTraffic } from '../../context/TrafficContext';
import { CheckCircle2, Cpu, Database, ShieldCheck } from 'lucide-react';

export const Footer = () => {
  const { systemState } = useTraffic();
  const tickMs = systemState?.serverStatus?.engineTickMs || 1000;

  return (
    <footer className="h-7 border-t border-[#1F2A44] dark:border-[#1F2A44] light:border-slate-200 bg-[#0A0F1D] text-slate-400 px-4 flex items-center justify-between text-[11px] font-mono shrink-0 select-none">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          ATLAS ITMS Central Operations Grid • Ministry of Urban Transport & Mobility
        </span>
        <span className="text-slate-600 hidden md:inline">|</span>
        <span className="text-slate-400 hidden md:inline">
          Dynamic IRC:106 Signal Synchronization Active
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Database className="w-3 h-3 text-cyan-400" />
          <span className="text-slate-300">
            STORAGE: <span className="text-cyan-400 font-bold">{systemState?.serverStatus?.database || "atlas_traffic.db (SQLite)"}</span>
          </span>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <Cpu className="w-3 h-3 text-cyan-400" />
          <span>CYCLE LATENCY: {Math.round(tickMs)}ms</span>
        </div>
      </div>
    </footer>
  );
};
