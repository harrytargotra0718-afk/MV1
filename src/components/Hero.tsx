import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Home, Trees, Sparkles, Users, Crown } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

interface HeroProps {
  onDownloadClick: () => void;
  onTourClick: () => void;
  onCallbackClick: () => void;
  onFormSubmit: (data: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onDownloadClick, onTourClick, onCallbackClick, onFormSubmit }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const carouselImages = [
    'https://ashianamulbery.com/images/newslider/s1.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://ashianamulbery.com/images/newslider/s2.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
  ];

  const features = [
    { icon: Home, text: "3 & 3.5 BHK Luxury Apartments" },
    { icon: Trees, text: "Modern Elegance Amidst Greenery" },
    { icon: Sparkles, text: "Comprehensive Amenities for Luxurious Living" },
    { icon: Users, text: "Lavish Clubhouse for Social Engagement" },
    { icon: Crown, text: "Premium Living Experience" }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${carouselImages[currentSlide]})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded transition-all duration-500 ${
              index === currentSlide ? 'w-8 bg-rose-500' : 'w-4 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-16 sm:py-20 lg:py-28">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center lg:text-left"
        >
          {/* Badge */}
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
            <Star className="text-yellow-400" size={20} />
            <span className="text-yellow-400 font-semibold text-sm sm:text-base">Premium Living</span>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug sm:leading-tight">
            Ashiana{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600">
              Mulberry Phase 3
            </span>
          </h1>

          {/* Location */}
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-200 mb-6 text-sm sm:text-base">
            <MapPin size={18} className="text-rose-400" />
            <span>Sector-2, Sohna, Gurgaon</span>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-center lg:justify-start space-x-3"
                >
                  <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                    <Icon size={18} className="text-rose-400" />
                  </div>
                  <span className="text-gray-100 text-sm sm:text-base">{feature.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Price highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-rose-500/20 to-pink-600/20 p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-white/10 mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-2 text-center sm:text-left">
              <motion.span
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
              >
                Starts 1.90 Cr*
              </motion.span>
              <span className="text-green-400 text-xs sm:text-sm mt-2 sm:mt-0">✓ Limited Availability</span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm mt-2">*Exclusive launch offer</p>
          </motion.div>

          {/* Mobile CTA */}
          {isMobile && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDownloadClick}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-2xl flex items-center space-x-2 w-full justify-center"
            >
              <Crown size={20} />
              <span>Download Brochure</span>
            </motion.button>
          )}
        </motion.div>

        {/* Right: Lead Form (desktop only) */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl mb-4">
                <Crown size={28} className="text-white sm:size-32" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Exclusive Pre-Launch Offer
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Be the first to experience luxury living. Get priority access to floor plans and special pricing.
              </p>
            </div>
            
            <LeadCaptureForm onSubmit={onFormSubmit} />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;