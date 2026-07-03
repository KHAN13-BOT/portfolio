import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Users, Code, Terminal, Monitor, Sliders, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';

const SERVICES = [
  { id: 'saas-dev', title: 'SaaS Dashboard Development', icon: Layout, description: 'Custom, stateful analytical portals with highly responsive data visualization panels.', benefits: ['Real-time sync capabilities', 'Advanced user filtering structures', 'Fully fluid custom grid systems'] },
  { id: 'crm-dev', title: 'CRM Development', icon: Users, description: 'Bespoke sales frameworks, automated stage-triggers, and sleek interactive customer maps.', benefits: ['Kanban custom layouts', 'Instant export pipelines', 'Centralized team task logs'] },
  { id: 'frontend-dev', title: 'Frontend Development', icon: Code, description: 'Transforming custom architectures and high-fidelity wireframes into interactive semantic code.', benefits: ['Sub-pixel render optimization', 'Component structure compliance', 'Accessible design focus'] },
  { id: 'react-apps', title: 'React Applications', icon: Terminal, description: 'High-speed, production-grade applications leveraging advanced state management systems.', benefits: ['Context & state efficiency', 'Dynamic asynchronous routing', 'Modular structural reuse'] },
  { id: 'landing-pages', title: 'Landing Pages', icon: Monitor, description: 'Conversion-optimized marketing landing hubs engineered to turn passive viewers into users.', benefits: ['Framer motion narrative', 'Page-speed optimization targets', 'Targeted interactive hooks'] },
  { id: 'admin-dashboards', title: 'Admin Dashboards', icon: Sliders, description: 'Internal hubs featuring system configuration tools, auditing panels, and access control settings.', benefits: ['Flexible permission grids', 'Batch data processes', 'System log tracking visualizer'] },
  { id: 'ai-interfaces', title: 'AI Product Interfaces', icon: Cpu, description: 'Dynamic layout interfaces customized for interactive AI models, streaming displays, and agent dashboards.', benefits: ['Live-streaming text queues', 'Sleek custom prompt structures', 'Context visual status tools'] },
  { id: 'ui-ux-implementation', title: 'UI/UX Implementation', icon: Layers, description: 'Flawless translation of pixel designs into working fluid layouts without aesthetic degradation.', benefits: ['Responsive grid transitions', 'Micro-interactions built natively', 'Theme adaptation engines'] }
];

export const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pt-24 pb-16 min-h-screen text-zinc-100 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge>Professional Capabilities</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">Expert Frontend Engineering</h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            We architect fluid interfaces, complex functional dashboards, and customizable CRM dashboards optimized for high performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <GlassCard key={service.id} className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-pulse">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{service.description}</p>
              </div>
              <div className="border-t border-zinc-800/60 pt-4 mt-auto">
                <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-3">Deliverables Include</p>
                <ul className="space-y-2">
                  {service.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-[11px] text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Services;