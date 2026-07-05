import React, { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { Badge } from './Badge';

export const InteractiveDashboard = () => {
  const [visitors, setVisitors] = useState(1248);
  const [load, setLoad] = useState(34);
  const [activeTab, setActiveTab] = useState('sales');

  useEffect(() => {
    const timer = setInterval(() => {
      setVisitors(v => v + Math.floor(Math.random() * 5) - 2);
      setLoad(l => {
        const next = l + Math.floor(Math.random() * 7) - 3;
        return next > 90 || next < 10 ? 30 : next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <GlassCard className="w-full max-w-2xl mx-auto shadow-[0_20px_50px_rgba(16,185,129,0.1)]">
      <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/60 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-zinc-500 font-mono">venture-dash v2.6.sh</span>
        </div>
        <Badge>System Online</Badge>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Stats */}
        <div className="space-y-4 md:col-span-1">
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Live Visitors</p>
            <p className="text-2xl font-bold font-mono text-white mt-1">{visitors}</p>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Server Load</p>
            <p className="text-2xl font-bold font-mono text-white mt-1">{load}%</p>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-400 h-full transition-all duration-500" style={{ width: `${load}%` }} />
            </div>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Active Stream</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs text-zinc-300 font-mono">React v19 Thread</span>
            </div>
          </div>
        </div>

        {/* Right Charts */}
        <div className="md:col-span-2 p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Activity Telemetry</span>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab('sales')} 
                className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${activeTab === 'sales' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Conversion
              </button>
              <button 
                onClick={() => setActiveTab('traffic')} 
                className={`text-[11px] px-2.5 py-1 rounded-md transition-colors ${activeTab === 'traffic' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Flow
              </button>
            </div>
          </div>

          <div className="h-32 flex items-end justify-center pt-4 relative">
            <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              {activeTab === 'sales' ? (
                <>
                  <path d="M 0,25 Q 20,5 40,18 T 80,8 T 100,12" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 0,25 Q 20,5 40,18 T 80,8 T 100,12 L 100,30 L 0,30 Z" fill="url(#chartGradient)" />
                </>
              ) : (
                <>
                  <path d="M 0,15 Q 25,28 50,10 T 100,18" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 0,15 Q 25,28 50,10 T 100,18 L 100,30 L 0,30 Z" fill="url(#chartGradient)" />
                </>
              )}
            </svg>
            <span className="absolute bottom-1 right-2 text-[9px] font-mono text-zinc-600">Dynamic node live scale</span>
          </div>

          <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono mt-2 border-t border-zinc-800/60 pt-2">
            <span>08:00 AM</span>
            <span>12:00 PM</span>
            <span>04:00 PM</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};