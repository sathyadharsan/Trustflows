import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Shield, Building2, Landmark, Globe, Building, Home, 
  BarChart, Phone, MapPin, FileText, Lock, CheckCircle, Gavel, 
  AlertTriangle, Map, Layers, HardHat, Store, AlertCircle, 
  FileWarning, Layout, Briefcase, Construction, Cpu, Key, 
  User, TrendingUp, Users, ShieldCheck, FileCheck, DollarSign, 
  Award, Zap, Target 
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Shield, Building2, Landmark, Globe, Building, Home, 
  BarChart, Phone, MapPin, FileText, Lock, CheckCircle, Gavel, 
  AlertTriangle, Map, Layers, HardHat, Store, AlertCircle, 
  FileWarning, Layout, Briefcase, Construction, Cpu, Key, 
  User, TrendingUp, Users, ShieldCheck, FileCheck, DollarSign, 
  Award, Zap, Target
};

import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  dropdown?: {
    header: string;
    items: {
      icon: string;
      title: string;
      desc: string;
      id: string;
      section: string;
      route?: string;
    }[];
    featured?: {
      title: string;
      desc: string;
      image: string;
      cta: string;
    };
  };
}


const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '#hero',
    dropdown: {
      header: 'TRUSTFLOWS',
      items: [
        { icon: 'Home', title: 'Back to Top', desc: "India's #1 Property Trust Platform", id: 'hero', section: '#hero', route: '/' },
        { icon: 'BarChart', title: 'Trust Score', desc: 'Get free AI property risk score', id: 'hero', section: '#hero', route: '/' },
        { icon: 'Phone', title: 'Talk to Advisor', desc: 'City-specific consultation', id: 'footer', section: '#footer', route: '/' },
        { icon: 'MapPin', title: 'Our Cities', desc: '20 major Indian cities covered', id: 'cities', section: '#cities', route: '/' },
      ]
    }
  },
  {
    label: 'Offerings',
    href: '#offerings',
    dropdown: {
      header: 'OUR 8 PRODUCTS',
      items: [
        { icon: 'FileText', title: 'AI Trust Report', desc: 'Risk score in 48 hours — ₹7,999 onwards', id: 'trust-report', section: '#offerings', route: '/offerings/trust-report' },
        { icon: 'Shield', title: 'Title Insurance', desc: 'IRDAI-aligned — 0.10% to 0.15%', id: 'title-insurance', section: '#offerings', route: '/offerings/title-insurance' },
        { icon: 'Home', title: 'Property Insurance', desc: 'Physical structure — ₹2,500/yr onwards', id: 'prop-insurance', section: '#offerings', route: '/offerings/prop-insurance' },
        { icon: 'Globe', title: 'Digital Owner Insurance', desc: 'NRI & remote owners — 0.25%/yr', id: 'digital-owner', section: '#offerings', route: '/offerings/digital-owner' },
        { icon: 'Lock', title: 'Escrow Services', desc: 'Safe payment — 0.15% to 0.25%', id: 'escrow', section: '#offerings', route: '/offerings/escrow' },
        { icon: 'CheckCircle', title: 'Loan Guarantees', desc: 'Banks & NBFCs — 0.10% of loan', id: 'loan-guarantee', section: '#offerings', route: '/offerings/loan-guarantee' },
        { icon: 'Gavel', title: 'Legal Defense Insurance', desc: 'Court costs — ₹3,000/yr', id: 'legal-defense', section: '#offerings', route: '/offerings/legal-defense' },
        { icon: 'AlertTriangle', title: 'Fraud Monitoring', desc: 'Post-purchase alerts — ₹1,999/yr', id: 'fraud-monitoring', section: '#offerings', route: '/offerings/fraud-monitoring' },
      ]
    }
  },
  {
    label: 'Solutions',
    href: '#solutions',
    dropdown: {
      header: 'THE TRUSTFLOWS DIFFERENCE',
      items: [
        { icon: 'Cpu', title: 'Segment AI', desc: 'Custom algorithms per property type', id: 'segment-ai', section: '#solutions', route: '/solutions/segment-ai' },
        { icon: 'MapPin', title: 'City-Trained Engines', desc: 'Mumbai, Pune, Kolkata city models', id: 'city-engines', section: '#solutions', route: '/solutions/city-engines' },
        { icon: 'Shield', title: 'Universal Title Insurance', desc: 'Works across all segments', id: 'title-insurance', section: '#solutions', route: '/solutions/title-insurance' },
        { icon: 'Key', title: 'Milestone Escrow', desc: 'Released only on verified docs', id: 'escrow', section: '#solutions', route: '/solutions/escrow' },
        { icon: 'Gavel', title: 'Legal Defense', desc: 'We fight for you if dispute arises', id: 'legal-defense', section: '#solutions', route: '/solutions/legal-defense' },
      ]
    }
  },
  {
    label: 'Segments',
    href: '#segments',
    dropdown: {
      header: 'PROPERTY SEGMENTS',
      items: [
        { icon: 'Building2', title: 'Resale Flats', desc: 'Society built apartments', id: 'resale-flat', section: '#segments', route: '/segments/resale-flat' },
        { icon: 'Home', title: 'Independent Houses', desc: 'Bungalows, villas, row houses', id: 'house', section: '#segments', route: '/segments/house' },
        { icon: 'Map', title: 'Freehold Plots', desc: 'NA plots, agricultural (Highest Risk)', id: 'plot', section: '#segments', route: '/segments/plot' },
        { icon: 'Layers', title: 'Freehold Layouts', desc: 'Developer plotted developments', id: 'layout', section: '#segments', route: '/segments/layout' },
        { icon: 'Building', title: 'Commercial Properties', desc: 'Offices, shops, warehouses', id: 'commercial', section: '#segments', route: '/segments/commercial' },
        { icon: 'HardHat', title: 'Developer Flats', desc: 'Under-construction, RERA projects', id: 'dev-flat', section: '#segments', route: '/segments/dev-flat' },
        { icon: 'Landmark', title: 'Govt Scheme Properties', desc: 'DDA, MHADA, BDA, LDA', id: 'govt', section: '#segments', route: '/segments/govt' },
        { icon: 'Store', title: 'Resale Commercial', desc: 'Mixed-use, old market shops', id: 'resale-comm', section: '#segments', route: '/segments/resale-comm' },
      ]
    }
  },
  {
    label: 'Cities',
    href: '#cities',
    dropdown: {
      header: '20 MAJOR CITIES COVERED',
      items: [
        { icon: 'MapPin', title: 'Mumbai', desc: 'High (SRA/CRZ Complexities)', id: 'mumbai', section: '#cities', route: '/cities/mumbai' },
        { icon: 'MapPin', title: 'Bangalore', desc: 'High (B-Khata/Encroachments)', id: 'bangalore', section: '#cities', route: '/cities/bangalore' },
        { icon: 'MapPin', title: 'Delhi-NCR', desc: 'Very High (Registry Bans)', id: 'delhi-ncr', section: '#cities', route: '/cities/delhi-ncr' },
        { icon: 'MapPin', title: 'Pune', desc: 'Medium (Gunthewari Issues)', id: 'pune', section: '#cities', route: '/cities/pune' },
        { icon: 'MapPin', title: 'Hyderabad', desc: 'High (Dharani/Wakf Issues)', id: 'hyderabad', section: '#cities', route: '/cities/hyderabad' },
        { icon: 'MapPin', title: 'Chennai', desc: 'Medium (Patta/Chitta Gaps)', id: 'chennai', section: '#cities', route: '/cities/chennai' },
        { icon: 'MapPin', title: 'Kolkata', desc: 'High (Thika Tenancy)', id: 'kolkata', section: '#cities', route: '/cities/kolkata' },
        { icon: 'MapPin', title: 'Ahmedabad', desc: 'Medium (TP Scheme Delays)', id: 'ahmedabad', section: '#cities', route: '/cities/ahmedabad' },
      ],
      featured: {
        title: 'City Risk Intelligence',
        desc: 'Custom AI models trained on local land records.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
        cta: 'View All Cities'
      }
    }
  },
  {
    label: 'Stakeholders',
    href: '#stakeholders',
    dropdown: {
      header: 'FOR EVERY PARTICIPANT',
      items: [
        { icon: 'User', title: 'First-Time Buyer', desc: 'Trust score + hidden dues check', id: 'homebuyer', section: '#stakeholders', route: '/stakeholders/homebuyer' },
        { icon: 'Globe', title: 'NRI', desc: 'Remote verification + escrow', id: 'nri', section: '#stakeholders', route: '/stakeholders/nri' },
        { icon: 'TrendingUp', title: 'Investor', desc: 'Title insurance + flip protection', id: 'investor', section: '#stakeholders', route: '/stakeholders/investor' },
        { icon: 'Building2', title: 'Developer', desc: 'Buyer confidence + faster sales', id: 'developer', section: '#stakeholders', route: '/stakeholders/developer' },
        { icon: 'Landmark', title: 'Bank / HFC', desc: 'Automated collateral risk score', id: 'bank', section: '#stakeholders', route: '/stakeholders/bank' },
        { icon: 'Users', title: 'Broker', desc: '40% higher conversion rate', id: 'broker', section: '#stakeholders', route: '/stakeholders/broker' },
      ]
    }
  },
  {
    label: 'Outcomes',
    href: '#solutions',
    dropdown: {
      header: 'WHAT YOU GAIN',
      items: [
        { icon: 'ShieldCheck', title: 'Zero Title Fraud Risk', desc: 'AI-verified ownership chain', id: 'zero-fraud', section: '#solutions', route: '/outcomes/zero-fraud' },
        { icon: 'FileCheck', title: 'Legal Clarity', desc: 'Court-proof documentation', id: 'legal-clarity', section: '#solutions', route: '/outcomes/legal-clarity' },
        { icon: 'DollarSign', title: 'Safe Fund Transfer', desc: 'Escrow-secured payments', id: 'safe-transfer', section: '#solutions', route: '/outcomes/safe-transfer' },
        { icon: 'Award', title: 'IRDAI Coverage', desc: 'Insurance-backed protection', id: 'irdai-coverage', section: '#solutions', route: '/outcomes/irdai-coverage' },
        { icon: 'Zap', title: '48hr Delivery', desc: 'Fastest verification in India', id: 'fast-delivery', section: '#offerings', route: '/outcomes/fast-delivery' },
        { icon: 'Target', title: 'AI Trust Score', desc: '0-100 property rating', id: 'trust-score', section: '#offerings', route: '/outcomes/trust-score' },
      ]
    }
  },
  {
    label: 'Problem',
    href: '#problem',
    dropdown: {
      header: 'THE MARKET PROBLEM',
      items: [
        { icon: 'AlertCircle', title: 'Resale Flat (Apartment)', desc: 'Undisclosed society dues, tax, illegal alterations', id: 'resale-flat', section: '#problem', route: '/problems/resale-flat' },
        { icon: 'FileWarning', title: 'Freehold Plot', desc: 'Fake mother deed, inheritance chain, Wakf claims', id: 'freehold-plot', section: '#problem', route: '/problems/freehold-plot' },
        { icon: 'Layout', title: 'Freehold Layout', desc: 'Unapproved plan, missing conversion, no completion cert', id: 'freehold-layout', section: '#problem', route: '/problems/freehold-layout' },
        { icon: 'Briefcase', title: 'Commercial Property', desc: 'Illegal tenancy, GST dues, business license defects', id: 'commercial', section: '#problem', route: '/problems/commercial' },
        { icon: 'Construction', title: 'Developer Flat (Under Construction)', desc: 'Delayed possession, fund diversion, RERA violation', id: 'under-construction', section: '#problem', route: '/problems/under-construction' },
        { icon: 'Home', title: 'Resale Independent House', desc: 'Unauthorized floors, deviation from plan, easement disputes', id: 'independent-house', section: '#problem', route: '/problems/independent-house' },
        { icon: 'Landmark', title: 'Govt Scheme Property', desc: 'Leasehold restrictions, POA sales, allotment gaps', id: 'govt-scheme', section: '#problem', route: '/problems/govt-scheme' },
      ]
    }
  },
  {
    label: 'Insurance',
    href: '/insurance',
    dropdown: {
      header: 'INTEGRATED FRAMEWORKS',
      items: [
        { icon: 'Shield', title: 'Homebuyer Protection', desc: 'Title + Property + Seismic', id: 'homebuyer', section: '#frameworks', route: '/insurance' },
        { icon: 'Building2', title: 'Developer Framework', desc: 'Timeline + Structural warranty', id: 'developer', section: '#frameworks', route: '/insurance' },
        { icon: 'Landmark', title: 'Lender Safeguards', desc: 'Collateral + Title portfolio', id: 'lender', section: '#frameworks', route: '/insurance' },
        { icon: 'Globe', title: 'NRI Owner Shield', desc: 'Remote monitoring + Authorization', id: 'nri', section: '#frameworks', route: '/insurance' },
        { icon: 'Building', title: 'Institutional Master', desc: 'REITs + Commercial asset continuity', id: 'institutional', section: '#frameworks', route: '/insurance' },
      ],
      featured: {
        title: 'Property Risk Report',
        desc: 'Get your AI trust score in 48 hours.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
        cta: 'Get Free Report'
      }
    }
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Use a slightly larger threshold for stability
      setScrolled(window.scrollY > 50);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.relative')) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);
    // Initial check
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const handleNavClick = (e: React.MouseEvent | React.TouchEvent, section: string, id?: string, route?: string) => {
    e.preventDefault();
    
    // Normalize routes by removing trailing slashes for comparison
    const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';
    const currentPath = normalizePath(window.location.pathname);
    const targetPath = route ? normalizePath(route) : currentPath;
    
    const isSamePage = targetPath === currentPath;

    if (route && !isSamePage) {
      navigate(route);
      if (section) {
        setTimeout(() => {
          const el = document.querySelector(section);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      setIsOpen(false);
      setActiveDropdown(null);
      return;
    }

    // Handle anchor links
    if (section) {
      const el = document.querySelector(section);
      if (el) {
        const offset = 80;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }

    if (id) {
      const events: { [key: string]: string } = {
        '#problem': 'setActiveProblem',
        '#solutions': 'setActiveSolution',
        '#offerings': 'setActiveOffering',
        '#segments': 'setActiveSegment',
        '#stakeholders': 'setActiveStakeholder',
        '#frameworks': 'setActiveFramework'
      };
      if (events[section]) {
        window.dispatchEvent(new CustomEvent(events[section], { detail: { id } }));
      }
    }
    
    setIsOpen(false);
    setActiveDropdown(null);
  };


  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex items-center border-b ${
      scrolled 
        ? 'h-16 bg-white shadow-md border-navy-900/10' 
        : 'h-20 bg-transparent border-transparent'
    }`}>
      <div className="w-full flex justify-between items-center h-full px-[5%]">
        <Link to="/" className="flex items-center gap-3 no-underline group shrink-0">
          <div className="w-9 h-9 bg-gradient-to-br from-primary-blue to-blue-600 rounded-lg flex items-center justify-center font-bold text-lg text-white transition-transform group-hover:scale-110 shadow-lg shadow-primary-blue/20">T</div>
          <span className={`text-[21px] font-bold tracking-wide transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}>Trust<span className={scrolled ? 'text-primary-blue' : 'text-primary-blue'}>Flows</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center h-full mx-auto">
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <div className="relative h-full flex items-center">
                <button 
                  onClick={(e) => {
                    if (item.dropdown) {
                      setActiveDropdown(activeDropdown === item.label ? null : item.label);
                    } else {
                      handleNavClick(e, item.href);
                    }
                  }} 
                  className={`flex items-center gap-1 px-3 py-2 text-[15px] font-semibold transition-all ${
                    activeDropdown === item.label ? 'text-primary-blue' : (scrolled ? 'text-[#1a1a2e]/80 hover:text-[#1a1a2e]' : 'text-white/80 hover:text-white')
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    {activeDropdown === item.label && (
                      <motion.div 
                        layoutId="nav-line"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-blue rounded-full"
                      />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {activeDropdown === item.label && item.dropdown && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: 10 }} 
                      className={`absolute top-full mt-2 bg-white border border-navy-900/10 rounded-[20px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex gap-4 ${
                        ['Stakeholders', 'Outcomes'].includes(item.label) ? 'right-0' : 'left-0'
                      } ${item.dropdown.featured ? 'min-w-[800px]' : 'min-w-[600px]'}`}
                    >
                      <div className="flex-1">
                        <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#185FA5] mb-4 px-2">{item.dropdown.header}</div>
                        <div className={`grid grid-cols-2 gap-2`}>
                          {item.dropdown.items.map((subItem) => (
                            <button 
                              key={subItem.title} 
                              onClick={(e) => handleNavClick(e, subItem.section, subItem.id, subItem.route)} 
                              className="w-full text-left flex items-start gap-3 p-3 rounded-xl hover:bg-blue-light transition-all group/item"
                            >
                              <div className="w-10 h-10 rounded-xl bg-blue-light flex items-center justify-center shrink-0 group-hover/item:bg-primary-blue/10 transition-colors">
                                {/* Dynamic Icon Rendering */}
                                {(() => {
                                  const Icon = iconMap[subItem.icon || 'Shield'];
                                  return Icon ? <Icon size={20} className="text-primary-blue" /> : <Shield size={20} className="text-primary-blue" />;
                                })()}
                              </div>
                              <div>
                                <div className="text-[13px] font-bold text-navy-900 group-hover/item:text-primary-blue transition-colors">{subItem.title}</div>
                                <div className="text-[11px] text-[#4a4a6a] leading-tight">{subItem.desc}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {item.dropdown.featured && (
                        <div className="w-[280px] bg-navy-900 rounded-[14px] overflow-hidden relative group/feat">
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover/feat:scale-110 transition-transform duration-500"
                            style={{ backgroundImage: `url(${item.dropdown.featured.image})` }}
                          />
                          <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <div className="text-white font-bold text-lg mb-1">{item.dropdown.featured.title}</div>
                        <div className="text-white/70 text-sm mb-4">{item.dropdown.featured.desc}</div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.dispatchEvent(new CustomEvent('openRiskCalculator'));
                          }}
                          className="w-full bg-primary-blue text-white py-2 rounded-lg text-sm font-bold hover:bg-white hover:text-primary-blue transition-all"
                        >
                          {item.dropdown.featured.cta}
                        </button>
                      </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openRiskCalculator'))}
            className="hidden sm:block bg-primary-blue text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] tracking-[0.3px] transition-all hover:bg-blue-dark hover:shadow-lg"
          >
            Get Risk Report
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-1 transition-colors ${scrolled ? 'text-navy-900' : 'text-white'}`}><Menu size={24} /></button>
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
                      {item.label}
                    </button>

                    <AnimatePresence>
                      {expandedAccordion === item.label && item.dropdown && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-[#F5F7FA] rounded-lg mt-1 px-4 py-3 space-y-4">
                          {item.dropdown.items.map((subItem) => (
                            <button 
                              key={subItem.title} 
                              onClick={(e) => handleNavClick(e, subItem.section, subItem.id, subItem.route)} 
                              className="w-full text-left flex gap-3"
                            >
                              <div>
                                <div className="text-[13px] font-bold text-navy-900">{subItem.title}</div>
                                <div className="text-[11px] text-[#4a4a6a]">{subItem.desc}</div>
                              </div>
                            </button>
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
