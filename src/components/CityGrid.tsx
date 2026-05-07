import React from 'react';
import { motion } from 'framer-motion';

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad',
  'Pune', 'Kolkata', 'Ahmedabad', 'Surat', 'Lucknow',
  'Jaipur', 'Kochi', 'Chandigarh', 'Bhopal', 'Nagpur',
  'Coimbatore', 'Visakhapatnam', 'Indore', 'Vadodara', 'Noida'
];

const CityGrid = () => {
  return (
    <section id="cities" className="bg-navy-800 py-[100px] px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gold-500 mb-4">
            Pan-India Coverage
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-white">
            Live in <span className="text-gold-400">20 Major Indian Cities</span>
          </h2>
          <p className="text-[16px] text-white/70 leading-relaxed max-w-[620px] mx-auto">
            City-trained risk engines. Local expertise. National standards.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-gold-500/20 rounded-xl py-3.5 px-3 text-center text-[13px] font-medium text-white/70 transition-all hover:border-gold-500/40 hover:text-gold-400 hover:bg-gold-500/5 cursor-default"
            >
              {city}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityGrid;
