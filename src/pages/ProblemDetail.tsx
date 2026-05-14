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
import DetailHeroSlider from '../components/DetailHeroSlider';


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
    <div className="bg-white min-h-screen pb-20">

      <DetailHeroSlider 
        backLink="/"
        backText="The Market Problem"
        slides={[
          {
            badge: "IDENTIFIED TRANSACTION RISK",
            title: `${data.segment}:\n${data.title}`,
            description: data.detailedAnalysis,
            image: data.heroImages?.[0] || "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600",
            ctaText: "Get AI Risk Report"
          },
          {
            badge: "FINANCIAL IMPACT",
            title: "Typical\nFinancial Loss",
            description: `Unmitigated risks in this segment can lead to typical financial losses of ${data.typicalLoss}. TrustFlows ensures you don't inherit these liabilities.`,
            image: data.heroImages?.[1] || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600",
            ctaText: "Talk to Risk Advisor"
          },
          {
            badge: "LOCAL CONTEXT",
            title: "City-Specific\nRisk Intelligence",
            description: "Property risks vary significantly across cities due to local regulations, historical land records, and prevailing fraud patterns.",
            image: data.heroImages?.[2] || "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600",
            ctaText: "Explore Our Solutions"
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-[5%] mt-16">

        {/* Risk Indicators Bar */}
        {data.riskIndicators && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {data.riskIndicators.map((stat, i) => (
              <div key={i} className="bg-red-50/50 border border-red-100 p-8 rounded-[32px] text-center relative overflow-hidden">
                <div className="text-[36px] font-[900] text-red-600 mb-1 leading-none">{stat.value}</div>
                <div className="text-[11px] font-bold text-red-900/40 uppercase tracking-[2px]">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Core Risk Analysis */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Unique Risk Profile */}
          <div className="space-y-6">
            <h2 className="text-[32px] font-[800] text-navy-900 flex items-center gap-4 tracking-tight">
              <ShieldAlert size={32} className="text-red-600" />
              Unique Risk Profile
            </h2>
            <div className="p-12 bg-navy-900 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <AlertTriangle size={150} />
              </div>
              <p className="text-[20px] leading-[1.8] opacity-90 italic font-medium relative z-10">
                "{data.uniqueRisk}"
              </p>
              <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-primary-blue/20 rounded-full flex items-center justify-center">
                  <Search size={24} className="text-primary-blue" />
                </div>
                <span className="text-[13px] font-bold tracking-[3px] uppercase">AI Deep-Scan Required</span>
              </div>
            </div>
          </div>

          {/* City Context */}
          <div className="space-y-6">
            <h2 className="text-[32px] font-[800] text-navy-900 flex items-center gap-4 tracking-tight">
              <MapPin size={32} className="text-primary-blue" />
              Localized Impact
            </h2>
            <div className="space-y-4">
              {data.cityContext.map((ctx, i) => (
                <div key={i} className="p-8 border border-navy-900/5 rounded-3xl hover:border-primary-blue/30 transition-all group bg-white shadow-sm">
                  <div className="text-[12px] font-[800] text-primary-blue uppercase tracking-[3px] mb-3">{ctx.city} Intelligence</div>
                  <p className="text-navy-900 font-[800] text-[17px] leading-tight group-hover:translate-x-1 transition-transform">{ctx.specificRisk}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Detailed Strategic Analysis */}
        <div className="bg-white rounded-[40px] p-12 border border-navy-900/5 mb-20 shadow-sm">
          <h2 className="text-[32px] font-[800] text-navy-900 mb-8 tracking-tight">Strategic Risk Analysis</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-[18px] text-[#64748b] leading-[1.8]">
              {data.detailedAnalysis}
            </p>
            <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 flex flex-col justify-center">
              <div className="text-primary-blue font-bold text-[11px] tracking-[3px] uppercase mb-4">Financial Exposure</div>
              <div className="text-[48px] font-[900] text-navy-900 mb-2 leading-none">{data.typicalLoss}</div>
              <div className="text-[14px] text-[#64748b] font-medium italic">Estimated total loss including legal costs and asset value.</div>
            </div>
          </div>
        </div>

        {/* Mitigation Steps */}
        {data.mitigationSteps && (
          <div className="mb-20">
            <h2 className="text-[32px] font-[800] text-navy-900 mb-10 text-center tracking-tight">How TRUSTFLOWS Protects You</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.mitigationSteps.map((step, i) => (
                <div key={i} className="bg-[#f8fafc] p-10 rounded-[40px] border border-transparent hover:border-primary-blue/30 transition-all group shadow-sm hover:shadow-xl">
                  <div className="w-12 h-12 rounded-2xl bg-primary-blue/10 flex items-center justify-center text-primary-blue font-[900] text-xl mb-6 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <p className="text-[17px] font-[800] text-navy-900 leading-[1.6]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#0a0a1a] rounded-[50px] p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="relative z-10">
            <h3 className="text-[42px] md:text-[56px] font-[900] mb-8 tracking-tight leading-none">Don't inherit a lifetime <br/>of property litigation.</h3>
            <p className="text-[20px] text-white/60 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Every city and property segment has unique trust gaps. Our AI is trained on 5M+ records to detect these specific threats in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary-blue text-white px-12 py-5 rounded-2xl font-[800] text-[18px] hover:bg-blue-600 transition-all shadow-xl shadow-primary-blue/20 flex items-center justify-center gap-3">
                Request AI Risk Report <ArrowRight size={22} />
              </button>
              <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-2xl font-[800] text-[18px] hover:bg-white/10 transition-all">
                Talk to Risk Advisor
              </button>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default ProblemDetail;
