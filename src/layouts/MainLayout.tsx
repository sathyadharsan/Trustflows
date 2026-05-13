import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="bg-white selection:bg-gold-500 selection:text-navy-900 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <div className="pt-16"> {/* Padding for fixed navbar */}
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
