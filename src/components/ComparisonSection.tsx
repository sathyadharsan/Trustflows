import React from 'react';

const ComparisonSection = () => {
  const comparison = [
    { feature: 'Coverage', local: 'Only local city', generic: 'Pan-India but shallow', trustflows: '20 cities, deep local' },
    { feature: 'Segment Expertise', local: 'General practice', generic: 'Mostly residential', trustflows: 'All 8+ property segments' },
    { feature: 'Speed', local: '15-30 days', generic: '2-5 days', trustflows: '48-72 hours' },
    { feature: 'Title Insurance', local: 'Not available', generic: 'Limited/Referral', trustflows: 'Yes, integrated for all' },
    { feature: 'Escrow Services', local: 'Not available', generic: 'Rare / Manual', trustflows: 'Yes, RBI-compliant digital' },
    { feature: 'Cost', local: '₹50k-₹2L', generic: '₹15k-₹50k', trustflows: '₹5k-₹75k (Segment based)' },
    { feature: 'Risk Covered', local: 'Legal opinion only', generic: 'Data points only', trustflows: 'Data + Insurance + Escrow' }
  ];

  return (
    <section className="bg-white py-[80px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">WHY CHOOSE US</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            Why TrustFlows <span className="text-primary-blue">Wins.</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[760px] mx-auto font-normal">
            Local lawyers are limited. Generic portals are shallow. TrustFlows combines deep local intelligence with global transaction standards.
          </p>
        </div>

        <div className="overflow-x-auto mb-12 scrollbar-hide">
          <table className="w-full min-w-[800px] border-collapse bg-white rounded-3xl overflow-hidden shadow-2xl">
            <thead>
              <tr>
                <th className="px-5 py-4 text-left text-[12px] font-bold uppercase tracking-[1.5px] text-white !text-white bg-[#0a0a1a]">Feature</th>
                <th className="px-5 py-4 text-left text-[12px] font-bold uppercase tracking-[1.5px] text-[#4a4a6a] bg-[#f1f1f1]">Local Lawyers</th>
                <th className="px-5 py-4 text-left text-[12px] font-bold uppercase tracking-[1.5px] text-[#4a4a6a] bg-[#f1f1f1]">Generic PropTech</th>
                <th className="px-5 py-4 text-left text-[12px] font-bold uppercase tracking-[1.5px] text-white !text-white bg-[#185FA5]">TRUSTFLOWS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-900/5">
              {comparison.map((row, i) => (
                <tr key={i} className={`transition-colors hover:bg-blue-light/20 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]'}`}>
                  <td className="px-8 py-6 font-bold text-[#0a0a1a] text-[11px] uppercase tracking-[1.5px]">{row.feature}</td>
                  <td className="px-8 py-6 font-normal text-[#4a4a6a] text-[14px] leading-[1.6]">{row.local}</td>
                  <td className="px-8 py-6 font-normal text-[#4a4a6a] text-[14px] leading-[1.6]">{row.generic}</td>
                  <td className="px-8 py-6 font-bold text-primary-blue text-[15px] bg-primary-blue/5">{row.trustflows}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: 'The Quality Promise', d: '"We will beat any lawyer’s title report in your city. If we are wrong, you get a full refund."' },
            { t: 'The Insurance Promise', d: '"If we insure your title and you lose it to a dispute, we pay you up to ₹10 Crores."' },
            { t: 'The Standard Promise', d: '"Every property type. Every city. One unified standard of trust for India."' }
          ].map((p, i) => (
            <div key={i} className="bg-navy-900 rounded-[32px] p-10 text-center border-b-4 border-primary-blue shadow-xl">
              <div className="text-[11px] font-bold text-primary-blue !text-primary-blue tracking-[1.5px] uppercase mb-6">{p.t}</div>
              <p className="text-white !text-white text-[15px] font-normal italic leading-[1.8]">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
