import React from 'react';
import Hero from '../components/Hero';
import SegmentOverview from '../components/SegmentOverview';
import Problem from '../components/Problem';
import SegmentQuickView from '../components/SegmentQuickView';
import TrustIndicators from '../components/TrustIndicators';
import Offerings from '../components/Offerings';
import PropertySegments from '../components/PropertySegments';
import CityGrid from '../components/CityGrid';
import Pricing from '../components/Pricing';
import SuccessStories from '../components/SuccessStories';
import Stakeholders from '../components/Stakeholders';
import ValueSynthesis from '../components/ValueSynthesis';
import FinalCTA from '../components/FinalCTA';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <>
      <Hero />
      <SegmentOverview />
      <Problem />
      <SegmentQuickView />
      <Offerings />
      <PropertySegments />
      <CityGrid />
      <TrustIndicators />
      <Pricing />
      <SuccessStories />
      <Stakeholders />
      <ValueSynthesis />
      <FinalCTA />
      <AboutSection />
    </>
  );
};

export default Home;
