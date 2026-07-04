import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <Zap className="w-4 h-4 text-zinc-950 stroke-[2.5px]" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">VentureStack</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-sm leading-relaxed">
              Premium design-to-code agency implementing high-speed web apps, bespoke custom dashboards, and performance portals.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <af className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <fr className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 col-span-1">
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Navigation</h5>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors">Projects</Link></li>
              <li><Link to="/case-studies" className="text-xs text-zinc-500 hover:text-emerald-400 transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Core Focus */}
          <div className="md:col-span-3 col-span-1">
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Core Focus</h5>
            <ul className="space-y-2.5">
              <li className="text-xs text-zinc-500">SaaS Dashboards</li>
              <li className="text-xs text-zinc-500">React Architectures</li>
              <li className="text-xs text-zinc-500">CRM Engine Platforms</li>
              <li className="text-xs text-zinc-500">Interface Implementation</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2 col-span-1">
            <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Secure Channel</h5>
            <p className="text-xs text-zinc-500 font-mono">afrazjadoon7@gmail.com</p>
            <p className="text-xs text-emerald-400 font-mono mt-1">SLA: 24h Responses</p>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-mono">
          <p>© {currentYear} VentureStack. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-zinc-300 cursor-pointer">Security Protocol</span>
            <span className="hover:text-zinc-300 cursor-pointer">SLA Core Agreements</span>
          </div>
        </div>
      </div>
    </footer>
  );
};