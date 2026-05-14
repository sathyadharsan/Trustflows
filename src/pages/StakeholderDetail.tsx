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
import DetailHeroSlider from '../components/DetailHeroSlider';


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
    <div className="bg-white min-h-screen pb-20">

      <DetailHeroSlider 
        backLink="/"
        backText="For Stakeholders"
        slides={[
          {
            badge: `TAILORED FOR ${data.title.toUpperCase()}`,
            title: data.role,
            description: data.benefit,
            image: data.heroImages?.[0] || "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600",
            ctaText: "Discover the Value Add"
          },
          {
            badge: "CORE NEEDS",
            title: "Solving Your\nCritical Pain Points",
            description: data.needs[0] || "Advanced risk mitigation tailored for your specific role in the property ecosystem.",
            image: data.heroImages?.[1] || "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600",
            ctaText: "See Detailed Solutions"
          },
          {
            badge: "BUSINESS IMPACT",
            title: "Quantifiable\nSuccess Metrics",
            description: data.roiDetail || "Significant reduction in transaction risk and enhanced trust for all parties involved.",
            image: data.heroImages?.[2] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
            ctaText: `Get ${data.id.charAt(0).toUpperCase() + data.id.slice(1)} Guide`
          }
        ]}
      />


      <div className="max-w-7xl mx-auto px-[5%] mt-16">

        {/* ROI Impact Bar */}
        {data.roiDetail && (
          <div className="bg-[#0a0a1a] rounded-[40px] p-12 text-white mb-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="flex-1">
                <div className="text-primary-blue font-bold text-[11px] tracking-[3px] uppercase mb-4">Quantifiable Impact</div>
                <h2 className="text-[36px] font-[800] leading-tight mb-6">{data.benefit}</h2>
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                  <p className="text-[18px] text-white/80 leading-[1.8] font-medium italic">
                    "{data.roiDetail}"
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-full border-4 border-primary-blue flex items-center justify-center">
                  <TrendingUp size={48} className="text-primary-blue" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Strategic Grid: Needs & Solutions */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Core Needs */}
          <div className="bg-white rounded-[40px] p-12 shadow-sm border border-navy-900/5">
            <h2 className="text-[28px] font-[800] text-navy-900 mb-10 flex items-center gap-4">
              <Target size={32} className="text-primary-blue" />
              Critical Pain Points
            </h2>
            <div className="space-y-6">
              {data.needs.map((need, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-red-500 font-bold text-xs">!</span>
                  </div>
                  <p className="text-[17px] font-bold text-navy-900 leading-tight">{need}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Solutions */}
          <div className="bg-white rounded-[40px] p-12 shadow-sm border border-navy-900/5">
            <h2 className="text-[28px] font-[800] text-navy-900 mb-10 flex items-center gap-4">
              <ShieldCheck size={32} className="text-primary-blue" />
              Integrated Solutions
            </h2>
            <div className="space-y-6">
              {data.solutions.map((sol, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-[#f8fafc] rounded-3xl hover:bg-primary-blue hover:text-white transition-all group">
                  <CheckCircle2 size={24} className="text-primary-blue group-hover:text-white shrink-0" />
                  <span className="text-[17px] font-[800]">{sol}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Engagement Process */}
        {data.process && (
          <div className="mb-20">
            <h2 className="text-[32px] font-[800] text-navy-900 mb-12 text-center">Seamless Engagement Workflow</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.process.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-white p-10 rounded-[40px] border border-navy-900/5 hover:border-primary-blue/30 transition-all h-full shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                    <div className="text-[48px] font-[900] text-primary-blue/10 mb-4">{step.stage}</div>
                    <h4 className="text-[22px] font-[800] text-navy-900 mb-4">{step.stage} Phase</h4>
                    <p className="text-[16px] text-[#64748b] leading-[1.8]">{step.action}</p>
                  </div>
                  {i !== (data.process?.length ?? 0) - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                      <ArrowRight size={32} className="text-primary-blue/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-primary-blue rounded-[40px] p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <h2 className="text-[42px] font-[900] mb-6 relative z-10 tracking-tight">Ready to Secure Your Assets?</h2>
          <p className="text-[20px] text-white/80 mb-10 max-w-2xl mx-auto relative z-10 font-medium">
            Join thousands of {data.role}s who trust TRUSTFLOWS for their high-value property transactions in India's top 20 cities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="bg-white text-primary-blue px-12 py-5 rounded-2xl font-[800] text-[18px] hover:bg-blue-50 transition-all shadow-2xl">
              Get Started for {data.title.split(' ')[2]}
            </button>
            <button className="bg-navy-900 text-white px-12 py-5 rounded-2xl font-[800] text-[18px] hover:bg-navy-800 transition-all shadow-2xl">
              Download Role PDF
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default StakeholderDetail;
