import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Landmark, Building2, CheckCircle2, Award } from 'lucide-react';
import DetailHeroSlider from '../components/DetailHeroSlider';

const Compliance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    { name: 'IRDAI Regulated Partners', desc: 'Title Insurance backed by regulated Indian insurers.' },
    { name: 'RBI Nodal Compliance', desc: 'Escrow payouts via regulated nodal accounts.' },
    { name: 'RERA Aligned Audits', desc: 'Project verification synchronized with RERA portals.' },
    { name: 'ISO 27001 Certified', desc: 'International standard for information security.' }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <DetailHeroSlider 
        backLink="/"
        backText="Compliance Hub"
        slides={[
          {
            badge: "REGULATORY FRAMEWORK",
            title: "Compliance &\nCertifications",
            description: "TRUSTFLOWS operates at the intersection of PropTech and RegTech, ensuring every transaction adheres to the latest Indian regulatory mandates.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600",
            ctaText: "View Certification Audit"
          },
          {
            badge: "GOVERNMENT INTEGRATION",
            title: "DILRMP-Aligned\nLand Intelligence",
            description: "Our AI engine is directly integrated with the Digital India Land Records Modernization Programme datasets across 20 major cities.",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600",
            ctaText: "Explore Data Sources"
          },
          {
            badge: "FINANCIAL INTEGRITY",
            title: "Institutional\nAML Protocols",
            description: "All digital escrow transactions undergo strict KYC and AML checks to ensure legitimate fund movement and prevent illegal diversions.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600",
            ctaText: "Security Framework"
          }
        ]}
      />

      <div className="max-w-4xl mx-auto mt-20 px-[5%] font-['Inter']">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {certifications.map((cert, i) => (
            <div key={i} className="p-8 bg-[#F5F7FA] rounded-[32px] border border-navy-900/5 hover:border-primary-blue/30 transition-all group shadow-sm">
              <Award size={32} className="text-primary-blue mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-[18px] font-bold text-navy-900 mb-2">{cert.name}</h3>
              <p className="text-[14px] text-[#64748b] leading-[1.7]">{cert.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <section className="border-l-2 border-navy-900/10 pl-8 py-2">
            <h2 className="text-[20px] font-bold text-navy-900 mb-6 flex items-center gap-3">
              <Building2 size={20} className="text-primary-blue" />
              Digital India Land Records (DILRMP)
            </h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              Our AI engine is directly integrated with the Digital India Land Records Modernization Programme (DILRMP) datasets across 20 cities, ensuring our audits are based on the latest government revenue records and mutation logs.
            </p>
          </section>

          <section className="border-l-2 border-navy-900/10 pl-8 py-2">
            <h2 className="text-[20px] font-bold text-navy-900 mb-6 flex items-center gap-3">
              <CheckCircle2 size={20} className="text-primary-blue" />
              Anti-Money Laundering (AML)
            </h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              All digital escrow transactions undergo strict KYC (Know Your Customer) and AML checks to ensure legitimate fund movement and prevent transaction structuring or illegal fund diversions in the real estate sector.
            </p>
          </section>
        </div>

        <div className="mt-20 p-10 bg-primary-blue/5 rounded-[40px] border border-primary-blue/10 text-center">
          <p className="text-[15px] text-navy-900 font-bold mb-4 italic">
            "We don't just follow the rules; we build the infrastructure that makes following the rules effortless."
          </p>
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue">
            The TrustFlows Compliance Engine
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
