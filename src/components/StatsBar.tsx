import React from 'react';
import { motion } from 'framer-motion';

const StatsBar = () => {
  const stats = [
    { target: '5', label: 'Million+ Records Analyzed' },
    { target: '20', label: 'Cities Covered' },
    { target: '50', label: 'Banking Partners' },
    { target: '200', label: 'Developer Projects' },
    { target: '1000', label: 'Crore+ Risk Covered' }
  ];

  return (
    <div className="bg-navy-800 border-y border-gold-500/20 py-16 px-[5%]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-4 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-2"
          >
            <span className="font-accent text-[clamp(36px,4vw,56px)] text-gold-400 leading-none">
              {stat.target}+
            </span>
            <span className="text-[13px] text-white/70">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
