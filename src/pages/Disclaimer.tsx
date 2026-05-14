import React, { useEffect } from 'react';
import { ShieldAlert, FileText, Scale, Info } from 'lucide-react';
import DetailHeroSlider from '../components/DetailHeroSlider';

const Disclaimer = () => {
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
            badge: "REGULATORY DISCLOSURE",
            title: "Safe Harbor &\nLegal Disclaimer",
            description: "This disclaimer governs your use of the TRUSTFLOWS website and all its integrated property trust, protection, and transaction infrastructure offerings.",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600",
            ctaText: "Read Terms of Service"
          },
          {
            badge: "CONTRACTUAL PRIMACY",
            title: "Policy Over\nPresentation",
            description: "Financial protection and coverage limits are determined solely by the terms of the executed contract. In case of discrepancy, the policy document prevails.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600",
            ctaText: "View Sample Policy"
          },
          {
            badge: "IRDAI COMPLIANCE",
            title: "Standardized\nTrust Frameworks",
            description: "All offerings are subject to IRDAI regulations, policy wording, and applicable law. We ensure every transaction meets institutional-grade compliance standards.",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600",
            ctaText: "Compliance Overview"
          }
        ]}
      />

      <div className="max-w-4xl mx-auto mt-20 px-[5%]">

        <div className="space-y-12">
          <section className="border-l-2 border-navy-900/10 pl-8 py-2">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4 flex items-center gap-3">
              <Info size={18} className="text-primary-blue" />
              1. General Information Purpose
            </h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              The information provided on this website is for informational and knowledge purposes only. It does not constitute legal, financial, or investment advice.
            </p>
          </section>

          <section className="border-l-2 border-navy-900/10 pl-8 py-2">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4 flex items-center gap-3">
              <FileText size={18} className="text-primary-blue" />
              2. Contractual Primacy
            </h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              Financial protection, insurance coverage, claim eligibility, and benefit amounts will be determined solely based on the terms and conditions of the executed contract/policy document. In case of any discrepancy between website content and the policy contract, the policy contract shall prevail.
            </p>
          </section>

          <section className="border-l-2 border-navy-900/10 pl-8 py-2">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4 flex items-center gap-3">
              <Scale size={18} className="text-primary-blue" />
              3. Regulatory Compliance
            </h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal mb-4">
              All offerings are subject to IRDAI regulations, policy wording, exclusions, conditions, and applicable law. TRUSTFLOWS does not guarantee approval, coverage, or payout. Prospective users are advised to read the policy document, terms, conditions, exclusions, and risk factors carefully before making any decision.
            </p>
            <div className="bg-[#F5F7FA] p-6 rounded-2xl border border-navy-900/5">
              <p className="text-[13px] text-navy-900/60 font-medium italic">
                Prepared for TRUSTFLOWS Website | Optimized for Clarity, Compliance & Trust | IRDAI Guidelines Followed
              </p>
            </div>
          </section>

          <section className="border-l-2 border-navy-900/10 pl-8 py-2">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4 flex items-center gap-3">
              <ShieldAlert size={18} className="text-primary-blue" />
              4. Illustrative Nature of Features
            </h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              Framework descriptions, features, and pathways mentioned herein are illustrative and subject to regulatory approval, underwriting assessment, and contractual finalization. This is not an offer to sell or solicitation to buy any insurance product.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-navy-900/5">
          <p className="text-[13px] text-navy-900/40 font-medium uppercase tracking-[2px]">
            © 2026 TRUSTFLOWS TRANSACTION INFRASTRUCTURE | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
