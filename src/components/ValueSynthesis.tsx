import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Globe, Cpu, Zap } from 'lucide-react';

const comparisonData = [
  { feature: 'Segment Understanding', traditional: 'Generalized frameworks', generic: 'Mostly residential focus', trustflows: 'Dedicated assessment for flats, plots, commercial, layouts' },
  { feature: 'Local Context Integration', traditional: 'National models', generic: 'City-agnostic data', trustflows: 'City-trained engines for 20 Indian markets' },
  { feature: 'Process Efficiency', traditional: 'Extended evaluation timelines', generic: 'Self-serve portals only', trustflows: 'Streamlined end-to-end coordination' },
  { feature: 'Framework Integration', traditional: 'Standalone considerations', generic: 'Data reports only', trustflows: 'Title + Property + Seismic + Transaction in one workflow' },
  { feature: 'Support Experience', traditional: 'Manual processes, extended timelines', generic: 'Self-serve portals', trustflows: 'Multi-channel coordination; rapid assessment pathways' },
  { feature: 'Transparency', traditional: 'Complex structures', generic: 'Fixed subscription models', trustflows: 'Context-based, location-based, usage-based options' },
];

const ValueSynthesis = () => {
  return (
    <section className="bg-white py-[50px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-primary-blue text-[11px] font-bold tracking-[3px] uppercase mb-4">CROSS-SEGMENT SYNTHESIS</div>
          <h2 className="text-[36px] font-[900] text-navy-900 leading-[1.2] mb-6">
            Why TRUSTFLOWS <span className="text-primary-blue">Frameworks Differ</span>
          </h2>
        </div>

        <div className="overflow-x-auto rounded-[32px] border border-navy-900/10 shadow-2xl">
          <table className="w-full min-w-[1000px] border-collapse bg-white">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-10 py-8 text-left text-[11px] font-bold uppercase tracking-[2.5px]">Feature</th>
                <th className="px-10 py-8 text-left text-[11px] font-bold uppercase tracking-[2.5px] opacity-40">Traditional Approaches</th>
                <th className="px-10 py-8 text-left text-[11px] font-bold uppercase tracking-[2.5px] opacity-40">Generic Digital Tools</th>
                <th className="px-10 py-8 text-left text-[11px] font-bold uppercase tracking-[2.5px] text-primary-blue">TRUSTFLOWS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-900/5">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                  <td className="px-10 py-8 font-bold text-navy-900 text-[15px]">{row.feature}</td>
                  <td className="px-10 py-8 text-navy-900/40 text-[14px] font-medium">{row.traditional}</td>
                  <td className="px-10 py-8 text-navy-900/40 text-[14px] font-medium">{row.generic}</td>
                  <td className="px-10 py-8 bg-blue-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-blue flex items-center justify-center shrink-0">
                        <Check size={12} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="font-bold text-navy-900 text-[15px]">{row.trustflows}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="p-10 bg-[#F8FAFC] rounded-[40px] border border-navy-900/5 shadow-sm">
            <Shield size={32} className="text-primary-blue mb-6" />
            <h3 className="text-[13px] font-bold text-navy-900 tracking-[2px] uppercase mb-4">Quality Commitment</h3>
            <p className="text-[14px] text-navy-900/70 leading-[1.8] font-medium italic">
              "We apply rigorous, context-aware assessment frameworks. If a covered consideration is missed, review protocols apply."
            </p>
          </div>
          <div className="p-10 bg-navy-900 text-white rounded-[40px] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <Zap size={32} className="text-primary-blue mb-6" />
            <h3 className="text-[13px] font-bold text-white tracking-[2px] uppercase mb-4">Support Commitment</h3>
            <p className="text-[14px] text-white/70 leading-[1.8] font-medium italic relative z-10">
              "If a covered event occurs within the framework terms, we coordinate assessment and support through streamlined pathways."
            </p>
          </div>
          <div className="p-10 bg-[#F8FAFC] rounded-[40px] border border-navy-900/5 shadow-sm">
            <Globe size={32} className="text-primary-blue mb-6" />
            <h3 className="text-[13px] font-bold text-navy-900 tracking-[2px] uppercase mb-4">Standard Commitment</h3>
            <p className="text-[14px] text-navy-900/70 leading-[1.8] font-medium italic">
              "Every property type. Every city. One unified standard of coordination, protection, and transaction support for India."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSynthesis;
