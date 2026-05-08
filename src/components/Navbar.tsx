import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href?: string;
  dropdown?: {
    header: string;
    items: {
      icon: string;
      title: string;
      desc: string;
      href: string;
    }[];
  };
}

const navItems: NavItem[] = [
  {
    label: 'Outcomes',
    dropdown: {
      header: 'What You Gain',
      items: [
        { icon: '🛡️', title: 'Zero Title Fraud Risk', desc: 'AI-verified ownership chain', href: '#problem' },
        { icon: '📜', title: 'Legal Clarity', desc: 'Court-proof documentation', href: '#problem' },
        { icon: '💰', title: 'Safe Fund Transfer', desc: 'Escrow-secured payments', href: '#solution' },
        { icon: '🏆', title: 'IRDAI Coverage', desc: 'Insurance-backed protection', href: '#solution' },
      ]
    }
  },
  {
    label: 'Verticals',
    dropdown: {
      header: 'Property Segments',
      items: [
        { icon: '🏢', title: 'Residential', desc: 'Flats, Houses & Villas', href: '#segments' },
        { icon: '🌾', title: 'Land & Plots', desc: 'Freehold plots & layouts', href: '#segments' },
        { icon: '🏪', title: 'Commercial', desc: 'Offices, shops, warehouses', href: '#segments' },
        { icon: '🏗️', title: 'Developer Projects', desc: 'Under-construction & bulk', href: '#segments' },
        { icon: '🌍', title: 'NRI Transactions', desc: 'Remote property buying', href: '#segments' },
      ]
    }
  },
  {
    label: 'Offerings',
    dropdown: {
      header: 'Our Services',
      items: [
        { icon: '🧠', title: 'AI Risk Report', desc: 'Instant property risk score', href: '#pricing' },
        { icon: '🛡️', title: 'Title Insurance', desc: 'IRDAI-aligned coverage', href: '#pricing' },
        { icon: '💰', title: 'Digital Escrow', desc: 'RERA & RBI compliant', href: '#solution' },
        { icon: '⚖️', title: 'Legal Defense', desc: 'We fight disputes for you', href: '#solution' },
      ]
    }
  },
  {
    label: 'Platforms',
    dropdown: {
      header: 'Integrated With',
      items: [
        { icon: '🏛️', title: 'DILRMP', desc: 'Digital India Land Records', href: '#' },
        { icon: '🏗️', title: 'State RERA Portals', desc: 'All 20 city RERA databases', href: '#' },
        { icon: '⚖️', title: 'eCourts Intelligence', desc: 'Pan-India court records', href: '#' },
        { icon: '🏦', title: 'CERSAI Registry', desc: 'Mortgage & lien records', href: '#' },
        { icon: '📱', title: 'DigiLocker', desc: 'Govt-verified documents', href: '#' },
      ]
    }
  },
  {
    label: 'Solutions',
    dropdown: {
      header: 'For Every Stakeholder',
      items: [
        { icon: '👨‍👩‍👧', title: 'For Homebuyers', desc: 'Verify before you buy', href: '#who-we-serve' },
        { icon: '🌍', title: 'For NRIs', desc: 'Remote property protection', href: '#who-we-serve' },
        { icon: '🏦', title: 'For Banks & NBFCs', desc: 'Secure lending decisions', href: '#who-we-serve' },
        { icon: '🏗️', title: 'For Developers', desc: 'Build buyer trust at scale', href: '#who-we-serve' },
        { icon: '💼', title: 'For Investors', desc: 'Portfolio risk intelligence', href: '#who-we-serve' },
      ]
    }
  },
  {
    label: 'Technology',
    dropdown: {
      header: 'Our Tech Stack',
      items: [
        { icon: '🤖', title: 'City-Trained AI Models', desc: '20 city-specific engines', href: '#solution' },
        { icon: '📊', title: '5M+ Records Database', desc: 'India\'s largest property data', href: '#solution' },
        { icon: '🔗', title: 'Real-time Govt APIs', desc: 'Live land record integration', href: '#' },
        { icon: '⚡', title: 'Automated Risk Scoring', desc: 'Report in minutes, not weeks', href: '#solution' },
      ]
    }
  },
  {
    label: 'About Us',
    href: '#about'
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-16 px-[5%] flex items-center border-b ${
        scrolled 
          ? 'bg-navy-900/92 backdrop-blur-xl border-gold-500/20 shadow-lg' 
          : 'bg-navy-900/50 border-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 no-underline group shrink-0">
          <div className="w-9 h-9 bg-gradient-to-br from-gold-500 to-gold-400 rounded-lg flex items-center justify-center font-serif font-black text-lg text-navy-900 transition-transform group-hover:scale-110">
            T
          </div>
          <span className="font-serif text-xl font-bold text-white tracking-wide">
            Trust<span className="text-gold-400">Flows</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2 h-full">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href || '#'}
                className="flex items-center gap-1.5 px-4 py-2 text-white/80 hover:text-gold-400 text-[13px] font-semibold transition-all"
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-gold-400' : ''}`} 
                  />
                )}
              </a>

              <AnimatePresence>
                {activeDropdown === item.label && item.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-[280px] bg-navy-800/95 backdrop-blur-2xl border border-gold-500/30 rounded-xl p-4 shadow-2xl"
                  >
                    <div className="text-[10px] font-bold tracking-[2px] uppercase text-gold-500 mb-4 px-2">
                      {item.dropdown.header}
                    </div>
                    <div className="space-y-1">
                      {item.dropdown.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all group/item"
                        >
                          <span className="text-lg shrink-0">{subItem.icon}</span>
                          <div>
                            <div className="text-[13px] font-bold text-white group-hover/item:text-gold-400 transition-colors">
                              {subItem.title}
                            </div>
                            <div className="text-[11px] text-white/50 group-hover/item:text-white/70 transition-colors">
                              {subItem.desc}
                            </div>
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
          <button className="hidden sm:block bg-gradient-to-br from-gold-500 to-gold-400 text-navy-900 px-5 py-2 rounded-lg font-sans font-bold text-[13px] transition-all hover:translate-y-[-1px] hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]">
            Get Risk Report
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gold-400 p-1 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 right-0 w-full max-w-[300px] bg-navy-900 border-l border-gold-500/20 z-[110] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="font-serif text-lg font-bold text-white">Menu</span>
                <button onClick={() => setIsOpen(false)} className="text-gold-400"><X size={24} /></button>
              </div>
              
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() => item.dropdown ? setExpandedAccordion(expandedAccordion === item.label ? null : item.label) : (setIsOpen(false), window.location.hash = item.href || '')}
                      className="w-full flex justify-between items-center py-3 text-white font-medium border-b border-white/5"
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${expandedAccordion === item.label ? 'rotate-180' : ''}`} 
                        />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedAccordion === item.label && item.dropdown && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-white/5 rounded-lg mt-2"
                        >
                          <div className="p-4 space-y-4">
                            {item.dropdown.items.map((subItem) => (
                              <a
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="flex gap-3"
                              >
                                <span>{subItem.icon}</span>
                                <div>
                                  <div className="text-sm font-bold text-white">{subItem.title}</div>
                                  <div className="text-[11px] text-white/50">{subItem.desc}</div>
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
              
              <button className="w-full bg-gradient-to-br from-gold-500 to-gold-400 text-navy-900 py-3 rounded-xl font-bold text-[15px] mt-8">
                Get Risk Report
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
