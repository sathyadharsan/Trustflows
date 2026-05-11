import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Star, Target, Zap, MapPin, TrendingUp, Building, Shield, Award, Heart, Lock, CheckCircle, Receipt, Gavel, Coins, Bell } from 'lucide-react';

const solutionSegments = [
  {
    id: 'segment-ai',
    sidebarLabel: '🧠 Segment-Specific AI',
    title: '🧠 Segment-Specific AI Models',
    subtitle: 'Different AI for different property types',
    content: {
      card1: { header: 'WHAT IT MEANS', icon: <Brain size={18} />, points: ['Flat AI — checks society dues, illegal floors, tax', 'Plot AI — checks fake documents, Wakf claims, heirship', 'Commercial AI — checks land use, tenant lock-in, GST dues'] },
      card2: { header: 'BENEFIT', icon: <Star size={18} />, points: ['Generic lawyer checks 5 documents — we check 23+', 'Catches hidden risks before you pay advance', 'Saves ₹2L–₹15L in potential loss'] },
      card3: { header: 'PROOF', icon: <Target size={18} />, points: ['99.1% accuracy across 5M+ property records', 'Validated by 10+ major banks'] },
      card4: { header: 'WHY WE ARE DIFFERENT', icon: <Zap size={18} />, points: ['Others use one model for all properties', 'We use a dedicated AI for YOUR property type'], isBlue: true }
    }
  },
  {
    id: 'city-engines',
    sidebarLabel: '🏙️ City-Trained Engines',
    title: '🏙️ City-Trained Risk Engines',
    subtitle: 'Each city has its own trained AI model',
    content: {
      card1: { header: 'WHAT IT MEANS', icon: <MapPin size={18} />, points: ['Mumbai AI — knows SRA flat rules', 'Bangalore AI — knows A-Khata vs B-Khata', 'Chennai AI — knows Patta/Chitta issues'] },
      card2: { header: 'BENEFIT', icon: <TrendingUp size={18} />, points: ['City-specific fraud caught — not missed', 'Live connection to 20 city land record databases', 'Updated daily — not outdated data'] },
      card3: { header: 'COVERAGE', icon: <Building size={18} />, points: ['20 cities — Mumbai, Delhi, Bangalore, Chennai + 16 more', 'On-ground legal partners in every city'] },
      card4: { header: 'WHY WE ARE DIFFERENT', icon: <Zap size={18} />, points: ['Others use one national model — misses local fraud', 'Mumbai fraud ≠ Bangalore fraud — we know the difference'], isBlue: true }
    }
  },
  {
    id: 'universal-insurance',
    sidebarLabel: '🛡️ Universal Insurance',
    title: '🛡️ Universal Title Insurance',
    subtitle: 'Protect your ownership — for life',
    content: {
      card1: { header: 'WHAT IT COVERS', icon: <Shield size={18} />, points: ['Forged sale deed — previous owner\'s signature was faked', 'Missing heir claims — long-lost son claims ownership', 'Wakf board claims — land declared as mosque property', 'Hidden mortgage — loan on property before your purchase'] },
      card2: { header: 'BENEFIT', icon: <Award size={18} />, points: ['Works for every property — flat, plot, house, shop', 'From ₹25L flat to ₹50Cr commercial tower', 'We pay up to ₹10 Crore if you lose ownership'] },
      card3: { header: 'PEACE OF MIND', icon: <Heart size={18} />, points: ['Someone challenges your property after purchase?', 'We assign lawyer, fight the case, reimburse your loss', 'Your life savings stay 100% safe'] },
      card4: { header: 'WHY WE ARE DIFFERENT', icon: <Zap size={18} />, points: ['Lawyer gives opinion — we give financial guarantee', 'If you lose the property — we pay you. Simple.'], isBlue: true }
    }
  },
  {
    id: 'milestone-escrow',
    sidebarLabel: '💰 Milestone Escrow',
    title: '💰 Milestone-Secured Escrow',
    subtitle: 'Your money moves only when documents are verified',
    content: {
      card1: { header: 'WHAT IT MEANS', icon: <Lock size={18} />, points: ['Your payment sits in RBI-approved escrow account', 'Money goes to seller only after sale deed registered', 'Under-construction — released stage by stage'] },
      card2: { header: 'BENEFIT', icon: <CheckCircle size={18} />, points: ['Builder cannot divert your money — ever', 'Seller cannot vanish after taking advance', 'NRI? Close deal remotely — 100% safe'] },
      card3: { header: 'REFUND POLICY', icon: <Receipt size={18} />, points: ['Deal fails due to title defect we found?', 'Full escrow fee refunded — you pay nothing'] },
      card4: { header: 'WHY WE ARE DIFFERENT', icon: <Zap size={18} />, points: ['Without escrow — builders divert, sellers vanish', 'With TrustFlows — money moves only after verification'], isBlue: true }
    }
  },
  {
    id: 'legal-defense',
    sidebarLabel: '⚖️ Legal Defense',
    title: '⚖️ Integrated Legal Defense',
    subtitle: 'We defend your ownership — even after purchase',
    content: {
      card1: { header: 'WHAT IT COVERS', icon: <Gavel size={18} />, points: ['Neighbor files boundary dispute case', 'Previous owner heir claims your property', 'Municipal corporation sends demolition notice'] },
      card2: { header: 'WHAT WE PAY', icon: <Coins size={18} />, points: ['Lawyer fees — up to ₹5 Lakhs per case', 'Court fees — up to ₹1 Lakh', 'Expert witness fees — up to ₹50,000'] },
      card3: { header: 'VIGILANCE', icon: <Bell size={18} />, points: ['We monitor your property 24/7', 'Fraud attempt detected — we act within 24 hours', 'You get alerted before you even know about it'] },
      card4: { header: 'WHY WE ARE DIFFERENT', icon: <Zap size={18} />, points: ['Others verify before purchase — then disappear', 'We stay with you for life — monitor, alert, defend'], isBlue: true }
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
      className={`relative bg-white border rounded-[20px] px-[20px] py-[18px] shadow-sm transition-all hover:translate-y-[-2px] hover:border-primary-blue hover:shadow-xl cursor-pointer overflow-hidden flex flex-col h-full ${
        isPulsing ? 'animate-border-pulse' : ''
      } ${content.isBlue ? 'border-primary-blue bg-[#E6F1FB] shadow-[0_8px_32px_rgba(0,102,255,0.1)]' : ''}`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${content.isBlue ? 'bg-primary-blue text-white' : 'bg-blue-light text-primary-blue'}`}>
          {content.icon}
        </div>
        <div className="flex-1">
          <div className={`text-[11px] font-bold tracking-[1.5px] uppercase mb-3 text-[#185FA5]`}>
            {content.header}
          </div>
          <ul className="space-y-2">
            {content.points.map((point: string, i: number) => (
              <li key={i} className="flex gap-2 text-[15px] text-[#1a1a2e] font-normal leading-[1.8]">
                <span className="text-[#185FA5]">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
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
    <section id="solutions" className="bg-[#EEF2FF] py-[80px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">OUR SOLUTION</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            The TRUSTFLOWS <span className="text-primary-blue">Difference</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[760px] mx-auto font-normal">
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
                  active === s.id ? 'bg-primary-blue text-white shadow-md' : 'bg-white border border-[#E2E8F0] text-[#1a1a2e] hover:bg-blue-light'
                }`}
              >
                <span className="text-[15px] font-semibold">{s.sidebarLabel}</span>
                {active === s.id && <ArrowRight size={18} className="text-white" />}
              </button>
            ))}
          </div>

          <div className="w-full md:w-[65%] bg-white border border-[#E2E8F0] rounded-[32px] p-6 md:p-10 shadow-sm min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="mb-8 border-b border-navy-900/10 pb-6">
                  <h3 className="text-[24px] font-semibold text-[#0a0a1a] leading-[1.4] mb-1">{activeData.title}</h3>
                  <p className="text-[#4a4a6a] font-normal text-[13px] leading-[1.7]">{activeData.subtitle}</p>
                </div>
                <div className="flex flex-col gap-4 mb-8">
                  <Card content={activeData.content.card1} />
                  <Card content={activeData.content.card2} />
                  <Card content={activeData.content.card3} />
                  <Card content={activeData.content.card4} />
                </div>
                <button className="w-full py-4 bg-primary-blue text-white rounded-xl font-semibold text-[15px] tracking-[0.3px] hover:bg-blue-dark transition-all flex items-center justify-center gap-2">
                  Get Free Report <ArrowRight size={18} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
