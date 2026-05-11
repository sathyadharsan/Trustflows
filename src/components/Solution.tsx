import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const solutionSegments = [
  {
    id: 'segment-ai',
    sidebarLabel: '🧠 Segment-Specific AI',
    title: '🧠 Segment-Specific AI Models',
    content: {
      card1: { header: 'WHAT IT MEANS', text: 'Separate algorithms for flats, plots, commercial, and layouts — because risks are fundamentally different for each.' },
      card2: { header: 'BENEFIT', text: 'Detects segment-specific anomalies like illegal SRA transfers or Wakf board claims that generic searches miss.' },
      card3: { header: 'PRECISION', text: '99.1% accuracy across residential records validated by 10+ major lenders.' },
      card4: { header: 'DIFFERENCE', text: 'Traditional reports are generic; TrustFlows AI is purpose-built for the segment.', isBlue: true }
    }
  },
  {
    id: 'city-engines',
    sidebarLabel: '🏙️ City-Trained Engines',
    title: '🏙️ City-Trained Risk Engines',
    content: {
      card1: { header: 'LOCAL DEPTH', text: 'Mumbai model knows SRA, Pune model knows PMRDA, Kolkata model knows Bargee titles.' },
      card2: { header: 'DATA SOURCES', text: 'Direct integration with 20 city municipal databases, RERA, and court intelligence.' },
      card3: { header: 'CITY LIST', text: 'Live in 20 major Indian cities with ground-level legal partner validation.' },
      card4: { header: 'DIFFERENCE', text: 'Local expertise at national scale.', isBlue: true }
    }
  },
  {
    id: 'universal-insurance',
    sidebarLabel: '🛡️ Universal Insurance',
    title: '🛡️ Universal Title Insurance',
    content: {
      card1: { header: 'COVERAGE', text: 'Works across all segments — from ₹25L resale flat to ₹50Cr commercial towers.' },
      card2: { header: 'PROTECTION', text: 'IRDAI-aligned financial guarantee against pre-existing title defects and forgery.' },
      card3: { header: 'PEACE OF MIND', text: 'We fight the legal battle and cover the loss so you don\'t have to.' },
      card4: { header: 'DIFFERENCE', text: 'Financial guarantee, not just a legal opinion.', isBlue: true }
    }
  },
  {
    id: 'milestone-escrow',
    sidebarLabel: '💰 Milestone Escrow',
    title: '💰 Milestone-Secured Escrow',
    content: {
      card1: { header: 'SAFETY', text: 'RBI-compliant trust accounts. Funds released only on verified document registration or construction stage.' },
      card2: { header: 'FLEXIBILITY', text: 'Customizable for under-construction projects, resale deals, or bulk portfolio acquisitions.' },
      card3: { header: 'REFUND POLICY', text: 'Escrow fee is fully refunded if the transaction fails due to a title defect verified by us.' },
      card4: { header: 'DIFFERENCE', text: 'Eliminates payment fraud and builder diversion of funds.', isBlue: true }
    }
  },
  {
    id: 'legal-defense',
    sidebarLabel: '⚖️ Legal Defense',
    title: '⚖️ Integrated Legal Defense',
    content: {
      card1: { header: 'COURT SUPPORT', text: 'Covers all lawyer and court fees if your property ownership is challenged post-purchase.' },
      card2: { header: 'VIGILANCE', text: 'Immediate legal team support for Sub-Registrar follow-ups and litigation management.' },
      card3: { header: 'COST COVER', text: 'Lawyer fees (up to ₹5L) and court fees included in the defense plan.' },
      card4: { header: 'DIFFERENCE', text: 'We don\'t just verify; we defend your ownership for life.', isBlue: true }
    }
  }
];

const Card = ({ content }: { content: any }) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const handleClick = () => { setIsPulsing(true); setTimeout(() => setIsPulsing(false), 500); };

  return (
    <motion.div
      onClick={handleClick}
      animate={isPulsing ? { borderColor: '#0066FF' } : { borderColor: '#E2E8F0' }}
      className={`relative bg-white border rounded-[14px] p-6 shadow-sm transition-all hover:translate-y-[-2px] hover:border-primary-blue hover:shadow-xl cursor-pointer overflow-hidden flex flex-col h-full ${
        isPulsing ? 'animate-border-pulse' : ''
      } ${content.isBlue ? 'border-primary-blue shadow-[0_8px_32px_rgba(0,102,255,0.1)]' : ''}`}
    >
      <div className={`inline-flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase mb-5 px-2.5 py-1 rounded self-start ${content.isBlue ? 'bg-primary-blue text-white' : 'bg-blue-light text-primary-blue'}`}>
        {content.header}
      </div>
      <p className="text-[14px] text-[#4A5568] leading-relaxed font-bold">{content.text}</p>
    </motion.div>
  );
};

const Solution = () => {
  const [active, setActive] = useState('segment-ai');

  useEffect(() => {
    const handleSetActive = (e: any) => {
      if (e.detail && e.detail.id) {
        setActive(e.detail.id);
        const section = document.getElementById('solutions');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('setActiveSolution', handleSetActive);
    return () => window.removeEventListener('setActiveSolution', handleSetActive);
  }, []);

  const activeData = solutionSegments.find(s => s.id === active)!;

  return (
    <section id="solutions" className="bg-[#EEF2FF] py-[100px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">OUR SOLUTION</div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-navy-900">
            The TRUSTFLOWS <span className="text-primary-blue">Difference</span>
          </h2>
          <p className="text-[16px] text-[#4A5568] leading-relaxed max-w-[760px] mx-auto font-medium">
            We don’t just do “title search.” We deliver segment-specific, city-trained risk intelligence with insurance-backed protection and escrow-secured payments.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-[35%] space-y-2 sticky top-24 flex md:flex-col pb-4 md:pb-0 scrollbar-hide gap-2 md:gap-0">
            {solutionSegments.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center justify-between w-full min-w-[240px] md:min-w-0 px-6 py-4 rounded-xl text-left transition-all duration-200 ${
                  active === s.id ? 'bg-primary-blue text-white shadow-md' : 'bg-white border border-[#E2E8F0] text-[#4A5568] hover:bg-blue-light'
                }`}
              >
                <span className="text-[14px] font-bold">{s.sidebarLabel}</span>
                {active === s.id && <ArrowRight size={18} className="text-white" />}
              </button>
            ))}
          </div>

          <div className="w-full md:w-[65%] bg-white border border-[#E2E8F0] rounded-[24px] p-6 md:p-10 shadow-sm min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-8 border-b border-navy-900/10 pb-6">{activeData.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card content={activeData.content.card1} />
                  <Card content={activeData.content.card2} />
                  <Card content={activeData.content.card3} />
                  <Card content={activeData.content.card4} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
