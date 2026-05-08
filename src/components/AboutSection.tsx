import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const diffCards = [
    { icon: '🧠', title: 'Segment-Specific AI Models', desc: 'Separate algorithms for flats, plots, commercial, layouts — because risks are different' },
    { icon: '🏙️', title: 'City-Trained Risk Engines', desc: 'Mumbai model knows SRA. Pune knows PMRDA. Kolkata knows bargee. 20 city-specific engines.' },
    { icon: '🛡️', title: 'Universal Title Insurance', desc: 'IRDAI-aligned. Works across all segments — from ₹25L flat to ₹50Cr commercial tower.' },
    { icon: '💰', title: 'Milestone Escrow', desc: 'Customizable for under-construction, resale, or bulk deals. RERA & RBI compliant.' },
    { icon: '⚖️', title: 'Legal Defense Coverage', desc: 'We fight for you if a dispute arises after purchase. Full legal support.' }
  ];

  const stats = [
    { n: '5M+', t: 'Property Records Analyzed' },
    { n: '20', t: 'Major Cities Covered' },
    { n: '50+', t: 'Banking Partners' },
    { n: '200+', t: 'Developer Projects' },
    { n: '₹1000Cr+', t: 'Risk Value Protected' }
  ];

  const stakeholders = [
    { icon: '👨‍👩‍👧', name: 'Homebuyers' },
    { icon: '🌍', name: 'NRIs' },
    { icon: '🏦', name: 'Banks & NBFCs' },
    { icon: '🏗️', name: 'Developers & Builders' },
    { icon: '💼', name: 'Property Investors' },
    { icon: '🏢', name: 'Institutional Buyers' }
  ];

  const compliance = [
    { title: 'IRDAI-Aligned Title Insurance', desc: 'For every property type' },
    { title: 'Digital Escrow Infrastructure', desc: 'RERA & RBI compliant' },
    { title: 'State Land Records Integration', desc: 'DILRMP, RERA, Court Intelligence' },
    { title: 'AI-Powered Risk Intelligence', desc: 'Trained on 5M+ Indian property records' }
  ];

  return (
    <section id="about" className="bg-navy-800 py-[100px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gold-500 mb-4">WHO WE ARE</div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-white max-w-4xl mx-auto">
            India's End-to-End Property Trust, Protection & Transaction Infrastructure Platform
          </h2>
          <p className="text-[16px] text-white/70 leading-relaxed max-w-[620px] mx-auto">
            For Every Property Type. Across India's Top 20 Cities.
          </p>
        </div>

        {/* BLOCK 1 — WHAT WE DO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-bold text-white mb-6">One Platform. Every Property.</h3>
            <p className="text-white/70 leading-relaxed mb-8 text-[17px]">
              TrustFlows helps homebuyers, investors, developers, banks, NRIs, and businesses verify, insure, and securely transact across every property type in India.
            </p>
            <div className="flex flex-wrap gap-3">
              {['🏘️ Residential', '🌾 Land & Plots', '🏪 Commercial', '🏗️ Developer Projects'].map((b) => (
                <span key={b} className="bg-white/5 border border-gold-500/20 px-4 py-2 rounded-lg text-sm text-white/80 transition-colors hover:border-gold-500/50">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-bold text-white mb-6">One Trust Score. Zero Uncertainty.</h3>
            <p className="text-white/70 leading-relaxed mb-8 text-[17px]">
              We don't just do title search. We deliver segment-specific, city-trained risk intelligence with insurance-backed protection and escrow-secured payments.
            </p>
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/5 border border-gold-500/40 rounded-2xl p-6 text-center">
              <p className="font-serif italic text-gold-400 text-lg leading-relaxed">
                "One platform. One trust score. <br /> One insurance policy. Zero uncertainty."
              </p>
            </div>
          </motion.div>
        </div>

        {/* BLOCK 2 — 5 WHAT MAKES US DIFFERENT */}
        <div className="mb-24">
          <h3 className="font-serif text-3xl font-bold text-white text-center mb-12">The TrustFlows Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diffCards.map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-gold-500/20 rounded-2xl p-8 transition-all hover:border-gold-500/50 hover:bg-white/[0.07]">
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h4 className="font-serif text-lg font-bold text-white mb-3">{card.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 3 — TRUST NUMBERS */}
        <div className="bg-navy-900 border border-gold-500/20 rounded-[32px] p-12 mb-24">
          <h3 className="font-serif text-2xl font-bold text-white text-center mb-12">Trusted Across India</h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="font-accent text-4xl text-gold-400 mb-2">{s.n}</div>
                <div className="text-[12px] text-white/50 uppercase tracking-wider">{s.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 4 — WHO WE SERVE */}
        <div className="text-center mb-24">
          <h3 className="font-serif text-2xl font-bold text-white mb-10">Built For Every Stakeholder</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {stakeholders.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl flex items-center gap-3 transition-all hover:border-gold-500/30 hover:bg-white/10">
                <span className="text-xl">{s.icon}</span>
                <span className="text-sm font-medium text-white/90">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 5 — COMPLIANCE */}
        <div className="">
          <h3 className="font-serif text-2xl font-bold text-white text-center mb-12">Regulated. Compliant. Trusted.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliance.map((c, i) => (
              <div key={i} className="bg-gold-500/5 border border-gold-500/20 rounded-2xl p-6 transition-all hover:border-gold-500/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gold-500">✅</span>
                  <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">{c.title}</h4>
                </div>
                <p className="text-[13px] text-white/60 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
