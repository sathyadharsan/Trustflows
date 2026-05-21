import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SlideData {
  badge: string;
  title: string;
  description: string;
  image?: string;
  ctaText?: string;
  type?: string;
}

interface DetailHeroSliderProps {
  slides: SlideData[];
  backLink: string;
  backText: string;
}

const DetailHeroSlider: React.FC<DetailHeroSliderProps> = ({ slides, backLink, backText }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-black font-['Inter'] pt-24">

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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[4000ms] scale-105"
            style={{ backgroundImage: `url(${slides[current].image || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600"})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Content Wrapper */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20 text-white">
            
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-24 left-[5%] z-30"
            >
              <Link 
                to={backLink} 
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-all text-[11px] font-bold tracking-[2px] uppercase bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10"
              >
                <ArrowLeft size={14} /> {backText}
              </Link>
            </motion.div>

            {/* Badge & Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-5xl"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary-blue" />
                <span className="text-[12px] font-bold text-primary-blue tracking-[3px] uppercase">{slides[current].badge}</span>
                <div className="w-8 h-px bg-primary-blue" />
              </div>
              <h1 className="text-[44px] md:text-[76px] font-[900] !text-white leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
                {slides[current].title}
              </h1>
            </motion.div>

            {/* Description & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="text-[18px] md:text-[22px] font-medium !text-white/80 leading-[1.7] mb-12">
                {slides[current].description}
              </p>

              <div className="flex flex-wrap justify-center gap-5">
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openRiskCalculator'))}
                  className="bg-primary-blue text-white px-12 py-5 rounded-2xl font-bold text-[17px] transition-all hover:bg-blue-600 hover:shadow-2xl hover:shadow-primary-blue/30 active:scale-95 flex items-center gap-2 group"
                >
                  {slides[current].ctaText || 'Get Started Now'}
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-[17px] transition-all hover:bg-white/10 active:scale-95">
                  Talk to Advisor
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Side Controls */}
      <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all hidden md:block">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all hidden md:block">
        <ChevronRight size={24} />
      </button>

      {/* Bottom Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
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
    </section>
  );
};

export default DetailHeroSlider;
