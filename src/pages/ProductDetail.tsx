import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight,
  Shield,
  FileText,
  Clock,
  Zap
} from 'lucide-react';
import { offeringData } from '../data/offerings';
import DetailHeroSlider from '../components/DetailHeroSlider';


const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = offeringData.find(o => o.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/" className="text-primary-blue flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F7FA] min-h-screen pb-20">

      {/* Hero Header with Slider */}
      <DetailHeroSlider 
        backLink="/"
        backText="Back to Offerings"
        slides={[
          {
            badge: `${data.sidebarLabel} Solutions`,
            title: data.title,
            description: data.definition,
            image: data.heroImages?.[0] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600",
            ctaText: `Get ${data.sidebarLabel} Report`
          },
          {
            badge: "CORE BENEFITS",
            title: `Maximum Protection\nfor ${data.sidebarLabel}`,
            description: data.benefits[0] || "Advanced AI-driven verification for your property segment.",
            image: data.heroImages?.[1] || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600",
            ctaText: "Explore Coverage"
          },
          {
            badge: "REAL WORLD CASE",
            title: data.useCase.title,
            description: data.useCase.desc,
            image: data.heroImages?.[2] || "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600",
            ctaText: "View Case Study"
          }
        ]}
      />


      {/* Main Content */}
      <section className="py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Left: Benefits & Coverage */}
            <div className="lg:col-span-2 space-y-20">
              
              {/* Market Reality / Summary */}
              {data.marketReality && (
                <div className="bg-white border-l-4 border-primary-blue p-8 rounded-2xl shadow-sm">
                  <div className="text-[11px] font-bold text-primary-blue tracking-[2px] uppercase mb-3">Market Reality Check</div>
                  <p className="text-[20px] font-medium text-navy-900 leading-[1.6]">
                    {data.marketReality}
                  </p>
                </div>
              )}

              {/* Benefits */}
              <div>
                <h2 className="text-[32px] font-bold text-navy-900 mb-8 flex items-center gap-3">
                  Core Benefits
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.benefits.map((benefit, i) => (
                    <div key={i} className="bg-white border border-navy-900/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                        <CheckCircle2 size={20} className="text-primary-blue" />
                      </div>
                      <p className="text-[#1a1a2e] font-semibold leading-[1.6]">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* How It Works - Timeline */}
              {data.howItWorks && data.howItWorks.length > 0 && (
                <div className="bg-navy-900 rounded-[40px] p-12 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl -mr-32 -mt-32" />
                  <h2 className="text-[32px] font-bold mb-12 relative z-10">How It Works</h2>
                  <div className="space-y-12 relative z-10">
                    {data.howItWorks.map((step, i) => (
                      <div key={i} className="flex gap-8 group">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl bg-primary-blue flex items-center justify-center font-bold text-xl shrink-0 shadow-lg shadow-primary-blue/20">
                            {step.step}
                          </div>
                          {data.howItWorks && i !== data.howItWorks.length - 1 && (
                            <div className="w-0.5 h-full bg-white/10 my-2" />
                          )}
                        </div>
                        <div className="pb-4">
                          <h4 className="text-[20px] font-bold mb-2 group-hover:text-primary-blue transition-colors">{step.title}</h4>
                          <p className="text-white/60 leading-[1.7] max-w-xl">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Coverage Grid */}
              <div>
                <h2 className="text-[32px] font-bold text-navy-900 mb-8">What Exactly is Covered?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {data.coverage.map((c, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-navy-900/5 hover:border-primary-blue/20 transition-all">
                      <div className="text-primary-blue mb-4">
                        <Shield size={24} />
                      </div>
                      <h4 className="text-[19px] font-bold text-navy-900 mb-3">{c.item}</h4>
                      <p className="text-[#4a4a6a] text-[15px] leading-[1.7]">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payout Structure Table */}
              {data.payoutStructure && data.payoutStructure.length > 0 && (
                <div>
                  <h2 className="text-[32px] font-bold text-navy-900 mb-8">Payout & Settlement Structure</h2>
                  <div className="bg-white rounded-3xl overflow-hidden border border-navy-900/5 shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-[#f8fafc]">
                        <tr>
                          <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Condition</th>
                          <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Timeline</th>
                          <th className="px-8 py-5 text-[11px] font-bold uppercase tracking-wider text-[#64748b]">Settlement Method</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-navy-900/5">
                        {data.payoutStructure.map((row, i) => (
                          <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                            <td className="px-8 py-6 font-bold text-navy-900">{row.condition}</td>
                            <td className="px-8 py-6 text-[#4a4a6a]">{row.timeline}</td>
                            <td className="px-8 py-6 font-medium text-primary-blue">{row.method}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}


            </div>

            {/* Right Sidebar: Pricing & Actions */}
            <div className="space-y-8">
              <div className="bg-[#0a0a1a] text-white rounded-[40px] p-10 sticky top-24 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/20 rounded-full blur-3xl -mr-16 -mt-16" />
                
                <h3 className="text-[22px] font-bold mb-8 relative z-10">Protection Tiers</h3>
                
                <div className="space-y-4 mb-10 relative z-10">
                  {data.pricing.map((p, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="text-[14px] font-bold group-hover:text-primary-blue transition-colors">{p.tier}</div>
                          {p.bestFor && <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{p.bestFor}</div>}
                        </div>
                        <div className="text-right">
                          <div className="text-[24px] font-bold text-primary-blue leading-none">{p.premium}</div>
                          {p.cover && <div className="text-[10px] text-white/30 mt-1">Cover up to {p.cover}</div>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {data.exclusions && (
                  <div className="mb-10 relative z-10">
                    <h4 className="text-[11px] font-bold text-primary-blue tracking-[2px] uppercase mb-4">Strict Exclusions</h4>
                    <ul className="space-y-3">
                      {data.exclusions.map((ex, i) => (
                        <li key={i} className="text-[13px] text-white/60 flex gap-3 leading-relaxed">
                          <span className="text-primary-blue shrink-0">•</span> {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="w-full bg-primary-blue text-white py-5 rounded-2xl font-bold text-[16px] hover:bg-blue-600 transition-all shadow-xl shadow-primary-blue/20 flex items-center justify-center gap-3 relative z-10">
                  Get Started Now <ArrowRight size={20} />
                </button>
              </div>

              {/* Related */}
              <div className="bg-white rounded-[40px] p-10 border border-navy-900/5 shadow-sm">
                <h3 className="text-[13px] font-bold text-[#64748b] mb-8 uppercase tracking-[2px]">Other Risk Solutions</h3>
                <div className="space-y-4">
                  {offeringData.filter(o => o.id !== id).slice(0, 4).map((o) => (
                    <Link 
                      key={o.id} 
                      to={`/offerings/${o.id}`}
                      className="flex items-center justify-between p-5 bg-[#f8fafc] rounded-2xl hover:bg-primary-blue hover:text-white transition-all group"
                    >
                      <span className="text-[14px] font-bold">{o.sidebarLabel}</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;
