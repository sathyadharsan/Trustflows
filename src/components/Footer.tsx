import { Link } from 'react-router-dom';
import { X, MapPin, Mail, Phone, Globe } from 'lucide-react';
import { cities } from '../data/cities';

const Footer = () => {

  return (
    <footer id="footer" className="bg-[#0a0a1c] border-t border-white/5 pt-20 pb-10 px-[5%] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 no-underline mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-blue-light rounded-lg flex items-center justify-center font-bold text-xl text-white">
                T
              </div>
              <span className="text-[22px] font-bold text-white tracking-tight">
                Trust<span className="text-primary-blue">Flows</span>
              </span>
            </Link>
            <p className="text-[15px] text-white font-bold leading-relaxed mb-8 max-w-[450px]">
              TRUSTFLOWS® – India’s Property Trust Infrastructure
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Mail size={16} />
                </div>
                <a href="mailto:solutions@trustflows.in" className="text-primary-blue text-[15px] font-medium no-underline hover:underline">
                  solutions@trustflows.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">
                  <Phone size={16} />
                </div>
                <a href="tel:+918047108800" className="text-white text-[15px] font-medium no-underline hover:underline">
                  +91 80 4710 8800
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Globe size={16} />
                </div>
                <a href="https://www.trustflows.in" target="_blank" rel="noopener noreferrer" className="text-primary-blue text-[15px] font-medium no-underline hover:underline">
                  www.trustflows.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/company/trustflows" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary-blue hover:text-primary-blue transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://twitter.com/trustflows" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary-blue hover:text-primary-blue transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                </a>
                <a href="https://www.facebook.com/trustflows" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-primary-blue hover:text-primary-blue transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white mb-8">Platform</div>
            <ul className="space-y-4">
              {[
                { name: 'Resale Flats', path: '/segments/resale-flat' },
                { name: 'Independent Houses', path: '/segments/house' },
                { name: 'Freehold Plots', path: '/segments/plot' },
                { name: 'Freehold Layouts', path: '/segments/layout' },
                { name: 'Commercial Properties', path: '/segments/commercial' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[13px] text-slate-400 hover:text-primary-blue transition-colors font-medium no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white mb-8">Solutions</div>
            <ul className="space-y-4">
              {[
                { name: 'Homebuyer Security', path: '/stakeholders/homebuyer' },
                { name: 'NRI Portfolio', path: '/stakeholders/nri' },
                { name: 'Investor Protection', path: '/stakeholders/investor' },
                { name: 'Developer Trust', path: '/stakeholders/developer' },
                { name: 'Lender Collateral', path: '/stakeholders/bank' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[13px] text-slate-400 hover:text-primary-blue transition-colors font-medium no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white mb-8">Offerings</div>
            <ul className="space-y-4">
              {[
                { name: 'AI Trust Report', path: '/offerings/trust-report' },
                { name: 'Title Insurance', path: '/offerings/title-insurance' },
                { name: 'Escrow Services', path: '/offerings/escrow' },
                { name: 'Fraud Monitoring', path: '/offerings/fraud-monitoring' },
                { name: 'Legal Defense', path: '/offerings/legal-defense' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[13px] text-slate-400 hover:text-primary-blue transition-colors font-medium no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white mb-8">Company</div>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/contact' },
                { name: 'Our Mission', path: '/contact' },
                { name: 'Team', path: '/contact' },
                { name: 'Compliance', path: '/compliance' },
                { name: 'Contact', path: '/contact' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[13px] text-slate-400 hover:text-primary-blue transition-colors font-medium no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Presence Section */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="flex justify-center mb-8">
            <span className="bg-white/5 border border-white/20 text-white text-[10px] font-bold tracking-[2px] px-6 py-2 rounded-full uppercase shadow-sm">
              Global Presence
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
            {[
              {
                title: 'US OFFICE',
                address: '501 E Kennedy Blvd Suite 1400, Tampa, FL 33602, United States',
                email: 'connect@trustgrid.ai',
                phone: '+1 9513288612'
              },
              {
                title: 'SINGAPORE OFFICE',
                address: '5 Temasek Boulevard, 17th Floor, Singapore 038985',
                email: 'connect@trustgrid.ai',
                phone: '+65 6050 5235'
              },
              {
                title: 'INDIA OFFICE',
                address: 'TRUSTGRID.AI INNOVATION PVT LTD, Suite: 32, 235, Binnamangala, 2nd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Bengaluru – 560038, India',
                email: 'connect@trustgrid.ai',
                phone: '+91 9513288612'
              },
              {
                title: 'MUMBAI OFFICE',
                address: 'WeWork, Raheja Platinum, Sag Baug, Marol, Andheri East, Mumbai 400059',
                email: 'cs@trustgrid.in',
                phone: '+91 9513088612'
              },
              {
                title: 'BANGALORE OFFICE',
                address: 'WeWork, 13th floor, Tin Factory, Old Madras Rd, Bengaluru 560016',
                email: 'cs@trustgrid.in',
                phone: '+91 9513088612'
              }
            ].map((office) => (
              <div key={office.title} className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-white text-[12px] font-bold tracking-[1px] uppercase">
                  <MapPin size={16} className="text-primary-blue flex-shrink-0" />
                  {office.title}
                </div>
                <p className="text-[13px] text-slate-400 leading-relaxed font-medium">
                  {office.address}
                </p>
                <div className="flex flex-col gap-2.5 mt-2">
                  <a href={`mailto:${office.email}`} className="flex items-center gap-2.5 text-[13px] text-slate-400 hover:text-primary-blue transition-colors no-underline font-medium">
                    <Mail size={15} className="flex-shrink-0" />
                    {office.email}
                  </a>
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-[13px] text-slate-400 hover:text-primary-blue transition-colors no-underline font-medium">
                    <Phone size={15} className="flex-shrink-0" />
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cities Strip */}
        <div className="border-y border-white/10 py-10 mb-10">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {cities.map((city) => (
              <Link key={city.id} to={`/cities/${city.id}`} className="text-[11px] font-bold text-slate-400 hover:text-primary-blue transition-colors tracking-wider uppercase no-underline">
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Compliance Bar */}
        <div className="border-t border-white/10 pt-8 mb-4">
          <p className="text-[15px] text-white font-bold tracking-tight">
            IRDAI Corporate Agent | RBI Compliant Escrow | ISO 27001 Certified
          </p>
        </div>

        {/* Legal Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-4">
          <p className="text-[14px] text-slate-400 font-medium">
            © 2026 TRUSTFLOWS. All solutions subject to terms, conditions, and underwriting approval.
          </p>
          <div className="flex items-center gap-6 text-[13px] font-medium text-slate-400">
            <Link to="/disclaimer" className="hover:text-primary-blue transition-colors no-underline">Disclaimer</Link>
            <Link to="/terms" className="hover:text-primary-blue transition-colors no-underline">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-primary-blue transition-colors no-underline">Privacy Policy</Link>
            <Link to="/compliance" className="hover:text-primary-blue transition-colors no-underline">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
