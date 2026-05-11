import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  const ctas = [
    { label: 'For Homebuyers', text: 'Get property Trust Score before paying advance' },
    { label: 'For Investors', text: 'Insure commercial or land investment' },
    { label: 'For Developers', text: 'Offer TRUSTFLOWS-certified units — sell faster' },
    { label: 'For NRIs', text: 'Close remotely with escrow + insured title' },
  ];

  return (
    <section className="relative bg-[#0A0F1E] py-[80px] px-[5%] overflow-hidden text-center">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,102,255,0.15),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div 
          className="text-[48px] font-bold text-white mb-10 leading-[1.2] !text-white"
        >
          Don't Guess. <span className="text-primary-blue italic">TRUSTFLOWS.</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-12 text-left max-w-4xl mx-auto">
          {ctas.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-primary-blue text-xl mt-1">✅</span>
              <div>
                <span className="text-primary-blue/60 font-bold uppercase tracking-[1.5px] text-[11px] block mb-1">{item.label}</span>
                <p className="text-white text-[15px] font-normal leading-[1.8]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-primary-blue text-white px-10 py-5 rounded-xl font-semibold text-[15px] tracking-[0.3px] transition-all hover:bg-blue-dark hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,102,255,0.3)]">
            Get Your Free Property Risk Report
          </button>
          <button className="bg-transparent text-white border-[2px] border-white/20 px-10 py-5 rounded-xl font-semibold text-[15px] tracking-[0.3px] transition-all hover:bg-white/5 hover:translate-y-[-4px] hover:border-primary-blue/50">
            See Segment Sample Reports
          </button>
        </div>
        
        <p className="text-white/30 text-[11px] mt-12 uppercase tracking-[1.5px] font-bold">Takes 2 minutes • Select City & Segment</p>
      </div>
    </section>
  );
};

export default FinalCTA;
