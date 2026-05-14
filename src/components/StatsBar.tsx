import React from 'react';
import { motion } from 'framer-motion';

const StatsBar = () => {
  const stats = [
    { target: '5M', label: 'Property Records Analyzed' },
    { target: '20', label: 'Major Indian Cities' },
    { target: '50+', label: 'Banking Partners' },
    { target: '200+', label: 'Developer Projects' },
    { target: '₹1.5T', label: 'Risk Intelligence Processed' }
  ];

  return (
    <div className="bg-[#0a0a1a] py-16 px-[5%] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-4 text-center relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <span className="text-[42px] md:text-[56px] font-[800] text-primary-blue leading-none tracking-tighter">
              {stat.target}
            </span>
            <span className="text-[12px] font-[600] text-white/50 uppercase tracking-[2px]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default StatsBar;
