import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-[5%] pt-[120px] pb-[80px] overflow-hidden bg-navy-900">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(201,168,76,0.08)_0%,transparent_70%),radial-gradient(ellipse_60%_80%_at_10%_80%,rgba(22,32,64,0.9)_0%,transparent_60%)]" />
      
      {/* Hero Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at 60% 40%, black 30%, transparent 70%)'
        }} 
      />

      <div className="relative z-10 max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-7 text-[12px] text-gold-400 font-medium tracking-[1px] uppercase">
            <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
            India's #1 Property Trust Platform
          </div>

          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-bold leading-[1.15] mb-6 text-white">
            Trust Every Property<br />
            Transaction – <span className="text-gold-400">₹30L Flat</span><br />
            to <span className="text-gold-400">₹50Cr Tower.</span>
          </h1>

          <p className="text-[17px] text-white/70 leading-[1.7] mb-8 max-w-[580px]">
            India's First AI-Powered Platform for Title Insurance, Property Insurance, Escrow & Risk Intelligence — Built for 20 Major Cities & Every Property Segment.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {['Residential Flats & Villas', 'Freehold Plots & Layouts', 'Commercial & Warehouses', 'Developer Projects'].map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-[13px] text-white/70 bg-white/10 border border-gold-500/20 rounded-md px-3.5 py-2">
                <span className="text-gold-400 text-sm">✦</span>
                {feat}
              </div>
            ))}
          </div>

          <p className="font-serif italic text-base text-gold-400 mb-10">
            "One platform. One trust score. One insurance policy. Zero uncertainty."
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-1.5">
              <button className="relative overflow-hidden group bg-gradient-to-br from-gold-500 to-gold-400 text-navy-900 px-8 py-4 rounded-xl font-sans font-bold text-[15px] transition-all hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(201,168,76,0.4)]">
                <span className="relative z-10">Get Free AI Property Risk Report</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <p className="text-[11px] text-white/30 text-center">Select your city & property type. Instant analysis.</p>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <button className="bg-transparent text-gold-400 border-[1.5px] border-gold-600 px-8 py-4 rounded-xl font-sans font-semibold text-[15px] transition-all hover:bg-gold-400/10 hover:translate-y-[-2px]">
                Schedule City Consultation
              </button>
              <p className="text-[11px] text-white/30 text-center">Talk to our local risk advisors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
