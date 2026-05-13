import React from 'react';
import Hero from '../components/Hero';
import SegmentOverview from '../components/SegmentOverview';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Offerings from '../components/Offerings';
import PropertySegments from '../components/PropertySegments';
import CityGrid from '../components/CityGrid';
import Pricing from '../components/Pricing';
import SuccessStories from '../components/SuccessStories';
import Stakeholders from '../components/Stakeholders';
import ComparisonSection from '../components/ComparisonSection';
import FinalCTA from '../components/FinalCTA';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <>
      <Hero />
      <SegmentOverview />
      <Problem />
      <Solution />
      <Offerings />
      <PropertySegments />
      <CityGrid />
      <Pricing />
      <SuccessStories />
      <Stakeholders />
      <ComparisonSection />
      <FinalCTA />
      <AboutSection />
    </>
  );
};

export default Home;
