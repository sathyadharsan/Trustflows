import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const propertyTypes = [
    {
      label: 'Residential',
      icon: '🏢',
      detail: 'Flats (new & resale) | Independent houses | Villas'
    },
    {
      label: 'Land',
      icon: '🌾',
      detail: 'Freehold plots | Freehold layouts | Agriculture-to-NA converted land'
    },
    {
      label: 'Commercial',
      icon: '🏪',
      detail: 'Office spaces | Retail shops | Warehouses | Co-working spaces'
    },
    {
      label: 'Bulk & Portfolio',
      icon: '🏗️',
      detail: 'Developer projects | Institutional investments'
    }
  ];

  const trustChips = [
    { text: 'AI-Powered Risk Intelligence', sub: 'Trained on 5M+ Indian property records' },
    { text: 'IRDAI-Aligned Title Insurance', sub: 'For every property type' },
    { text: 'Digital Escrow Infrastructure', sub: 'RERA & RBI compliant' },
    { text: 'Integrated with State Land Records', sub: 'DILRMP, RERA, Court Intelligence' },
    { text: 'Live in 20 Cities', sub: '50+ banking partners, 200+ developer projects' },
  ];

  return (
    <section id="hero" className="relative pt-[110px] pb-[60px] px-[5%] overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[120px] -mr-[300px] -mt-[200px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
          <span className="text-[11px] font-bold text-primary-blue tracking-[1.5px] uppercase">India's End-to-End Property Trust Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-[48px] font-bold text-[#0a0a1a] leading-[1.2] mb-8"
        >
          Trust Every Property Transaction – <br />
          <span className="text-primary-blue">From ₹30L Flat to ₹50Cr Tower.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[15px] text-[#1a1a2e] max-w-3xl mx-auto mb-10 font-normal leading-[1.8]"
        >
          India's First AI-Powered Integrated Platform for Title Insurance, Property Insurance, Escrow & Risk Intelligence – Built for 20 Major Cities & Every Property Segment.
        </motion.p>

        {/* Block 1 — Property type grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-10 text-left"
        >
          {propertyTypes.map((item, i) => (
            <div key={i} className="bg-[#F5F7FA] rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[20px]">{item.icon}</span>
                <h3 className="text-[15px] font-bold text-primary-blue">{item.label}</h3>
              </div>
              <p className="text-[13px] text-[#718096] font-medium leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-[14px] text-[#4a4a6a] text-center mb-10 font-normal"
        >
          One platform. One trust score. One insurance policy. Zero uncertainty.
        </motion.p>

        {/* CTA Buttons — unchanged */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <button className="bg-primary-blue text-white px-10 py-5 rounded-xl font-semibold text-[15px] tracking-[0.3px] transition-all hover:bg-blue-dark hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,102,255,0.3)]">
            Get Free Property Risk Report
          </button>
          <button className="bg-white text-[#1a1a2e] border-[2px] border-[#1a1a2e]/10 px-10 py-5 rounded-xl font-semibold text-[15px] tracking-[0.3px] transition-all hover:bg-navy-900 hover:text-white hover:translate-y-[-4px]">
            Schedule City-Specific Consultation
          </button>
        </div>

        {/* Block 2 — Trust chips bar (replaces old trust stats) */}
        <div className="border-t border-navy-900/5 pt-10">
          <div className="flex flex-wrap justify-center gap-3">
            {trustChips.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-[14px] py-[8px] rounded-[20px] text-[13px] font-medium"
                style={{ backgroundColor: '#E6F1FB', color: '#185FA5' }}
              >
                <span>✅</span>
                <span>
                  <span className="font-semibold">{chip.text}</span>
                  {' – '}
                  <span className="font-normal opacity-80">{chip.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
