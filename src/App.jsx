import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { GlassCard } from './components/GlassCard';
import { Badge } from './components/Badge';

// Page Imports
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import CaseStudy from './pages/Casestudy';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const TESTIMONIALS = [
  {
    quote: "VentureStack translated our complex SaaS pipeline architecture into an interface that feels fast and responsive. Working with Afraz was incredibly efficient.",
    author: "Elena Rostov",
    title: "Chief Product Officer, ApexFlow"
  },
  {
    quote: "The custom admin console delivered by this team has elevated our management workflows. Clean coding patterns make expanding the interface simple.",
    author: "Marcus Chen",
    title: "VP of Engineering, VeloTech Systems"
  },
  {
    quote: "Outstanding performance optimization and absolute layout accuracy. Our landing page conversion spiked immediately after deployment.",
    author: "Sarah Jenkins",
    title: "Founder, Zenith AI"
  }
];

const TestimonialsSection = () => (
  <section className="py-24 border-t border-zinc-900 bg-zinc-950/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Badge>Verified Collaborations</Badge>
        <h2 className="text-3xl font-extrabold tracking-tight text-white mt-4">Partner Feedback</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <GlassCard key={idx} className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-5xl font-serif text-emerald-500/20 leading-[0] block mb-4">“</span>
              <p className="text-sm text-zinc-300 italic leading-relaxed mb-6">{t.quote}</p>
            </div>
            <div className="border-t border-zinc-800/80 pt-4 mt-auto">
              <p className="text-sm font-bold text-white">{t.author}</p>
              <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{t.title}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const AppContent = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300 antialiased font-sans">
      <Navigation />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/CaseStudy" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}