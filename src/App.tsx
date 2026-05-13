import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CityDetail from './pages/CityDetail';
import SegmentDetail from './pages/SegmentDetail';
import ProblemDetail from './pages/ProblemDetail';
import SolutionDetail from './pages/SolutionDetail';
import StakeholderDetail from './pages/StakeholderDetail';
import OutcomeDetail from './pages/OutcomeDetail';

function App() {
  return (
    <Router>
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
        </Routes>
      </MainLayout>
    </Router>
  );
}





export default App;

