import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingContactButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      <motion.a
        href="tel:+919599429277"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-blue-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Phone size={24} />
      </motion.a>
      
      <motion.a
        href="https://wa.me/919599429277?text=Hi, I'm interested in Ashiana Mulberry"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingContactButtons;