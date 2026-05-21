import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { PageTracker } from './utils/analytics';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CityDetail from './pages/CityDetail';
import SegmentDetail from './pages/SegmentDetail';
import ProblemDetail from './pages/ProblemDetail';
import SolutionDetail from './pages/SolutionDetail';
import StakeholderDetail from './pages/StakeholderDetail';
import OutcomeDetail from './pages/OutcomeDetail';
import Disclaimer from './pages/Disclaimer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Compliance from './pages/Compliance';
import Insurance from './pages/Insurance';
import FraudProtection from './pages/FraudProtection';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    const isLocal = 
      window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1';

    if (isLocal) {
      // In local development, keep everything enabled for easy debugging!
      return;
    }

    // Otherwise, apply production-only protection:
    
    // 1. Apply global selection prevention dynamically to the body in production
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';

    // 2. Block right click globally
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 3. Block Keyboard content prevention shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;

      // DevTools and View-Source prevention (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U)
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key.toLowerCase() === 'u')
      ) {
        e.preventDefault();
        return;
      }

      // Block Ctrl+A, Ctrl+C, Ctrl+X, Ctrl+V globally
      if (e.ctrlKey || e.metaKey) {
        const key = e.key.toLowerCase();
        
        // If focusing on inputs or textareas, allow standard shortcuts
        if (isInput) {
          return;
        }

        if (key === 'a' || key === 'c' || key === 'x' || key === 'v') {
          e.preventDefault();
        }
      }
    };

    // 4. Clipboard events prevention (Double defense)
    const handleClipboardEvent = (e: ClipboardEvent) => {
      const isInput = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
      if (!isInput) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleClipboardEvent);
    document.addEventListener('cut', handleClipboardEvent);
    document.addEventListener('paste', handleClipboardEvent);

    return () => {
      // Clean up styles
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      (document.body.style as any).msUserSelect = '';
      (document.body.style as any).mozUserSelect = '';

      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleClipboardEvent);
      document.removeEventListener('cut', handleClipboardEvent);
      document.removeEventListener('paste', handleClipboardEvent);
    };
  }, []);

  return (
    <Router>
      <PageTracker />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offerings/:id" element={<ProductDetail />} />
          <Route path="/cities/:id" element={<CityDetail />} />
          <Route path="/segments/:id" element={<SegmentDetail />} />
          <Route path="/problems/:id" element={<ProblemDetail />} />
          <Route path="/solutions/:id" element={<SolutionDetail />} />
          <Route path="/stakeholders/:id" element={<StakeholderDetail />} />
          <Route path="/outcomes/:id" element={<OutcomeDetail />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/fraud-protection" element={<FraudProtection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/compliance" element={<Compliance />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}





export default App;

