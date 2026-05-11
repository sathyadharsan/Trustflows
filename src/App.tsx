import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Offerings from './components/Offerings';
import PropertySegments from './components/PropertySegments';
import CityGrid from './components/CityGrid';
import Pricing from './components/Pricing';
import SuccessStories from './components/SuccessStories';
import Stakeholders from './components/Stakeholders';
import ComparisonSection from './components/ComparisonSection';
import FinalCTA from './components/FinalCTA';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-white selection:bg-gold-500 selection:text-navy-900 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
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
      <Footer />
    </main>
  );
}

export default App;
