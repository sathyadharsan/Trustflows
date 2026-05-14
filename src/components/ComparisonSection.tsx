import React from 'react';

const ComparisonSection = () => {
  const comparison = [
    { feature: 'Coverage & Depth', local: 'Only localized expertise', generic: 'Pan-India but shallow data', trustflows: '20 cities, deep local risk engines', status: 'positive' },
    { feature: 'Segment Expertise', local: 'General practice', generic: 'Primarily residential focus', trustflows: 'Specialized for all 8+ segments', status: 'positive' },
    { feature: 'Speed', local: '15-30 days', generic: '2-5 days', trustflows: '48-72 hours', status: 'positive' },
    { feature: 'Title Insurance', local: 'Not available', generic: 'Rare / limited availability', trustflows: 'Integrated for all segments', status: 'positive' },
    { feature: 'Escrow Services', local: 'Manual / risky handling', generic: 'Basic / non-integrated', trustflows: 'RBI-compliant, fully digital', status: 'positive' },
    { feature: 'Cost Efficiency', local: '₹50k - ₹2L (Unpredictable)', generic: '₹15k - ₹50k', trustflows: '₹5k - ₹75k (Transparent)', status: 'positive' },
    { feature: 'Risk Coverage', local: 'Legal opinion only', generic: 'Data points only', trustflows: 'Data + Insurance + Escrow', status: 'positive' }
  ];

  return (
    <section className="bg-white py-[100px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[12px] font-[700] tracking-[3px] uppercase text-primary-blue mb-5">WHY CHOOSE US</div>
          <h2 className="text-[42px] md:text-[52px] font-[800] leading-[1.1] mb-8 text-[#0a0a1a] tracking-tight">
            Why TrustFlows <span className="text-primary-blue">Wins.</span>
          </h2>
          <p className="text-[17px] text-[#4a4a6a] leading-[1.8] max-w-[800px] mx-auto font-normal">
            Local lawyers are limited to opinions. Generic portals provide shallow data. TrustFlows combines deep local intelligence with global financial protection standards.
          </p>
        </div>

        <div className="overflow-x-auto mb-20 scrollbar-hide">
          <table className="w-full min-w-[900px] border-separate border-spacing-y-2">
            <thead>
              <tr className="text-[#0a0a1a]">
                <th className="px-8 py-6 text-left text-[12px] font-[800] uppercase tracking-[2px] opacity-50">Feature</th>
                <th className="px-8 py-6 text-left text-[12px] font-[800] uppercase tracking-[2px] bg-[#f8fafc] rounded-tl-2xl rounded-bl-2xl">Local Lawyers</th>
                <th className="px-8 py-6 text-left text-[12px] font-[800] uppercase tracking-[2px] bg-[#f8fafc]">Generic PropTech</th>
                <th className="px-8 py-6 text-left text-[12px] font-[800] uppercase tracking-[2px] bg-primary-blue text-white rounded-tr-2xl rounded-br-2xl">TRUSTFLOWS</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="group transition-all">
                  <td className="px-8 py-7 font-[700] text-[#0a0a1a] text-[12px] uppercase tracking-[1.5px] border-b border-navy-900/5">{row.feature}</td>
                  <td className="px-8 py-7 font-normal text-[#64748b] text-[15px] leading-[1.6] bg-[#f8fafc]/50 group-hover:bg-[#f8fafc] transition-colors">{row.local}</td>
                  <td className="px-8 py-7 font-normal text-[#64748b] text-[15px] leading-[1.6] bg-[#f8fafc]/50 group-hover:bg-[#f8fafc] transition-colors">{row.generic}</td>
                  <td className="px-8 py-7 font-bold text-primary-blue text-[16px] bg-primary-blue/5 border-l-2 border-primary-blue shadow-sm">{row.trustflows}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: 'The Quality Promise', d: '"We will beat any lawyer’s title report in your city. If we are wrong, you get a full refund."' },
            { t: 'The Insurance Promise', d: '"If we insure your property’s title and you lose it to a dispute, we pay you up to ₹10 Crores."' },
            { t: 'The Standard Promise', d: '"Every property type. Every city. One unified standard of trust for India."' }
          ].map((p, i) => (
            <div key={i} className="bg-[#0a0a1a] rounded-[40px] p-12 text-center relative overflow-hidden group hover:translate-y-[-10px] transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="text-[12px] font-[800] text-primary-blue tracking-[2px] uppercase mb-8">{p.t}</div>
              <p className="text-white text-[17px] font-medium italic leading-[1.8] relative z-10">
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
