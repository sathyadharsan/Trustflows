import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart,
  Trophy
} from 'lucide-react';
import { outcomes } from '../data/outcomes';

const OutcomeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = outcomes.find(o => o.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-navy-900">Outcome not found</h2>
          <Link to="/" className="text-primary-blue flex items-center justify-center gap-2 font-semibold">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-[5%]">
        
        {/* Breadcrumb */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#4a4a6a] hover:text-primary-blue transition-colors mb-8 text-sm font-bold tracking-wider uppercase"
        >
          <ArrowLeft size={16} /> PLATFORM OUTCOMES
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-primary-blue font-bold tracking-[2px] uppercase text-[11px] mb-4">
            <Trophy size={14} /> TRANSACTION PERFORMANCE METRIC
          </div>
          <h1 className="text-[40px] md:text-[64px] font-bold text-navy-900 leading-[1] tracking-tight mb-8">
            {data.title}
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <p className="text-[20px] text-[#4a4a6a] leading-[1.8] font-medium">
              {data.description}
            </p>
            <div className="bg-white border border-navy-900/5 rounded-[32px] p-10 shadow-sm flex items-center gap-8">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <BarChart className="text-primary-blue" size={40} />
              </div>
              <div>
                <div className="text-primary-blue font-bold text-[11px] uppercase tracking-wider mb-1">PROVEN PERFORMANCE</div>
                <div className="text-[32px] font-bold text-navy-900 leading-tight">{data.metric}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis & Impact */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          
          {/* Detailed Impact */}
          <div className="lg:col-span-2 bg-navy-900 rounded-[40px] p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <ShieldCheck size={200} />
            </div>
            <div className="relative z-10">
              <h2 className="text-[28px] font-bold mb-8">Strategic Analysis</h2>
              <p className="text-[20px] opacity-90 leading-[1.8] mb-12">
                {data.detailedAnalysis}
              </p>
              <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <CheckCircle2 size={24} className="text-primary-blue" />
                <span className="text-[18px] font-bold italic">{data.benefit}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[32px] border border-navy-900/5 shadow-sm">
              <Zap size={32} className="text-primary-blue mb-4" />
              <div className="text-[32px] font-bold text-navy-900 mb-2">48hr</div>
              <div className="text-[13px] font-bold text-[#4a4a6a] uppercase tracking-widest">Industry Leading Speed</div>
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-navy-900/5 shadow-sm">
              <TrendingUp size={32} className="text-green-500 mb-4" />
              <div className="text-[32px] font-bold text-navy-900 mb-2">99.1%</div>
              <div className="text-[13px] font-bold text-[#4a4a6a] uppercase tracking-widest">Validation Accuracy</div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-white border border-navy-900/5 rounded-[40px] p-12 text-center shadow-sm">
          <h3 className="text-[28px] font-bold text-navy-900 mb-6">Experience this outcome for your transaction.</h3>
          <button className="bg-primary-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-dark transition-all flex items-center justify-center gap-2 mx-auto">
            Get Your Property Risk Report <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default OutcomeDetail;
