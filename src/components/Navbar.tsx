import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solution' },
    { name: 'Cities', href: '#cities' },
    { name: 'Segments', href: '#segments' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-[5%] py-4.5 ${
        scrolled 
          ? 'bg-navy-900/85 backdrop-blur-xl border-b border-gold-500/20 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex justify-between items-center h-[42px]">
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div className="w-9 h-9 bg-gradient-to-br from-gold-500 to-gold-400 rounded-lg flex items-center justify-center font-serif font-black text-lg text-navy-900 transition-transform group-hover:scale-110">
            T
          </div>
          <span className="font-serif text-xl font-bold text-white tracking-wide">
            Trust<span className="text-gold-400">Flows</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-gold-400 text-sm font-medium transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-gradient-to-br from-gold-500 to-gold-400 text-navy-900 px-6 py-2.5 rounded-lg font-sans font-semibold text-sm transition-all hover:translate-y-[-1px] hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]">
            Get Risk Report
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gold-400 p-1 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-navy-800 border-b border-gold-500/20 overflow-hidden"
          >
            <div className="px-[5%] py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white/70 hover:text-gold-400 text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-gradient-to-br from-gold-500 to-gold-400 text-navy-900 py-3 rounded-lg font-semibold text-base mt-4">
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
