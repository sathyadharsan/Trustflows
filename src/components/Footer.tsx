import React from 'react';

const Footer = () => {
  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
    'Pune', 'Ahmedabad', 'Surat', 'Jaipur', 'Lucknow', 'Nagpur',
    'Indore', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara',
    'Ludhiana', 'Agra', 'Nashik'
  ];

  return (
    <footer id="footer" className="bg-[#0A0F1E] border-t border-primary-blue/20 pt-20 pb-8 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Col 1 */}
          <div>
            <a href="/" className="flex items-center gap-3 no-underline mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-blue-light rounded-lg flex items-center justify-center font-serif font-black text-xl text-navy-900">
                T
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                Trust<span className="text-primary-blue">Flows</span>
              </span>
            </a>
            <p className="text-[14px] text-white/40 leading-relaxed font-bold mb-8">
              India's End-to-End Property Trust, Protection & Transaction Infrastructure Platform.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['IRDAI', 'RERA', 'RBI', 'DILRMP'].map((badge) => (
                <span key={badge} className="bg-primary-blue/10 border border-primary-blue/25 text-primary-blue text-[10px] font-black tracking-[1px] px-3 py-1.5 rounded-md uppercase">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <div className="text-[12px] font-bold tracking-[2px] uppercase text-primary-blue mb-8">Offerings</div>
            <ul className="space-y-4">
              {['Trust Report', 'Title Insurance', 'Property Insurance', 'Digital Owner Insurance', 'Escrow Services', 'Loan Guarantees', 'Legal Defense', 'Fraud Monitoring'].map(item => (
                <li key={item}><a href="#offerings" className="text-[14px] text-white/30 hover:text-primary-blue transition-colors font-bold no-underline">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <div className="text-[12px] font-bold tracking-[2px] uppercase text-primary-blue mb-8">Verticals</div>
            <ul className="space-y-4">
              {['Resale Flats', 'Independent Houses', 'Freehold Plots', 'Freehold Layouts', 'Commercial Properties', 'Developer Flats', 'Govt Schemes', 'Mixed-Use'].map(item => (
                <li key={item}><a href="#segments" className="text-[14px] text-white/30 hover:text-primary-blue transition-colors font-bold no-underline">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <div className="text-[12px] font-bold tracking-[2px] uppercase text-primary-blue mb-8">Contact</div>
            <ul className="space-y-5">
              <li className="flex flex-col gap-1">
                <span className="text-white text-[15px] font-black tracking-tight">solutions@trustflows.in</span>
                <span className="text-white/20 text-[11px] font-bold uppercase tracking-wider">Email Support</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white text-[15px] font-black tracking-tight">+91 80 4710 8800</span>
                <span className="text-white/20 text-[11px] font-bold uppercase tracking-wider">Call Advisor</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white text-[15px] font-black tracking-tight">www.trustflows.in</span>
                <span className="text-white/20 text-[11px] font-bold uppercase tracking-wider">Global Website</span>
              </li>
            </ul>
            <div className="mt-10 pt-10 border-t border-white/5 text-[10px] text-white/20 font-bold uppercase tracking-widest leading-loose">
              IRDAI Corporate Agent | RBI Compliant Escrow | ISO 27001 Certified
            </div>
          </div>
        </div>

        {/* Cities Strip */}
        <div className="border-y border-white/5 py-8 mb-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {cities.map((city) => (
              <span key={city} className="text-[11px] font-bold text-white/10 hover:text-primary-blue transition-colors cursor-default tracking-wider">
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <p className="text-[12px] text-white/20 font-bold tracking-[1px] mb-2 uppercase">
            © 2026 TRUSTFLOWS. Building Trust, One Property at a Time.
          </p>
          <p className="text-[10px] text-white/5 font-medium max-w-2xl mx-auto italic">
            TrustFlows provides risk intelligence and insurance facilitation. IRDAI Corporate Agent | RBI Compliant Escrow Partner.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
