import React, { useEffect } from 'react';
import { Eye, Server, ShieldCheck } from 'lucide-react';
import DetailHeroSlider from '../components/DetailHeroSlider';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-20">
      <DetailHeroSlider 
        backLink="/"
        backText="Compliance Hub"
        slides={[
          {
            badge: "DATA SOVEREIGNTY",
            title: "Privacy\nPolicy",
            description: "Your property data is your most sensitive asset. At TRUSTFLOWS, we implement bank-grade encryption and strict data isolation protocols.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600",
            ctaText: "View Security Audit"
          },
          {
            badge: "LOCALIZED STORAGE",
            title: "AES-256\nData Protection",
            description: "All documents are stored in MeitY-empaneled data centers within Indian territory, ensuring compliance with local data residency laws.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600",
            ctaText: "Encryption Specs"
          },
          {
            badge: "AI INTEGRITY",
            title: "Zero-Knowledge\nAudit Protocol",
            description: "Our AI models analyze your property chain without permanent human exposure to sensitive documents, maintaining total digital privacy.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600",
            ctaText: "How It Works"
          }
        ]}
      />

      <div className="max-w-4xl mx-auto mt-20 px-[5%]">

        <div className="space-y-12">
          <section className="border-l-2 border-navy-900/10 pl-8 py-2">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4 flex items-center gap-3">
              <Eye size={18} className="text-primary-blue" />
              1. Information Collection
            </h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              We collect property identifiers (Survey numbers, Door numbers), ownership documentation provided for audit, and transaction details required for escrow. We do not sell user behavioral data to third-party marketing agencies.
            </p>
          </section>

          <section className="border-l-2 border-navy-900/10 pl-8 py-2">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4 flex items-center gap-3">
              <Server size={18} className="text-primary-blue" />
              2. Data Storage & Encryption
            </h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              All documents are stored in ISO 27001 certified data centers within Indian territory (MeitY empaneled). Data is encrypted at rest using AES-256 and in transit using TLS 1.3 protocols.
            </p>
          </section>

          <section className="bg-navy-900 text-white p-10 rounded-[32px] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <h2 className="text-[20px] font-bold mb-6 flex items-center gap-3 relative z-10">
              <ShieldCheck size={20} className="text-primary-blue" />
              The "Zero-Knowledge" Audit
            </h2>
            <p className="text-[15px] text-white/70 leading-[1.8] font-normal relative z-10">
              Our AI models analyze your property chain without permanent exposure of your sensitive financial documents to human reviewers, unless specifically requested for a manual legal escalation.
            </p>
          </section>

          <section className="border-l-2 border-navy-900/10 pl-8 py-2">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4">3. Data Retention</h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              Audit reports are retained for 10 years to support insurance claims and legal defense. Users may request "Digital Shredding" of their uploaded source documents upon successful transaction closure.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-navy-900/5 text-center">
          <p className="text-[11px] text-navy-900/30 font-bold uppercase tracking-[3px]">
            GDPR COMPLIANT | DPDPA (INDIA) READY | ISO 27001 CERTIFIED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
