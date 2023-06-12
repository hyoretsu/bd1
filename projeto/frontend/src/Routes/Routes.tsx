import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/index';
import VendorPage from '../pages/Seller';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor/:id" element={<VendorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
