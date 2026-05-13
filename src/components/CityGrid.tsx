import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { cities } from '../data/cities';

const CityGrid = () => {
  const [selected, setSelected] = useState(cities[0]);

  return (
    <section id="cities" className="bg-white py-[80px] px-[5%] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary-blue mb-4">CITY-TRAINED INTELLIGENCE</div>
          <h2 className="text-[36px] font-bold leading-[1.3] mb-6 text-[#0a0a1a]">
            Live in 20 Cities. <br />
            <span className="text-primary-blue">Local Risk Ecosystems Mastered.</span>
          </h2>
          <p className="text-[15px] text-[#1a1a2e] leading-[1.8] max-w-[760px] mx-auto font-normal">
            India’s property market is not one market. We have trained our AI models on the unique local laws and land record systems of 20 major Indian cities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {cities.map((city) => (
            <button
              key={city.id}
              onClick={() => setSelected(city)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all border ${
                selected.id === city.id 
                  ? 'bg-primary-blue text-white border-primary-blue shadow-lg scale-105' 
                  : 'bg-white text-navy-900/60 border-navy-900/10 hover:border-primary-blue/30'
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>

        <div className="bg-[#F5F7FA] border border-navy-900/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-[120px] font-bold text-navy-900 leading-none group-hover:scale-110 transition-transform duration-700">
            {selected.name}
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center text-white text-xl font-bold">
                {selected.name[0]}
              </div>
              <h3 className="text-[24px] font-semibold text-[#0a0a1a] leading-[1.4]">{selected.name} Risk Engine</h3>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-primary-blue/10 shadow-sm mb-8">
              <div className="text-[11px] font-bold text-[#185FA5] tracking-[1.5px] uppercase mb-4">LOCALIZED RISK COVERAGE</div>
              <p className="text-[15px] font-normal text-[#1a1a2e] leading-[1.8]">
                {selected.risk}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Link 
                to={`/cities/${selected.id}`}
                className="bg-navy-900 text-white px-8 py-3.5 rounded-xl font-bold text-[14px] flex items-center gap-2 hover:bg-navy-800 transition-all shadow-lg group"
              >
                View {selected.name} Intelligence Report <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-[13px] text-[#4a4a6a] font-normal leading-[1.7] italic max-w-xs">
                "Every city model is validated on-ground by our specialized legal partners."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityGrid;

