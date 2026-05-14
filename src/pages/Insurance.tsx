import React, { useEffect } from 'react';
import InsuranceHero from '../components/InsuranceHero';
import InsuranceFrameworks from '../components/InsuranceFrameworks';
import ValueSynthesis from '../components/ValueSynthesis';
import FrameworkCTAs from '../components/FrameworkCTAs';

const Insurance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <InsuranceHero />

      {/* Main Sections */}
      <section id="frameworks">
        <InsuranceFrameworks />
      </section>
      <ValueSynthesis />
      <FrameworkCTAs />
    </div>
  );
};

export default Insurance;
