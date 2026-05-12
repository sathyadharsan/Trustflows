import React from 'react';
import { motion } from 'framer-motion';

const customers = [
  {
    label: 'First-Time Homebuyer',
    pain: 'Scared of hidden dues, fake documents, society frauds',
    solution: 'Complete flat verification in 48 hours',
    stat: 'Avg ₹4.2L saved per transaction',
    cta: 'Protect My Home'
  },
  {
    label: 'NRI Buyer',
    pain: 'Can\'t visit India to verify — trusting agents blindly',
    solution: 'Remote AI verification + video consultation',
    stat: '3,000+ NRI transactions secured',
    cta: 'Verify Remotely'
  },
  {
    label: 'Banks & NBFCs',
    pain: 'Loan defaults due to fraudulent title documents',
    solution: 'Pre-loan property risk score for every application',
    stat: '50+ banking partners trust us',
    cta: 'Partner With Us'
  },
  {
    label: 'Developers & Builders',
    pain: 'Buyers hesitate due to trust deficit in projects',
    solution: 'TrustFlows certification = buyer confidence',
    stat: '200+ developer projects certified',
    cta: 'Certify My Project'
  },
  {
    label: 'Property Investors',
    pain: 'Managing multiple properties — title risk across portfolio',
    solution: 'Portfolio-level risk dashboard + bulk escrow',
    stat: '₹1000 Cr+ portfolio value protected',
    cta: 'Protect My Portfolio'
  },
  {
    label: 'Legal Professionals',
    pain: 'Clients need fast property due diligence for transactions',
    solution: 'API access to risk reports for law firms',
    stat: 'Used by 500+ legal advisors',
    cta: 'Get API Access'
  }
];

const CustomerSegments = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="who-we-serve" className="bg-white py-[100px] px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gold-600 mb-4">
            Who We Serve
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-navy-900">
            Built for Every Property Stakeholder
          </h2>
          <p className="text-[16px] text-[#4A5568] leading-relaxed max-w-[620px] mx-auto font-medium">
            Whether you're buying your first home or managing a ₹500 Crore portfolio — TrustFlows protects you.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {customers.map((customer, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group bg-[#F5F7FA] border border-navy-900/10 rounded-2xl p-8 transition-all hover:border-gold-500/50 hover:translate-y-[-4px] hover:bg-white hover:shadow-xl cursor-default relative overflow-hidden"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mb-6" />
              
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-gold-600 mb-3">
                {customer.label}
              </div>
              
              <p className="text-sm text-navy-900 italic mb-6 leading-relaxed font-medium">
                <span className="text-gold-500 text-lg mr-1 opacity-60">❝</span>
                {customer.pain}
                <span className="text-gold-500 text-lg ml-1 opacity-60">❞</span>
              </p>
              
              <div className="w-full h-px bg-navy-900/10 mb-6" />
              
              <div className="text-[11px] font-bold tracking-[1px] uppercase text-gold-600 mb-2">
                ✦ TrustFlows does:
              </div>
              
              <p className="text-[15px] text-[#4A5568] leading-relaxed mb-8 min-h-[44px] font-medium">
                {customer.solution}
              </p>
              
              <div className="inline-block bg-navy-900 text-white px-4 py-1.5 rounded-full text-[12px] font-bold mb-8 shadow-lg">
                {customer.stat}
              </div>
              
              <button className="w-full bg-transparent border border-navy-900/20 text-navy-900 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-navy-900 hover:text-white">
                {customer.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerSegments;
