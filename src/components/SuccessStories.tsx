import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    tag: 'FLAT (RESALE)',
    city: 'MUMBAI',
    title: 'Society Title Dispute Flagged',
    desc: 'Buyer nearly purchased a Kandivali flat. TRUSTFLOWS found society had pending litigation with builder over land title. Avoided ₹1.6 Cr loss.'
  },
  {
    tag: 'FREEHOLD PLOT',
    city: 'JAIPUR',
    title: 'Acquisition Notification Search',
    desc: 'Investor was buying 1,000 sq yd plot near JDA scheme. We discovered land was under acquisition for road widening. Saved ₹2.2 Cr.'
  },
  {
    tag: 'COMMERCIAL SHOP',
    city: 'PUNE',
    title: 'Agreement Registration Gap',
    desc: 'Shop owner wanted to sell his unit. Our title check revealed original allotment was not registered – only an agreement. Seller corrected before sale.'
  },
  {
    tag: 'DEVELOPER FLAT',
    city: 'GURUGRAM',
    title: '100 Buyers Unified Escrow',
    desc: '100 buyers used TRUSTFLOWS collective escrow. Builder tried to divert funds after 40% construction – failed. Project completed safely.'
  }
];

const SuccessStories = () => {
  return (
    <section id="success" className="bg-white py-[40px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">SUCCESS STORIES</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            Real Risks. <span className="text-primary-blue">Real Protection.</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[760px] mx-auto font-normal">
            Over ₹1000Cr+ in risk value protected across 20 cities. See how TrustFlows intervenes to save lifetime savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F5F7FA] border border-navy-900/5 rounded-[32px] p-8 transition-all hover:bg-white hover:border-primary-blue/30 hover:shadow-2xl group"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[11px] font-semibold tracking-[0.5px] text-primary-blue bg-primary-blue/5 px-3 py-1 rounded-full uppercase">{story.tag}</span>
                <span className="text-[11px] font-bold tracking-[1.5px] text-navy-900/40 uppercase">{story.city}</span>
              </div>
              <h3 className="text-[24px] font-semibold text-[#0a0a1a] mb-4 leading-tight group-hover:text-primary-blue transition-colors">{story.title}</h3>
              <p className="text-[15px] text-[#4a4a6a] leading-[1.8] font-normal italic">"{story.desc}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
