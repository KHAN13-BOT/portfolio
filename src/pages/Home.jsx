import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Layout, Users, Code } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { InteractiveDashboard } from '../components/InteractiveDashboard';

const SERVICES_PREVIEW = [
  {
    id: 'saas-dev',
    title: 'SaaS Dashboard Development',
    icon: Layout,
    description: 'Custom, stateful analytical portals with highly responsive data visualization panels.',
    benefits: ['Real-time sync capabilities', 'Advanced user filtering structures', 'Fully fluid custom grid systems']
  },
  {
    id: 'crm-dev',
    title: 'CRM Development',
    icon: Users,
    description: 'Bespoke sales frameworks, automated stage-triggers, and sleek interactive customer maps.',
    benefits: ['Kanban custom layouts', 'Instant export pipelines', 'Centralized team task logs']
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Development',
    icon: Code,
    description: 'Transforming custom architectures and high-fidelity wireframes into interactive semantic code.',
    benefits: ['Sub-pixel render optimization', 'Component structure compliance', 'Accessible design focus']
  }
];

const PROCESS_STEPS = [
  { step: '01', title: 'Discovery', desc: 'Analyzing the scope, platform boundaries, user expectations, and functional guidelines.' },
  { step: '02', title: 'Planning', desc: 'Drafting data schemas, system layout structures, state trees, and critical navigation paths.' },
  { step: '03', title: 'Design', desc: 'Crafting modern high-fidelity digital mockups utilizing the latest sleek dark/light design trends.' },
  { step: '04', title: 'Development', desc: 'Writing clean, component-driven, production-grade React systems decorated with smooth animations.' },
  { step: '05', title: 'Testing', desc: 'Auditing codebases for full mobile responsiveness, cross-platform layouts, and fast loading speeds.' },
  { step: '06', title: 'Launch', desc: 'Publishing optimized platform structures into active Vercel/Netlify environments with zero friction.' }
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="pt-24 pb-16 min-h-screen text-zinc-100 bg-zinc-950"
    >
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          <Badge>Aesthetic SaaS Architectures</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mt-6 mb-8 leading-[1.1]"
          >
            Building Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">SaaS Products</span>, Dashboards & AI-Powered Web Apps
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We help startups and businesses build scalable digital products with modern frontend technologies.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/projects')}
              className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold tracking-wide shadow-[0_4px_30px_rgba(16,185,129,0.3)] transition-all duration-300 flex items-center gap-2 group hover:translate-y-[-2px]"
            >
              View Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold tracking-wide border border-zinc-800 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Start a Project
            </button>
          </div>
        </div>

        {/* Live Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 h-24 bottom-0 pointer-events-none" />
          <InteractiveDashboard />
        </motion.div>
      </div>

      {/* Trust Metrics */}
      <section className="py-12 border-y border-zinc-900 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '3+', label: 'Production Projects Delivered' },
              { value: 'React', label: 'Framework Specialization' },
              { value: '100%', label: 'Responsive Design Success' },
              { value: 'Modern', label: 'SaaS UI Development Patterns' }
            ].map((metric, i) => (
              <div key={i} className="p-4">
                <h4 className="text-3xl font-bold tracking-tight text-white mb-2">{metric.value}</h4>
                <p className="text-sm text-zinc-400 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <Badge>Core Capabilities</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4">Structured Technical Expertise</h2>
          </div>
          <Link to="/services" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors mt-4 md:mt-0">
            View All Services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_PREVIEW.map((service, idx) => (
            <GlassCard key={service.id} className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{service.description}</p>
              </div>
              <ul className="space-y-2 border-t border-zinc-800/60 pt-6">
                {service.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>
<div className="flex gap-3 mt-4 items-center relative place-content-center">
  <a
    href="https://admindashboard9789.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-emerald-500 rounded-lg"
  >
    Live Demo
  </a>
 <a
    href="https://productivityapp090.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-emerald-500 rounded-lg"
  >
    Live Demo
  </a>

  <a
    href="https://github.com/KHAN13-BOT"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-zinc-700 rounded-lg"
  >
    Source Code
  </a>
</div>

      {/* Process Blueprints */}
      <section className="py-24 border-t border-zinc-900 bg-zinc-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge>Operations Blueprint</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4">Engineered to Deploy</h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-4">We apply a clean, structured visual path across all of our digital product lifecycles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {PROCESS_STEPS.map((p, idx) => (
              <GlassCard key={idx} className="p-6 text-center">
                <span className="text-4xl font-extrabold font-mono text-emerald-500/20 block mb-4">{p.step}</span>
                <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
export default Home;