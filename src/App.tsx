import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Problem from './components/Problem';
import Solution from './components/Solution';
import PropertySegments from './components/PropertySegments';
import StatsBar from './components/StatsBar';
import Pricing from './components/Pricing';
import CityGrid from './components/CityGrid';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-navy-900 selection:bg-gold-500 selection:text-navy-900 font-sans antialiased">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <PropertySegments />
      <StatsBar />
      <Pricing />
      <CityGrid />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;
