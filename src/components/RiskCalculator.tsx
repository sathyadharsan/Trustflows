import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  Search, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  AlertCircle,
  FileSearch,
  Activity,
  ArrowRight,
  Globe
} from 'lucide-react';

interface RiskCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  { id: 'segment', title: 'I am a...', desc: 'Select your stakeholder profile' },
  { id: 'details', title: 'Property Context', desc: 'Tell us about the asset' },
  { id: 'verification', title: 'Risk Parameters', desc: 'Critical verification checkpoints' },
  { id: 'result', title: 'AI Trust Preview', desc: 'Preliminary risk estimation' }
];

const RiskCalculator: React.FC<RiskCalculatorProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    segment: '',
    city: '',
    propertyType: '',
    priceRange: '',
    hasTitle: null as boolean | null,
    isApproved: null as boolean | null,
    name: '',
    email: '',
    phone: ''
  });

  const [calculating, setCalculating] = useState(false);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleCalculate = () => {
    setCalculating(true);
    setTimeout(() => {
      setCalculating(false);
      nextStep();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-navy-900/80 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
      >
        {/* Left Sidebar - Progress */}
        <div className="w-full md:w-[320px] bg-navy-900 p-8 md:p-12 text-white flex flex-col">
          <div className="mb-12">
            <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary-blue/30">T</div>
            <h2 className="text-2xl font-[900] leading-tight">AI Property Risk Engine</h2>
            <p className="text-white/40 text-sm mt-2 font-medium">Enterprise Grade Verification</p>
          </div>

          <div className="space-y-8 flex-grow">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex gap-4 items-start relative">
                {idx < steps.length - 1 && (
                  <div className={`absolute left-[13px] top-8 w-px h-8 ${idx < currentStep ? 'bg-primary-blue' : 'bg-white/10'}`} />
                )}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-all duration-500 z-10 ${
                  idx < currentStep ? 'bg-primary-blue text-white shadow-lg shadow-primary-blue/40' : 
                  idx === currentStep ? 'bg-white text-navy-900 ring-4 ring-primary-blue/20' : 
                  'bg-white/5 text-white/40 border border-white/10'
                }`}>
                  {idx < currentStep ? <CheckCircle2 size={14} /> : idx + 1}
                </div>
                <div>
                  <div className={`text-[13px] font-bold transition-colors ${idx === currentStep ? 'text-white' : 'text-white/40'}`}>{step.title}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[1px] mt-0.5">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5">
            <div className="flex items-center gap-3 text-white/40 text-[11px] font-medium tracking-wide">
              <ShieldCheck size={16} className="text-primary-blue" />
              ISO 27001 SECURE DATA
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-grow bg-white p-8 md:p-16 flex flex-col relative overflow-y-auto max-h-[85vh] md:max-h-none">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 rounded-full hover:bg-navy-900/5 transition-colors text-navy-900/20 hover:text-navy-900"
          >
            <X size={24} />
          </button>

          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-[900] text-navy-900 mb-3 tracking-tight">Who are you?</h3>
                  <p className="text-[#4a4a6a] font-medium">This helps us tailor the risk parameters to your specific needs.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'homebuyer', label: 'Homebuyer / Owner', icon: <Building2 size={24} /> },
                    { id: 'developer', label: 'Developer', icon: <Activity size={24} /> },
                    { id: 'lender', label: 'Lender / Bank', icon: <ShieldCheck size={24} /> },
                    { id: 'nri', label: 'NRI Owner', icon: <Globe size={24} /> }
                  ].map(profile => (
                    <button
                      key={profile.id}
                      onClick={() => setFormData({ ...formData, segment: profile.id })}
                      className={`p-6 rounded-3xl border-2 text-left transition-all group ${
                        formData.segment === profile.id 
                          ? 'border-primary-blue bg-blue-50/50 shadow-lg shadow-primary-blue/5' 
                          : 'border-navy-900/5 hover:border-navy-900/10 hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                        formData.segment === profile.id ? 'bg-primary-blue text-white' : 'bg-navy-900/5 text-navy-900 group-hover:bg-navy-900/10'
                      }`}>
                        {profile.icon}
                      </div>
                      <div className="font-bold text-navy-900">{profile.label}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-[900] text-navy-900 mb-3 tracking-tight">Property Details</h3>
                  <p className="text-[#4a4a6a] font-medium">Context is everything in risk intelligence.</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-navy-900 uppercase tracking-[1px]">City</label>
                      <div className="relative">
                        <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/30" />
                        <select 
                          className="w-full bg-[#F8FAFC] border-2 border-navy-900/5 rounded-2xl py-4 pl-12 pr-4 focus:border-primary-blue outline-none transition-all appearance-none font-medium text-navy-900"
                          value={formData.city}
                          onChange={e => setFormData({ ...formData, city: e.target.value })}
                        >
                          <option value="">Select City</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="bangalore">Bangalore</option>
                          <option value="delhi">Delhi NCR</option>
                          <option value="chennai">Chennai</option>
                          <option value="hyderabad">Hyderabad</option>
                          <option value="pune">Pune</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-navy-900 uppercase tracking-[1px]">Type</label>
                      <select 
                        className="w-full bg-[#F8FAFC] border-2 border-navy-900/5 rounded-2xl py-4 px-4 focus:border-primary-blue outline-none transition-all appearance-none font-medium text-navy-900"
                        value={formData.propertyType}
                        onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                      >
                        <option value="">Select Type</option>
                        <option value="apartment">Apartment / Flat</option>
                        <option value="plot">Plotted Layout</option>
                        <option value="commercial">Commercial Tower</option>
                        <option value="warehouse">Industrial / Warehouse</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-navy-900 uppercase tracking-[1px]">Approximate Consideration (Value)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['< 50L', '50L - 1.5Cr', '1.5Cr - 5Cr', '5Cr+'].map(range => (
                        <button
                          key={range}
                          onClick={() => setFormData({ ...formData, priceRange: range })}
                          className={`py-3 px-4 rounded-xl border-2 font-bold text-[13px] transition-all ${
                            formData.priceRange === range 
                              ? 'border-primary-blue bg-blue-50 text-primary-blue' 
                              : 'border-navy-900/5 hover:border-navy-900/10 text-navy-900/60 hover:text-navy-900'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-[900] text-navy-900 mb-3 tracking-tight">Risk Parameters</h3>
                  <p className="text-[#4a4a6a] font-medium">A few critical checkpoints to assess your exposure.</p>
                </div>

                <div className="space-y-8">
                  <div className="bg-[#F8FAFC] p-6 rounded-[32px] border border-navy-900/5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-blue shadow-sm">
                        <FileSearch size={20} />
                      </div>
                      <div className="font-bold text-navy-900">Do you have the Title Verification Report?</div>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setFormData({ ...formData, hasTitle: true })}
                        className={`flex-1 py-4 rounded-2xl font-bold transition-all border-2 ${
                          formData.hasTitle === true ? 'bg-primary-blue text-white border-primary-blue shadow-lg shadow-primary-blue/20' : 'bg-white text-navy-900/60 border-navy-900/5 hover:border-navy-900/10'
                        }`}
                      >Yes</button>
                      <button 
                        onClick={() => setFormData({ ...formData, hasTitle: false })}
                        className={`flex-1 py-4 rounded-2xl font-bold transition-all border-2 ${
                          formData.hasTitle === false ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/20' : 'bg-white text-navy-900/60 border-navy-900/5 hover:border-navy-900/10'
                        }`}
                      >No / Not Yet</button>
                    </div>
                  </div>

                  <div className="bg-[#F8FAFC] p-6 rounded-[32px] border border-navy-900/5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-blue shadow-sm">
                        <CheckCircle2 size={20} />
                      </div>
                      <div className="font-bold text-navy-900">Is the project RERA / DTCP approved?</div>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setFormData({ ...formData, isApproved: true })}
                        className={`flex-1 py-4 rounded-2xl font-bold transition-all border-2 ${
                          formData.isApproved === true ? 'bg-primary-blue text-white border-primary-blue shadow-lg shadow-primary-blue/20' : 'bg-white text-navy-900/60 border-navy-900/5 hover:border-navy-900/10'
                        }`}
                      >Yes</button>
                      <button 
                        onClick={() => setFormData({ ...formData, isApproved: false })}
                        className={`flex-1 py-4 rounded-2xl font-bold transition-all border-2 ${
                          formData.isApproved === false ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/20' : 'bg-white text-navy-900/60 border-navy-900/5 hover:border-navy-900/10'
                        }`}
                      >No / Unsure</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border-4 border-green-100">
                  <ShieldCheck size={48} strokeWidth={2.5} />
                </div>
                
                <div>
                  <h3 className="text-3xl font-[900] text-navy-900 mb-3 tracking-tight">AI Assessment Ready</h3>
                  <p className="text-[#4a4a6a] font-medium max-w-md">We've generated a preliminary risk preview based on your context in {formData.city}.</p>
                </div>

                <div className="w-full bg-[#F8FAFC] border-2 border-navy-900/5 rounded-[40px] p-8 space-y-6">
                  <div className="flex justify-between items-center pb-6 border-b border-navy-900/5">
                    <div className="text-left">
                      <div className="text-[11px] font-bold text-navy-900/40 uppercase tracking-[1px] mb-1">Preliminary Score</div>
                      <div className="text-4xl font-[900] text-navy-900">8.4<span className="text-xl text-navy-900/30">/10</span></div>
                    </div>
                    <div className="bg-green-500 text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase">High Trust</div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[13px] text-navy-900/60 font-medium">To unlock the full 24-page <span className="text-navy-900 font-bold underline decoration-primary-blue decoration-2">Deep Intelligence Report</span> including seismic & title history, please provide your contact details.</p>
                    
                    <div className="space-y-3 text-left">
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full bg-white border border-navy-900/10 rounded-xl py-3.5 px-4 outline-none focus:border-primary-blue transition-all font-medium text-navy-900" 
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-white border border-navy-900/10 rounded-xl py-3.5 px-4 outline-none focus:border-primary-blue transition-all font-medium text-navy-900" 
                      />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={onClose}
                  className="w-full bg-primary-blue text-white py-5 rounded-2xl font-[900] text-lg hover:bg-blue-dark transition-all shadow-xl shadow-primary-blue/30 flex items-center justify-center gap-3 group"
                >
                  Get Detailed Report <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Controls */}
          {currentStep < 3 && (
            <div className="mt-auto pt-12 flex justify-between items-center border-t border-navy-900/5">
              <button 
                onClick={prevStep}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 font-bold text-[14px] transition-all ${
                  currentStep === 0 ? 'opacity-0' : 'text-navy-900/40 hover:text-navy-900'
                }`}
              >
                <ChevronLeft size={20} /> Back
              </button>

              <button
                onClick={currentStep === 2 ? handleCalculate : nextStep}
                disabled={calculating || (currentStep === 0 && !formData.segment) || (currentStep === 1 && (!formData.city || !formData.propertyType || !formData.priceRange))}
                className="bg-primary-blue text-white px-10 py-4 rounded-2xl font-[900] text-[15px] hover:bg-blue-dark transition-all shadow-xl shadow-primary-blue/20 flex items-center gap-2 disabled:opacity-50 disabled:shadow-none"
              >
                {calculating ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Analyzing Risk...
                  </div>
                ) : (
                  <>
                    {currentStep === 2 ? 'Calculate Trust Score' : 'Continue'} 
                    <ChevronRight size={20} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RiskCalculator;
