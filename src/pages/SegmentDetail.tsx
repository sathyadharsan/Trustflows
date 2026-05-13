import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Target, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  UserCheck,
  CheckCircle2
} from 'lucide-react';
import { segmentData } from '../data/segments';

const SegmentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = segmentData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Segment not found</h2>
          <Link to="/" className="text-primary-blue flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const renderPainPoint = (text: string) => {
    const parts = text.split(/(₹[\d,.\s]+(?:Lakhs?|Crores?|Cr|L|k)?)/g);
    return (
      <>
        {parts.map((part, i) =>
          part.startsWith('₹') ? <strong key={i} className="font-bold text-red-700">{part}</strong> : part
        )}
      </>
    );
  };

  return (
    <div className="bg-white min-h-screen pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-[5%]">
        
        {/* Breadcrumb */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#4a4a6a] hover:text-primary-blue transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} /> ALL SEGMENTS
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-primary-blue font-bold tracking-[2px] uppercase text-[11px] mb-4">
            <Target size={14} /> SEGMENT SPECIFIC INTELLIGENCE
          </div>
          <h1 className="text-[40px] md:text-[56px] font-bold text-navy-900 leading-[1.1] tracking-tight mb-6">
            {data.title}
          </h1>
          <p className="text-[18px] text-[#4a4a6a] leading-[1.8] max-w-3xl">
            Every property type in India has its own unique risks, from hidden society dues in apartments to Wakf claims on vacant land. Our AI is trained to detect these specific threats before you commit your life savings.
          </p>
        </div>

        {/* Core Analysis Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Target Audience */}
          <div className="bg-blue-50/50 border border-blue-100 rounded-[32px] p-8">
            <div className="flex items-center gap-3 text-primary-blue font-bold text-[11px] uppercase tracking-wider mb-6">
              <UserCheck size={18} /> WHO THIS IS FOR
            </div>
            <ul className="space-y-4">
              {data.content.who.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-navy-900 leading-snug">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Pain Points */}
          <div className="lg:col-span-2 bg-red-50/30 border border-red-100 rounded-[32px] p-8">
            <div className="flex items-center gap-3 text-red-600 font-bold text-[11px] uppercase tracking-wider mb-6">
              <AlertCircle size={18} /> UNIQUE SEGMENT RISKS
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {data.content.pain.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-red-500 font-bold text-lg mt-[-4px]">!</span>
                  <p className="text-[15px] text-[#4a4a6a] leading-[1.7]">
                    {renderPainPoint(item)}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Solution & ROI Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Specific Checks */}
          <div className="space-y-8">
            <h2 className="text-[28px] font-bold text-navy-900 flex items-center gap-3">
              <ShieldCheck size={24} className="text-primary-blue" />
              TrustFlows Specific Checks
            </h2>
            <div className="space-y-3">
              {data.content.solution.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-white border border-navy-900/5 rounded-2xl group hover:border-primary-blue/30 transition-all">
                  <span className="text-[15px] font-bold text-navy-900">{item.check}</span>
                  <div className="flex items-center gap-2 text-primary-blue font-semibold italic text-[13px]">
                    <ArrowRight size={14} className="opacity-40" /> {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI / Case Study */}
          <div className="bg-navy-900 rounded-[40px] p-10 text-white relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <TrendingUp size={150} />
            </div>
            <div className="relative z-10">
              <div className="text-primary-blue font-bold text-[11px] tracking-[2px] uppercase mb-6">
                {data.content.roi.startsWith('ROI') ? 'INVESTMENT PROTECTION' : 'REAL-WORLD CASE STUDY'}
              </div>
              <h3 className="text-[32px] font-bold mb-6 leading-tight">Proven Transaction Security</h3>
              <div className="bg-white/5 border border-white/10 p-8 rounded-[24px] backdrop-blur-sm">
                <p className="text-[18px] leading-[1.8] italic text-white/90">
                  "{data.content.roi}"
                </p>
              </div>
              
              <button className="w-full mt-8 bg-primary-blue text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                Secure My {data.sidebarLabel} Purchase <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Other Segments */}
        <div className="mt-20 pt-12 border-t border-navy-900/5">
          <h4 className="text-[13px] font-bold text-navy-900 mb-8 uppercase tracking-[2px]">Explore Other Property Types</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {segmentData.filter(s => s.id !== id).slice(0, 4).map(s => (
              <Link 
                key={s.id} 
                to={`/segments/${s.id}`}
                className="p-6 bg-[#F5F7FA] rounded-2xl hover:bg-white hover:border-primary-blue border border-transparent transition-all group"
              >
                <div className="text-[15px] font-bold text-navy-900 group-hover:text-primary-blue transition-colors">{s.sidebarLabel}</div>
                <div className="text-[11px] text-[#4a4a6a] mt-1">Deep-dive intelligence</div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SegmentDetail;
