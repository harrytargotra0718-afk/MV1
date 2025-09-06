import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Highlights from './components/Highlights';
import Amenities from './components/Amenities';
import FloorPlan from './components/FloorPlan';
import Location from './components/Location';
import Footer from './components/Footer';
import LeadCaptureModal from './components/LeadCaptureModal';
import FloatingContactButtons from './components/FloatingContactButtons';
import StaticLeadForm from './components/StaticLeadForm';
import { useScrollProgress } from './hooks/useScrollProgress';
import { handleLeadSubmission, showSuccessMessage, showErrorMessage, LeadData } from './utils/leadHandler';
import { trackPageView } from './utils/analytics';
import emailjs from 'emailjs-com';

function App() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormType, setModalFormType] = useState<'brochure' | 'callback' | 'tour'>('brochure');
  const [modalTrigger, setModalTrigger] = useState('manual');
  const { 
    progress, 
    hasTriggered30,
    hasTriggered60,
    hasTriggered90,
    consumed30,
    consumed60,
    consumed90,
    lastTriggerTime,
    consumeEvent 
  } = useScrollProgress();

  useEffect(() => {
    // Track initial page view
    trackPageView('/', 'Ashiana Mulberry - Premium Luxury Apartments');
  }, []);

  // Auto-trigger modal at 30%, 60%, and 90% scroll
  useEffect(() => {
    const currentTime = Date.now();
    const timeSinceLastTrigger = currentTime - lastTriggerTime;
    const twentySeconds = 20000; // 20 seconds between triggers

    // Check if we've scrolled past 30% and it hasn't been consumed yet
    if (hasTriggered30 && !consumed30 && !isModalOpen) {
      setTimeout(() => {
        setModalFormType('brochure');
        setModalTrigger('scroll-30');
        setIsModalOpen(true);
        consumeEvent('30'); // Mark as consumed
      }, 1000);
    }
    // Check for 60% scroll trigger
    else if (hasTriggered60 && !consumed60 && consumed30 && timeSinceLastTrigger >= twentySeconds && !isModalOpen) {
      setTimeout(() => {
        setModalFormType('callback');
        setModalTrigger('scroll-60');
        setIsModalOpen(true);
        consumeEvent('60');
      }, 1000);
    }
    // Check for 90% scroll trigger
    else if (hasTriggered90 && !consumed90 && consumed60 && timeSinceLastTrigger >= twentySeconds && !isModalOpen) {
      setTimeout(() => {
        setModalFormType('tour');
        setModalTrigger('scroll-90');
        setIsModalOpen(true);
        consumeEvent('90');
      }, 1000);
    }
  }, [
    hasTriggered30,
    hasTriggered60,
    hasTriggered90,
    consumed30,
    consumed60,
    consumed90,
    lastTriggerTime,
    isModalOpen, 
    consumeEvent
  ]);

  const openModal = (formType: 'brochure' | 'callback' | 'tour', trigger: string = '') => {
    setModalFormType(formType);
    setModalTrigger(trigger);
    setIsModalOpen(true);
  };

  const handleDownloadClick = () => {
    openModal('brochure', 'navbar_download');
  };

  const handleTourClick = () => {
    openModal('tour', 'navbar_tour');
  };

  const handleCallbackClick = () => {
    openModal('callback', 'navbar_callback');
  };

  const handleFormSubmit = async (data: any, formType: string) => {
    try {
      // Prepare email parameters
      let templateParams = {
        to_name: data.name,
        to_email: data.email,
        phone: data.phone,
        form_type: formType,
        trigger: modalTrigger,
        submission_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      };

      // Add additional fields for tour form
      if (formType === 'tour') {
        templateParams = {
          ...templateParams,
          address: data.address,
          preferred_date: data.preferredDate,
          preferred_time: data.preferredTime,
        };
      }

      // Send email using EmailJS
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      );

      // Also send to your existing lead handler
      const success = await handleLeadSubmission(data);
      
      if (success) {
        showSuccessMessage();
        
        // Navigate to appropriate thank you page
        switch (formType) {
          case 'brochure':
            navigate('/thank-you-brochure');
            break;
          case 'callback':
            navigate('/thank-you-callback');
            break;
          case 'tour':
            navigate('/thank-you-tour');
            break;
        }
      } else {
        showErrorMessage();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showErrorMessage();
    }
  };

  return (
    <>
      <SEOHead />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <Navbar 
          onDownloadClick={handleDownloadClick}
          onTourClick={handleTourClick}
          onCallbackClick={handleCallbackClick}
        />
        
        <Hero 
          onDownloadClick={() => openModal('brochure', 'hero_download')}
          onTourClick={() => openModal('tour', 'hero_tour')}
          onCallbackClick={() => openModal('callback', 'hero_callback')}
        />
        <Gallery 
  onFormSubmit={handleFormSubmit}
  onTourClick={() => openModal('tour', 'gallery_tour')}
/>
        <About 
             onDownloadClick={handleDownloadClick}
          onTourClick={handleTourClick}
          onCallbackClick={handleCallbackClick}
          />
        <Highlights />
        <Amenities />
        <FloorPlan 
       onDownloadClick={handleDownloadClick}
          onTourClick={handleTourClick}
          onCallbackClick={handleCallbackClick}
        />
        <Location  
          onDownloadClick={handleDownloadClick}
          onTourClick={handleTourClick}
          onCallbackClick={handleCallbackClick}
          />
        <StaticLeadForm 
          onSubmit={(data) => handleFormSubmit(data, 'callback')}
        />
        <Footer />

        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleFormSubmit}
          formType={modalFormType}
          trigger={modalTrigger}
        />

        <FloatingContactButtons 
          onDownloadClick={() => openModal('brochure', 'floating_download')}
          onTourClick={() => openModal('tour', 'floating_tour')}
          onCallbackClick={() => openModal('callback', 'floating_callback')}
        />
      </motion.div>
    </>
  );
}

export default App;