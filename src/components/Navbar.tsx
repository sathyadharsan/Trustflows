import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
  dropdown?: {
    header: string;
    items: {
      icon: string;
      title: string;
      desc: string;
      id: string;
      section: string;
    }[];
  };
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '#hero',
    dropdown: {
      header: 'TRUSTFLOWS',
      items: [
        { icon: '🏠', title: 'Back to Top', desc: "India's #1 Property Trust Platform", id: 'hero', section: '#hero' },
        { icon: '⭐', title: 'Trust Score', desc: 'Get free AI property risk score', id: 'hero', section: '#hero' },
        { icon: '📞', title: 'Talk to Advisor', desc: 'City-specific consultation', id: 'footer', section: '#footer' },
        { icon: '📍', title: 'Our Cities', desc: '20 major Indian cities covered', id: 'cities', section: '#cities' },
      ]
    }
  },
  {
    label: 'Offerings',
    href: '#offerings',
    dropdown: {
      header: 'OUR 8 PRODUCTS',
      items: [
        { icon: '🔍', title: 'AI Trust Report', desc: 'Risk score in 48 hours — ₹7,999 onwards', id: 'trust-report', section: '#offerings' },
        { icon: '🛡️', title: 'Title Insurance', desc: 'IRDAI-aligned — 0.10% to 0.15%', id: 'title-insurance', section: '#offerings' },
        { icon: '🏠', title: 'Property Insurance', desc: 'Physical structure — ₹2,500/yr onwards', id: 'prop-insurance', section: '#offerings' },
        { icon: '👤', title: 'Digital Owner Insurance', desc: 'NRI & remote owners — 0.25%/yr', id: 'digital-owner', section: '#offerings' },
        { icon: '💰', title: 'Escrow Services', desc: 'Safe payment — 0.15% to 0.25%', id: 'escrow', section: '#offerings' },
        { icon: '🏦', title: 'Loan Guarantees', desc: 'Banks & NBFCs — 0.10% of loan', id: 'loan-guarantee', section: '#offerings' },
        { icon: '⚖️', title: 'Legal Defense Insurance', desc: 'Court costs — ₹3,000/yr', id: 'legal-defense', section: '#offerings' },
        { icon: '🚨', title: 'Fraud Monitoring', desc: 'Post-purchase alerts — ₹1,999/yr', id: 'fraud-monitoring', section: '#offerings' },
      ]
    }
  },
  {
    label: 'Segments',
    href: '#segments',
    dropdown: {
      header: 'PROPERTY SEGMENTS',
      items: [
        { icon: '🏢', title: 'Resale Flats', desc: 'Society built apartments', id: 'resale-flat', section: '#segments' },
        { icon: '🏡', title: 'Independent Houses', desc: 'Bungalows, villas, row houses', id: 'house', section: '#segments' },
        { icon: '🌾', title: 'Freehold Plots', desc: 'NA plots, agricultural (Highest Risk)', id: 'plot', section: '#segments' },
        { icon: '🏘️', title: 'Freehold Layouts', desc: 'Developer plotted developments', id: 'layout', section: '#segments' },
        { icon: '🏪', title: 'Commercial Properties', desc: 'Offices, shops, warehouses', id: 'commercial', section: '#segments' },
        { icon: '🏗️', title: 'Developer Flats', desc: 'Under-construction, RERA projects', id: 'dev-flat', section: '#segments' },
        { icon: '🏛️', title: 'Govt Scheme Properties', desc: 'DDA, MHADA, BDA, LDA', id: 'govt', section: '#segments' },
        { icon: '🏭', title: 'Resale Commercial', desc: 'Mixed-use, old market shops', id: 'resale-comm', section: '#segments' },
      ]
    }
  },
  {
    label: 'Problem',
    href: '#problem',
    dropdown: {
      header: 'THE MARKET PROBLEM',
      items: [
        { icon: '🏢', title: 'Resale Flat (Apartment)', desc: 'Undisclosed society dues, tax, illegal alterations', id: 'flat', section: '#problem' },
        { icon: '🌾', title: 'Freehold Plot', desc: 'Fake mother deed, inheritance chain, Wakf claims', id: 'plot', section: '#problem' },
        { icon: '🏘️', title: 'Freehold Layout', desc: 'Unapproved plan, missing conversion, no completion cert', id: 'layout', section: '#problem' },
        { icon: '🏪', title: 'Commercial Property', desc: 'Illegal tenancy, GST dues, business license defects', id: 'commercial', section: '#problem' },
        { icon: '🏗️', title: 'Developer Flat (Under Construction)', desc: 'Delayed possession, fund diversion, RERA violation', id: 'developer', section: '#problem' },
        { icon: '🏡', title: 'Resale Independent House', desc: 'Unauthorized floors, deviation from plan, easement disputes', id: 'house', section: '#problem' },
      ]
    }
  },
  {
    label: 'Solutions',
    href: '#solutions',
    dropdown: {
      header: 'THE TRUSTFLOWS DIFFERENCE',
      items: [
        { icon: '🧠', title: 'Segment AI', desc: 'Custom algorithms per property type', id: 'segment-ai', section: '#solutions' },
        { icon: '🏙️', title: 'City-Trained Engines', desc: 'Mumbai, Pune, Kolkata city models', id: 'city-engines', section: '#solutions' },
        { icon: '🛡️', title: 'Universal Insurance', desc: 'Works across all segments', id: 'universal-insurance', section: '#solutions' },
        { icon: '💰', title: 'Milestone Escrow', desc: 'Released only on verified docs', id: 'milestone-escrow', section: '#solutions' },
        { icon: '⚖️', title: 'Legal Defense', desc: 'We fight for you if dispute arises', id: 'legal-defense', section: '#solutions' },
      ]
    }
  },
  {
    label: 'Stakeholders',
    href: '#stakeholders',
    dropdown: {
      header: 'FOR EVERY PARTICIPANT',
      items: [
        { icon: '👨‍👩‍👧', title: 'First-Time Buyer', desc: 'Trust score + hidden dues check', id: 'buyer', section: '#stakeholders' },
        { icon: '🌍', title: 'NRI', desc: 'Remote verification + escrow', id: 'nri', section: '#stakeholders' },
        { icon: '💼', title: 'Investor', desc: 'Title insurance + flip protection', id: 'investor', section: '#stakeholders' },
        { icon: '🏗️', title: 'Developer', desc: 'Buyer confidence + faster sales', id: 'developer', section: '#stakeholders' },
        { icon: '🏦', title: 'Bank / HFC', desc: 'Automated collateral risk score', id: 'bank', section: '#stakeholders' },
        { icon: '🏢', title: 'Broker', desc: '40% higher conversion rate', id: 'broker', section: '#stakeholders' },
      ]
    }
  },
  {
    label: 'Outcomes',
    href: '#solutions',
    dropdown: {
      header: 'WHAT YOU GAIN',
      items: [
        { icon: '🛡️', title: 'Zero Title Fraud Risk', desc: 'AI-verified ownership chain', id: 'universal-insurance', section: '#solutions' },
        { icon: '📜', title: 'Legal Clarity', desc: 'Court-proof documentation', id: 'legal-defense', section: '#solutions' },
        { icon: '💰', title: 'Safe Fund Transfer', desc: 'Escrow-secured payments', id: 'milestone-escrow', section: '#solutions' },
        { icon: '🏆', title: 'IRDAI Coverage', desc: 'Insurance-backed protection', id: 'universal-insurance', section: '#solutions' },
        { icon: '⏱️', title: '48hr Delivery', desc: 'Fastest verification in India', id: 'trust-report', section: '#offerings' },
        { icon: '🤖', title: 'AI Trust Score', desc: '0-100 property rating', id: 'trust-report', section: '#offerings' },
      ]
    }
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string, id?: string) => {
    if (id) {
      let eventName = '';
      if (section === '#problem') eventName = 'setActiveProblem';
      else if (section === '#solutions') eventName = 'setActiveSolution';
      else if (section === '#offerings') eventName = 'setActiveOffering';
      else if (section === '#segments') eventName = 'setActiveSegment';
      else if (section === '#stakeholders') eventName = 'setActiveStakeholder';
      
      if (eventName) {
        window.dispatchEvent(new CustomEvent(eventName, { detail: { id } }));
      }
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-16 px-[5%] flex items-center border-b ${
      scrolled ? 'bg-white/95 backdrop-blur-xl border-navy-900/10 shadow-sm' : 'bg-white/50 border-transparent'
    }`}>
      <div className="w-full flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 no-underline group shrink-0">
          <div className="w-9 h-9 bg-gradient-to-br from-primary-blue to-blue-light rounded-lg flex items-center justify-center font-bold text-lg text-navy-900 transition-transform group-hover:scale-110">T</div>
          <span className="text-[21px] font-bold text-navy-900 tracking-wide">Trust<span className="text-primary-blue">Flows</span></span>
        </a>

        <div className="hidden lg:flex items-center gap-1 h-full">
          {navItems.map((item) => (
            <div key={item.label} className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown(item.label)} onMouseLeave={() => setActiveDropdown(null)}>
              <a href={item.href} onClick={() => handleNavClick(item.href)} className={`flex items-center gap-1 px-3 py-2 text-[15px] font-semibold transition-all ${
                activeDropdown === item.label ? 'text-primary-blue' : 'text-[#1a1a2e]/80 hover:text-[#1a1a2e]'
              }`}>
                {item.label}
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
              </a>

              <AnimatePresence>
                {activeDropdown === item.label && item.dropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 10 }} 
                    className={`absolute top-full mt-2 min-w-[600px] bg-white border border-navy-900/10 rounded-[14px] p-4 shadow-[0_16px_48px_rgba(0,0,0,0.12)] ${
                      ['Stakeholders', 'Outcomes'].includes(item.label) ? 'right-0' : 'left-0'
                    }`}
                  >
                    <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#185FA5] mb-4 px-2">{item.dropdown.header}</div>
                    <div className="grid grid-cols-2 gap-2">
                      {item.dropdown.items.map((subItem) => (
                        <a key={subItem.title} href={subItem.section} onClick={() => handleNavClick(subItem.section, subItem.id)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-light transition-all group/item">
                          <span className="text-[20px] shrink-0 mt-0.5">{subItem.icon}</span>
                          <div>
                            <div className="text-[13px] font-bold text-navy-900 group-hover/item:text-primary-blue transition-colors">{subItem.title}</div>
                            <div className="text-[11px] text-[#4a4a6a] leading-tight">{subItem.desc}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-primary-blue text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] tracking-[0.3px] transition-all hover:bg-blue-dark hover:shadow-lg">Get Risk Report</button>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-navy-900 p-1"><Menu size={24} /></button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="lg:hidden fixed inset-y-0 right-0 w-full max-w-[320px] bg-white border-l border-navy-900/10 z-[110] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[21px] font-bold text-navy-900">Menu</span>
                <button onClick={() => setIsOpen(false)}><X size={24} /></button>
              </div>
              <div className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button onClick={() => setExpandedAccordion(expandedAccordion === item.label ? null : item.label)} className="w-full flex justify-between items-center py-3 text-navy-900 font-bold border-b border-navy-900/5">
                      {item.label} <ChevronDown size={16} className={`transition-transform ${expandedAccordion === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {expandedAccordion === item.label && item.dropdown && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-[#F5F7FA] rounded-lg mt-1 px-4 py-3 space-y-4">
                          {item.dropdown.items.map((subItem) => (
                            <a key={subItem.title} href={subItem.section} onClick={() => handleNavClick(subItem.section, subItem.id)} className="flex gap-3">
                              <span className="text-xl">{subItem.icon}</span>
                              <div>
                                <div className="text-[13px] font-bold text-navy-900">{subItem.title}</div>
                                <div className="text-[11px] text-[#4a4a6a]">{subItem.desc}</div>
                              </div>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
