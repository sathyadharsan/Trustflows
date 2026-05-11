import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const stakeholderData = [
  { id: 'buyer', icon: '👨‍👩‍👧', label: 'First-Time Buyer', text: 'Trust Score + Hidden Dues Check', sub: 'Protect your lifetime savings before paying the advance.' },
  { id: 'nri', icon: '🌍', label: 'NRI', text: 'Remote Verification + Escrow', sub: 'Verify and transact securely without needing to visit India.' },
  { id: 'investor', icon: '💼', label: 'Investor', text: 'Title Insurance + Flip Protection', sub: 'Insure commercial or land investments for higher resale value.' },
  { id: 'developer', icon: '🏗️', label: 'Developer', text: 'Buyer Confidence + Faster Sales', sub: 'Offer TRUSTFLOWS-certified units to sell project inventory faster.' },
  { id: 'bank', icon: '🏦', label: 'Bank / HFC', text: 'Automated Collateral Risk Score', sub: 'Reduce NPA risks with IRDAI-aligned title guarantees.' },
  { id: 'broker', icon: '🏢', label: 'Broker', text: '40% Higher Conversion Rate', sub: 'Close deals faster by providing verified, high-trust listings.' }
];

const Stakeholders = () => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleSetActive = (e: any) => {
      if (e.detail && e.detail.id) {
        setActive(e.detail.id);
        const section = document.getElementById('stakeholders');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('setActiveStakeholder', handleSetActive);
    return () => window.removeEventListener('setActiveStakeholder', handleSetActive);
  }, []);

  return (
    <section id="stakeholders" className="bg-[#F5F7FA] py-[80px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">FOR EVERY PARTICIPANT</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            Trust Infrastructure for <span className="text-primary-blue">All Stakeholders.</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[760px] mx-auto font-normal">
            Whether you are buying your first home or financing a billion-dollar commercial portfolio, we provide the trust layer you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeholderData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-[32px] p-10 border-2 transition-all duration-300 ${
                active === item.id ? 'border-primary-blue shadow-2xl scale-105' : 'border-navy-900/5 shadow-sm hover:border-primary-blue/30'
              }`}
            >
              <div className="w-16 h-16 bg-blue-light rounded-2xl flex items-center justify-center text-3xl mb-8">
                {item.icon}
              </div>
              <h3 className="text-[24px] font-semibold text-[#0a0a1a] leading-[1.4] mb-2 uppercase tracking-tight">{item.label}</h3>
              <div className="text-[#185FA5] font-bold text-[11px] uppercase tracking-[1.5px] mb-4">
                {item.text}
              </div>
              <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
