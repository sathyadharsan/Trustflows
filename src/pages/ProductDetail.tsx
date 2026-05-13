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
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-navy-900 text-white pt-24 pb-20 px-[5%] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_120%,#0066FF,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft size={16} /> BACK TO OFFERINGS
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="text-primary-blue font-bold tracking-[2px] uppercase text-[11px] mb-4">
                {data.sidebarLabel} Solutions
              </div>
              <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight text-white">
                {data.title}
              </h1>

              <p className="text-[18px] text-white/70 leading-[1.8] max-w-xl italic">
                "{data.definition}"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, label: 'Protection', val: 'Full Coverage' },
                  { icon: FileText, label: 'Audit', val: 'AI-Verified' },
                  { icon: Clock, label: 'Turnaround', val: '48-72 Hours' },
                  { icon: Zap, label: 'Efficiency', val: '100% Digital' }
                ].map((stat, i) => (
                  <div key={i}>
                    <stat.icon className="text-primary-blue mb-3" size={24} />
                    <div className="text-white/40 text-[11px] uppercase tracking-wider font-bold">{stat.label}</div>
                    <div className="text-white font-bold text-lg">{stat.val}</div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 bg-primary-blue text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary-blue/20">
                Get Risk Report for {data.sidebarLabel}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Left: Benefits & Coverage */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Benefits */}
              <div>
                <h2 className="text-[28px] font-bold text-navy-900 mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-primary-blue" />
                  </div>
                  Core Benefits
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {data.benefits.map((benefit, i) => (
                    <div key={i} className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl">
                      <p className="text-[#1a1a2e] font-semibold leading-[1.6]">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Coverage */}
              <div>
                <h2 className="text-[28px] font-bold text-navy-900 mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-primary-blue" />
                  </div>
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {data.coverage.map((c, i) => (
                    <div key={i} className="group border-b border-navy-900/10 pb-6 transition-all hover:border-primary-blue">
                      <h4 className="text-[17px] font-bold text-navy-900 mb-2 group-hover:text-primary-blue transition-colors">
                        {c.item}
                      </h4>
                      <p className="text-[#4a4a6a] text-[15px] leading-[1.7]">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real World Case */}
              <div className="bg-primary-blue rounded-[40px] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                  <HelpCircle size={120} />
                </div>
                <div className="relative z-10">
                  <div className="text-white/60 font-bold uppercase tracking-[2px] text-[11px] mb-4">Real World Case Study</div>
                  <h3 className="text-[32px] font-bold mb-4">{data.useCase.title}</h3>
                  <p className="text-[18px] leading-[1.8] text-white/90 italic">
                    "{data.useCase.desc}"
                  </p>
                </div>
              </div>

            </div>

            {/* Right: Pricing & CTA */}
            <div className="space-y-8">
              <div className="bg-white border-2 border-navy-900 shadow-2xl rounded-[32px] p-8 sticky top-24">
                <h3 className="text-[20px] font-bold text-navy-900 mb-6 uppercase tracking-tight">Pricing Plans</h3>
                <div className="space-y-4 mb-8">
                  {data.pricing.map((p, i) => (
                    <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-navy-900 text-white">
                      <div>
                        <div className="text-[13px] font-bold">{p.tier}</div>
                        {p.bestFor && <div className="text-[10px] text-white/50 uppercase tracking-widest">{p.bestFor}</div>}
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary-blue">{p.premium}</div>
                        {p.cover && <div className="text-[9px] text-white/40">Cover: {p.cover}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                {data.exclusions && (
                  <div className="mb-8">
                    <h4 className="text-[11px] font-bold text-red-600 tracking-[1.5px] uppercase mb-4">Exclusions</h4>
                    <ul className="space-y-2">
                      {data.exclusions.map((ex, i) => (
                        <li key={i} className="text-[12px] text-[#4a4a6a] flex gap-2">
                          <span className="text-red-500">•</span> {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <button className="w-full bg-[#185FA5] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                  Activate This Plan <ArrowRight size={18} />
                </button>
              </div>

              {/* Related */}
              <div className="bg-[#F5F7FA] rounded-[32px] p-8 border border-navy-900/5">
                <h3 className="text-[15px] font-bold text-navy-900 mb-6 uppercase tracking-wider">Other Solutions</h3>
                <div className="space-y-3">
                  {offeringData.filter(o => o.id !== id).slice(0, 3).map((o) => (
                    <Link 
                      key={o.id} 
                      to={`/offerings/${o.id}`}
                      className="flex items-center justify-between p-4 bg-white rounded-xl hover:text-primary-blue transition-all border border-navy-900/5 hover:border-primary-blue/30 group"
                    >
                      <span className="text-[13px] font-bold">{o.sidebarLabel}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
