import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const segments = [
  {
    title: 'Residential',
    items: ['Flats (New & Resale)', 'Independent Houses', 'Villas'],
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    accent: 'text-blue-600'
  },
  {
    title: 'Land',
    items: ['Freehold Plots', 'Freehold Layouts', 'Agri-to-NA Converted Land'],
    bg: 'bg-green-50',
    border: 'border-green-100',
    accent: 'text-green-600'
  },
  {
    title: 'Commercial',
    items: ['Office Spaces', 'Retail Shops', 'Warehouses', 'Co-working'],
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    accent: 'text-orange-600'
  },
  {
    title: 'Bulk & Portfolio',
    items: ['Developer Projects', 'Institutional Investments', 'Portfolio Management'],
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    accent: 'text-purple-600'
  }
];

const SegmentOverview = () => {
  return (
    <section className="bg-white py-[40px] px-[5%] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">SEGMENT OVERVIEW</div>
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] text-[#0a0a1a] tracking-tight">
              One Platform. Every <br />
              <span className="text-primary-blue">Property Type.</span>
            </h2>
          </div>
          <p className="text-[16px] text-[#4a4a6a] leading-[1.8] max-w-[400px] font-normal mb-2">
            TRUSTFLOWS helps homebuyers, NRIs, and businesses verify, insure, and securely transact across all major property segments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative ${segment.bg} ${segment.border} border rounded-[32px] p-8 transition-all hover:shadow-2xl hover:scale-[1.02] cursor-pointer h-full flex flex-col`}
            >
              <h3 className={`text-[24px] font-bold ${segment.accent} mb-4 tracking-tight`}>{segment.title}</h3>
              <ul className="space-y-3 mb-8 flex-1">
                {segment.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[14px] text-[#1a1a2e] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className={`w-1.5 h-1.5 rounded-full ${segment.accent} opacity-40`} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[1px] text-[#0a0a1a] group-hover:gap-4 transition-all">
                Explore Segment <ArrowRight size={14} className={segment.accent} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-[#0a1628] rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <div className="text-white text-[24px] md:text-[32px] font-bold mb-2">One platform. One trust score.</div>
              <div className="text-primary-blue text-[20px] md:text-[24px] font-medium">One insurance policy. Zero uncertainty.</div>
            </div>
            <div className="flex gap-4">
              <button className="bg-primary-blue text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-blue-600 transition-all shadow-lg shadow-primary-blue/20">
                Get Free Risk Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentOverview;
