import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-navy-900 border-t border-gold-500/20 pt-16 pb-8 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-start gap-12 mb-14">
          <div className="max-w-[280px]">
            <a href="#" className="flex items-center gap-3 no-underline mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-gold-500 to-gold-400 rounded-lg flex items-center justify-center font-serif font-black text-lg text-navy-900">
                T
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-wide">
                TrustFlows
              </span>
            </a>
            <p className="text-[13px] text-white/70 leading-relaxed">
              India's End-to-End Property Trust, Protection & Transaction Infrastructure Platform.
            </p>
          </div>

          <div>
            <div className="text-[12px] font-bold tracking-[1px] uppercase text-gold-500 mb-6">Navigation</div>
            <div className="flex flex-wrap gap-8">
              {['Solutions', 'Segments', 'Cities', 'Pricing', 'About', 'Contact'].map((link) => (
                <a key={link} href="#" className="text-sm text-white/70 hover:text-gold-400 transition-colors">{link}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[12px] font-bold tracking-[1px] uppercase text-gold-500 mb-6">Compliance</div>
            <div className="flex flex-wrap gap-2.5">
              {['IRDAI Aligned', 'RERA Compliant', 'RBI Compliant', 'DILRMP Integrated'].map((badge) => (
                <span key={badge} className="bg-gold-500/10 border border-gold-500/25 text-gold-500 text-[11px] font-semibold tracking-[0.5px] px-3.5 py-1.5 rounded-md">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-wrap justify-between items-center gap-6">
          <p className="text-[12px] text-white/30">
            © 2025 TrustFlows Technologies Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="text-[12px] text-white/30 max-w-[500px] text-right md:text-left">
            TrustFlows provides risk intelligence and insurance facilitation. Not a legal firm. Consult a legal professional for binding advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
