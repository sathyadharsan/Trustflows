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
  const [activeBundle, setActiveBundle] = React.useState(0);

  return (
    <section id="pricing" className="bg-[#F5F7FA] py-[80px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">PRICING & ROI</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            Transparent Pricing. <span className="text-primary-blue">Definite Protection.</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[760px] mx-auto font-normal">
            Risk intelligence you can afford. Protection you can't afford to miss. Escrow fee is 100% refunded if deal fails due to title.
          </p>
        </div>

        <div className="overflow-x-auto mb-12 scrollbar-hide">
          <table className="w-full min-w-[800px] bg-white border border-navy-900/5 rounded-3xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="px-8 py-6 text-left text-[11px] font-bold uppercase tracking-[1.5px]">Property Segment</th>
                <th className="px-8 py-6 text-left text-[11px] font-bold uppercase tracking-[1.5px]">Trust Report</th>
                <th className="px-8 py-6 text-left text-[11px] font-bold uppercase tracking-[1.5px]">Title Insurance</th>
                <th className="px-8 py-6 text-left text-[11px] font-bold uppercase tracking-[1.5px]">Escrow Fee</th>
                <th className="px-8 py-6 text-left text-[11px] font-bold uppercase tracking-[1.5px] text-primary-blue">Total Approx</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-900/5">
              {pricingSegments.map((row, i) => (
                <tr 
                  key={i} 
                  className="transition-colors hover:bg-blue-light/30"
                >
                  <td className="px-8 py-6 font-semibold text-[14px] text-[#0a0a1a]">{row.s}</td>
                  <td className="px-8 py-6 font-normal text-[14px] text-[#1a1a2e] leading-[1.6]">{row.r}</td>
                  <td className="px-8 py-6 font-normal text-[14px] text-[#1a1a2e] leading-[1.6]">{row.i}</td>
                  <td className="px-8 py-6 font-normal text-[14px] text-[#1a1a2e] leading-[1.6]">{row.e}</td>
                  <td className="px-8 py-6 font-bold text-[22px] text-[#185FA5]">{row.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle, i) => (
            <div 
              key={i} 
              onClick={() => setActiveBundle(i)}
              className={`bg-white rounded-[32px] p-10 border-2 transition-all cursor-pointer hover:translate-y-[-8px] ${
                activeBundle === i ? 'border-primary-blue shadow-2xl' : 'border-navy-900/5 shadow-sm'
              }`}
            >
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#185FA5] mb-6">{bundle.name}</div>
              <div className="mb-8">
                <span className="text-[48px] font-bold text-[#0a0a1a] leading-[1.2]">{bundle.price}</span>
                <p className="text-[13px] text-[#4a4a6a] font-normal leading-[1.7] mt-2 uppercase tracking-[0.5px]">{bundle.sub}</p>
              </div>
              <ul className="space-y-4 mb-10">
                {bundle.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-center text-[15px] text-[#1a1a2e] font-normal leading-[1.8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-semibold text-[15px] tracking-[0.3px] transition-all ${
                activeBundle === i ? 'bg-primary-blue text-white hover:bg-blue-dark shadow-lg shadow-primary-blue/20' : 'bg-[#0a0a1a] text-white hover:bg-navy-800'
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
