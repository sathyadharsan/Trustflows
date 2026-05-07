import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Problem = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const risks = [
    { segment: 'Resale Flat', risk: 'Undisclosed society dues, pending tax', loss: '₹2–10 Lakhs' },
    { segment: 'Freehold Plot', risk: 'Fake mother deed, Wakf board claim', loss: '₹15L – ₹2 Crore' },
    { segment: 'Commercial Property', risk: 'Illegal tenancy, pending GST/octroi', loss: '₹50L – ₹10 Crore' },
    { segment: 'Developer Flat', risk: 'RERA violation, builder fund diversion', loss: '₹10–50 Lakhs' },
    { segment: 'Freehold Layout', risk: 'Unapproved plan, missing DC conversion', loss: '₹25L – ₹5 Crore', extra: true },
    { segment: 'Independent House', risk: 'Unauthorized floors, easement disputes', loss: '₹20L – ₹1 Crore', extra: true },
  ];

  const visibleRisks = isExpanded ? risks : risks.filter(r => !r.extra);

  const cities = [
    'Mumbai SRA', 'Bangalore A/B Khata', 'Chennai Patta/Chitta', 
    'Hyderabad Wakf Board', 'Delhi DDDA Colonies'
  ];

  return (
    <section id="problem" className="bg-navy-900 py-[100px] px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gold-500 mb-4">
            The Hard Truth
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-white">
            India's Property Market is<br />
            Not One Market. It's <span className="text-gold-400">20 Risk Ecosystems.</span>
          </h2>
          <p className="text-[16px] text-white/70 leading-relaxed max-w-[620px] mb-12">
            From Mumbai's SRA flats to Delhi's DDDA colonies, from Bangalore's Khata confusions to Chennai's Patta complexities — every city has unique trust gaps.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/30 rounded-2xl p-8 md:p-12 inline-block mb-14 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="block font-accent text-[clamp(48px,8vw,96px)] text-gold-400 leading-none mb-2"
          >
            ₹1.5 Lakh Crore+
          </motion.span>
          <div className="text-sm text-white/70">Annual loss due to property fraud & litigation in India</div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse mb-10 min-w-[600px]">
            <thead>
              <tr className="border-b border-gold-500/30">
                <th className="py-4 px-5 text-left text-[11px] font-bold tracking-[1.5px] uppercase text-gold-500">Property Segment</th>
                <th className="py-4 px-5 text-left text-[11px] font-bold tracking-[1.5px] uppercase text-gold-500">Top Risk</th>
                <th className="py-4 px-5 text-left text-[11px] font-bold tracking-[1.5px] uppercase text-gold-500">Typical Loss</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {visibleRisks.map((item, index) => (
                  <motion.tr 
                    key={item.segment}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="group border-b border-white/5 hover:bg-gold-500/5 transition-colors"
                  >
                    <td className="py-4 px-5 text-sm font-medium text-white">{item.segment}</td>
                    <td className="py-4 px-5 text-sm text-white/70">{item.risk}</td>
                    <td className="py-4 px-5 text-sm font-bold text-gold-400 whitespace-nowrap">{item.loss}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-transparent border border-gold-500/20 text-gold-400 px-6 py-2.5 rounded-lg text-sm font-sans transition-all hover:bg-gold-400/10"
        >
          {isExpanded ? 'Show less ↑' : 'See all 6 segments →'}
        </button>

        <div className="flex flex-wrap gap-2.5 mt-12">
          {cities.map((city) => (
            <div key={city} className="bg-gold-500/10 border border-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-[13px] font-medium transition-all hover:bg-gold-500/20 cursor-default">
              {city}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
