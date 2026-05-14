import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Building, MapPin, CheckCircle, Clock, BarChart, Zap } from 'lucide-react';

const stats = [
  { label: 'Property records analyzed', value: '5M+', icon: <BarChart size={20} /> },
  { label: 'Cities with local risk engines', value: '20', icon: <MapPin size={20} /> },
  { label: 'Institutional partners', value: '50+', icon: <Users size={20} /> },
  { label: 'Developer projects supported', value: '200+', icon: <Building size={20} /> },
  { label: 'Total asset value protected', value: '₹1.5T+', icon: <Shield size={20} /> },
  { label: 'Assessment accuracy rate', value: '99.1%', icon: <CheckCircle size={20} /> },
  { label: 'Avg assessment timeline', value: '72 hrs', icon: <Clock size={20} /> },
  { label: 'Stakeholder satisfaction', value: '4.8/5', icon: <Zap size={20} /> },
];

const TrustIndicators = () => {
  return (
    <section className="py-20 px-[5%] bg-navy-900 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-primary-blue text-[11px] font-bold tracking-[3px] uppercase mb-4">THE TRUSTFLOWS IMPACT</div>
          <h2 className="text-[32px] font-[900] text-white">Scale That Drives <span className="text-primary-blue">Certainty</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-[32px] font-[900] text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-[12px] text-white/40 font-bold uppercase tracking-[1.5px] leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[3px]">
            Data as of May 2026 | Source: TRUSTFLOWS Risk Intelligence Bureau
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
