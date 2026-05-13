import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Search,
  Activity
} from 'lucide-react';
import { cities } from '../data/cities';

const CityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const data = cities.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">City not found</h2>
          <Link to="/" className="text-primary-blue flex items-center justify-center gap-2">
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
          className="inline-flex items-center gap-2 text-[#4a4a6a] hover:text-primary-blue transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft size={16} /> ALL CITIES
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 pb-12 border-b border-navy-900/5">
          <div>
            <div className="flex items-center gap-2 text-primary-blue font-bold tracking-[2px] uppercase text-[11px] mb-4">
              <MapPin size={14} /> LIVE RISK INTELLIGENCE
            </div>
            <h1 className="text-[48px] md:text-[64px] font-bold text-navy-900 leading-tight tracking-tight">
              {data.name} <span className="text-primary-blue">Market.</span>
            </h1>
          </div>
          <div className="bg-navy-900 text-white p-6 rounded-[24px] shrink-0 w-full md:w-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-blue/20 flex items-center justify-center">
                <Database size={24} className="text-primary-blue" />
              </div>
              <div>
                <div className="text-[24px] font-bold">{data.count}</div>
                <div className="text-[11px] text-white/40 uppercase tracking-widest font-bold">Verified Properties</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left: Risk Analysis */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Risk Profile */}
            <div className="bg-[#F5F7FA] rounded-[40px] p-10 border border-navy-900/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                 <AlertTriangle size={150} />
               </div>
               <div className="relative z-10">
                 <div className="flex items-center gap-3 text-red-600 font-bold mb-6">
                   <AlertTriangle size={20} />
                   CITY RISK PROFILE
                 </div>
                 <div className="text-[32px] font-bold text-navy-900 mb-4">{data.risk}</div>
                 <p className="text-[16px] text-[#4a4a6a] leading-[1.8] max-w-xl">
                   {data.name}'s real estate market is unique. Our localized AI models are specifically trained on {data.name}'s land record complexities, historical litigation patterns, and municipal regulations.
                 </p>
               </div>
            </div>

            {/* Common Issues */}
            <div>
              <h2 className="text-[24px] font-bold text-navy-900 mb-8 flex items-center gap-3">
                <Search size={22} className="text-primary-blue" />
                Critical Risks Scanned in {data.name}
              </h2>
              <div className="grid md:grid-cols-1 gap-4">
                {data.commonIssues.map((issue, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white border border-navy-900/5 rounded-2xl hover:border-primary-blue/30 transition-all group">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="text-[16px] font-semibold text-navy-900">{issue}</div>
                    <ArrowRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary-blue" />
                  </div>
                ))}
              </div>
            </div>

            {/* AI Algorithms */}
            <div className="bg-navy-900 rounded-[40px] p-10 text-white">
              <div className="flex items-center gap-3 text-primary-blue font-bold mb-8 uppercase tracking-[2px] text-[11px]">
                <Activity size={16} /> LOCALIZED ENGINES
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {data.algorithms.map((algo, i) => (
                  <div key={i}>
                    <div className="text-primary-blue font-mono text-[13px] mb-2">{`// active_instance`}</div>
                    <div className="text-xl font-bold mb-2">{algo}</div>
                    <div className="text-white/40 text-[11px] leading-relaxed">Continuous sync with {data.name} registries.</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Lead Gen / CTA */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-primary-blue rounded-[32px] p-8 shadow-2xl sticky top-28">
              <div className="text-primary-blue font-bold text-[11px] tracking-[2px] uppercase mb-4">Verification Ready</div>
              <h3 className="text-[24px] font-bold text-navy-900 mb-6 leading-tight">Verify any property in {data.name}.</h3>
              <p className="text-[14px] text-[#4a4a6a] leading-[1.6] mb-8">
                Get a comprehensive 0-100 Trust Score report including 50-year title chain, litigation search, and IRDAI title insurance eligibility.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-[13px] font-medium text-navy-900">
                  <CheckCircle2 size={16} className="text-primary-blue" /> 48-Hour Delivery
                </div>
                <div className="flex items-center gap-3 text-[13px] font-medium text-navy-900">
                  <CheckCircle2 size={16} className="text-primary-blue" /> Court-Proof Documentation
                </div>
                <div className="flex items-center gap-3 text-[13px] font-medium text-navy-900">
                  <CheckCircle2 size={16} className="text-primary-blue" /> Insurance Eligible
                </div>
              </div>

              <button className="w-full bg-primary-blue text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                Order {data.name} Report <ArrowRight size={18} />
              </button>
            </div>

            <div className="p-8 bg-[#F5F7FA] rounded-[32px] border border-navy-900/5">
              <h4 className="text-[13px] font-bold text-navy-900 mb-4 uppercase tracking-wider">Other Active Cities</h4>
              <div className="flex flex-wrap gap-2">
                {cities.filter(c => c.id !== id).slice(0, 5).map(c => (
                  <Link 
                    key={c.id} 
                    to={`/cities/${c.id}`}
                    className="px-4 py-2 bg-white border border-navy-900/5 rounded-full text-[12px] font-semibold hover:border-primary-blue transition-all"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CityDetail;
