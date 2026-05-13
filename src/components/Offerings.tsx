import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { offeringData } from '../data/offerings';

const Offerings = () => {
  const [active, setActive] = useState('title-insurance');

  useEffect(() => {
    const handleSetActive = (e: any) => {
      if (e.detail && e.detail.id) {
        setActive(e.detail.id);
        const section = document.getElementById('offerings');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('setActiveOffering', handleSetActive);
    return () => window.removeEventListener('setActiveOffering', handleSetActive);
  }, []);

  const data = offeringData.find(o => o.id === active)!;

  return (
    <section id="offerings" className="bg-white py-[80px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">OUR SOLUTIONS & OFFERINGS</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            Eight Products. <span className="text-primary-blue">Complete Transaction Certainty.</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[760px] mx-auto font-normal">
            From IRDAI-aligned insurance to RBI-compliant escrow — we’ve built the trust infrastructure for India’s property market.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* SIDEBAR */}
          <div className="w-full lg:w-[30%] space-y-2 sticky top-24 flex lg:flex-col pb-4 lg:pb-0 scrollbar-hide gap-2 lg:gap-0">
            {offeringData.map((o) => (
              <button
                key={o.id}
                onClick={() => setActive(o.id)}
                className={`flex items-center justify-between w-full min-w-[200px] lg:min-w-0 px-6 py-4 rounded-xl text-left transition-all duration-200 border ${
                  active === o.id 
                    ? 'bg-primary-blue text-white border-primary-blue shadow-lg' 
                    : 'bg-white border-[#E2E8F0] text-[#1a1a2e] hover:bg-blue-light hover:border-primary-blue/30'
                }`}
              >
                <span className="text-[15px] font-semibold">{o.sidebarLabel}</span>
                {active === o.id && <ArrowRight size={16} className="text-white" />}
              </button>
            ))}
          </div>

          {/* DETAIL PANEL */}
          <div className="w-full lg:w-[70%] bg-[#F5F7FA] border border-[#E2E8F0] rounded-[32px] p-6 lg:p-10 shadow-sm min-h-[700px] relative">
            <Link 
              to={`/offerings/${active}`}
              className="absolute top-8 right-8 z-10 bg-white/80 backdrop-blur p-3 rounded-full border border-navy-900/10 hover:border-primary-blue hover:text-primary-blue transition-all group shadow-sm hidden md:flex items-center gap-2 px-5"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider">View Full Product Page</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 pb-8 border-b border-navy-900/10">
                  <div className="max-w-xl">
                    <h3 className="text-[24px] font-semibold text-[#0a0a1a] leading-[1.4] mb-4">{data.title}</h3>
                    <p className="text-[15px] text-[#4a4a6a] leading-[1.8] font-normal italic">"{data.definition}"</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-primary-blue/10 shadow-sm shrink-0 w-full md:w-auto">
                    <div className="text-[11px] font-bold text-[#185FA5] tracking-[1.5px] uppercase mb-3">KEY BENEFITS</div>
                    <ul className="space-y-2">
                      {data.benefits.map((b, i) => (
                        <li key={i} className="flex gap-2 text-[13px] font-normal text-[#1a1a2e] leading-[1.7]">
                          <CheckCircle2 size={14} className="text-primary-blue shrink-0 mt-0.5" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* COVERAGE */}
                  <div>
                    <h4 className="text-[11px] font-bold text-[#185FA5] tracking-[1.5px] uppercase mb-6 flex items-center gap-2">
                      <ShieldCheck size={16} /> WHAT IT COVERS
                    </h4>
                    <div className="space-y-4">
                      {data.coverage.map((c, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-navy-900/5 hover:border-primary-blue/20 transition-all">
                          <div className="text-[13px] font-bold text-[#0a0a1a] mb-1">{c.item}</div>
                          <p className="text-[11px] text-[#4a4a6a] leading-snug">{c.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PRICING TIERS */}
                  <div>
                    <h4 className="text-[11px] font-bold text-[#185FA5] tracking-[1.5px] uppercase mb-6 flex items-center gap-2">
                      <ArrowRight size={16} className="rotate-[-45deg]" /> PRICING & TIERS
                    </h4>
                    <div className="space-y-3">
                      {data.pricing.map((p, i) => (
                        <div key={i} className="bg-navy-900 text-white p-4 rounded-xl flex justify-between items-center group">
                          <div>
                            <div className="text-[13px] font-bold">{p.tier}</div>
                            {p.bestFor && <div className="text-[11px] text-white/50">{p.bestFor}</div>}
                          </div>
                          <div className="text-right">
                            <div className="text-[22px] font-bold text-primary-blue leading-tight">{p.premium}</div>
                            {p.cover && <div className="text-[9px] text-white/40 uppercase tracking-widest">Cover: {p.cover}</div>}
                          </div>
                        </div>
                      ))}
                    </div>

                    {data.exclusions && (
                      <div className="mt-8 bg-red-50 p-4 rounded-xl border border-red-100">
                        <h5 className="text-[11px] font-bold text-red-600 tracking-[1.5px] uppercase mb-2">NOT COVERED</h5>
                        <ul className="grid grid-cols-1 gap-1">
                          {data.exclusions.map((ex, i) => (
                            <li key={i} className="text-[11px] text-red-800 flex gap-2">
                              <span className="opacity-50">•</span> {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* USE CASE */}
                <div className="bg-primary-blue text-white rounded-[24px] p-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.15),transparent_50%)]" />
                  <div className="relative z-10">
                    <h4 className="text-[11px] font-bold text-white/50 tracking-[1.5px] uppercase mb-4 flex items-center gap-2">
                      <HelpCircle size={14} /> REAL-WORLD USE CASE
                    </h4>
                    <div className="text-[24px] font-semibold mb-3 leading-[1.4]">{data.useCase.title}</div>
                    <p className="text-[15px] leading-[1.8] text-white/90 italic font-normal">
                      "{data.useCase.desc}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
