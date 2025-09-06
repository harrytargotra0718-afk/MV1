import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2, Play, Heart, Star, Sparkles } from 'lucide-react';

interface GalleryProps {
  onFormSubmit: (data: any) => void;
  onTourClick: () => void; 
}

const Gallery: React.FC<GalleryProps> = ({ onFormSubmit, onTourClick }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  
  const images = [
    'https://ashianamulbery.com/images/banner-1.webp',
    'https://ashianamulbery.com/images/newslider/s2.jpeg',
    'https://ashianamulbery.com/images/overview.webp',
    'https://ashianamulbery.com/images/highlights.webp',
    'https://ashianamulbery.com/images/g-5.webp',
    'https://ashianamulbery.com/images/g-6.jpg',
    'https://ashianamulbery.com/images/g-7.webp',
    'https://ashianamulbery.com/images/g-8.webp'
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && !showLeadForm) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, showLeadForm]);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleFormSubmit = (data: any) => {
    onFormSubmit(data);
    setShowLeadForm(false);
  };

  const handleScheduleTour = () => {
    // Call the parent component's tour click handler
    onTourClick();
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute opacity-10"
            style={{
              left: `${20 + i * 10}%`,
              top: `${10 + i * 5}%`,
            }}
          >
            <Sparkles size={40} className="text-pink-400/30" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mb-6"
          >
            <Star className="text-white" size={32} fill="currentColor" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Premium Visual Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the exquisite beauty and sophisticated design of <span className="text-pink-300 font-semibold">Ashiana Mulberry</span>
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        {!isMobile && !showLeadForm && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -8 }}
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
                className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`Ashiana Mulberry ${index + 1}`}
                  className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Pink Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <motion.div
                    animate={isHovered === index ? { scale: [0, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-pink-500 to-rose-600 backdrop-blur-md rounded-full p-4 shadow-2xl"
                  >
                    <Maximize2 size={24} className="text-white" />
                  </motion.div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-black/60 backdrop-blur-md rounded-2xl p-3">
                    <span className="text-white font-medium text-sm">
                      View {index + 1}/{images.length}
                    </span>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} size={12} className="text-pink-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Premium
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile Slider */}
        {isMobile && !showLeadForm && (
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-pink-500/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src={images[currentSlide]}
                  alt={`Ashiana Mulberry ${currentSlide + 1}`}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-pink-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-medium bg-gradient-to-r from-pink-500 to-rose-600 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {currentSlide + 1}/{images.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows with Pink Accent */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-rose-600 backdrop-blur-md rounded-full p-3 text-white hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-rose-600 backdrop-blur-md rounded-full p-3 text-white hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              <ChevronRight size={24} />
            </button>

            {/* View All Button */}
            <div className="absolute bottom-4 right-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(currentSlide)}
                className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center space-x-2 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Maximize2 size={18} />
                <span>View All</span>
              </motion.button>
            </div>
          </div>
        )}

        {/* Lead Capture Form in Gallery */}
        {showLeadForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 max-w-2xl mx-auto"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl mb-4">
                <Star size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Schedule Your Personal Tour
              </h3>
              <p className="text-gray-600">
                Experience Ashiana Mulberry firsthand with our exclusive virtual tour
              </p>
            </div>
            
            <LeadCaptureForm onSubmit={handleFormSubmit} />
            
            <button
              onClick={() => setShowLeadForm(false)}
              className="mt-4 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              ← Back to Gallery
            </button>
          </motion.div>
        )}

        {/* Lightbox with Pink Theme */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImage]}
                  alt={`Ashiana Mulberry ${selectedImage + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl border-2 border-pink-500/30"
                />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-600 backdrop-blur-md rounded-full p-3 text-white hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <X size={24} />
                </button>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-rose-600 backdrop-blur-md rounded-full p-3 text-white hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-rose-600 backdrop-blur-md rounded-full p-3 text-white hover:scale-110 transition-all duration-300 shadow-2xl"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-600 backdrop-blur-md rounded-full px-6 py-2 shadow-2xl">
                  <span className="text-white font-medium">
                    {selectedImage + 1} / {images.length}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gallery CTA */}
        {!showLeadForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Experience the Luxury Firsthand
            </h3>
            <p className="text-gray-300 mb-6">
              Schedule a personal tour to see these stunning spaces in person
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScheduleTour} // Changed to use the new function
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2 mx-auto relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <Play size={20} className="relative z-10" />
              <span className="relative z-10">Schedule Tour</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;