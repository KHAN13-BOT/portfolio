import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';

const CASE_STUDIES = [
  {
    id: 'ai-productivity-app',
    title: 'AI Productivity App',
    problem: 'Knowledge professionals face workflow bottlenecks and cognitive overload, finding existing task management systems rigid and metrics-poor.',
    solution: 'Designed and engineered an integrated productivity platform featuring customized analytics telemetry, dynamic lists, and responsive view toggles.',
    role: 'Frontend Development, UI Design, Dashboard Architecture',
    features: ['Task Management', 'Productivity Analytics', 'Charts', 'Reports', 'Responsive UI'],
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    outcome: 'Delivered a clean and efficient productivity experience with modern dashboard design.'
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    problem: 'Enterprise operational teams deal with dispersed metrics systems, loading bottlenecks, and visual clutter across reporting modules.',
    solution: 'Built an analytical dashboard configured with real-time tracking metrics, quick audit filters, and highly optimized component state rendering.',
    role: 'Frontend Development, Component Architecture, UI Implementation',
    features: ['User Management', 'Reports', 'Analytics', 'Dashboard Widgets'],
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    outcome: 'Improved data visibility and management through a modern dashboard interface.'
  },
  {
    id: 'crm-platform',
    title: 'CRM Platform',
    problem: 'Legacy sales systems require laborious manual entries that slow pipeline velocities and obscure user communication trails.',
    solution: 'Developing a customer dashboard centering responsive lead management pipelines, interactive boards, and unified account profiles.',
    role: 'Product Design, Frontend Development',
    features: ['Lead Management', 'Sales Pipeline', 'Kanban Board', 'Team Dashboard'],
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    outcome: 'Designed to streamline sales and customer management workflows.',
    status: 'Under Development'
  }
];

export const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);
  const selectedStudy = CASE_STUDIES.find(c => c.id === activeTab);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pt-24 pb-16 min-h-screen text-zinc-100 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge>Engineering Case Telemetry</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">Case Analysis</h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Review the structural issues, implementation challenges, and technical frameworks driving our designs.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CASE_STUDIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                activeTab === c.id
                  ? 'bg-emerald-500 text-zinc-950 shadow-[0_4px_20px_rgba(16,185,129,0.2)]'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-850 hover:text-white border border-zinc-800/60'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Selected View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            {selectedStudy && (
              <GlassCard className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  
                  {/* Left Metadata */}
                  <div className="lg:col-span-4 space-y-8">
                    <div>
                      <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">Project Role</h4>
                      <p className="text-sm font-medium text-white leading-relaxed">{selectedStudy.role}</p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">Primary Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedStudy.tech.map((tech, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">Status Objective</h4>
                      <p className="text-sm font-bold text-white mt-1 flex items-center gap-2">
                        {selectedStudy.status === 'Under Development' ? (
                          <>
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span>Beta Stage Iterations</span>
                          </>
                        ) : (
                          <>
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Deployed & Fully Monitored</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="lg:col-span-8 space-y-8 lg:border-l lg:border-zinc-800/80 lg:pl-12">
                    <div>
                      <h2 className="text-3xl font-extrabold tracking-tight text-white mb-6">{selectedStudy.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                        <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">Core Challenge</h4>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{selectedStudy.problem}</p>
                      </div>

                      <div className="p-5 rounded-xl bg-emerald-950/10 border border-emerald-500/20">
                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Applied Solution</h4>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{selectedStudy.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">Functional Features Delivered</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedStudy.features.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-zinc-800/60">
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">System Outcome</h4>
                      <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{selectedStudy.outcome}</p>
                    </div>
                  </div>

                </div>
              </GlassCard>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
export default CaseStudy;