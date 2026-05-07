import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const segments = [
  {
    id: 'flat',
    name: 'Resale Flat',
    icon: '🏢',
    who: ['First-time buyers (5-20 yr old flat)', 'NRIs buying in parent\'s city', 'Investors targeting yield'],
    risks: ['Hidden maintenance dues (₹50K–₹5L)', 'Illegal alterations & civic fines', 'POA sales without conveyance'],
    checks: ['Society NOC approval', '24-month maintenance audit', 'Property tax clearance'],
    alsoInclude: ['Conveyance deed & land title status', 'Illegal construction vs sanctioned plan', 'Encumbrance — 30 years mortgage history'],
    case: {
      location: 'Pune',
      text: 'Found ₹4.5 Lakhs unpaid tax + society parking dispute. Saved ₹6 Lakhs upfront.'
    },
    roi: { cost: '₹7,999 – ₹24,999', saved: '₹2L – ₹15L' }
  },
  {
    id: 'house',
    name: 'Houses & Villas',
    icon: '🏡',
    who: ['Bungalow & villa buyers', 'Row house purchasers', 'Gated community buyers'],
    risks: ['Illegal extra floors', 'Missing Occupancy Certificate', 'Undisclosed easement rights'],
    checks: ['Sanctioned plan vs as-built', 'OC/CC certificate verification', 'Betterment charges audit'],
    alsoInclude: ['Easement rights — right of way, drainage', 'Title chain 50+ years from original grant', 'Unauthorized borewell / septic tank check'],
    case: {
      location: 'Lucknow',
      text: 'Found undischarged 1998 mortgage + missing OC. Avoided ₹2.2 Crore loss.'
    },
    roi: { cost: '₹7,999 – ₹24,999', saved: '₹20L – ₹1 Crore' }
  },
  {
    id: 'plot',
    name: 'Freehold Plots',
    icon: '🌾',
    badge: '⚠️ HIGHEST RISK',
    who: ['NA / non-agricultural plot buyers', 'Layout investors', 'Agricultural-to-NA buyers'],
    risks: ['Fake mother deeds (most common)', 'Wakf board overlap claims', 'Govt acquisition notices'],
    checks: ['Original mother deed — trace to 1920s', 'Heirship & succession validation', 'Wakf overlap scan'],
    alsoInclude: ['Acquisition notification — 30 years records', 'NA order from DC/Collector must exist', 'Encumbrance — 40 year continuous chain'],
    case: {
      location: 'Hyderabad',
      text: 'AI flagged 1987 Wakf board claim on Tellapur plot. Saved ₹3.5 Crore.'
    },
    roi: { cost: '₹24,999 – ₹49,999', saved: 'Up to ₹5 Crore' }
  },
  {
    id: 'layout',
    name: 'Layouts',
    icon: '🏘️',
    who: ['DTCP/TP approved layout buyers', 'Licensed layout investors', 'Gram Panchayat layout buyers'],
    risks: ['Unclear individual plot titles', 'Illegal sale of open spaces', 'Developer land mortgage fraud'],
    checks: ['Parent title verification', 'Layout plan authentication', 'Open space earmarking'],
    alsoInclude: ['Infra completion certificate — roads, water', 'Individual plot survey number reconstitution', 'Betterment charges outstanding per plot'],
    case: {
      location: 'Near Surat',
      text: 'Developer mortgaged land to NBFC secretly. Saved 30 buyers ₹8 Crores.'
    },
    roi: { cost: '₹24,999 – ₹49,999', saved: '₹8 Crore+' }
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: '🏪',
    who: ['Office & IT park buyers', 'Retail shop purchasers', 'Warehouse investors'],
    risks: ['No separate unit title deed', 'Leasehold land restrictions', 'Zoning violation for business'],
    checks: ['Individual unit title audit', 'Land use zone verification', 'Statutory dues audit'],
    alsoInclude: ['Leasehold to freehold conversion status', 'Tenant/lessee rights — hidden perpetual leases', 'Fire NOC, lift NOC, occupancy certificate'],
    case: {
      location: 'Real Reality',
      text: 'Missing land-use zone cert can cancel business license overnight.'
    },
    roi: { cost: '₹25,000 (Shop)', saved: '₹50L – ₹2 Cr' }
  }
];

const PropertySegments = () => {
  const [activeTab, setActiveTab] = useState('flat');

  const activeData = segments.find(s => s.id === activeTab)!;

  return (
    <section id="segments" className="bg-navy-900 py-[100px] px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-gold-500 mb-4">
            Property Coverage
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] mb-6 text-white">
            Coverage for <span className="text-gold-400">Every Property Segment</span>
          </h2>
          <p className="text-[16px] text-white/70 leading-relaxed max-w-[620px] mx-auto">
            Click your property type to see exact risks and what we verify.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {segments.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === s.id 
                  ? 'bg-gold-500/10 border-gold-500/50 text-gold-400 border-[1.5px]' 
                  : 'bg-white/5 border-white/10 text-white/70 border hover:border-gold-500/30 hover:text-white'
              }`}
            >
              <span>{s.icon}</span>
              {s.name}
              {s.badge && (
                <span className="bg-red-500/15 border border-red-500/40 text-[#ff6b6b] text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full ml-1">
                  HIGHEST RISK
                </span>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Box 1 */}
            <div className="bg-white/[0.03] border border-gold-500/20 rounded-2xl p-8">
              <h4 className="font-serif text-base font-semibold text-gold-400 mb-6 uppercase tracking-wider">Who This Is For</h4>
              <ul className="space-y-4">
                {activeData.who.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2 */}
            <div className="bg-white/[0.03] border border-gold-500/20 rounded-2xl p-8">
              <h4 className="font-serif text-base font-semibold text-gold-400 mb-6 uppercase tracking-wider">Top Risks We Find</h4>
              <ul className="space-y-4">
                {activeData.risks.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3 */}
            <div className="bg-white/[0.03] border border-gold-500/20 rounded-2xl p-8">
              <h4 className="font-serif text-base font-semibold text-gold-400 mb-6 uppercase tracking-wider">What We Verify</h4>
              <ul className="space-y-4">
                {activeData.checks.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 4 (NEW) */}
            <div className="bg-white/[0.03] border border-gold-500/20 rounded-2xl p-8">
              <h4 className="font-serif text-base font-semibold text-gold-400 mb-6 uppercase tracking-wider">Our Checks Also Include</h4>
              <ul className="space-y-4">
                {activeData.alsoInclude.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-1.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 md:col-span-2 bg-gold-500/5 border border-gold-500/30 rounded-2xl p-6">
              <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-gold-500 mb-3">📍 Case Study — {activeData.case.location}</div>
              <p className="text-sm text-white/80 leading-relaxed italic">
                {activeData.case.text}
              </p>
            </div>

            <div className="col-span-1 md:col-span-2 bg-navy-800 border border-gold-500/20 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-8">
                <div>
                  <div className="text-[11px] text-white/40 uppercase tracking-wider mb-1">Your investment</div>
                  <div className="font-accent text-2xl text-gold-400 tracking-wider">{activeData.roi.cost}</div>
                </div>
                <div>
                  <div className="text-[11px] text-white/40 uppercase tracking-wider mb-1">Potential loss avoided</div>
                  <div className="font-accent text-2xl text-green-400 tracking-wider">{activeData.roi.saved}</div>
                </div>
              </div>
              <button className="bg-gradient-to-br from-gold-500 to-gold-400 text-navy-900 px-8 py-3 rounded-lg font-bold text-sm transition-all hover:translate-y-[-1px] hover:shadow-[0_8px_20px_rgba(201,168,76,0.3)]">
                Protect My {activeData.name} →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PropertySegments;
