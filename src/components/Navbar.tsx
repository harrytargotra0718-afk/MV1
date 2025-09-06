import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Home, 
  Images, 
  Info, 
  Star, 
  Bath, 
  Grid3X3, 
  MapPin, 
  Phone,
  Menu,
  X
} from 'lucide-react';

interface NavbarProps {
  onDownloadClick: () => void;
  onTourClick: () => void;
  onCallbackClick: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ onDownloadClick, onTourClick, onCallbackClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, id: 'hero', color: 'text-White' },
    { name: 'Gallery', icon: Images, id: 'gallery', color: 'text-White' },
    { name: 'About', icon: Info, id: 'about-us', color: 'ttext-White' },
    { name: 'Highlights', icon: Star, id: 'highlights', color: 'text-White' },
    { name: 'Amenities', icon: Bath, id: 'amenities', color: 'text-White' },
    { name: 'Floor Plan', icon: Grid3X3, id: 'floor-plan', color: 'text-White' },
    { name: 'Location', icon: MapPin, id: 'contact', color: 'text-White' },
    { name: 'Contact', icon: Phone, id: 'contact', color: 'text-White' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`hidden md:flex fixed border border-rose-400 top-3 left-0 right-0 w-[95%] max-w-7xl mx-auto z-50 rounded-full ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl' 
            : 'bg-white/90 backdrop-blur-lg shadow-xl'
        } px-6 py-4`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center"
          >
            <img 
              src="https://ashianamulbery.com/images/logo.png" 
              alt="Ashiana Mulbery Logo" 
              className="h-10 w-auto"
            />
          </motion.button>

          {/* Centered Navigation */}
          <div className="flex-1 flex justify-center items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex flex-col items-center space-y-1 group"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-sm group-hover:shadow-md transition-all duration-200 ${item.color}`}>
                    <Icon size={18} className="transition-colors duration-200" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 group-hover:text-rose-600 transition-colors duration-200">
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDownloadClick}
            className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Download size={18} />
            <span>Download Brouchre</span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navbar (Floating + Rounded) */}
      <div
        className={`flex md:hidden fixed border border-rose-400 top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-lg z-50 
          ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl' : 'bg-white/90 backdrop-blur-lg shadow-xl'} 
          px-4 py-2 rounded-full items-center justify-between`}
      >
        {/* Logo */}
        <button onClick={scrollToTop} className="flex items-center">
          <img 
            src="https://ashianamulbery.com/images/logo.png" 
            alt="Ashiana Mulbery Logo" 
            className="h-7 w-auto"
          />
        </button>

        {/* Right side: Download + Hamburger */}
        <div className="flex items-center space-x-3">
          {/* Download Button (mobile) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDownloadClick}
            className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-3 py-1.5 rounded-lg font-medium text-xs flex items-center space-x-1 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Download size={14} />
            <span>Brochure</span>
          </motion.button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-gradient-to-br from-gray-100 to-white shadow-sm hover:shadow-md transition-all duration-200"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 100 }}
        className="fixed top-0 left-0 h-full w-full bg-white z-40 md:hidden"
      >
        <div className="flex flex-col h-full p-6">
          {/* Navigation Items */}
          <div className="flex-1 flex flex-col justify-center items-center space-y-5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full max-w-xs text-center py-3 px-6 rounded-xl bg-gradient-to-r from-white to-gray-50 hover:from-rose-50 hover:to-pink-50 transition-all duration-200 flex items-center justify-center space-x-3 group"
                >
                  <div className={`p-2 rounded-lg bg-white shadow-sm ${item.color}`}>
                    <Icon size={18} />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-rose-600 transition-colors duration-200">
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;