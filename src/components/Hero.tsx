import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600',
    badge: "● INDIA'S END-TO-END PROPERTY TRUST PLATFORM",
    subline: "One Platform. Eight Risk Solutions. Complete Transaction Certainty.",
    headline: "Trust Every Property Transaction – \nResale Flat to Commercial Tower.",
    body: "India's First AI-Powered Integrated Platform for\nTitle Insurance, Property Insurance, Escrow & Risk Intelligence.",
    primaryCTA: "Get Free Property Risk Report →",
    secondaryCTA: "Explore All Solutions"
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600',
    badge: "● AI-POWERED RISK INTELLIGENCE",
    subline: "Segment-Specific. City-Trained.",
    headline: "23+ Checks Per Property.\n99.1% Accuracy.",
    body: "Separate AI models for flats, plots, commercial — \ntrained on 5M+ Indian records for 20 major cities.",
    primaryCTA: "See How It Works →",
    secondaryCTA: "View Sample Report"
  },
  {
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600',
    badge: "● TITLE INSURANCE & ESCROW",
    subline: "Zero Payment Fraud. Zero Title Risk.",
    headline: "Your Property Savings.\nCompletely Protected.",
    body: "RBI-compliant escrow + IRDAI title insurance.\nMoney moves only after documents are verified.",
    primaryCTA: "Protect My Property →",
    secondaryCTA: "Learn About Escrow"
  },
  {
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600',
    badge: "● LIVE IN 20 MAJOR CITIES",
    subline: "Mumbai. Delhi. Bangalore. Chennai. +16 More.",
    headline: "Every City Has\nIts Own Risk Engine.",
    body: "Mumbai AI knows SRA. Bangalore AI knows B-Khata. \nChennai AI knows Patta/Chitta complexities.",
    primaryCTA: "Select My City →",
    secondaryCTA: "View All 20 Cities"
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600',
    badge: "● FOR NRIs & REMOTE INVESTORS",
    subline: "Own Property. Remotely. Safely.",
    headline: "Close Your India Deal\nFrom Anywhere in the World.",
    body: "Digital Owner Insurance + NRI Escrow + \nRemote title verification. 100% secure.",
    primaryCTA: "NRI Property Protection →",
    secondaryCTA: "How It Works for NRIs"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

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
          <div className="absolute inset-0 bg-black/65" />

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-[5%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-block px-4 py-2 rounded-full border border-white/30 mb-4">
                <span className="text-[11px] font-medium text-white tracking-[2px] uppercase">{slides[current].badge}</span>
              </div>
              <div className="text-[16px] font-medium text-[#60A5FA] mb-2">{slides[current].subline}</div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[40px] md:text-[64px] font-[800] !text-white leading-[1.1] mb-8 whitespace-pre-line tracking-tight"
            >
              {slides[current].headline}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-[18px] font-normal !text-white/80 leading-[1.8] mb-10 whitespace-pre-line">
                {slides[current].body}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#185FA5] text-white px-8 py-[14px] rounded-lg font-semibold text-[15px] transition-all hover:bg-blue-700 hover:scale-105 active:scale-95">
                  {slides[current].primaryCTA}
                </button>
                <button className="bg-transparent text-white border-1.5 border-white px-8 py-[14px] rounded-lg font-semibold text-[15px] transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
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
