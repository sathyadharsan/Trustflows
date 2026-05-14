import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600',
    badge: 'FOR REAL ESTATE DEVELOPERS',
    title: 'Build With Confidence.\nSell With Certainty.',
    desc: 'Integrated frameworks for construction timelines, title verification, and post-handover structural integrity.',
    cta: 'Request Developer Framework'
  },
  {
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600',
    badge: 'FOR LENDERS & INSTITUTIONS',
    title: 'Protect Your Collateral.\nReduce Portfolio Risk.',
    desc: 'Automated portfolio coordination and collateral safeguards for HFCs, Banks, and NBFC lenders.',
    cta: 'View Lender Solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600',
    badge: 'FOR HOME BUYERS & OWNERS',
    title: 'Protect Your Biggest Investment.\nFrom Day One to Legacy.',
    desc: 'Location-based risk assessment and lifecycle protection for first-time buyers and luxury homeowners.',
    cta: 'Get Homeowner Plan'
  },
  {
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1600',
    badge: 'FOR NRI & REMOTE OWNERS',
    title: 'Own in India.\nManage From Anywhere.',
    desc: 'Remote monitoring, authorization integrity, and tenant continuity protection for global investors.',
    cta: 'Explore NRI Shield'
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    badge: 'FOR INSTITUTIONAL ASSETS',
    title: 'Protect Assets.\nEnsure Continuity.',
    desc: 'Portfolio-wide master frameworks and ESG enablement for REITs and commercial asset managers.',
    cta: 'Institutional Overview'
  }
];

const InsuranceHero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-navy-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[6000ms] scale-105"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Refined Overlay - more transparent in center */}
          <div className="absolute inset-0 bg-navy-900/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/80" />

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center pt-20 text-white">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <div className="w-8 h-px bg-primary-blue" />
                <span className="text-[12px] font-bold text-primary-blue tracking-[3px] uppercase">
                  {slides[current].badge}
                </span>
                <div className="w-8 h-px bg-primary-blue" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[44px] md:text-[72px] font-[900] !text-white leading-[1.1] mb-8 whitespace-pre-line tracking-tight"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-[18px] md:text-[20px] !text-white/80 leading-[1.8] mb-12 max-w-2xl mx-auto"
              >
                {slides[current].desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex justify-center"
              >
                <button className="bg-primary-blue text-white px-12 py-5 rounded-2xl font-bold text-[18px] hover:bg-blue-600 transition-all shadow-xl shadow-primary-blue/30 flex items-center gap-2 group">
                  {slides[current].cta} 
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls - Positioned at bottom center */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-6">
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i ? 'bg-primary-blue w-10' : 'bg-white/20 hover:bg-white/40 w-4'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 right-[8%] z-30 hidden md:flex gap-3">
        <button onClick={prevSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Trust Badge Floating */}
      <div className="absolute top-32 right-[8%] hidden lg:block z-20">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[32px] flex flex-col items-center gap-3">
          <ShieldCheck size={32} className="text-primary-blue" />
          <div className="text-center">
            <div className="text-[11px] font-bold text-white uppercase tracking-[1px]">IRDAI Aligned</div>
            <div className="text-[9px] text-white/40 font-medium">Regulatory Framework</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceHero;
