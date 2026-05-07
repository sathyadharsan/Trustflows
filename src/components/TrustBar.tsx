import React from 'react';

const TrustBar = () => {
  const trustItems = [
    { label: <span><strong>AI-Powered</strong> — 5M+ Records</span> },
    { label: <span><strong>IRDAI-Aligned</strong> Title Insurance</span> },
    { label: <span><strong>Digital Escrow</strong> — RERA & RBI</span> },
    { label: <span><strong>State Land Records</strong> Integrated</span> },
    { label: <span><strong>Live in 20 Cities</strong> — 50+ Banks</span> },
  ];

  return (
    <div className="bg-navy-800 border-y border-gold-500/20 px-[5%] py-5 flex flex-wrap justify-center gap-0">
      {trustItems.map((item, index) => (
        <div 
          key={index} 
          className={`flex items-center gap-2 px-6 py-3 text-[13px] text-white/70 ${
            index !== trustItems.length - 1 ? 'border-r border-white/10' : ''
          } max-md:border-r-0 max-md:border-b last:border-b-0 max-md:w-full max-md:justify-center`}
        >
          <span className="text-gold-400 text-base">✦</span>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default TrustBar;
