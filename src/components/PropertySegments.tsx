import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const segmentData = [
  {
    id: 'resale-flat',
    sidebarLabel: '🏢 Resale Flats',
    title: '🏢 Resale Flats & Apartments (Society Built)',
    content: {
      who: ['First-time homebuyers', 'NRIs buying for parents', 'Rental yield investors'],
      pain: ['Undisclosed maintenance dues (₹50k-5L)', 'Illegal alterations (extra room, balcony covered)', 'Pending property tax liabilities'],
      solution: [
        { check: 'Society NOC check', val: 'Avoid rejection at registration' },
        { check: 'Maintenance dues audit', val: 'Save ₹50k-2L in hidden arrears' },
        { check: 'Property tax clearance', val: 'Avoid municipal penalties' }
      ],
      roi: '₹7,999 report vs ₹15L potential loss avoided.'
    }
  },
  {
    id: 'house',
    sidebarLabel: '🏡 Resale Houses',
    title: '🏡 Resale Independent Houses & Villas',
    content: {
      who: ['Bungalow buyers (old city)', 'Gated villa investors', 'Row house buyers'],
      pain: ['Undisclosed easement rights (right of way)', 'Illegal extra floors (deviation >10%)', 'Missing Occupancy Certificate (OC)'],
      solution: [
        { check: 'Sanctioned vs As-built scan', val: 'Avoid demolition risk' },
        { check: 'Easement rights search', val: 'Protects privacy & valuation' },
        { check: 'OC/CC verification', val: 'Ensures bank loan eligibility' }
      ],
      roi: ' लखनऊ Case: Saved ₹2.2 Cr loss on bungalow with missing OC.'
    }
  },
  {
    id: 'plot',
    sidebarLabel: '🌾 Freehold Plots',
    title: '🌾 Freehold Plots (Vacant Land) - HIGHEST RISK',
    content: {
      who: ['Vacant land investors', 'Agricultural-to-NA buyers', 'Industrial plot targeters'],
      pain: ['Fake mother deeds / forged inheritance', 'Wakf board claims on ancestral land', 'Government acquisition notifications'],
      solution: [
        { check: 'Mother deed verification', val: 'Trace to government grant (1920s)' },
        { check: 'Wakf board overlap scan', val: 'Critical for high-risk districts' },
        { check: 'Heirship validation', val: 'Eliminates future family claims' }
      ],
      roi: 'Hyderabad Case: AI flagged ₹3.5 Cr plot with illegal Wakf claim.'
    }
  },
  {
    id: 'layout',
    sidebarLabel: '🏘️ Freehold Layouts',
    title: '🏘️ Freehold Layouts (Developer Plotted)',
    content: {
      who: ['DTCP/TP/BMRDA layout buyers', 'Township plot investors'],
      pain: ['Layout approval vs plot title confusion', 'Illegal sale of "open space" (parks/roads)', 'Pending betterment / development charges'],
      solution: [
        { check: 'Parent title audit', val: 'One defect kills all plots' },
        { check: 'Layout plan verification', val: 'Check DTCP/TP authenticity' },
        { check: 'Infra completion cert', val: 'Roads/drainage legally handed over' }
      ],
      roi: 'Surat Case: Saved ₹8 Cr collectively for 30 plot buyers.'
    }
  },
  {
    id: 'commercial',
    sidebarLabel: '🏪 Commercial',
    title: '🏪 Commercial Properties (Offices & Shops)',
    content: {
      who: ['IT Park unit buyers', 'High street retail investors', 'Warehouse targeters'],
      pain: ['Leasehold vs Freehold confusion (DDA/MHADA)', 'Illegal commercial use on residential zone', 'Pending GST / stamp duty on past deals'],
      solution: [
        { check: 'Land use zone check', val: 'Ensures business license validity' },
        { check: 'Statutory dues audit', val: 'GST, property tax, utility arrears' },
        { check: 'Tenant rights search', val: 'Identifies hidden perpetual leases' }
      ],
      roi: 'Chennai Case: Helped cancel ₹5 Cr warehouse deal on illegal land.'
    }
  },
  {
    id: 'dev-flat',
    sidebarLabel: '🏗️ Developer Flats',
    title: '🏗️ Developer Flats (Under Construction)',
    content: {
      who: ['Premium apartment buyers', 'RERA project investors'],
      pain: ['Builder diversion of funds (project stall)', 'RERA violations / registration cancellation', 'Super built-up vs carpet area cheating'],
      solution: [
        { check: 'RERA compliance tracking', val: 'Quarterly update & complaint history' },
        { check: 'Milestone Escrow', val: 'Payment linked to construction stage' },
        { check: 'Possession delay insurance', val: 'Payout if delayed beyond RERA date' }
      ],
      roi: 'Noida Case: Escrow saved ₹40L advance from builder diversion.'
    }
  },
  {
    id: 'govt',
    sidebarLabel: '🏛️ Govt Schemes',
    title: '🏛️ Govt Scheme Properties (DDA, MHADA, BDA)',
    content: {
      who: ['Govt plot/flat transfer buyers', 'Leasehold to freehold targeters'],
      pain: ['Long leasehold transfer restrictions', 'Pending annual lease rent for 20+ years', 'Disputes between allottee and govt agency'],
      solution: [
        { check: 'Allotment validity check', val: 'Direct interface with agency DB' },
        { check: 'Transfer permission status', val: 'Ensures legal re-sale rights' },
        { check: 'Unpaid lease rent audit', val: 'Identify huge penalty arrears' }
      ],
      roi: 'Delhi Case: Stopped ₹1.2 Cr DDA deal with succession dispute.'
    }
  },
  {
    id: 'resale-comm',
    sidebarLabel: '🏭 Mixed-Use',
    title: '🏭 Resale Commercial & Mixed-Use',
    content: {
      who: ['Old market shop buyers', 'Office in commercial tower'],
      pain: ['Pending business liabilities (GST/tax)', 'Association / society dues for commercial', 'Unapproved change of use (shop to godown)'],
      solution: [
        { check: 'Utility bill history', val: 'Identify hidden business arrears' },
        { check: 'Association NOC audit', val: 'Check for recorded disputes' },
        { check: 'Trade license validity', val: 'Ensures business continuity' }
      ],
      roi: 'Protection against ₹50L - ₹2 Cr risk per shop unit.'
    }
  }
];

const Card = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white border border-navy-900/5 rounded-xl p-5 shadow-sm">
    <h4 className="text-[11px] font-bold text-primary-blue tracking-wider uppercase mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2 text-[13px] text-navy-900 font-bold leading-snug">
          <span className="text-primary-blue mt-0.5">•</span> {it}
        </li>
      ))}
    </ul>
  </div>
);

const PropertySegments = () => {
  const [active, setActive] = useState('resale-flat');

  useEffect(() => {
    const handleSetActive = (e: any) => {
      if (e.detail && e.detail.id) {
        setActive(e.detail.id);
        const section = document.getElementById('segments');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('setActiveSegment', handleSetActive);
    return () => window.removeEventListener('setActiveSegment', handleSetActive);
  }, []);

  const activeData = segmentData.find(s => s.id === active)!;

  return (
    <section id="segments" className="bg-[#F5F7FA] py-[100px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">SEGMENT COVERAGE</div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-navy-900">
            India’s Most <span className="text-primary-blue">Granular Risk Intelligence</span>
          </h2>
          <p className="text-[16px] text-[#4A5568] leading-relaxed max-w-[760px] mx-auto font-medium">
            Every property type has a different risk profile. We provide city-trained checks for each segment.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-[35%] space-y-2 sticky top-24 flex md:flex-col pb-4 md:pb-0 scrollbar-hide gap-2 md:gap-0">
            {segmentData.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center justify-between w-full min-w-[200px] md:min-w-0 px-6 py-4 rounded-xl text-left transition-all duration-200 ${
                  active === s.id ? 'bg-primary-blue text-white shadow-md' : 'bg-white border border-navy-900/5 text-[#4A5568] hover:bg-blue-light'
                }`}
              >
                <span className="text-[14px] font-bold">{s.sidebarLabel}</span>
                {active === s.id && <ArrowRight size={18} className="text-white" />}
              </button>
            ))}
          </div>

          <div className="w-full md:w-[65%] bg-white border border-[#E2E8F0] rounded-[32px] p-6 md:p-10 shadow-sm min-h-[600px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-8 border-b border-navy-900/10 pb-6 uppercase tracking-tight">{activeData.title}</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 flex-1">
                  <Card title="WHO THIS IS FOR" items={activeData.content.who} />
                  <Card title="UNIQUE PAIN POINTS" items={activeData.content.pain} />
                </div>

                <div className="bg-[#F5F7FA] rounded-2xl p-6 mb-8">
                  <h4 className="text-[11px] font-bold text-primary-blue tracking-wider uppercase mb-5">TRUSTFLOWS SPECIFIC CHECKS</h4>
                  <div className="space-y-4">
                    {activeData.content.solution.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy-900/5 pb-3">
                        <span className="text-[14px] font-bold text-navy-900">{item.check}</span>
                        <span className="text-[13px] text-primary-blue font-bold">↳ {item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-navy-900 text-white rounded-2xl p-6 border-l-4 border-primary-blue">
                  <div className="text-[10px] font-bold text-primary-blue tracking-wider uppercase mb-2">ROI ANALYSIS / CASE STUDY</div>
                  <p className="text-[15px] font-bold italic">"{activeData.content.roi}"</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySegments;
