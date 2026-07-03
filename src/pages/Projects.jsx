import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';

const PROJECTS = [
  {
    id: 'ai-productivity-app',
    title: 'AI Productivity App',
    category: 'Productivity Systems',
    status: 'Completed',
    desc: 'An organized, prompt-driven workspace platform featuring deep telemetry modules and intuitive analytics. Have live Groq Ai integration',
    features: ['Task Management', 'Analytics Dashboard', 'Productivity Tracking', 'Ai Chatbot','Interactive SVG Charts', 'Responsive Layout'],
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion','Node js','Express'],
    metrics: '42% efficiency jump reported in closed test groups'
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    category: 'Enterprise Frameworks',
    status: 'Completed',
    desc: 'An advanced data operations control center mapping live network events, user accounts, and billing structures.',
    features: ['User Management', 'Telemetry Reports', 'Live Node Metrics', 'Dashboard Widgets', 'Data Visualization Tables'],
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    metrics: 'Decreased operations latency by over 300ms'
  },
  {
    id: 'crm-platform',
    title: 'CRM Platform',
    category: 'Sales Systems',
    status: 'In Progress',
    desc: 'A complete custom relational portal detailing modern deals pipelines, interactive lead tracking, and tasks.',
    features: ['Lead Management', 'Sales Pipeline Tracker', 'Interactive Kanban Boards', 'Customer Tracking Sheets', 'Team Activity Hub'],
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    metrics: 'Active development phase - beta scheduled Q3'
  }
];

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pt-24 pb-16 min-h-screen text-zinc-100 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <Badge>Recent Architectures</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">Digital Portfolio</h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explore our current range of active platforms, performance dashboards, and in-progress interface designs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj, idx) => (
            <GlassCard key={proj.id} className="flex flex-col h-full">
              <div className="p-6 bg-zinc-950/80 border-b border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 tracking-wider">PROJECT {idx + 1}</span>
                {proj.status === 'In Progress' ? (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    In Progress
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Completed
                  </span>
                )}
              </div>

              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400">{proj.category}</span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-4">{proj.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">{proj.desc}</p>
                  
                  <div className="mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">Core Integrations</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {proj.features.slice(0, 4).map((f, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5 text-xs text-zinc-400">
                          <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-zinc-800/80 pt-6 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 italic">{proj.metrics}</span>
                    <button 
                      onClick={() => navigate(`/case-studies`)} 
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                    >
                      Case Study <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Projects;