import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Landmark, 
  User, 
  Globe, 
  Building, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const segments = [
  {
    id: 'developers',
    label: 'Real Estate Developers',
    icon: <Building2 size={24} />,
    title: 'Build With Confidence. Sell With Certainty.',
    desc: 'Integrated frameworks for construction, title, and structural integrity.',
    color: 'bg-blue-50'
  },
  {
    id: 'lenders',
    label: 'Lenders & Institutions',
    icon: <Landmark size={24} />,
    title: 'Protect Your Collateral. Reduce Risk.',
    desc: 'Automated portfolio coordination and collateral safeguards.',
    color: 'bg-indigo-50'
  },
  {
    id: 'homebuyers',
    label: 'Home Buyers & Owners',
    icon: <User size={24} />,
    title: 'Protect Your Biggest Investment.',
    desc: 'From day one to legacy. Location-based risk assessment.',
    color: 'bg-slate-50'
  },
  {
    id: 'nri',
    label: 'NRI & Remote Owners',
    icon: <Globe size={24} />,
    title: 'Own in India. Manage From Anywhere.',
    desc: 'Remote monitoring and authorization integrity protection.',
    color: 'bg-cyan-50'
  },
  {
    id: 'institutional',
    label: 'Institutional Owners',
    icon: <Building size={24} />,
    title: 'Protect Assets. Ensure Continuity.',
    desc: 'Portfolio-wide frameworks for REITs and commercial assets.',
    color: 'bg-navy-50'
  }
];

const SegmentQuickView = () => {
  return (
    <section className="py-[100px] px-[5%] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="text-primary-blue text-[11px] font-bold tracking-[3px] uppercase mb-4">INTEGRATED INSURANCE FRAMEWORKS</div>
            <h2 className="text-[42px] font-[900] text-navy-900 leading-[1.2]">
              Complete Property Protection. <span className="text-primary-blue">Zero Uncertainty.</span>
            </h2>
          </div>
          <Link 
            to="/insurance" 
            className="group flex items-center gap-3 text-[15px] font-bold text-navy-900 no-underline hover:text-primary-blue transition-colors"
          >
            Explore All Frameworks 
            <div className="w-10 h-10 rounded-full border border-navy-900/10 flex items-center justify-center group-hover:border-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-all">
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[40px] border border-navy-900/5 transition-all hover:shadow-2xl hover:-translate-y-2 group cursor-pointer relative overflow-hidden ${segment.color}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-navy-900 mb-8 group-hover:bg-primary-blue group-hover:text-white transition-all">
                {segment.icon}
              </div>
              
              <h3 className="text-[20px] font-bold text-navy-900 mb-4 group-hover:text-primary-blue transition-colors">
                {segment.label}
              </h3>
              <p className="text-[14px] text-navy-900/60 leading-[1.7] mb-8">
                {segment.desc}
              </p>

              <Link 
                to="/insurance" 
                className="inline-flex items-center gap-2 text-[13px] font-bold text-navy-900 no-underline tracking-wide group-hover:gap-4 transition-all"
              >
                View Framework <ArrowRight size={16} className="text-primary-blue" />
              </Link>
            </motion.div>
          ))}
          
          {/* Global CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-navy-900 text-white flex flex-col justify-center text-center items-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary-blue/10" />
            <ShieldCheck size={48} className="text-primary-blue mb-6 relative z-10" />
            <h3 className="text-[24px] font-bold mb-4 relative z-10">IRDAI Aligned. <br />Institutional Trust.</h3>
            <p className="text-[14px] text-white/60 mb-8 relative z-10">Protect your property assets today with India's first integrated framework.</p>
            <Link to="/insurance" className="bg-primary-blue text-white w-full py-4 rounded-2xl font-bold text-[15px] hover:bg-blue-600 transition-all relative z-10 no-underline">
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SegmentQuickView;
