import React from 'react';
import { motion } from 'framer-motion';

const pricingSegments = [
  { s: 'Resale Flat (₹1Cr)', r: '₹7,999', i: '₹12,000', e: '0.25%', t: '₹22,000' },
  { s: 'Freehold Plot (₹1Cr)', r: '₹24,999', i: '₹12,000', e: '0.25%', t: '₹37,000' },
  { s: 'Commercial Shop (₹2Cr)', r: '₹49,999', i: '₹24,000', e: '0.20%', t: '₹74,000' },
  { s: 'Developer Flat (₹80L)', r: '₹12,000', i: '₹9,600', e: '0.15%', t: '₹21,600' },
  { s: 'Resale House (₹3Cr)', r: '₹49,999', i: '₹36,000', e: '0.20%', t: '₹86,000' }
];

const bundles = [
  {
    name: 'Homebuyer Protection',
    price: '0.35%',
    sub: 'of property value',
    items: ['AI Trust Report', 'Title Insurance (Professional)', 'Milestone Escrow', 'Legal Defense Insurance'],
    featured: true
  },
  {
    name: 'NRI Complete Care',
    price: '0.45%',
    sub: 'of property value',
    items: ['Remote Trust Report', 'Digital Owner Insurance', 'Escrow Services', 'Fraud Monitoring (3 years)']
  },
  {
    name: 'Developer Launch',
    price: '0.20%',
    sub: 'of project sales',
    items: ['Bulk unit verification', 'Milestone escrow setup', 'Project Title Insurance', 'Buyer Trust Badge']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#F5F7FA] py-[100px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">PRICING & ROI</div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-navy-900">
            Transparent Pricing. <span className="text-primary-blue">Definite Protection.</span>
          </h2>
          <p className="text-[16px] text-[#4A5568] leading-relaxed max-w-[760px] mx-auto font-medium">
            Risk intelligence you can afford. Protection you can't afford to miss. Escrow fee is 100% refunded if deal fails due to title.
          </p>
        </div>

        <div className="overflow-x-auto mb-20 scrollbar-hide">
          <table className="w-full min-w-[800px] bg-white border border-navy-900/5 rounded-3xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-8 py-6 text-left text-[12px] font-bold uppercase tracking-widest">Property Segment</th>
                <th className="px-8 py-6 text-left text-[12px] font-bold uppercase tracking-widest">Trust Report</th>
                <th className="px-8 py-6 text-left text-[12px] font-bold uppercase tracking-widest">Title Insurance</th>
                <th className="px-8 py-6 text-left text-[12px] font-bold uppercase tracking-widest">Escrow Fee</th>
                <th className="px-8 py-6 text-left text-[12px] font-bold uppercase tracking-widest text-primary-blue">Total Approx</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-900/5">
              {pricingSegments.map((row, i) => (
                <tr key={i} className="hover:bg-blue-light/30 transition-colors">
                  <td className="px-8 py-6 font-bold text-navy-900">{row.s}</td>
                  <td className="px-8 py-6 font-medium text-[#4A5568]">{row.r}</td>
                  <td className="px-8 py-6 font-medium text-[#4A5568]">{row.i}</td>
                  <td className="px-8 py-6 font-medium text-[#4A5568]">{row.e}</td>
                  <td className="px-8 py-6 font-black text-primary-blue">{row.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle, i) => (
            <div key={i} className={`bg-white rounded-[32px] p-10 border-2 transition-all hover:translate-y-[-8px] ${
              bundle.featured ? 'border-primary-blue shadow-2xl' : 'border-navy-900/5 shadow-sm'
            }`}>
              <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-6">{bundle.name}</div>
              <div className="mb-8">
                <span className="font-accent text-6xl text-navy-900">{bundle.price}</span>
                <p className="text-[12px] text-[#718096] font-bold uppercase tracking-widest mt-2">{bundle.sub}</p>
              </div>
              <ul className="space-y-4 mb-10">
                {bundle.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-[14px] text-navy-900 font-bold">
                    <span className="text-primary-blue">✅</span> {item}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all ${
                bundle.featured ? 'bg-primary-blue text-white hover:bg-blue-dark' : 'bg-navy-900 text-white hover:bg-navy-800'
              }`}>
                Activate Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
