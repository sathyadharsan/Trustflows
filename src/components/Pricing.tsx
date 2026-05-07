import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      for: 'Resale Flat / House',
      price: '₹7,999',
      sub: '– ₹24,999',
      features: ['Society NOC Check', 'Encumbrance (30 years)', 'Property Tax Clearance', 'Illegal Construction Scan'],
      btn: 'Get Started'
    },
    {
      name: 'Professional',
      for: 'Plots & Layouts',
      price: '₹24,999',
      sub: '– ₹49,999',
      features: ['Mother Deed Trace (to 1920s)', 'Heir Validation & Succession', 'Wakf Board Overlap Scan', 'NA Conversion Order Check'],
      btn: 'Get Protected',
      popular: true
    },
    {
      name: 'Enterprise',
      for: 'Commercial Properties',
      price: '₹75,000',
      sub: '– ₹1,50,000',
      features: ['Full Commercial Due Diligence', 'Land Use Zone Verification', 'Tenant & Lessee Rights Search', 'Legal Defense Coverage'],
      btn: 'Contact Us'
    }
  ];

  return (
    <section id="pricing" className="bg-navy-900 py-[100px] px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gold-500 mb-4">
            Simple Pricing
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-white">
            Protect Crores.<br />
            <span className="text-gold-400">Pay Thousands.</span>
          </h2>
          <p className="text-[16px] text-white/70 leading-relaxed max-w-[620px] mx-auto">
            One-time verification fee. Lifetime peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white/5 border rounded-[20px] p-9 transition-all hover:-translate-y-1 ${
                plan.popular ? 'border-gold-500/60 bg-gold-500/5' : 'border-gold-500/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 text-[11px] font-bold tracking-[1px] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-gold-500 mb-3">{plan.for}</div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="font-accent text-[42px] text-gold-400 leading-none mb-6">
                {plan.price} <span className="font-sans text-sm text-white/70 font-normal">{plan.sub}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/70 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-gold-400">✦</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl font-sans font-bold text-[15px] transition-all ${
                plan.popular 
                  ? 'bg-gradient-to-br from-gold-500 to-gold-400 text-navy-900 hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]' 
                  : 'bg-transparent border-[1.5px] border-gold-600 text-gold-400 hover:bg-gold-400/10'
              }`}>
                {plan.btn}
              </button>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12 text-sm text-white/70">
          Title Insurance add-on: <strong className="text-gold-400">0.12% of property value</strong> — Coverage up to ₹5 Crore
        </p>
      </div>
    </section>
  );
};

export default Pricing;
