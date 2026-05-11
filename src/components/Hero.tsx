import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const propertyBadges = [
    { label: 'Residential', sub: 'Flats (new & resale) | Independent houses | Villas', icon: '🏢' },
    { label: 'Land', sub: 'Freehold plots | Freehold layouts | Agriculture-to-NA', icon: '🌾' },
    { label: 'Commercial', sub: 'Office spaces | Retail shops | Warehouses', icon: '🏪' },
    { label: 'Bulk & Portfolio', sub: 'Developer projects | Institutional investments', icon: '🏗️' }
  ];

  const trustItems = [
    { text: 'AI-Powered Risk Intelligence', sub: 'Trained on 5M+ Indian property records', icon: '✅' },
    { text: 'IRDAI-Aligned Title Insurance', sub: 'For every property type', icon: '✅' },
    { text: 'Digital Escrow Infrastructure', sub: 'RERA & RBI compliant', icon: '✅' },
    { text: 'State Land Record Integration', sub: 'DILRMP, RERA, Court Intelligence', icon: '✅' },
    { text: 'Live in 20 Cities', sub: '50+ banking partners, 200+ developer projects', icon: '✅' }
  ];

  return (
    <section id="hero" className="relative pt-[140px] pb-[80px] px-[5%] overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-blue/5 rounded-full blur-[120px] -mr-[300px] -mt-[200px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/5 border border-primary-blue/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
          <span className="text-[12px] font-bold text-primary-blue tracking-wider uppercase">India's End-to-End Property Trust Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-[clamp(32px,5vw,64px)] font-bold text-navy-900 leading-[1.1] mb-8"
        >
          Trust Every Property Transaction – <br />
          <span className="text-primary-blue italic">From ₹30L Flat to ₹50Cr Tower.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[18px] text-[#4A5568] max-w-4xl mx-auto mb-10 font-bold leading-relaxed"
        >
          India’s First AI-Powered Integrated Platform for Title Insurance, Property Insurance, Escrow & Risk Intelligence – Built for 20 Major Cities & Every Property Segment.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-[15px] text-navy-900/60 max-w-3xl mx-auto mb-14 font-medium"
        >
          TRUSTFLOWS helps homebuyers, investors, developers, banks, NRIs, and businesses verify, insure, and securely transact. One platform. One trust score. One insurance policy. Zero uncertainty.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 text-left">
          {propertyBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-[#F5F7FA] border border-navy-900/5 rounded-2xl p-6 transition-all hover:border-primary-blue/30 hover:shadow-xl group"
            >
              <div className="flex items-center gap-3 text-primary-blue font-bold text-[15px] mb-2">
                <span className="text-xl">{badge.icon}</span> {badge.label}
              </div>
              <p className="text-[12px] text-[#718096] leading-snug font-medium">{badge.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-24">
          <button className="bg-primary-blue text-white px-10 py-5 rounded-xl font-bold text-[16px] transition-all hover:bg-blue-dark hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,102,255,0.3)]">
            Get Free Property Risk Report
          </button>
          <button className="bg-white text-navy-900 border-[2px] border-navy-900/10 px-10 py-5 rounded-xl font-bold text-[16px] transition-all hover:bg-navy-900 hover:text-white hover:translate-y-[-4px]">
            Schedule City-Specific Consultation
          </button>
        </div>

        <div className="border-t border-navy-900/5 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
            {trustItems.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-primary-blue text-lg mb-2">{item.icon}</div>
                <div className="text-[13px] font-bold text-navy-900 mb-1 leading-tight">{item.text}</div>
                <div className="text-[10px] text-[#718096] uppercase font-bold tracking-wider">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
