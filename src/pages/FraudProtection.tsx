import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Search, FileWarning, Lock, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';
import DetailHeroSlider from '../components/DetailHeroSlider';

const frauds = [
  {
    id: 'mother-deed',
    title: 'The Mother Deed Chain Gap',
    risk: 'High',
    desc: 'Missing links in the historical ownership chain (Mother Deed) can lead to future litigation or rejection of title insurance.',
    check: 'Verify original documents at the Sub-Registrar office and cross-reference with EC (Encumbrance Certificate).'
  },
  {
    id: 'wakf-claims',
    title: 'Undisclosed Wakf Board Claims',
    risk: 'Critical',
    desc: 'Properties belonging to religious endowments (Wakf) cannot be sold. Many such properties are sold using forged NOCs.',
    check: 'Official search in the State Wakf Board gazette notification database.'
  },
  {
    id: 'impersonation',
    title: 'Seller Impersonation (POA Fraud)',
    risk: 'High',
    desc: 'Fraudsters use fake Power of Attorney (POA) or impersonate elderly/NRI owners to sell properties they don\'t own.',
    check: 'Mandatory verification of POA registration at the issuing SRO and biometric validation where possible.'
  },
  {
    id: 'dual-allotment',
    title: 'Dual Allotment (Govt Schemes)',
    risk: 'Medium',
    desc: 'In BDA/MHADA/DDA schemes, the same plot might be allotted to two different people due to internal data errors or fraud.',
    check: 'Obtain a Certified Copy of the Allotment Letter directly from the development authority.'
  },
  {
    id: 'illegal-alteration',
    title: 'Illegal Alteration & Deviation',
    risk: 'Medium',
    desc: 'Apartments with deviations beyond the approved plan (Sanctioned Plan) are liable for demolition or heavy penalties.',
    check: 'Physical inspection vs. Occupation Certificate (OC) and building plan approval.'
  }
];

const FraudProtection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-20">
      <DetailHeroSlider 
        backLink="/"
        backText="Security Center"
        slides={[
          {
            badge: "PROPERTY SECURITY HUB",
            title: "Fraud Protection\nRisk Center",
            description: "Empowering Indian property owners and institutions with the intelligence to identify, prevent, and protect against real estate fraud.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600",
            ctaText: "Report Fraud Attempt"
          },
          {
            badge: "ADVANCED DETECTION",
            title: "Identify Common\nMarket Risks",
            description: "The Indian real estate market has unique fraud patterns. Our AI scans millions of records to detect forged deeds and impersonation attempts.",
            image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600",
            ctaText: "View Risk Patterns"
          },
          {
            badge: "LIFETIME DEFENSE",
            title: "Secure Your\nTransaction Today",
            description: "From RBI-compliant escrow to IRDAI-aligned insurance, we provide the ultimate security stack for property ownership.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600",
            ctaText: "Get Free Risk Report"
          }
        ]}
      />

      {/* Fraud Directory */}
      <section className="py-[100px] px-[5%] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-[32px] font-[900] text-navy-900 mb-6 leading-tight">Identify The <br />Common Risks</h2>
                <p className="text-[16px] text-navy-900/60 leading-[1.8] mb-8">
                  The Indian real estate market has unique fraud patterns. Understanding these is the first step toward a secure transaction.
                </p>
                <div className="p-6 bg-navy-900 rounded-2xl text-white">
                  <AlertCircle size={24} className="text-red-500 mb-4" />
                  <div className="text-[14px] font-bold mb-2">Suspicious Transaction?</div>
                  <p className="text-[12px] text-white/60 leading-[1.6]">
                    If you suspect documentation fraud, use our AI scanner immediately to verify authenticity.
                  </p>
                  <button className="mt-4 w-full bg-red-600 py-3 rounded-lg text-[12px] font-bold uppercase tracking-wider">
                    Report Fraud Attempt
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {frauds.map((fraud, i) => (
                <motion.div
                  key={fraud.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[32px] border border-navy-900/5 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-navy-900/5 text-navy-900">
                      <FileWarning size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[1px] ${
                      fraud.risk === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {fraud.risk} Risk
                    </span>
                  </div>
                  <h3 className="text-[20px] font-bold text-navy-900 mb-4">{fraud.title}</h3>
                  <p className="text-[14px] text-navy-900/60 leading-[1.7] mb-8">
                    {fraud.desc}
                  </p>
                  <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-navy-900/5">
                    <div className="text-[11px] font-bold text-primary-blue uppercase tracking-[1.5px] mb-2 flex items-center gap-2">
                      <Search size={14} /> Verification Check
                    </div>
                    <p className="text-[13px] text-navy-900/80 font-medium leading-[1.6]">
                      {fraud.check}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Infrastructure */}
      <section className="py-[100px] px-[5%] bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-primary-blue text-[11px] font-bold tracking-[3px] uppercase mb-4">OUR SECURITY STACK</div>
          <h2 className="text-[36px] font-[900] text-navy-900 mb-16">How We Protect Every Transaction</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[40px] bg-[#F8FAFC] border border-navy-900/5">
              <Lock size={32} className="text-primary-blue mx-auto mb-6" />
              <h3 className="text-[18px] font-bold text-navy-900 mb-4">AES-256 Encryption</h3>
              <p className="text-[14px] text-navy-900/60 leading-[1.8]">
                All land records and personal data are stored in MeitY-compliant Indian data centers with military-grade encryption.
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-navy-900 text-white shadow-2xl">
              <ShieldAlert size={32} className="text-primary-blue mx-auto mb-6" />
              <h3 className="text-[18px] font-bold mb-4">AI Forgery Detection</h3>
              <p className="text-[14px] text-white/60 leading-[1.8]">
                Our proprietary algorithms scan sub-registrar seals and signatures to identify digital forgeries in real-time.
              </p>
            </div>
            <div className="p-10 rounded-[40px] bg-[#F8FAFC] border border-navy-900/5">
              <BookOpen size={32} className="text-primary-blue mx-auto mb-6" />
              <h3 className="text-[18px] font-bold text-navy-900 mb-4">IRDAI-Aligned Title Insurance</h3>
              <p className="text-[14px] text-navy-900/60 leading-[1.8]">
                If a fraud bypasses our checks, our insurance frameworks provide financial coverage for legal defense and property loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5%]">
        <div className="max-w-5xl mx-auto bg-primary-blue rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />
          <h2 className="text-[32px] md:text-[48px] font-[900] text-white mb-8 leading-tight">
            Transact with total <br />confidence today.
          </h2>
          <button className="bg-white text-primary-blue px-10 py-5 rounded-2xl font-bold text-[17px] hover:shadow-2xl transition-all flex items-center gap-2 mx-auto">
            Get Your Risk Report Now <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FraudProtection;
