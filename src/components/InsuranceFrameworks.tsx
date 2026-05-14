import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Landmark, 
  User, 
  Globe, 
  Building, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  BarChart3,
  Search,
  Download
} from 'lucide-react';

const frameworks = [
  {
    id: 'developer',
    label: 'Developers',
    icon: <Building2 size={24} />,
    title: 'Build With Confidence. Sell With Certainty.',
    who: ['Apartment builders (G+4 to G+40)', 'Plotted layout developers', 'Commercial project creators', 'Township developers'],
    challenges: ['Construction timeline uncertainties', 'Title verification complexities', 'Natural peril exposure', 'Post-handover structural concerns'],
    solutions: [
      {
        phase: 'Construction Phase',
        items: [
          { title: 'Contractor\'s All Risk Framework', desc: 'Material damage + third-party liability' },
          { title: 'Timeline Protection Framework', desc: 'Interest cost and overhead continuity' },
          { title: 'Seismic Risk Framework', desc: 'Data-driven rapid assessment mechanisms' }
        ]
      },
      {
        phase: 'Post-Construction & Sales',
        items: [
          { title: 'Structural Integrity Framework', desc: 'Long-term structural consideration' },
          { title: 'Title Confidence Framework', desc: 'Buyer and lender confidence enhancement' },
          { title: 'Transaction Stability Framework', desc: 'Booking continuity support mechanisms' }
        ]
      }
    ],
    metrics: [
      { feature: 'Segment-Specific Assessment', benefit: 'Context-aware risk understanding' },
      { feature: 'Portfolio Approach', benefit: 'Consolidated multiple projects' },
      { feature: 'Regulatory Alignment', benefit: 'Compliance documentation support' }
    ],
    success: {
      quote: "TRUSTFLOWS' structural integrity framework helped us build buyer confidence and streamline handover processes.",
      author: "Project Head, Pune Township"
    }
  },
  {
    id: 'lender',
    label: 'Lenders',
    icon: <Landmark size={24} />,
    title: 'Protect Your Collateral. Scale With Confidence.',
    who: ['HFCs', 'Bank housing loan divisions', 'NBFCs & fintech lenders', 'Commercial RE lenders'],
    challenges: ['Title verification post-disbursement', 'Collateral value protection', 'Borrower life event impact', 'Fraud prevention in digital workflows'],
    solutions: [
      {
        phase: 'Collateral Safeguards',
        items: [
          { title: 'Title Consideration (Portfolio)', desc: 'Pre-existing title support across portfolios' },
          { title: 'Collateral Protection Framework', desc: 'Multi-peril consideration integration' },
          { title: 'Valuation Integrity Framework', desc: 'Streamlined loan processing workflows' }
        ]
      },
      {
        phase: 'Borrower Risk Mitigation',
        items: [
          { title: 'Group Life Event Framework', desc: 'Enrollment and amortization alignment' },
          { title: 'Repayment Continuity Framework', desc: 'Support for hardship scenarios' },
          { title: 'Digital Integrity Framework', desc: 'AI-powered fraud detection integration' }
        ]
      }
    ],
    metrics: [
      { feature: 'Automated Coordination', benefit: 'Reduced manual monitoring overhead' },
      { feature: 'Streamlined Processing', benefit: 'Integrated efficient workflows' },
      { feature: 'Risk Reduction', benefit: 'Portfolio stability enhancement' }
    ],
    success: {
      quote: "Portfolio title framework reduced title-related portfolio concerns and streamlined legal coordination.",
      author: "Chief Risk Officer, Top 5 HFC"
    }
  },
  {
    id: 'homebuyer',
    label: 'Home Buyers',
    icon: <User size={24} />,
    title: 'Protect Your Biggest Investment. Day One to Legacy.',
    who: ['First-time home buyers', 'Growing families', 'Senior homeowners', 'Luxury & HNI owners'],
    challenges: ['Natural peril exposure', 'Personal asset/liability concerns', 'Life event impact on affordability', 'Long-term legacy planning'],
    solutions: [
      {
        phase: 'Essential Bundles',
        items: [
          { title: 'First-Time Buyer Framework', desc: 'Building, contents, and liability integration' },
          { title: 'Seismic Risk Framework', desc: 'Location-based rapid support trigger' },
          { title: 'Life Event Continuity', desc: 'Support for employment/health transitions' }
        ]
      },
      {
        phase: 'Advanced & Lifecycle',
        items: [
          { title: 'Family Home Comprehensive', desc: 'Extended structure and contents cover' },
          { title: 'Aging in Place Framework', desc: 'Emergency response and safety integration' },
          { title: 'Luxury Residence Framework', desc: 'Agreed consideration for high-value assets' }
        ]
      }
    ],
    metrics: [
      { feature: 'Location-Based Assessment', benefit: 'Context-aware risk understanding' },
      { feature: 'Rapid Support Pathways', benefit: 'Streamlined assistance triggers' },
      { feature: 'Integrated Approach', benefit: 'Consolidated lifecycle protection' }
    ],
    success: {
      quote: "The seismic risk framework provided peace of mind when minor structural concerns arose.",
      author: "Priya R., Bangalore Homebuyer"
    }
  },
  {
    id: 'nri',
    label: 'NRI Owners',
    icon: <Globe size={24} />,
    title: 'Own in India. Manage From Anywhere.',
    who: ['NRIs in US, UK, Canada, UAE', 'Remote property investors', 'Future retirement planners', 'Cross-border estate planners'],
    challenges: ['Remote monitoring coordination', 'Tenant management continuity', 'Authorization integrity concerns', 'Cross-border compliance'],
    solutions: [
      {
        phase: 'Remote Ownership',
        items: [
          { title: 'NRI Property Framework', desc: 'Building, contents, and liability' },
          { title: 'Remote Monitoring Framework', desc: 'Sensor integration and vendor oversight' },
          { title: 'Tenant Continuity Framework', desc: 'Rental flow and screening support' }
        ]
      },
      {
        phase: 'Legacy & Compliance',
        items: [
          { title: 'Authorization Integrity', desc: 'Proactive transaction alert mechanisms' },
          { title: 'Cross-Border Legacy', desc: 'Will and succession coordination' },
          { title: 'Currency Coordination', desc: 'Multi-currency premium options' }
        ]
      }
    ],
    metrics: [
      { feature: 'Global Support Access', benefit: 'Time zone and language coordination' },
      { feature: 'Remote Monitoring', benefit: 'Real-time property status visibility' },
      { feature: 'Authorization Protection', benefit: 'Integrity support for remote transactions' }
    ],
    success: {
      quote: "Authorization integrity framework provided proactive alerts when documentation concerns arose.",
      author: "Anil M., California NRI"
    }
  },
  {
    id: 'institutional',
    label: 'Institutional',
    icon: <Building size={24} />,
    title: 'Protect Assets. Ensure Continuity. Maximize Value.',
    who: ['REITs & Institutional investors', 'Commercial malls & warehouses', 'Educational/Healthcare chains', 'PSU asset managers'],
    challenges: ['Portfolio concentration risk', 'Operational continuity/system integrity', 'ESG compliance/Sustainability reporting', 'Governance framework adherence'],
    solutions: [
      {
        phase: 'Portfolio Frameworks',
        items: [
          { title: 'Portfolio Master Framework', desc: 'Consolidated visibility and analytics' },
          { title: 'Business Continuity Framework', desc: 'Operational interruption scenarios' },
          { title: 'Digital-Physical Integrity', desc: 'BMS and IoT coordination' }
        ]
      },
      {
        phase: 'Governance & ESG',
        items: [
          { title: 'Governance Liability Framework', desc: 'Fiduciary consideration for trustees' },
          { title: 'ESG & Sustainability Framework', desc: 'Green certification alignment support' },
          { title: 'Regulatory Coordination', desc: 'Automated reporting for audit-readiness' }
        ]
      }
    ],
    metrics: [
      { feature: 'Portfolio Analytics', benefit: 'Consolidated visibility and risk analysis' },
      { feature: 'ESG Framework Integration', benefit: 'Sustainability alignment support' },
      { feature: 'Regulatory Automation', benefit: 'Reduced compliance overhead' }
    ],
    success: {
      quote: "Portfolio master framework enabled rapid response to operational concerns across multiple assets.",
      author: "Asset Head, Listed REIT"
    }
  }
];

const InsuranceFrameworks = () => {
  const [activeTab, setActiveTab] = useState('homebuyer');

  React.useEffect(() => {
    const handleSetActive = (e: any) => {
      const { id } = e.detail;
      if (id) setActiveTab(id);
    };

    window.addEventListener('setActiveFramework', handleSetActive);
    return () => window.removeEventListener('setActiveFramework', handleSetActive);
  }, []);

  const current = frameworks.find(f => f.id === activeTab)!;

  return (
    <section id="insurance-frameworks" className="bg-[#F8FAFC] py-[100px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-primary-blue text-[11px] font-bold tracking-[3px] uppercase mb-4">INTEGRATED INSURANCE FRAMEWORKS</div>
          <h2 className="text-[42px] font-[900] text-navy-900 leading-[1.2] mb-6">
            Complete Property Protection. <span className="text-primary-blue">Zero Uncertainty.</span>
          </h2>
          <p className="text-[17px] text-[#4a4a6a] max-w-3xl mx-auto leading-[1.8] font-normal">
            We've built segment-specific frameworks that combine AI risk intelligence with IRDAI-aligned insurance to protect your property from day one to legacy.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {frameworks.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-[15px] transition-all duration-300 border ${
                activeTab === f.id 
                  ? 'bg-navy-900 text-white border-navy-900 shadow-xl' 
                  : 'bg-white text-navy-900 border-navy-900/5 hover:border-primary-blue'
              }`}
            >
              <span className={activeTab === f.id ? 'text-primary-blue' : 'text-navy-900/40'}>{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left Sidebar: Who & Challenges */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-[32px] border border-navy-900/5 shadow-sm">
                <h3 className="text-[20px] font-bold text-navy-900 mb-6 flex items-center gap-3">
                  <User size={20} className="text-primary-blue" />
                  Who This Is For
                </h3>
                <ul className="space-y-4">
                  {current.who.map((w, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-navy-900/90 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-blue shrink-0 mt-1.5" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-8 rounded-[32px] border border-red-100">
                <h3 className="text-[20px] font-bold text-red-900 mb-6 flex items-center gap-3">
                  <AlertTriangle size={20} className="text-red-600" />
                  Common Challenges
                </h3>
                <ul className="space-y-4">
                  {current.challenges.map((c, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-red-900 font-medium">
                      <span className="text-red-500 font-bold">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Middle: Solutions */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-10 rounded-[40px] border border-navy-900/5 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-full blur-3xl -mr-16 -mt-16" />
                <h3 className="text-[28px] font-[900] text-navy-900 mb-2 leading-tight">{current.title}</h3>
                <p className="text-[14px] text-navy-900/40 font-bold uppercase tracking-[2px] mb-10">Integrated Solutions</p>

                <div className="space-y-10">
                  {current.solutions.map((group, idx) => (
                    <div key={idx}>
                      <h4 className="text-[11px] font-bold text-primary-blue tracking-[2px] uppercase mb-6 flex items-center gap-2">
                        <ArrowRight size={14} className={idx === 1 ? 'rotate-[-45deg]' : ''} /> {group.phase}
                      </h4>
                      <div className="space-y-4">
                        {group.items.map((item, i) => (
                          <div key={i} className="flex gap-4 p-5 bg-[#F8FAFC] rounded-2xl border border-navy-900/10 hover:border-primary-blue/30 transition-all cursor-default group">
                            <CheckCircle2 size={20} className="text-primary-blue shrink-0" />
                            <div>
                              <div className="text-[15px] font-bold text-navy-900 leading-tight mb-1">{item.title}</div>
                              <div className="text-[13px] text-navy-900/70">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Metrics & Success */}
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-navy-900 text-white p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-transparent pointer-events-none" />
                <h3 className="text-[16px] font-bold mb-8 flex items-center gap-3">
                  <BarChart3 size={20} className="text-primary-blue" />
                  Value Framework
                </h3>
                <div className="space-y-6">
                  {current.metrics.map((m, i) => (
                    <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                      <div className="text-[13px] font-bold text-white mb-1">{m.feature}</div>
                      <div className="text-[11px] text-white/50">{m.benefit}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] border border-navy-900/5 italic relative">
                <span className="text-[64px] text-primary-blue/10 absolute -top-4 left-4 font-serif">“</span>
                <p className="text-[15px] text-navy-900/80 leading-[1.7] relative z-10 mb-6">
                  {current.success.quote}
                </p>
                <div className="text-[11px] font-bold text-primary-blue uppercase tracking-[2px]">— {current.success.author}</div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="w-full bg-primary-blue text-white py-5 rounded-2xl font-bold text-[15px] hover:bg-blue-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-blue/20">
                  Request Framework Details <ArrowRight size={18} />
                </button>
                <button className="w-full bg-white text-navy-900 border border-navy-900/10 py-4 rounded-2xl font-bold text-[13px] hover:bg-navy-900 hover:text-white transition-all flex items-center justify-center gap-2">
                  <Download size={16} /> Sample Overview
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Synthesis Bar */}
        <div className="mt-24 pt-12 border-t border-navy-900/10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center items-center">
            {['IRDAI', 'RERA', 'RBI', 'ISO 27001', 'DILRMP', 'MeitY', 'GDPR', 'AML'].map(label => (
              <span key={label} className="text-[12px] font-bold tracking-[3px] uppercase text-navy-900/40 hover:text-primary-blue transition-colors cursor-default">{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceFrameworks;
