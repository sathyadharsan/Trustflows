import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const segmentData = [
  {
    id: 'resale-flat',
    sidebarLabel: '🏢 Resale Flats',
    title: '🏢 Resale Flats & Apartments (Society Built)',
    content: {
      who: ['First-time buyers of 5-20yr flats', 'NRIs buying in parent’s city', 'Investors targeting high rental yield'],
      pain: ['Undisclosed maintenance bills (₹50k-₹5L)', 'Illegal alterations leading to civic fines', 'Disputes over parking and common areas', 'Pending property tax passing to buyer'],
      solution: [
        { check: 'Society NOC check', val: 'Avoid registration rejection' },
        { check: 'Maintenance dues audit', val: 'Save ₹50k-2 Lakhs' },
        { check: 'Property tax clearance', val: 'Avoid penalties & interest' },
        { check: 'Conveyance deed status', val: 'Ensure future redevelopment' },
        { check: 'Illegal construction scan', val: 'Eliminate demolition risk' },
        { check: 'Encumbrance check (30 yrs)', val: 'Uncover hidden claims' }
      ],
      roi: 'Pune Case: Found ₹4.5 Lakhs unpaid tax & parking dispute. Saved buyer ₹6 Lakhs upfront.'
    }
  },
  {
    id: 'house',
    sidebarLabel: '🏡 Resale Houses',
    title: '🏡 Resale Independent Houses & Villas',
    content: {
      who: ['Bungalow buyers in old city', 'Investors in township row houses', 'Buyers of gated community villas'],
      pain: ['Undisclosed easement rights affecting valuation', 'Illegal extra floors causing demolition risk', 'Missing occupancy certificate blocking bank loans', 'Pending municipal betterment and development fees'],
      solution: [
        { check: 'Sanctioned plan vs as-built', val: 'Prevent demolition risks' },
        { check: 'Easement rights search', val: 'Protect property valuation' },
        { check: 'OC/CC verification', val: 'Ensure loan eligibility' },
        { check: 'Betterment charges audit', val: 'Clear municipal liabilities' },
        { check: 'Title chain (50+ yrs)', val: 'Verify original ownership' }
      ],
      roi: 'Lucknow Case: Found 1998 mortgage & missing OC. Buyer avoided ₹2.2 Cr total loss.'
    }
  },
  {
    id: 'plot',
    sidebarLabel: '🌾 Freehold Plots',
    title: '🌾 Freehold Plots (Vacant Land) - HIGHEST RISK',
    content: {
      who: ['Buyers of NA converted land', 'Investors in residential plotted layouts', 'Industrial plot targeters for warehouses'],
      pain: ['Fake mother deeds or forged inheritance', 'Wakf board claims voiding entire title', 'Government acquisition notifications for roads/SEZ', 'B-Khata lacking bank loan eligibility'],
      solution: [
        { check: 'Original mother deed check', val: 'Verify government grants' },
        { check: 'Heirship validation', val: 'Check family tree' },
        { check: 'Wakf board overlap scan', val: 'Scan high-risk districts' },
        { check: 'Acquisition notification search', val: 'Check 30-year records' },
        { check: 'NA order verification', val: 'Confirm Collector conversion' },
        { check: 'Encumbrance search', val: '40-year continuous chain' }
      ],
      roi: 'Hyderabad Case: AI flagged 1987 Wakf claim on Tellapur plot. Saved buyer ₹3.5 Cr.'
    }
  },
  {
    id: 'layout',
    sidebarLabel: '🏘️ Freehold Layouts',
    title: '🏘️ Freehold Layouts (Developer Plotted)',
    content: {
      who: ['Buyers of DTCP approved layouts', 'Investors in TP approved layouts', 'Purchasers of licensed BMRDA layouts'],
      pain: ['Plot titles unclear despite layout approval', 'Missing land owner consent for layout', 'No completion certificate for internal roads', 'Illegal sale of earmarked open spaces'],
      solution: [
        { check: 'Parent title of land', val: 'Prevent layout defects' },
        { check: 'Layout plan approval', val: 'Verify authenticity deviations' },
        { check: 'Open space earmarking', val: 'Ensure legal usage' },
        { check: 'Infra completion cert', val: 'Verify handed over' },
        { check: 'Plot reconstitution', val: 'Check subdivided numbers' }
      ],
      roi: 'Surat Case: Discovered developer mortgaged land to NBFC. Saved 30 buyers ₹8 Crores.'
    }
  },
  {
    id: 'commercial',
    sidebarLabel: '🏪 Commercial',
    title: '🏪 Commercial Properties (Offices & Shops)',
    content: {
      who: ['IT park office space buyers', 'High street retail shop investors', 'Warehouse and godown purchasers'],
      pain: ['Only allotment letter, no separate title', 'Leasehold land requiring government transfer nod', 'Pending GST or stamp duty liabilities', 'Missing fire and lift occupancy certificates'],
      solution: [
        { check: 'Title for commercial unit', val: 'Ensure resale rights' },
        { check: 'Land use zone check', val: 'Validate business license' },
        { check: 'Pending statutory dues', val: 'Audit GST property tax' },
        { check: 'Leasehold status', val: 'Check transfer costs' },
        { check: 'Tenant rights search', val: 'Find perpetual leases' }
      ],
      roi: 'Chennai Case: Warehouse land was agricultural. Cancelled deal and refunded ₹5 Cr.'
    }
  },
  {
    id: 'dev-flat',
    sidebarLabel: '🏗️ Developer Flats',
    title: '🏗️ Developer Flats (Under Construction)',
    content: {
      who: ['Buyers of premium Grade A apartments', 'Investors in RERA registered projects', 'Purchasers of luxury condos with amenities'],
      pain: ['Builder fund diversion stalling the project', 'Original project land title being disputed', 'Carpet area cheating leading to litigation', 'Possession delays without compensation payments'],
      solution: [
        { check: 'RERA project verification', val: 'Track registration complaints' },
        { check: 'Builder background check', val: 'Check past litigation' },
        { check: 'Land title of project', val: 'Ensure title insurance' },
        { check: 'Milestone Escrow', val: 'Link payment progress' },
        { check: 'Possession delay insurance', val: 'Payout if delayed' }
      ],
      roi: 'Noida Case: Escrow held ₹40 Lakhs safely. Prevented builder diversion, delivered on time.'
    }
  },
  {
    id: 'resale-comm',
    sidebarLabel: '🏭 Mixed-Use',
    title: '🏭 Resale Commercial & Mixed-Use',
    content: {
      who: ['Buyers of old market resale shops', 'Investors in commercial tower offices', 'Purchasers of mixed-use properties'],
      pain: ['Previous owner’s pending GST or fines', 'Massive unpaid association or society dues', 'Missing original lease agreement breaking chain', 'Unapproved change of property use'],
      solution: [
        { check: 'Past utility bills', val: 'Find hidden dues' },
        { check: 'Association NOC minutes', val: 'Check recorded disputes' },
        { check: 'Lease deed history', val: 'Review tenant rights' },
        { check: 'Trade license validity', val: 'Ensure business continuity' }
      ],
      roi: 'ROI: Protection against massive association dues, unpaid GST, and ₹2 Cr liabilities.'
    }
  },
  {
    id: 'govt',
    sidebarLabel: '🏛️ Govt Schemes',
    title: '🏛️ Govt Scheme Properties (High Risk)',
    content: {
      who: ['Buyers of DDA flats or plots', 'Purchasers in MHADA or HUDA schemes', 'Investors in Amaravati special risk zones'],
      pain: ['Long leasehold terms with transfer restrictions', 'Original allottee illegal sub-sale issues', 'Disputes between allottee and government agency', 'Pending annual lease rent causing arrears'],
      solution: [
        { check: 'Original allotment validity', val: 'Interface with databases' },
        { check: 'Transfer permission status', val: 'Ensure legal resale' },
        { check: 'Unpaid lease rent audit', val: 'Identify penalty arrears' },
        { check: 'Pending cancellation', val: 'Check government orders' }
      ],
      roi: 'Delhi Case: Buyer paying ₹1.2 Cr for DDA flat. Found succession dispute, cancelled deal.'
    }
  }
];

const renderPainPoint = (text: string) => {
  const parts = text.split(/(₹[\d,.\s]+(?:Lakhs?|Crores?|Cr|L|k)?)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('₹') ? <strong key={i} className="font-bold">{part}</strong> : part
      )}
    </>
  );
};

const Card1 = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-[#f8f9ff] rounded-[10px] p-[16px] flex-1">
    <h4 className="text-[14px] font-semibold text-[#0a0a1a] mb-3 flex items-center gap-2">
      👤 {title}
    </h4>
    <ul className="space-y-[6px]">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2 text-[13px] text-[#1a1a2e] font-normal leading-[1.6]">
          <span className="text-primary-blue mt-[4px] text-[10px]">●</span> <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Card2 = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-[#fff8f0] border border-[#f0d9b5] rounded-[10px] p-[16px] flex-1">
    <h4 className="text-[14px] font-semibold text-[#0a0a1a] mb-3 flex items-center gap-2">
      ⚠️ {title}
    </h4>
    <ul className="space-y-[6px]">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2 text-[13px] text-[#1a1a2e] font-normal leading-[1.6]">
          <span className="text-[#d97706] mt-[4px] text-[10px]">●</span> <span>{renderPainPoint(it)}</span>
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
    <section id="segments" className="bg-[#F5F7FA] py-[80px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">SEGMENT COVERAGE</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            India’s Most <span className="text-primary-blue">Granular Risk Intelligence</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[760px] mx-auto font-normal">
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
                  active === s.id ? 'bg-primary-blue text-white shadow-md' : 'bg-white border border-navy-900/5 text-[#1a1a2e] hover:bg-blue-light'
                }`}
              >
                <span className="text-[15px] font-semibold">{s.sidebarLabel}</span>
                {active === s.id && <ArrowRight size={18} className="text-white" />}
              </button>
            ))}
          </div>

          <div className="w-full md:w-[65%] bg-white border border-[#E2E8F0] rounded-[32px] p-6 md:p-10 shadow-sm min-h-[600px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex-1 flex flex-col">
                <h3 className="text-[24px] font-semibold text-[#0a0a1a] leading-[1.4] mb-8 border-b border-navy-900/10 pb-6 uppercase tracking-tight">{activeData.title}</h3>

                {/* ZONE 1 */}
                <div className="flex flex-col sm:flex-row gap-[12px] mb-[16px] flex-none">
                  <Card1 title="Who This Is For" items={activeData.content.who} />
                  <Card2 title="Unique Pain Points" items={activeData.content.pain} />
                </div>

                {/* ZONE 2 */}
                <div className="w-full mb-[16px] flex-1">
                  <h4 className="text-[12px] font-bold text-[#0a0a1a] tracking-[1.5px] uppercase mb-3">TRUSTFLOWS SPECIFIC CHECKS</h4>
                  <div className="flex flex-col">
                    {activeData.content.solution.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-[10px] border-b border-navy-900/5 last:border-0">
                        <span className="text-[14px] font-medium text-[#0a0a1a]">{item.check}</span>
                        <span className="text-[13px] text-primary-blue font-normal italic flex items-center gap-2">
                          <span className="text-primary-blue/70">↓</span> {item.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ZONE 3 */}
                <div className="bg-[#0a1628] rounded-[10px] p-[16px] flex-none">
                  <div className="text-[10px] font-semibold text-[#B5D4F4] tracking-[1.5px] uppercase mb-2">
                    {activeData.content.roi.startsWith('ROI') ? '💰 ROI' : '📖 CASE STUDY'}
                  </div>
                  <p className="text-[13px] font-normal italic text-white leading-[1.6]">
                    "{activeData.content.roi}"
                  </p>
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
