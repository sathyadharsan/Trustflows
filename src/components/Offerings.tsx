import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface OfferingDetail {
  id: string;
  sidebarLabel: string;
  title: string;
  definition: string;
  benefits: string[];
  coverage: { item: string; detail: string }[];
  pricing: { tier: string; cover?: string; premium: string; bestFor?: string }[];
  useCase: { title: string; desc: string };
  exclusions?: string[];
}

const offeringData: OfferingDetail[] = [
  {
    id: 'title-insurance',
    sidebarLabel: '🛡️ Title Insurance',
    title: '🛡️ IRDAI-Aligned Title Insurance',
    definition: 'A financial guarantee that protects legal ownership against pre-existing defects. If a third party challenges your ownership due to past forgery, missing heirs, or Wakf claims, TRUSTFLOWS covers the insured amount + legal costs.',
    benefits: [
      'Protects against retrospective risks (pre-purchase defects)',
      'Covers 100% of legal defense costs in court',
      'One-time premium for lifetime protection',
      'Eliminates the need for 100% perfect manual due diligence'
    ],
    coverage: [
      { item: 'Forgery & Fraud', detail: 'Faked signatures or fraudulent impersonation of the true owner.' },
      { item: 'Missing Heirs', detail: 'Undisclosed legal heirs claiming ownership rights years later.' },
      { item: 'Invalid POA', detail: 'Sale deeds based on revoked or forged Power of Attorney.' },
      { item: 'Wakf/Govt Claims', detail: 'Land declared as Wakf or notified for govt acquisition.' }
    ],
    pricing: [
      { tier: 'Essential', cover: '₹25 Lakhs', premium: '0.15%', bestFor: 'Flats under ₹1 Cr' },
      { tier: 'Professional', cover: '₹1 Crore', premium: '0.12%', bestFor: 'Plots, houses up to ₹3 Cr' },
      { tier: 'Enterprise', cover: '₹25 Cr+', premium: 'Custom', bestFor: 'Commercial towers, bulk deals' }
    ],
    useCase: {
      title: 'The Pune Case',
      desc: 'Buyer bought a ₹2 Cr house. 3 years later, an undisclosed heir sued claiming a forged 1990 sale deed. TRUSTFLOWS fought the case and paid the full sum when the title failed.'
    },
    exclusions: ['Defects created after purchase', 'Environmental hazards', 'Market value downturn']
  },
  {
    id: 'escrow',
    sidebarLabel: '💰 Escrow Services',
    title: '💰 Digital Property Escrow',
    definition: 'RBI-compliant trust accounts where funds are held and released only after predefined conditions (like registration or construction milestones) are met, eliminating payment fraud.',
    benefits: [
      'Zero fund diversion by builders',
      'Safe payment for resale deals',
      'RBI & RERA compliant infrastructure',
      'Automated release on document verification'
    ],
    coverage: [
      { item: 'Buyer-Seller Escrow', detail: 'Released on registration of sale deed + possession.' },
      { item: 'Milestone Escrow', detail: 'Released on verified construction stages (Under-construction).' },
      { item: 'NRI Remote Escrow', detail: 'Safe cross-border deals with POA verification.' },
      { item: 'Token Advance', detail: 'Refunds if title defect is found during due diligence.' }
    ],
    pricing: [
      { tier: 'Up to ₹50L', premium: '0.25%', bestFor: 'Min ₹5,000' },
      { tier: '₹50L - ₹2 Cr', premium: '0.20%', bestFor: 'Standard residential' },
      { tier: 'Above ₹10 Cr', premium: '0.10%-0.12%', bestFor: 'Institutional/Bulk' }
    ],
    useCase: {
      title: 'Noida Project Protection',
      desc: '100 buyers used escrow. Builder tried to divert funds at 40% construction. Escrow blocked release until milestones were verified. Project finished on time.'
    }
  },
  {
    id: 'prop-insurance',
    sidebarLabel: '🏠 Property Insurance',
    title: '🏠 Structural & Asset Protection',
    definition: 'Traditional property insurance that protects the physical building and its contents from damage due to fire, natural disasters, or theft. Focuses on bricks, mortar, and belongings.',
    benefits: [
      '24x7 WhatsApp claim intimation',
      'Surveyor assigned within 48 hours',
      'Fast settlement (7-15 working days)',
      'Covers structural repair and interior loss'
    ],
    coverage: [
      { item: 'Natural Perils', detail: 'Fire, earthquake, flood, storm, and lightning.' },
      { item: 'Theft & Burglary', detail: 'Loss of furniture, electronics, and valuables.' },
      { item: 'Pipe Bursts', detail: 'Water damage from plumbing or tank leakages.' },
      { item: 'Impact Damage', detail: 'Damage from vehicles crashing into the structure.' }
    ],
    pricing: [
      { tier: 'Basic', premium: '₹2,500/yr', bestFor: 'Structure only (Up to ₹1Cr)' },
      { tier: 'Standard', premium: '₹5,000/yr', bestFor: 'Structure + Contents (Up to ₹3Cr)' },
      { tier: 'Comprehensive', premium: '₹12,000/yr', bestFor: 'All risks (Up to ₹10Cr+)' }
    ],
    useCase: {
      title: 'Chennai Flood Recovery',
      desc: 'Ground floor villa submerged in floods. TRUSTFLOWS processed a ₹8 Lakh claim for structural repair and damaged furniture within 10 days.'
    }
  },
  {
    id: 'digital-owner',
    sidebarLabel: '👤 Digital Owner Insurance',
    title: '👤 Digital Owner (NRI Protection)',
    definition: 'Specialized insurance for NRIs and investors to protect against risks of owning property remotely, including tenant issues and unauthorized occupation.',
    benefits: [
      'Protects against rent default',
      'Covers legal fees for squatter eviction',
      'Reimbursement for document recreation',
      'Indemnity against remote identity theft'
    ],
    coverage: [
      { item: 'Rent Default', detail: 'Up to 12 months rent payout if tenant stops paying.' },
      { item: 'Squatter Removal', detail: 'Police + legal assistance to remove illegal occupants.' },
      { item: 'Eviction Costs', detail: 'Covers court fees and lawyer charges for eviction.' },
      { item: 'Broker Fraud', detail: 'Protection against local agents absconding with rent.' }
    ],
    pricing: [
      { tier: 'Standard Plan', premium: '0.25%/year', bestFor: 'Min ₹5,000' }
    ],
    useCase: {
      title: 'Gurgaon NRI Success',
      desc: 'NRI in USA had a tenant who stopped paying. TRUSTFLOWS paid 10 months of lost rent and managed the legal eviction process remotely.'
    }
  },
  {
    id: 'loan-guarantee',
    sidebarLabel: '🏦 Loan Guarantees',
    title: '🏦 Lender & Borrower Guarantees',
    definition: 'A credit enhancement product that guarantees loan repayment if the title fails. It enables banks to lend on properties with minor title gaps or B-Khata issues.',
    benefits: [
      'Lower NPA risk for banks',
      'Enable loans on disputed/weak titles',
      'Faster developer sales through bank tie-ups',
      'Repayment guarantee if project is delayed'
    ],
    coverage: [
      { item: 'Lender Title Guarantee', detail: 'Protects bank\'s mortgage interest against title defects.' },
      { item: 'Buyer Loan Guarantee', detail: 'Guarantees repayment if project is delayed >12 months.' },
      { item: 'B-Khata Lending', detail: 'Enables financing for properties with minor administrative gaps.' },
      { item: 'Default Protection', detail: 'Payout to lender if property is lost to a title dispute.' }
    ],
    pricing: [
      { tier: 'Lender Tier', premium: '0.10%', bestFor: 'One-time on loan amount' }
    ],
    useCase: {
      title: 'Bangalore B-Khata Loan',
      desc: 'Buyer rejected by 3 banks for B-Khata. TRUSTFLOWS issued a title guarantee. Bank approved the loan within 7 days.'
    }
  },
  {
    id: 'legal-defense',
    sidebarLabel: '⚖️ Legal Defense',
    title: '⚖️ Legal Defense Insurance',
    definition: 'Covers the high cost of defending your ownership in court, regardless of whether the defect is covered by title insurance. Essential for boundary or frivolous claims.',
    benefits: [
      'Covers lawyer fees (up to ₹5 Lakhs)',
      'Covers court fees and stamp duties',
      'Expert witness & surveyor costs included',
      'Counter-suit legal support'
    ],
    coverage: [
      { item: 'Boundary Disputes', detail: 'Defending against neighbor\'s encroachment claims.' },
      { item: 'Frivolous Suits', detail: 'Fighting false claims from previous owners\' heirs.' },
      { item: 'Demolition Notices', detail: 'Challenging unauthorized municipal notices in court.' },
      { item: 'RERA Complaints', detail: 'Legal help to file complaints against developers.' }
    ],
    pricing: [
      { tier: 'Standalone', premium: '₹3,000/yr', bestFor: 'Basic residential' },
      { tier: 'Add-on', premium: '+15%', bestFor: 'Added to Title Insurance' }
    ],
    useCase: {
      title: 'Kolkata Land Dispute',
      desc: 'Neighbor filed a false claim on a common wall. TRUSTFLOWS assigned a senior lawyer and covered ₹1.2 Lakhs in court costs. Dispute settled in 6 months.'
    }
  },
  {
    id: 'fraud-monitoring',
    sidebarLabel: '🚨 Fraud Monitoring',
    title: '🚨 Post-Purchase Monitoring',
    definition: 'Continuous surveillance of land records and court registries to alert you the moment any fraudulent activity is attempted on your property.',
    benefits: [
      'Real-time SMS/Email alerts',
      'Automatic freeze requests to registrars',
      'Early detection of "fake mortgage" attempts',
      'Investigation support by legal team'
    ],
    coverage: [
      { item: 'Registration Alerts', detail: 'If anyone tries to register a sale deed on your survey number.' },
      { item: 'Mortgage Monitor', detail: 'Detection of loans taken using your property as collateral.' },
      { item: 'Tax Record Changes', detail: 'Alerts if ownership name changes in municipal records.' },
      { item: 'Litigation Scan', detail: 'If any new court case mentions your property.' }
    ],
    pricing: [
      { tier: '1st Property', premium: '₹1,999/yr', bestFor: 'Main residence' },
      { tier: 'Additional', premium: '₹999/yr', bestFor: 'Investment units' }
    ],
    useCase: {
      title: 'Jaipur Plot Alert',
      desc: 'Owner received alert that someone tried to update tax records for his vacant plot. TRUSTFLOWS legal team intervened at the municipal office, stopping a fraudulent sale.'
    }
  },
  {
    id: 'trust-report',
    sidebarLabel: '🔍 Risk & Trust Score',
    title: '🔍 AI Risk Intelligence Report',
    definition: 'The foundation of trust — a deep-dive AI report giving a score of 0-100 after analyzing 50 years of title history, encumbrances, and local risks.',
    benefits: [
      '99.1% data accuracy guarantee',
      'Unified property trust score',
      'Detailed 50-year title chain chain',
      'Segment-specific risk algorithms'
    ],
    coverage: [
      { item: 'Title Chain (50yr)', detail: 'Tracing from original govt grant to current seller.' },
      { item: 'Litigation Search', detail: 'Scanning 10,000+ courts for survey-specific cases.' },
      { item: 'Govt DB Connectors', detail: 'Live sync with DILRMP, RERA, and Land Records.' },
      { item: 'Local Risk Scan', detail: 'Wakf, Acquisition, and Zoning overlap checks.' }
    ],
    pricing: [
      { tier: 'Resale Flat', premium: '₹7,999', bestFor: '48hr delivery' },
      { tier: 'Freehold Plot', premium: '₹24,999', bestFor: '72hr delivery' },
      { tier: 'Commercial', premium: '₹49,999', bestFor: '5-day delivery' }
    ],
    useCase: {
      title: 'Tellapur Plot Scan',
      desc: 'AI flagged a 1987 Wakf board claim hidden in old registers. Buyer avoided a ₹3.5 Cr loss on a "clear" plot.'
    }
  }
];

const Offerings = () => {
  const [active, setActive] = useState('title-insurance');

  useEffect(() => {
    const handleSetActive = (e: any) => {
      if (e.detail && e.detail.id) {
        setActive(e.detail.id);
        const section = document.getElementById('offerings');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('setActiveOffering', handleSetActive);
    return () => window.removeEventListener('setActiveOffering', handleSetActive);
  }, []);

  const data = offeringData.find(o => o.id === active)!;

  return (
    <section id="offerings" className="bg-white py-[80px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">OUR SOLUTIONS & OFFERINGS</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            Eight Products. <span className="text-primary-blue">Complete Transaction Certainty.</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[760px] mx-auto font-normal">
            From IRDAI-aligned insurance to RBI-compliant escrow — we’ve built the trust infrastructure for India’s property market.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* SIDEBAR */}
          <div className="w-full lg:w-[30%] space-y-2 sticky top-24 flex lg:flex-col pb-4 lg:pb-0 scrollbar-hide gap-2 lg:gap-0">
            {offeringData.map((o) => (
              <button
                key={o.id}
                onClick={() => setActive(o.id)}
                className={`flex items-center justify-between w-full min-w-[200px] lg:min-w-0 px-6 py-4 rounded-xl text-left transition-all duration-200 border ${
                  active === o.id 
                    ? 'bg-primary-blue text-white border-primary-blue shadow-lg' 
                    : 'bg-white border-[#E2E8F0] text-[#1a1a2e] hover:bg-blue-light hover:border-primary-blue/30'
                }`}
              >
                <span className="text-[15px] font-semibold">{o.sidebarLabel}</span>
                {active === o.id && <ArrowRight size={16} className="text-white" />}
              </button>
            ))}
          </div>

          {/* DETAIL PANEL */}
          <div className="w-full lg:w-[70%] bg-[#F5F7FA] border border-[#E2E8F0] rounded-[32px] p-6 lg:p-10 shadow-sm min-h-[700px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 pb-8 border-b border-navy-900/10">
                  <div className="max-w-xl">
                    <h3 className="text-[24px] font-semibold text-[#0a0a1a] leading-[1.4] mb-4">{data.title}</h3>
                    <p className="text-[15px] text-[#4a4a6a] leading-[1.8] font-normal italic">"{data.definition}"</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-primary-blue/10 shadow-sm shrink-0 w-full md:w-auto">
                    <div className="text-[11px] font-bold text-[#185FA5] tracking-[1.5px] uppercase mb-3">KEY BENEFITS</div>
                    <ul className="space-y-2">
                      {data.benefits.map((b, i) => (
                        <li key={i} className="flex gap-2 text-[13px] font-normal text-[#1a1a2e] leading-[1.7]">
                          <CheckCircle2 size={14} className="text-primary-blue shrink-0 mt-0.5" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* COVERAGE */}
                  <div>
                    <h4 className="text-[11px] font-bold text-[#185FA5] tracking-[1.5px] uppercase mb-6 flex items-center gap-2">
                      <ShieldCheck size={16} /> WHAT IT COVERS
                    </h4>
                    <div className="space-y-4">
                      {data.coverage.map((c, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-navy-900/5 hover:border-primary-blue/20 transition-all">
                          <div className="text-[13px] font-bold text-[#0a0a1a] mb-1">{c.item}</div>
                          <p className="text-[11px] text-[#4a4a6a] leading-snug">{c.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PRICING TIERS */}
                  <div>
                    <h4 className="text-[11px] font-bold text-[#185FA5] tracking-[1.5px] uppercase mb-6 flex items-center gap-2">
                      <ArrowRight size={16} className="rotate-[-45deg]" /> PRICING & TIERS
                    </h4>
                    <div className="space-y-3">
                      {data.pricing.map((p, i) => (
                        <div key={i} className="bg-navy-900 text-white p-4 rounded-xl flex justify-between items-center group">
                          <div>
                            <div className="text-[13px] font-bold">{p.tier}</div>
                            {p.bestFor && <div className="text-[11px] text-white/50">{p.bestFor}</div>}
                          </div>
                          <div className="text-right">
                            <div className="text-[22px] font-bold text-primary-blue leading-tight">{p.premium}</div>
                            {p.cover && <div className="text-[9px] text-white/40 uppercase tracking-widest">Cover: {p.cover}</div>}
                          </div>
                        </div>
                      ))}
                    </div>

                    {data.exclusions && (
                      <div className="mt-8 bg-red-50 p-4 rounded-xl border border-red-100">
                        <h5 className="text-[11px] font-bold text-red-600 tracking-[1.5px] uppercase mb-2">NOT COVERED</h5>
                        <ul className="grid grid-cols-1 gap-1">
                          {data.exclusions.map((ex, i) => (
                            <li key={i} className="text-[11px] text-red-800 flex gap-2">
                              <span className="opacity-50">•</span> {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* USE CASE */}
                <div className="bg-primary-blue text-white rounded-[24px] p-8 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.15),transparent_50%)]" />
                  <div className="relative z-10">
                    <h4 className="text-[11px] font-bold text-white/50 tracking-[1.5px] uppercase mb-4 flex items-center gap-2">
                      <HelpCircle size={14} /> REAL-WORLD USE CASE
                    </h4>
                    <div className="text-[24px] font-semibold mb-3 leading-[1.4]">{data.useCase.title}</div>
                    <p className="text-[15px] leading-[1.8] text-white/90 italic font-normal">
                      "{data.useCase.desc}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
