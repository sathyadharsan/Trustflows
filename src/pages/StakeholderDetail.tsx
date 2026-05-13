import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Users, 
  Target, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  TrendingUp
} from 'lucide-react';
import { stakeholders } from '../data/stakeholders';

const StakeholderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = stakeholders.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-navy-900">Stakeholder role not found</h2>
          <Link to="/" className="text-primary-blue flex items-center justify-center gap-2 font-semibold">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-[5%]">
        
        {/* Breadcrumb */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#4a4a6a] hover:text-primary-blue transition-colors mb-8 text-sm font-bold tracking-wider uppercase"
        >
          <ArrowLeft size={16} /> FOR STAKEHOLDERS
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-primary-blue font-bold tracking-[2px] uppercase text-[11px] mb-4">
            <Users size={14} /> TAILORED FOR {data.role.toUpperCase()}S
          </div>
          <h1 className="text-[40px] md:text-[64px] font-bold text-navy-900 leading-[1] tracking-tight mb-8">
            Protecting Your <br/>
            <span className="text-primary-blue">{data.role} Interests</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="p-10 bg-[#F5F7FA] rounded-[40px] border border-navy-900/5">
              <div className="text-[11px] font-bold text-[#4a4a6a] uppercase tracking-widest mb-4">THE UNADDRESSED NEED</div>
              <p className="text-[24px] font-bold text-navy-900 leading-tight">
                "{data.unaddressedNeed}"
              </p>
              <div className="mt-10 pt-10 border-t border-navy-900/10">
                <div className="text-[11px] font-bold text-primary-blue uppercase tracking-widest mb-4">TRUSTFLOWS VALUE ADD</div>
                <p className="text-[18px] font-semibold text-[#4a4a6a]">
                  {data.trustflowsValue}
                </p>
              </div>
            </div>
            
            <div className="space-y-8 pt-6">
              <h2 className="text-[24px] font-bold text-navy-900 flex items-center gap-3">
                <ShieldCheck size={24} className="text-primary-blue" />
                Key Benefits for {data.role}s
              </h2>
              <div className="grid gap-4">
                {data.detailedBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white border border-navy-900/5 rounded-2xl group hover:border-primary-blue/30 transition-all">
                    <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                    <span className="text-[16px] font-bold text-navy-900 opacity-90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-navy-900 rounded-[32px] p-10 text-white flex flex-col justify-between">
            <div>
              <Briefcase size={40} className="text-primary-blue mb-6" />
              <h3 className="text-[28px] font-bold mb-4">Best Fit Segment</h3>
              <p className="text-[18px] opacity-80 leading-[1.6]">
                While TrustFlows works across all property types, we recommend {data.bestFitSegment} as the highest value entry point for your role.
              </p>
            </div>
            <Link to="/" className="mt-8 flex items-center gap-2 text-primary-blue font-bold uppercase tracking-widest text-[13px] hover:gap-3 transition-all">
              Explore Segments <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-blue-600 rounded-[32px] p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <TrendingUp size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-[28px] font-bold mb-4">Conversion Impact</h3>
              <p className="text-[18px] opacity-90 leading-[1.6] mb-8">
                Stakeholders using TrustFlows report a <span className="font-bold underline decoration-white/30 decoration-2">40% higher conversion rate</span> and 60% faster closing times due to upfront trust verification.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
                Download {data.role} PDF Guide
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StakeholderDetail;
