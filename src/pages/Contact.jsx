import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { GlassCard } from '../components/GlassCard';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'SaaS Development', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'SaaS Development', message: '' });
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pt-24 pb-16 min-h-screen text-zinc-100 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge>Initiate Project Workspace</Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">Connect with VentureStack</h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Ready to build? Outline your application requirements or request an architecture audit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6">
              <h3 className="text-lg font-bold text-white mb-6">Direct Channels</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase">Primary Email</p>
                    <a href="mailto:info@venturestack.co" className="text-xs sm:text-sm text-white font-mono hover:text-emerald-400 transition-colors">
                      afrazjadoon7@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <link className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase">Professional Network</p>
                    <a href="https://www.linkedin.com/in/afraz-jadoon-5707b3340/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white font-mono hover:text-emerald-400 transition-colors">
                      https://www.linkedin.com/in/afraz-jadoon-5707b3340/
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <a className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase">Source Repositories</p>
                    <a href="https://github.com/KHAN13-BOT" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white font-mono hover:text-emerald-400 transition-colors">
                      https://github.com/KHAN13-BOT
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h4 className="text-sm font-bold text-white mb-2">Our SLA Agreement</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Project inquiries receive dedicated developer reviews and diagnostic breakdowns within 24 working hours.
              </p>
            </GlassCard>
          </div>

          <div className="lg:col-span-7">
            <GlassCard className="p-8">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Your Name</label>
                        <input 
                          type="text" 
                          required 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Jane Doe" 
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-zinc-650"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
                        <input 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="jane@company.com" 
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-zinc-650"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Scope Target</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors"
                      >
                        <option value="SaaS Development">SaaS Application Development</option>
                        <option value="CRM Architecture">CRM Custom Architecture</option>
                        <option value="Figma Translation">UI/UX Figma-to-Code Implementation</option>
                        <option value="Consulting">Technical Architecture Audit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Architecture Requirements</label>
                      <textarea 
                        rows="5" 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Detail user scope, performance objectives, layout complexity..." 
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-emerald-500/50 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-zinc-650 resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold tracking-wide shadow-[0_4px_30px_rgba(16,185,129,0.2)] transition-all flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message Request
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Request Processed</h3>
                    <p className="text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                      Thank you. Your message has been routed to our frontend engineering team. We will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors underline"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>

        </div>
      </div>
    </motion.div>
  );
};
export default Contact;