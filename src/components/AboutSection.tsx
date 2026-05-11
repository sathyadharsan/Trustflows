import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { n: '5M+', t: 'Records Analyzed' },
    { n: '20', t: 'Cities Covered' },
    { n: '50+', t: 'Bank Partners' },
    { n: '200+', t: 'Developer Projects' },
    { n: '₹1.5T', t: 'Protected Value' }
  ];

  return (
    <section id="about" className="bg-[#F5F7FA] py-[100px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">WHO WE ARE</div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-navy-900 max-w-4xl mx-auto">
            India's End-to-End Property Trust, <br />
            <span className="text-primary-blue">Protection & Transaction Infrastructure</span>
          </h2>
          <p className="text-[16px] text-[#4A5568] leading-relaxed max-w-[620px] mx-auto font-medium">
            For Every Property Type. Across India's Top 20 Cities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white border border-navy-900/5 rounded-[32px] p-10 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6 border-l-4 border-primary-blue pl-4 uppercase tracking-tight">Our Mission</h3>
            <p className="text-[#4A5568] leading-relaxed text-[17px] font-bold">
              To eliminate property fraud in India through AI-powered risk intelligence, IRDAI-backed insurance, and escrow infrastructure — every property, every city.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white border border-navy-900/5 rounded-[32px] p-10 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6 border-l-4 border-primary-blue pl-4 uppercase tracking-tight">Our Vision</h3>
            <p className="text-[#4A5568] leading-relaxed text-[17px] font-bold">
              A future where every Indian transacts with complete confidence and zero uncertainty — from ₹30L flat to ₹50Cr tower.
            </p>
          </motion.div>
        </div>

        <div className="bg-navy-900 border border-primary-blue/20 rounded-[40px] p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,102,255,0.1),transparent_70%)]" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center relative z-10">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="font-accent text-5xl text-primary-blue mb-2">{s.n}</div>
                <div className="text-[11px] text-white/40 uppercase tracking-widest font-black leading-tight">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
