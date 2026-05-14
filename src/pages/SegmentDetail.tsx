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
import DetailHeroSlider from '../components/DetailHeroSlider';


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
    <div className="bg-white min-h-screen pb-20">
      <DetailHeroSlider 
        backLink="/"
        backText="All Segments"
        slides={[
          {
            badge: "SEGMENT SPECIFIC INTELLIGENCE",
            title: data.title,
            description: "Every property type in India has its own unique risks. Our AI is trained to detect these specific threats before you commit your life savings.",
            image: data.content.heroImages?.[0] || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
            ctaText: "Get Segment Risk Report"
          },
          {
            badge: "CRITICAL RISK",
            title: "Localized\nRisk Detection",
            description: "Traditional verification often misses segment-specific liabilities. We scan localized data to uncover what standard legal opinions miss.",
            image: data.content.heroImages?.[1] || "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600",
            ctaText: "Explore Unique Risks"
          },
          {
            badge: "PROVEN ROI",
            title: "Transaction\nSecurity ROI",
            description: data.content.roi,
            image: data.content.heroImages?.[2] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
            ctaText: "Secure My Purchase"
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-[5%] mt-16">

        {/* Market Stats Bar */}
        {data.content.marketStats && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {data.content.marketStats.map((stat, i) => (
              <div key={i} className="bg-navy-900 p-8 rounded-[32px] text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-blue/10 rounded-full blur-2xl -mr-12 -mt-12" />
                <div className="text-[36px] font-bold text-primary-blue mb-1 leading-none">{stat.value}</div>
                <div className="text-[11px] font-bold text-white/50 uppercase tracking-[2px]">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

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

        {/* Deep Dive Analysis */}
        {data.content.deepDive && (
          <div className="bg-white border border-navy-900/5 p-10 rounded-[40px] mb-16 shadow-sm">
            <h2 className="text-[32px] font-bold text-navy-900 mb-8">Segment Deep Dive Analysis</h2>
            <p className="text-[18px] text-[#4a4a6a] leading-[1.8] font-normal">
              {data.content.deepDive}
            </p>
          </div>
        )}

        {/* Detailed Check Table */}
        {data.content.checkTable && (
          <div className="mb-20">
            <h2 className="text-[32px] font-bold text-navy-900 mb-10">Advanced Verification Matrix</h2>
            <div className="space-y-12">
              {data.content.checkTable.map((cat, i) => (
                <div key={i}>
                  <div className="text-[12px] font-bold text-primary-blue uppercase tracking-[3px] mb-6 pl-4">{cat.category} Audit</div>
                  <div className="bg-white rounded-[32px] overflow-hidden border border-navy-900/5 shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-[#f8fafc]">
                        <tr>
                          <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Verification Check</th>
                          <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Risk Level</th>
                          <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Details & Significance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-navy-900/5">
                        {cat.checks.map((row, idx) => (
                          <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                            <td className="px-8 py-7 font-bold text-navy-900 text-[15px]">{row.check}</td>
                            <td className="px-8 py-7">
                              <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                row.level === 'High' ? 'bg-red-50 text-red-600' : 
                                row.level === 'Medium' ? 'bg-orange-50 text-orange-600' : 
                                'bg-green-50 text-green-600'
                              }`}>
                                {row.level}
                              </span>
                            </td>
                            <td className="px-8 py-7 text-[#4a4a6a] text-[14px] leading-relaxed max-w-md">{row.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Solution & ROI Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Specific Checks */}
          <div className="space-y-8">
            <h2 className="text-[32px] font-bold text-navy-900 flex items-center gap-3">
              <ShieldCheck size={32} className="text-primary-blue" />
              Standard Solutions
            </h2>
            <div className="space-y-3">
              {data.content.solution.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white border border-navy-900/5 rounded-2xl group hover:border-primary-blue/30 transition-all">
                  <span className="text-[15px] font-bold text-navy-900">{item.check}</span>
                  <div className="flex items-center gap-2 text-primary-blue font-semibold italic text-[14px]">
                    <ArrowRight size={16} className="opacity-40" /> {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI / Case Study */}
          <div className="bg-[#0a0a1a] rounded-[40px] p-12 text-white relative overflow-hidden h-full shadow-2xl">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <TrendingUp size={200} />
            </div>
            <div className="relative z-10">
              <div className="text-primary-blue font-bold text-[11px] tracking-[3px] uppercase mb-8">
                PROVEN TRANSACTION SECURITY
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-[32px] backdrop-blur-sm mb-10">
                <p className="text-[20px] leading-[1.8] italic text-white/90 font-medium">
                  "{data.content.roi}"
                </p>
              </div>
              
              <button className="w-full bg-primary-blue text-white py-5 rounded-2xl font-bold text-[16px] hover:bg-blue-600 transition-all shadow-xl shadow-primary-blue/20 flex items-center justify-center gap-3">
                Secure My {data.sidebarLabel} Purchase <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* Other Segments */}
        <div className="pt-12 border-t border-navy-900/5">
          <h4 className="text-[12px] font-bold text-[#64748b] mb-10 uppercase tracking-[3px]">Explore Other Risk Ecosystems</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {segmentData.filter(s => s.id !== id).slice(0, 4).map(s => (
              <Link 
                key={s.id} 
                to={`/segments/${s.id}`}
                className="p-8 bg-[#f8fafc] rounded-3xl hover:bg-white hover:shadow-xl hover:border-primary-blue border border-transparent transition-all group"
              >
                <div className="text-[16px] font-bold text-navy-900 group-hover:text-primary-blue transition-colors">{s.sidebarLabel}</div>
                <div className="text-[12px] text-[#4a4a6a] mt-2 font-medium">Deep-dive intelligence</div>
              </Link>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default SegmentDetail;
