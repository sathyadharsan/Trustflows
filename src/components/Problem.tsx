import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const problemSegments = [
  {
    id: 'flat',
    sidebarLabel: '🏢 Resale Flat (Apartment)',
    panelHeading: '🏢 Resale Flat (Apartment) Risks',
    uniqueRisk: 'Undisclosed society dues, pending property tax, illegal alterations',
    typicalLoss: '₹2-10 Lakhs',
    items: [
      { t: 'Society Dues', d: 'Buyer becomes liable for all previous owner arrears.' },
      { t: 'Illegal Alterations', d: 'Civil fines or demolition orders for unauthorized changes.' },
      { t: 'Tax Gaps', d: 'Pending municipal taxes inherited by the new owner.' }
    ]
  },
  {
    id: 'plot',
    sidebarLabel: '🌾 Freehold Plot',
    panelHeading: '🌾 Freehold Plot Risks',
    uniqueRisk: 'Fake mother deed, missing inheritance chain, Wakf board claim',
    typicalLoss: '₹15 Lakhs – ₹2 Crores',
    items: [
      { t: 'Fake Deeds', d: 'Most common fraud in India — forged original grants.' },
      { t: 'Inheritance Gaps', d: 'Undisclosed heirs claiming rights after sale.' },
      { t: 'Wakf Claims', d: 'Entire title can be voided if property is listed as Wakf.' }
    ]
  },
  {
    id: 'layout',
    sidebarLabel: '🏘️ Freehold Layout',
    panelHeading: '🏘️ Freehold Layout Risks',
    uniqueRisk: 'Unapproved layout plan, missing DC conversion, no completion certificate',
    typicalLoss: '₹25 Lakhs – ₹5 Crores',
    items: [
      { t: 'Plan Approval', d: 'Layout might exist without DTCP/TP approval.' },
      { t: 'Conversion Status', d: 'Land remains agricultural in records despite plotting.' },
      { t: 'Common Areas', d: 'Developer selling "open space" earmarked for parks/roads.' }
    ]
  },
  {
    id: 'commercial',
    sidebarLabel: '🏪 Commercial Property',
    panelHeading: '🏪 Commercial Property Risks',
    uniqueRisk: 'Illegal tenancy, pending GST/octroi, title defects affecting business license',
    typicalLoss: '₹50 Lakhs – ₹10 Crores',
    items: [
      { t: 'Tenancy Rights', d: 'Old rent control laws making eviction impossible.' },
      { t: 'Statutory Dues', d: 'GST, property tax, and commercial water arrears.' },
      { t: 'Land Use', d: 'Illegal commercial operation on residential zoned land.' }
    ]
  },
  {
    id: 'developer',
    sidebarLabel: '🏗️ Developer Flat (Under Construction)',
    panelHeading: '🏗️ Developer Flat (Under Construction) Risks',
    uniqueRisk: 'Delayed possession, builder diversion of funds, RERA violation',
    typicalLoss: '₹10-50 Lakhs + mental stress',
    items: [
      { t: 'Fund Diversion', d: 'Buyer advances used for other projects, stalling yours.' },
      { t: 'RERA Violations', d: 'Deviation from sanctioned specs leads to cancellation.' },
      { t: 'Title Disputes', d: 'Landowner-builder dispute halts the entire project.' }
    ]
  },
  {
    id: 'house',
    sidebarLabel: '🏡 Resale Independent House',
    panelHeading: '🏡 Resale Independent House Risks',
    uniqueRisk: 'Unauthorized floors, deviation from sanctioned plan, easement rights disputes',
    typicalLoss: '₹20 Lakhs – ₹1 Crore',
    items: [
      { t: 'Sanction Deviations', d: 'Floors built beyond the sanctioned height or FSI.' },
      { t: 'Easement Rights', d: 'Neighbor\'s right of way or light through your property.' },
      { t: 'Utility Gaps', d: 'Unauthorized borewell or electrical connections.' }
    ]
  }
];

const Card = ({ title, desc, isPulsing }: { title: string; desc: string; isPulsing: boolean }) => (
  <div className={`bg-white border rounded-xl p-5 shadow-sm transition-all hover:border-primary-blue/30 hover:shadow-lg ${isPulsing ? 'animate-border-pulse' : 'border-navy-900/5'}`}>
    <h4 className="text-[15px] font-bold text-[#0a0a1a] mb-2">{title}</h4>
    <p className="text-[13px] text-[#4a4a6a] font-normal leading-[1.7]">{desc}</p>
  </div>
);

const Problem = () => {
  const [active, setActive] = useState('flat');
  const [isPulsing, setIsPulsing] = useState(false);

  React.useEffect(() => {
    const handleSetActive = (e: any) => {
      if (e.detail && e.detail.id) {
        setActive(e.detail.id);
        const section = document.getElementById('problem');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 500);
      }
    };
    window.addEventListener('setActiveProblem', handleSetActive);
    return () => window.removeEventListener('setActiveProblem', handleSetActive);
  }, []);

  const activeData = problemSegments.find(s => s.id === active)!;

  return (
    <section id="problem" className="bg-white py-[80px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">THE MARKET PROBLEM</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            India’s Property Market is Not One Market. <br />
            <span className="text-primary-blue">It’s 20 Different Risk Ecosystems.</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[850px] mx-auto font-normal mb-12">
            From Mumbai’s slum rehabilitation authority (SRA) flats to Delhi’s DDDA unauthorized colonies, from Bangalore’s A/B Khata confusions to Chennai’s Patta/Chitta complexities – every city and every property segment has unique trust gaps.
          </p>
          <h3 className="text-[24px] font-semibold text-[#0a0a1a] mb-2">The Hard Truth Across Segments</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-full md:w-[35%] space-y-2 sticky top-24 flex md:flex-col pb-4 md:pb-0 scrollbar-hide gap-2 md:gap-0">
            {problemSegments.map((s) => (
              <button
                key={s.id}
                onClick={() => { setActive(s.id); setIsPulsing(true); setTimeout(() => setIsPulsing(false), 500); }}
                className={`flex items-center justify-between w-full min-w-[200px] md:min-w-0 px-6 py-4 rounded-xl text-left transition-all duration-200 ${
                  active === s.id ? 'bg-primary-blue text-white shadow-md' : 'bg-white border border-navy-900/5 text-[#1a1a2e] hover:bg-blue-light'
                }`}
              >
                <span className="text-[15px] font-semibold">{s.sidebarLabel}</span>
                {active === s.id && <ArrowRight size={18} className="text-white" />}
              </button>
            ))}
          </div>

          <div className="w-full md:w-[65%] bg-[#F5F7FA] border border-navy-900/5 rounded-[32px] p-6 md:p-10 shadow-sm min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 className="text-[24px] font-semibold text-[#0a0a1a] leading-[1.4] mb-8 border-b border-navy-900/10 pb-6">{activeData.panelHeading}</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white border border-red-500/10 rounded-2xl p-6 shadow-sm">
                    <div className="text-[11px] font-bold text-red-500 tracking-[1.5px] uppercase mb-2">UNIQUE RISK</div>
                    <p className="text-[15px] font-bold text-[#0a0a1a]">{activeData.uniqueRisk}</p>
                  </div>
                  <div className="bg-navy-900 rounded-2xl p-6 shadow-xl">
                    <div className="text-[11px] font-bold text-primary-blue tracking-[1.5px] uppercase mb-2">TYPICAL LOSS</div>
                    <p className="text-[32px] font-bold text-white leading-tight">{activeData.typicalLoss}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeData.items.map((item, idx) => (
                    <Card key={idx} title={item.t} desc={item.d} isPulsing={isPulsing} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-navy-900 rounded-[32px] p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/10 to-transparent" />
          <div className="relative z-10">
            <h4 className="text-white text-[24px] md:text-[32px] font-bold mb-4 leading-tight">
              Aggregate annual loss due to property fraud & litigation in India:
            </h4>
            <div className="text-[48px] md:text-[64px] font-bold text-primary-blue leading-none mb-4 tracking-tighter">
              ₹1.5 Lakh Crore+
            </div>
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-[2px]">SOURCE: TRUSTFLOWS RISK INTELLIGENCE BUREAU</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
