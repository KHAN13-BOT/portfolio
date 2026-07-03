import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';
import { Terminal, Code, Sliders, Mail, Monitor, Zap, Users, Layers } from "lucide-react";
import Profile from "../assets/Profile.jpeg";

const REASONS = [
  { icon: Terminal, title: 'Modern React Development', desc: 'Writing high-quality custom functional components utilizing modern lifecycle standards.' },
  { icon: Monitor, title: 'Responsive Design', desc: 'Adapting to mobile, tablet, laptop, and ultra-wide monitor views smoothly.' },
  { icon: Code, title: 'Clean Architecture', desc: 'Highly organized folder assets, reusable React patterns, and self-documenting codebases.' },
  { icon: Layers, title: 'Scalable Frontend Systems', desc: 'Structuring flexible applications optimized for progressive growth and team updates.' },
  { icon: Zap, title: 'Performance Focused', desc: 'Ensuring high lighthouse scores, optimized asset trees, and fluid visual animations.' },
  { icon: Users, title: 'Professional Communication', desc: 'Clear task reporting, regular milestones, and precise engineering status logs.' }
];

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pt-24 pb-16 min-h-screen text-zinc-100 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Founder Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-emerald-500 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-emerald-500 pointer-events-none" />
            
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-500 shadow-[0_0_35px_rgba(16,185,129,0.35)]">
  <img
    src={Profile}
    alt="Afraz Khan"
    className="w-full h-full object-cover"
  />
</div>
              </div>
              <h2 className="text-2xl font-extrabold text-white">Afraz Khan</h2>
              <p className="text-sm text-emerald-400 font-mono mt-1">Frontend Developer & SaaS Builder</p>
              
              <div className="mt-6 flex justify-center gap-3">
                  <a href="https://github.com/KHAN13-BOT" target="_blank" rel="noopener noreferrer"
    className="p-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800">
    <span className="text-xs font-bold">GH</span>
  </a>

  <a href="https://www.linkedin.com/in/afraz-jadoon-5707b3340/" target="_blank" rel="noopener noreferrer"
    className="p-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800">
    <span className="text-xs font-bold">IN</span>
  </a>

  <a href="afrazjadoon7@gmail.com"
    className="p-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800">
    <Mail className="w-4 h-4" />
  </a>

              </div>
            
          </div>

          <div className="lg:col-span-7 space-y-6">
            <Badge>Technical Leadership</Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Frontend Developer & <br /><span className="text-emerald-400">SaaS System Builder</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Passionate about building modern web applications, dashboards, CRM systems, and AI-powered products. Focused on delivering clean, scalable, and user-friendly digital experiences.
            </p>
            <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
              VentureStack functions as an agile design-to-code agency bridging interface visual frameworks with highly scalable state-driven React modules. Every platform we release is analyzed closely for mobile responsiveness, structural flexibility, and rendering optimization.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-zinc-900">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Philosophy</h5>
                <p className="text-xs text-zinc-400 mt-1">High-performance structures that minimize dependencies.</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Direct Focus</h5>
                <p className="text-xs text-zinc-400 mt-1">Pixel layouts, clean styling trees, and robust state pipelines.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="border-t border-zinc-900 pt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge>System Ecosystem</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-white mt-4">Development Tech Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard className="p-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-emerald-400" />
                Frontend Core
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'JavaScript', 'Tailwind CSS'].map((item, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm font-semibold font-mono text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-400" />
                Workflows & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'Claude AI', 'Vercel', 'Netlify'].map((item, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm font-semibold font-mono text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-24 mt-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge>Operational Integrity</Badge>
            <h2 className="text-3xl font-extrabold tracking-tight text-white mt-4">Why Businesses Trust Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REASONS.map((r, idx) => (
              <GlassCard key={idx} className="p-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <r.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{r.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{r.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

      
    </motion.div>
  );
};
export default About;