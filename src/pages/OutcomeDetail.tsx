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
import DetailHeroSlider from '../components/DetailHeroSlider';


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
    <div className="bg-[#F8FAFC] min-h-screen pb-20">

      <DetailHeroSlider 
        backLink="/"
        backText="Platform Outcomes"
        slides={[
          {
            badge: "TRANSACTION PERFORMANCE METRIC",
            title: data.title,
            description: data.description,
            image: data.heroImages?.[0] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600",
            ctaText: "See How We Achieve This"
          },
          {
            badge: "PROVEN PERFORMANCE",
            title: "Data-Backed\nImpact Analysis",
            description: `TrustFlows delivers a proven performance metric of ${data.metrics[0]?.value || '99%+'}. Our AI-driven approach fundamentally transforms property transaction reliability.`,
            image: data.heroImages?.[1] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
            ctaText: "View Performance Data"
          },
          {
            badge: "STRATEGIC BENEFIT",
            title: "Your Competitive\nAdvantage",
            description: data.benefits[0] || "Advanced protection for every transaction.",
            image: data.heroImages?.[2] || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600",
            ctaText: "Get AI Risk Report"
          }
        ]}
      />


      <div className="max-w-7xl mx-auto px-[5%] mt-16">

        {/* Impact Analysis Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Detailed Benefits */}
          <div className="lg:col-span-2 space-y-12">
            
            <div className="bg-white rounded-[40px] p-12 shadow-sm border border-navy-900/5">
              <h2 className="text-[32px] font-[800] text-navy-900 mb-10 flex items-center gap-4 tracking-tight">
                <CheckCircle2 size={32} className="text-primary-blue" />
                Key Strategic Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-[#f8fafc] rounded-3xl group hover:bg-primary-blue hover:text-white transition-all">
                    <ShieldCheck size={24} className="text-primary-blue group-hover:text-white shrink-0 mt-0.5" />
                    <p className="text-[17px] font-[800] leading-tight">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Long Term Impact */}
            {data.longTermImpact && (
              <div className="bg-[#0a0a1a] rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <h2 className="text-[28px] font-[800] mb-6 relative z-10 flex items-center gap-4">
                  <Trophy size={28} className="text-primary-blue" />
                  Long-Term Value Impact
                </h2>
                <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative z-10">
                  <p className="text-[20px] leading-[1.8] italic text-white/90 font-medium">
                    "{data.longTermImpact}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Quantifiable Metrics */}
          <div className="space-y-6">
            <h3 className="text-[12px] font-[800] text-[#64748b] uppercase tracking-[3px] mb-8 pl-4">Quantifiable Proof</h3>
            {data.metrics.map((metric, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-navy-900/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary-blue transition-colors">
                  <BarChart size={24} className="text-primary-blue group-hover:text-white" />
                </div>
                <div className="text-[42px] font-[900] text-navy-900 mb-2 leading-none">{metric.value}</div>
                <div className="text-[12px] font-[800] text-[#64748b] uppercase tracking-[2px]">{metric.label}</div>
              </div>
            ))}
            
            <div className="bg-primary-blue p-10 rounded-[40px] text-white shadow-xl shadow-primary-blue/20">
              <Zap size={32} className="mb-4" />
              <div className="text-[28px] font-[800] leading-tight mb-4">48-Hour Guarantee</div>
              <p className="text-white/70 text-[14px] leading-relaxed">
                Our AI engines deliver verified outcomes in under 48 hours, anywhere in India.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-white border border-navy-900/5 rounded-[50px] p-16 text-center shadow-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-50/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="relative z-10">
            <h3 className="text-[36px] font-[900] text-navy-900 mb-8 tracking-tight">Experience This Outcome For Your Property</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary-blue text-white px-12 py-5 rounded-2xl font-[800] text-[18px] hover:bg-blue-600 transition-all shadow-xl shadow-primary-blue/20 flex items-center justify-center gap-3">
                Request AI Risk Report <ArrowRight size={20} />
              </button>
              <button className="bg-navy-900 text-white px-12 py-5 rounded-2xl font-[800] text-[18px] hover:bg-navy-800 transition-all shadow-2xl">
                Consult Legal Expert
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default OutcomeDetail;
