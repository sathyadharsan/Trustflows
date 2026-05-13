import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { segmentData } from '../data/segments';


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
      {title}
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
      {title}
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

          <div className="w-full md:w-[65%] bg-white border border-[#E2E8F0] rounded-[32px] p-6 md:p-10 shadow-sm min-h-[600px] flex flex-col relative">
            <Link 
              to={`/segments/${active}`}
              className="absolute top-8 right-8 z-10 bg-blue-50 text-primary-blue p-3 rounded-full hover:bg-primary-blue hover:text-white transition-all group shadow-sm hidden md:flex items-center gap-2 px-5"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider">Explore Deep-Dive Report</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>

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
