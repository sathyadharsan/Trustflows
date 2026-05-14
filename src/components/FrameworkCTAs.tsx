import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, Building2, Globe, ShieldCheck } from 'lucide-react';

const ctas = [
  {
    role: 'For Homebuyers',
    title: 'Get Free Property Risk Assessment',
    desc: 'Select city + property type • Takes 2 minutes • Understand considerations before you proceed',
    icon: <User className="text-primary-blue" />,
    btnText: 'Get Started Now',
    link: '#assessment'
  },
  {
    role: 'For Developers & Lenders',
    title: 'Request Institutional Framework Overview',
    desc: 'Portfolio approach • Regulatory alignment • Streamlined proposal process',
    icon: <Building2 className="text-primary-blue" />,
    btnText: 'Request Institutional Demo',
    link: '#institutional'
  },
  {
    role: 'For NRIs & Remote Owners',
    title: 'Schedule Global Consultation',
    desc: 'Multi-currency options • Time zone support • Cross-border coordination guidance',
    icon: <Globe className="text-primary-blue" />,
    btnText: 'Schedule Consultation',
    link: '#nri'
  },
  {
    role: 'For Brokers & Partners',
    title: 'Explore Partnership Framework',
    desc: 'Collaboration options • White-label possibilities • Joint engagement support',
    icon: <ShieldCheck className="text-primary-blue" />,
    btnText: 'Partner With Us',
    link: '#partner'
  }
];

const FrameworkCTAs = () => {
  return (
    <section className="py-[100px] px-[5%] bg-navy-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-blue rounded-full blur-[120px] -mr-96 -mt-96" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-primary-blue text-[11px] font-bold tracking-[3px] uppercase mb-4">FINAL CALLS TO ACTION</div>
          <h2 className="text-[42px] font-[900] text-white leading-tight mb-4">Choose Your <span className="text-primary-blue">Path</span></h2>
          <p className="text-white/40 text-[15px] tracking-[1px] font-bold uppercase">* Conditions apply. All frameworks subject to regulatory approval.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ctas.map((cta, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-12 rounded-[48px] hover:bg-white/10 transition-all flex flex-col items-start text-left group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {cta.icon}
              </div>
              <div className="text-primary-blue text-[11px] font-bold tracking-[2px] uppercase mb-4">{cta.role}</div>
              <h3 className="text-[24px] font-bold text-white mb-4 group-hover:text-primary-blue transition-colors">
                {cta.title}
              </h3>
              <p className="text-white/60 text-[15px] leading-[1.8] mb-10">
                {cta.desc}
              </p>
              <button className="bg-white text-navy-900 px-8 py-4 rounded-2xl font-bold text-[15px] hover:bg-primary-blue hover:text-white transition-all flex items-center gap-2 mt-auto">
                {cta.btnText} <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkCTAs;
