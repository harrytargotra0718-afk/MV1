import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Heart, Zap, Crown, Gem } from 'lucide-react';

const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: Crown,
      title: 'Premium Architecture',
      description: 'Award-winning design with contemporary aesthetics and timeless elegance'
    },
    {
      icon: Shield,
      title: 'Gated Community',
      description: '24/7 security with advanced surveillance and controlled access systems'
    },
    {
      icon: Heart,
      title: 'Family-Centric Design',
      description: 'Thoughtfully planned spaces for modern families with children-friendly amenities'
    },
    {
      icon: Zap,
      title: 'Smart Home Ready',
      description: 'Pre-wired for home automation with modern connectivity solutions'
    },
    {
      icon: Gem,
      title: 'Premium Finishes',
      description: 'High-quality materials and fixtures throughout every home'
    },
    {
      icon: Sparkles,
      title: 'Green Living',
      description: 'Sustainable design with energy-efficient features and green spaces'
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Why Choose
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
              Ashiana Mulberry
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exceptional features that make our community the perfect place to call home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <highlight.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {highlight.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;