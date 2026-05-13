import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Zap, 
  ArrowRight,
  Target,
  BarChart3
} from 'lucide-react';
import { solutions } from '../data/solutions';

const SolutionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = solutions.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-navy-900">Solution not found</h2>
          <Link to="/" className="text-primary-blue flex items-center justify-center gap-2 font-semibold">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F7FA] min-h-screen pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-[5%]">
        
        {/* Breadcrumb */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#4a4a6a] hover:text-primary-blue transition-colors mb-8 text-sm font-bold tracking-wider uppercase"
        >
          <ArrowLeft size={16} /> OUR SOLUTIONS
        </Link>

        {/* Header Section */}
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-sm border border-navy-900/5 mb-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-primary-blue font-bold tracking-[2px] uppercase text-[11px] mb-4">
                <ShieldCheck size={14} /> TRUSTFLOWS CORE OFFERING
              </div>
              <h1 className="text-[40px] md:text-[56px] font-bold text-navy-900 leading-[1.1] tracking-tight mb-8">
                {data.title}
              </h1>
              <p className="text-[18px] text-[#4a4a6a] leading-[1.8] font-medium mb-10">
                {data.definition}
              </p>
              <div className="flex flex-wrap gap-4">
                {data.whoShouldBuy.map((who, i) => (
                  <div key={i} className="px-5 py-2 bg-blue-50 text-primary-blue rounded-full text-[13px] font-bold uppercase tracking-wider">
                    {who}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-navy-900 rounded-[32px] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Zap size={100} />
                </div>
                <div className="relative z-10">
                  <div className="text-[11px] font-bold text-primary-blue uppercase tracking-widest mb-4">REAL-WORLD CASE STUDY</div>
                  <p className="text-[17px] leading-[1.7] italic opacity-90">
                    "{data.useCase}"
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-navy-900/5 rounded-2xl p-6 text-center">
                  <div className="text-[24px] font-bold text-navy-900 mb-1">99.1%</div>
                  <div className="text-[11px] font-bold text-[#4a4a6a] uppercase tracking-wider">Accuracy</div>
                </div>
                <div className="bg-white border border-navy-900/5 rounded-2xl p-6 text-center">
                  <div className="text-[24px] font-bold text-navy-900 mb-1">48hr</div>
                  <div className="text-[11px] font-bold text-[#4a4a6a] uppercase tracking-wider">Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Detailed Coverage */}
          <div className="lg:col-span-2 bg-white rounded-[32px] p-10 shadow-sm border border-navy-900/5">
            <h2 className="text-[24px] font-bold text-navy-900 flex items-center gap-3 mb-8">
              <Target size={24} className="text-primary-blue" />
              What It Covers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {data.whatItCovers.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-navy-900">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                    {item.risk}
                  </div>
                  <p className="text-[14px] text-[#4a4a6a] leading-[1.6] pl-7 italic">
                    Example: {item.example}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-10 border-t border-navy-900/5">
              <h3 className="text-[13px] font-bold text-red-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                <XCircle size={16} /> Exclusions
              </h3>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {data.exclusions.map((exc, i) => (
                  <div key={i} className="text-[14px] text-[#4a4a6a] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600/30" /> {exc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-navy-900/5">
            <h2 className="text-[24px] font-bold text-navy-900 flex items-center gap-3 mb-8">
              <BarChart3 size={24} className="text-primary-blue" />
              Pricing Tiers
            </h2>
            <div className="space-y-4">
              {data.tiers.map((tier, i) => (
                <div key={i} className="p-5 bg-blue-50/50 border border-blue-100 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[15px] font-bold text-navy-900">{tier.tier}</span>
                    <span className="text-[15px] font-bold text-primary-blue">{tier.premium}</span>
                  </div>
                  <div className="flex justify-between items-center text-[13px] text-[#4a4a6a]">
                    <span>Cover: {tier.cover}</span>
                    <span className="italic">{tier.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-primary-blue text-white py-4 rounded-xl font-bold hover:bg-blue-dark transition-all flex items-center justify-center gap-2">
              Activate Plan Now <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SolutionDetail;
