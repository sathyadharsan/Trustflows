import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
    badge: "● ONE PLATFORM. COMPLETE PROPERTY PROTECTION. ZERO UNCERTAINTY.",
    subline: "India's First AI-Powered Integrated Insurance Framework",
    headline: "Protect Your Property Investment – \nFrom Title to Lifecycle.",
    body: "Integrated Insurance for Title, Property, Earthquake & Escrow. Built for 20 Major Cities & Every Property Segment – From ₹30L Flats to ₹50Cr Commercial Towers.",
    primaryCTA: "Get Free Property Risk Report",
    secondaryCTA: "Explore Insurance Solutions"
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    badge: "● ONE PLATFORM. ONE TRUST SCORE.",
    subline: "Zero Uncertainty. Zero Hidden Risk.",
    headline: "Universal Title Insurance.\nWorks Across All Segments.",
    body: "From ₹25L flats to ₹50Cr commercial assets, we deliver segment-specific risk intelligence with insurance-backed protection.",
    primaryCTA: "Get Your Trust Score",
    secondaryCTA: "Explore Insurance Plans"
  },
  {
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600',
    badge: "● DIGITAL ESCROW INFRASTRUCTURE",
    subline: "RERA & RBI Compliant Security.",
    headline: "Secure Your Payments.\nMilestone-Based Escrow.",
    body: "Customizable for under-construction, resale, or bulk deals. Money is released only after verified milestones or registration.",
    primaryCTA: "Secure Your Transaction",
    secondaryCTA: "View Escrow Workflows"
  },
  {
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600',
    badge: "● LIVE IN 20 MAJOR CITIES",
    subline: "Mumbai. Delhi. Bangalore. Chennai. +16 More.",
    headline: "City-Trained Risk Engines\nCatch Local Frauds.",
    body: "Mumbai model knows SRA, Pune model knows PMRDA, Bangalore model knows B-Khata. Deep local intelligence at scale.",
    primaryCTA: "Check Your City Risk",
    secondaryCTA: "See All 20 Cities"
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    badge: "● FOR NRIs & REMOTE INVESTORS",
    subline: "Own Property. Remotely. Safely.",
    headline: "Digital Owner Insurance.\nTotal Peace of Mind.",
    body: "Protects against rent default, squatter removal legal costs, and identity theft. The ultimate NRI property shield.",
    primaryCTA: "NRI Protection Plan",
    secondaryCTA: "Consult NRI Advisors"
  }
];


const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black font-['Inter']">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[4000ms] scale-110"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/80" />

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary-blue" />
                <span className="text-[12px] font-bold text-primary-blue tracking-[3px] uppercase">{slides[current].badge.replace('● ', '')}</span>
                <div className="w-8 h-px bg-primary-blue" />
              </div>
              <div className="text-[18px] md:text-[22px] font-bold !text-white mb-4 tracking-tight">{slides[current].subline}</div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[44px] md:text-[82px] font-[900] !text-white leading-[1.1] mb-10 whitespace-pre-line tracking-tight"
            >
              {slides[current].headline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="text-[18px] md:text-[22px] font-medium !text-white/80 leading-[1.7] mb-12">
                {slides[current].body}
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openRiskCalculator'))}
                  className="bg-primary-blue text-white px-12 py-5 rounded-2xl font-bold text-[18px] transition-all hover:bg-blue-600 hover:shadow-2xl hover:shadow-primary-blue/30 active:scale-95 flex items-center gap-2 group"
                >
                  {slides[current].primaryCTA}
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/insurance')}
                  className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-[18px] transition-all hover:bg-white/10 active:scale-95"
                >
                  {slides[current].secondaryCTA}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all hidden md:block">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all hidden md:block">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              current === i ? 'bg-primary-blue w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Bottom Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-[#0a1628] py-3.5 px-[5%] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-10 gap-y-2 text-white font-normal text-[13px]">
          <div className="flex items-center gap-2">AI-Powered Risk Intelligence</div>
          <div className="flex items-center gap-2">IRDAI-Aligned Title Insurance</div>
          <div className="flex items-center gap-2">Digital Escrow Infrastructure</div>
          <div className="flex items-center gap-2">Integrated with State Land Records</div>
          <div className="flex items-center gap-2">Live in 20 Cities</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
