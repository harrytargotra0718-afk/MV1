import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './components/Router.tsx';
import './index.css';
import { initGA } from './utils/analytics';
import emailjs from 'emailjs-com';

// Initialize Google Analytics
initGA(import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID');

// Initialize EmailJS with error handling
try {
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (emailjsPublicKey) {
    emailjs.init(emailjsPublicKey);
    console.log('EmailJS initialized successfully');
  } else {
    console.warn('EmailJS public key not found. Email functionality will be disabled.');
  }
} catch (error) {
  console.error('Failed to initialize EmailJS:', error);
}

// Check if all required environment variables are present
const checkEnvVariables = () => {
  const requiredVars = [
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY'
  ];

  const missingVars = requiredVars.filter(varName => !import.meta.env[varName]);

  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars);
    console.warn('Email functionality may not work properly.');
  }
};

checkEnvVariables();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);