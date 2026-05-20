import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RiskCalculator from '../components/RiskCalculator';
import ChatWidget from '../components/ChatWidget';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isRiskCalcOpen, setIsRiskCalcOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsRiskCalcOpen(true);
    window.addEventListener('openRiskCalculator', handleOpen);
    return () => window.removeEventListener('openRiskCalculator', handleOpen);
  }, []);

  return (
    <main className="bg-white selection:bg-gold-500 selection:text-navy-900 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
      
      <RiskCalculator 
        isOpen={isRiskCalcOpen} 
        onClose={() => setIsRiskCalcOpen(false)} 
      />
      
      <ChatWidget />
    </main>
  );
};

export default MainLayout;
