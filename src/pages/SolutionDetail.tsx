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
import DetailHeroSlider from '../components/DetailHeroSlider';


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
    <div className="bg-[#F5F7FA] min-h-screen pb-20">

      <DetailHeroSlider 
        backLink="/"
        backText="Our Solutions"
        slides={[
          {
            badge: "TRUSTFLOWS CORE OFFERING",
            title: data.title,
            description: data.definition,
            image: data.heroImages?.[0] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600",
            ctaText: "Activate This Plan"
          },
          {
            badge: "CITY-TRAINED ENGINE",
            title: "Localized\nRisk Intelligence",
            description: "Our AI models are trained on city-specific land records and localized fraud patterns to ensure zero blind spots.",
            image: data.heroImages?.[1] || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600",
            ctaText: "Check My City"
          },
          {
            badge: "REAL-WORLD CASE STUDY",
            title: "Proven\nTransaction Security",
            description: data.useCase,
            image: data.heroImages?.[2] || "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600",
            ctaText: "Download Case Study"
          }
        ]}
      />


        {/* Coverage Grid */}
        <div className="max-w-7xl mx-auto px-[5%] mt-12 grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Detailed Coverage */}
          <div className="lg:col-span-2 space-y-12">
            
            <div className="bg-white rounded-[40px] p-12 shadow-sm border border-navy-900/5">
              <h2 className="text-[32px] font-[800] text-navy-900 flex items-center gap-4 mb-10 tracking-tight">
                <Target size={32} className="text-primary-blue" />
                Comprehensive Coverage
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {data.whatItCovers.map((item, i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="flex items-center gap-3 text-[17px] font-bold text-navy-900 group-hover:text-primary-blue transition-colors">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} className="text-green-600" />
                      </div>
                      {item.risk}
                    </div>
                    <p className="text-[15px] text-[#64748b] leading-[1.7] pl-11">
                      <span className="font-bold text-navy-900/30 mr-1">CASE:</span> {item.example}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-12 border-t border-navy-900/5">
                <h3 className="text-[12px] font-[800] text-red-500 uppercase tracking-[3px] mb-6 flex items-center gap-3">
                  <XCircle size={18} /> STATED EXCLUSIONS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {data.exclusions.map((exc, i) => (
                    <div key={i} className="text-[14px] text-[#64748b] flex items-center gap-3 bg-red-50/30 p-3 rounded-xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" /> {exc}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Competitive Comparison */}
            {data.comparison && (
              <div className="bg-white rounded-[40px] p-12 shadow-sm border border-navy-900/5">
                <h2 className="text-[32px] font-[800] text-navy-900 mb-10 tracking-tight">The TRUSTFLOWS Difference</h2>
                <div className="overflow-hidden border border-navy-900/5 rounded-3xl">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#f8fafc]">
                      <tr>
                        <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-[2px] text-[#64748b]">Feature</th>
                        <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-[2px] text-[#64748b]">Local Lawyers</th>
                        <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-[2px] text-primary-blue">TRUSTFLOWS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-900/5">
                      {data.comparison.map((row, i) => (
                        <tr key={i}>
                          <td className="px-8 py-6 font-bold text-navy-900 text-[14px]">{row.feature}</td>
                          <td className="px-8 py-6 text-[#64748b] text-[14px]">{row.local}</td>
                          <td className="px-8 py-6 font-bold text-primary-blue text-[14px] bg-primary-blue/5">{row.trustflows}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* FAQs */}
            {data.faqs && (
              <div className="space-y-6">
                <h2 className="text-[32px] font-[800] text-navy-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
                {data.faqs.map((faq, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-navy-900/5 hover:border-primary-blue/20 transition-all">
                    <h4 className="text-[18px] font-bold text-navy-900 mb-4">{faq.q}</h4>
                    <p className="text-[15px] text-[#64748b] leading-[1.8]">{faq.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Pricing & CTA */}
          <div className="space-y-8">
            <div className="bg-[#0a0a1a] text-white rounded-[40px] p-10 shadow-2xl sticky top-24 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/20 rounded-full blur-3xl -mr-16 -mt-16" />
              <h2 className="text-[24px] font-[800] mb-8 relative z-10 flex items-center gap-3">
                <BarChart3 size={24} className="text-primary-blue" />
                Service Tiers
              </h2>
              <div className="space-y-4 mb-10 relative z-10">
                {data.tiers.map((tier, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[15px] font-bold">{tier.tier}</span>
                      <span className="text-[18px] font-bold text-primary-blue">{tier.premium}</span>
                    </div>
                    <div className="flex justify-between items-center text-[12px] text-white/40 font-medium">
                      <span>Cover: {tier.cover}</span>
                      <span className="italic">{tier.bestFor}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-primary-blue text-white py-5 rounded-2xl font-[800] text-[16px] hover:bg-blue-600 transition-all shadow-xl shadow-primary-blue/20 flex items-center justify-center gap-3 relative z-10">
                Activate Solution Now <ArrowRight size={20} />
              </button>
            </div>

            {/* Who is it for? */}
            <div className="bg-white rounded-[40px] p-10 border border-navy-900/5 shadow-sm">
              <h3 className="text-[12px] font-[800] text-[#64748b] mb-6 uppercase tracking-[3px]">Ideal For</h3>
              <div className="flex flex-wrap gap-2">
                {data.whoShouldBuy.map((item, i) => (
                  <span key={i} className="px-5 py-2.5 bg-[#f8fafc] text-navy-900 text-[14px] font-bold rounded-xl border border-navy-900/5">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>


    </div>
  );
};

export default SolutionDetail;
