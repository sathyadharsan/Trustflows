import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-700 to-navy-900 border-t border-gold-500/20 py-[100px] px-[5%] text-center">
      {/* Decorative radial gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(201,168,76,0.08),transparent)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-[clamp(28px,5vw,56px)] font-bold mb-4 text-white"
        >
          Your Property. Your Life Savings.<br />
          <span className="text-gold-400">Don't Risk It.</span>
        </motion.h2>

        <p className="text-[17px] text-white/70 mb-11 max-w-[700px] mx-auto">
          Join thousands of homebuyers, NRIs & investors who protected their transactions with TrustFlows.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-gradient-to-br from-gold-500 to-gold-400 text-navy-900 px-10 py-4 rounded-xl font-sans font-bold text-[15px] transition-all hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(201,168,76,0.4)]">
            Get Free AI Risk Report
          </button>
          <button className="bg-transparent text-gold-400 border-[1.5px] border-gold-600 px-10 py-4 rounded-xl font-sans font-semibold text-[15px] transition-all hover:bg-gold-400/10 hover:translate-y-[-2px]">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
