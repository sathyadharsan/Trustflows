import React from 'react';
import { motion } from 'framer-motion';

const Solution = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Segment-Specific AI',
      desc: 'Separate algorithms for each property type'
    },
    {
      icon: '🏙️',
      title: 'City-Trained Engines',
      desc: '20 city-specific risk models'
    },
    {
      icon: '🛡️',
      title: 'Title Insurance',
      desc: 'IRDAI-aligned. ₹25L flat to ₹50Cr commercial'
    },
    {
      icon: '💰',
      title: 'Milestone Escrow',
      desc: 'Funds released only on verified docs'
    },
    {
      icon: '⚖️',
      title: 'Legal Defense',
      desc: 'We fight for you if dispute arises'
    }
  ];

  return (
    <section id="solution" className="bg-navy-800 py-[100px] px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gold-500 mb-4">
            Why TrustFlows
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-white">
            One Platform. 20 Cities.<br />
            <span className="text-gold-400">Every Property Segment.</span>
          </h2>
          <p className="text-[16px] text-white/70 leading-relaxed max-w-[620px]">
            We don't just do "title search." We deliver segment-specific, city-trained risk intelligence with insurance-backed protection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white/5 backdrop-blur-md border border-gold-500/20 rounded-2xl p-8 transition-all hover:border-gold-500/50 hover:bg-white/[0.07] hover:-translate-y-1 cursor-default"
            >
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="font-serif text-[18px] font-semibold text-white mb-2.5 transition-colors group-hover:text-gold-400">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
