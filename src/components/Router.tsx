import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';
import ThankYouCallback from '../pages/ThankYouCallback';
import ThankYouBrochure from '../pages/ThankYouBrochure';
import ThankYouTour from '../pages/ThankYouTour';
import PrivacyPolicy from '../pages/PrivacyPolicy';

const AppRouter: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<App />} />
        
          {/* Thank you pages */}
          <Route path="/thank-you-brochure" element={<ThankYouBrochure />} />
          <Route path="/thank-you-callback" element={<ThankYouCallback />} />
          <Route path="/thank-you-tour" element={<ThankYouTour />} />
          
          {/* Legal pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<PrivacyPolicy />} />
          
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default AppRouter;