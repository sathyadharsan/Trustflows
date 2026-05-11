import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cityRisks = [
  { name: 'Mumbai', risk: 'SRA flats, MHADA leasehold, old ‘Chawl’ redevelopment rights, CRZ rules' },
  { name: 'Delhi', risk: 'DDA unauthorized colonies, Lal Dora properties, leasehold vs freehold conversion' },
  { name: 'Bangalore', risk: 'A-Khata vs B-Khata, Wakf board claims, BDA/BMRDA layouts, DC conversion' },
  { name: 'Hyderabad', risk: 'DTCP approvals, Wakf land (high prevalence), old Jagir titles' },
  { name: 'Chennai', risk: 'Patta/Chitta discrepancies, ECR/OMR land acquisition notifications' },
  { name: 'Kolkata', risk: 'Bargee title system, CIT leases, Zamindari abolition complexities' },
  { name: 'Pune', risk: 'PMRDA & Gram Panchayat layouts, old Waqf and Inam lands' },
  { name: 'Ahmedabad', risk: 'TP scheme land, pending development charges, old city Pol houses' },
  { name: 'Surat', risk: 'TP approvals, illegal construction in new SIR zones' },
  { name: 'Jaipur', risk: 'JDA leasehold, old Jagir titles, pending betterment charges' },
  { name: 'Lucknow', risk: 'LDA schemes, Awadh Zamindari abolition records' },
  { name: 'Nagpur', risk: 'Metro land acquisition, Vidarbha region’s special tenancy laws' },
  { name: 'Indore', risk: 'IDA schemes, pending betterment and development fees' },
  { name: 'Bhopal', risk: 'Old Waqf properties, Bhopal Development Authority layouts' },
  { name: 'Visakhapatnam', risk: 'VMRDA approvals, port land restrictions' },
  { name: 'Patna', risk: 'Old Zamindari land, Bihar Land Reforms Act — Extremely complex' },
  { name: 'Vadodara', risk: 'VUDA approvals, industrial land use conversion' },
  { name: 'Ludhiana', risk: 'PUDA schemes, old ‘Lal Lakir’ village properties' },
  { name: 'Agra', risk: 'Taj Trapezium Zone restrictions, old Mughal grant lands' },
  { name: 'Nashik', risk: 'MIDC industrial plots, Godavari riverbed land restrictions' }
];

const CityGrid = () => {
  const [selected, setSelected] = useState(cityRisks[0]);

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
          {cityRisks.map((city) => (
            <button
              key={city.name}
              onClick={() => setSelected(city)}
              className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all border ${
                selected.name === city.name 
                  ? 'bg-primary-blue text-white border-primary-blue shadow-lg scale-105' 
                  : 'bg-white text-navy-900/60 border-navy-900/10 hover:border-primary-blue/30'
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>

        <div className="bg-[#F5F7FA] border border-navy-900/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-[120px] font-bold text-navy-900 leading-none">
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

            <p className="text-[13px] text-[#4a4a6a] font-normal leading-[1.7] italic">
              "Every city model is validated on-ground by our specialized legal partners to ensure 99.9% data accuracy across {selected.name} records."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityGrid;
