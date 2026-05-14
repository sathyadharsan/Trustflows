import React, { useEffect } from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import DetailHeroSlider from '../components/DetailHeroSlider';

const Terms = () => {
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
            badge: "SERVICE AGREEMENT",
            title: "Terms &\nConditions",
            description: "These terms govern the use of TRUSTFLOWS transaction infrastructure and intelligence services. Last updated: May 2026.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600",
            ctaText: "Download PDF Version"
          },
          {
            badge: "ACCEPTABLE USE",
            title: "AI Report\nLicensing",
            description: "Our AI Property Trust Reports are for exclusive subscriber use. Unauthorized distribution or resale is strictly prohibited to maintain data integrity.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
            ctaText: "View Usage Policy"
          },
          {
            badge: "ESCROW SECURITY",
            title: "RBI-Regulated\nFund Management",
            description: "Digital escrow services are provided in partnership with regulated banking entities, ensuring every rupee is protected by institutional-grade safety.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600",
            ctaText: "Security Overview"
          }
        ]}
      />

      <div className="max-w-4xl mx-auto mt-20 px-[5%]">

        <div className="space-y-12">
          <section className="bg-[#F5F7FA] p-10 rounded-[32px] border border-navy-900/5">
            <h2 className="text-[20px] font-bold text-navy-900 mb-6 flex items-center gap-3">
              <Shield size={20} className="text-primary-blue" />
              1. Acceptable Use of AI Reports
            </h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal mb-4">
              TRUSTFLOWS AI Property Trust Reports are provided for the exclusive use of the registered subscriber. Unauthorized distribution, reproduction, or resale of these reports is strictly prohibited. The data provided is a result of algorithmic analysis of public and private records and should be used as a decision-support tool.
            </p>
            <ul className="space-y-3">
              {['Non-transferable licenses', 'Personal & Professional use tiers', 'Audit trail requirements'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[13px] font-medium text-navy-900/60">
                  <CheckCircle size={14} className="text-primary-blue" /> {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="pl-8 border-l-2 border-navy-900/10">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4">2. Escrow & Fund Management</h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              Digital escrow services are provided in partnership with RBI-regulated banking entities. Funds are held in dedicated nodal accounts and released only upon the verification of pre-defined digital milestones as recorded in the TRUSTFLOWS platform. TrustFlows acts as a facilitator and verifier, not as a direct financial repository.
            </p>
          </section>

          <section className="pl-8 border-l-2 border-navy-900/10">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4">3. Insurance & Indemnity</h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              All title and property insurance products are subject to the specific policy wordings of the issuing IRDAI-regulated insurer. TRUSTFLOWS facilitates the underwriting process through its risk intelligence engine but does not directly assume insurance risk.
            </p>
          </section>

          <section className="pl-8 border-l-2 border-navy-900/10">
            <h2 className="text-[18px] font-bold text-navy-900 mb-4">4. Limitation of Liability</h2>
            <p className="text-[15px] text-[#1a1a2e] leading-[1.8] font-normal">
              While we strive for 99.9% data accuracy, TRUSTFLOWS is not liable for indirect or consequential losses arising from property transaction decisions made solely on the basis of platform data. We recommend independent legal consultation for all high-value transactions.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-navy-900/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[13px] text-navy-900/40 font-medium uppercase tracking-[2px]">
              TRUSTFLOWS TERMS OF SERVICE v4.2
            </p>
            <button className="text-primary-blue font-bold text-[13px] hover:underline">
              Download PDF Version
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
