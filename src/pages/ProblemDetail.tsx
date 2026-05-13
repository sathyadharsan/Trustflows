import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  AlertTriangle, 
  TrendingDown, 
  Search, 
  MapPin, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { problems } from '../data/problems';

const ProblemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = problems.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-navy-900">Problem scenario not found</h2>
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
          <ArrowLeft size={16} /> THE MARKET PROBLEM
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-red-600 font-bold tracking-[2px] uppercase text-[11px] mb-4">
            <AlertTriangle size={14} /> IDENTIFIED TRANSACTION RISK
          </div>
          <h1 className="text-[40px] md:text-[64px] font-bold text-navy-900 leading-[1] tracking-tight mb-8">
            {data.segment}: <br/>
            <span className="text-red-600">{data.title}</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <p className="text-[18px] text-[#4a4a6a] leading-[1.8] font-medium">
              {data.detailedAnalysis}
            </p>
            <div className="bg-red-50 border border-red-100 rounded-[32px] p-8 flex items-center gap-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                <TrendingDown className="text-white" size={32} />
              </div>
              <div>
                <div className="text-red-600 font-bold text-[11px] uppercase tracking-wider mb-1">TYPICAL FINANCIAL LOSS</div>
                <div className="text-[32px] font-bold text-navy-900">{data.typicalLoss}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Risk Analysis */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Unique Risk Profile */}
          <div className="space-y-6">
            <h2 className="text-[24px] font-bold text-navy-900 flex items-center gap-3">
              <ShieldAlert size={24} className="text-red-600" />
              Unique Risk Profile
            </h2>
            <div className="p-8 bg-navy-900 rounded-[32px] text-white">
              <p className="text-[18px] leading-[1.7] opacity-90 italic">
                "{data.uniqueRisk}"
              </p>
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-blue/20 rounded-full flex items-center justify-center">
                  <Search size={20} className="text-primary-blue" />
                </div>
                <span className="text-sm font-bold tracking-wider uppercase">Deep-Scan Required for Transaction</span>
              </div>
            </div>
          </div>

          {/* City Context */}
          <div className="space-y-6">
            <h2 className="text-[24px] font-bold text-navy-900 flex items-center gap-3">
              <MapPin size={24} className="text-primary-blue" />
              Localized Impact
            </h2>
            <div className="space-y-4">
              {data.cityContext.map((ctx, i) => (
                <div key={i} className="p-6 border border-navy-900/5 rounded-2xl hover:border-primary-blue/20 transition-all group bg-blue-50/30">
                  <div className="text-[13px] font-bold text-primary-blue uppercase tracking-widest mb-2">{ctx.city}</div>
                  <p className="text-navy-900 font-semibold text-[15px]">{ctx.specificRisk}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary-blue to-blue-dark rounded-[40px] p-12 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-[32px] md:text-[40px] font-bold mb-6">Don't inherit a lifetime of litigation.</h3>
            <p className="text-[18px] opacity-90 mb-10 max-w-2xl mx-auto font-medium">
              Every city and property segment has unique trust gaps. Our AI is trained to detect these specific threats in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-navy-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-light transition-all flex items-center justify-center gap-2">
                Get AI Risk Report <ArrowRight size={18} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                Talk to Risk Advisor
              </button>
            </div>
          </div>
          
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <Search size={400} className="absolute -top-20 -left-20" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProblemDetail;
