import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Calendar, Trophy, Mountain, Eye, Leaf, Car, Sun, Wind, MapPin, Download, Sparkles } from 'lucide-react';

interface AboutProps {
  onDownloadClick: () => void;
  onTourClick: () => void;
  onCallbackClick: () => void;
}

const About: React.FC<AboutProps> = ({ onDownloadClick, onTourClick, onCallbackClick }) => {
  const stats = [
    { icon: Calendar, value: '15+', label: 'Years of Excellence', color: 'from-rose-500 to-pink-600' },
    { icon: Award, value: '50+', label: 'Successful Projects', color: 'from-pink-500 to-rose-600' },
    { icon: Users, value: '10K+', label: 'Happy Families', color: 'from-rose-400 to-pink-500' },
    { icon: Trophy, value: '25+', label: 'Prestigious Awards', color: 'from-pink-600 to-rose-700' }
  ];

  const highlights = [
    { icon: Mountain, text: 'Scenic Aravalli Foothills', color: 'text-rose-500' },
    { icon: Leaf, text: 'Eco-Friendly Green Living', color: 'text-pink-500' },
    { icon: Eye, text: '3-Side Open Luxury Apartments', color: 'text-rose-600' },
    { icon: Car, text: 'Easy Highway Connectivity', color: 'text-pink-600' },
    { icon: Sun, text: 'Perfect Sunlight Design', color: 'text-rose-500' },
    { icon: Wind, text: 'Natural Air Circulation', color: 'text-pink-500' },
    { icon: Sparkles, text: 'Premium Mivan Construction', color: 'text-rose-600' },
    { icon: MapPin, text: 'Prime Sohna Location', color: 'text-pink-600' }
  ];

  // Sparkle positions within the section
  const sparklePositions = [
    { top: '10%', left: '5%', size: 32, delay: 0 },
    { top: '20%', left: '90%', size: 28, delay: 1 },
    { top: '40%', left: '15%', size: 24, delay: 2 },
    { top: '60%', left: '85%', size: 30, delay: 0.5 },
    { top: '80%', left: '10%', size: 26, delay: 1.5 },
    { top: '30%', left: '75%', size: 22, delay: 2.5 },
    { top: '70%', left: '25%', size: 28, delay: 0.8 },
    { top: '50%', left: '95%', size: 24, delay: 1.8 },
    { top: '25%', left: '45%', size: 30, delay: 0.3 },
    { top: '65%', left: '55%', size: 26, delay: 2.2 },
    { top: '15%', left: '65%', size: 22, delay: 1.2 },
    { top: '85%', left: '35%', size: 28, delay: 0.7 }
  ];

  return (
    <section id="about-us" className="py-16 lg:py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
      {/* Sparkle Background Elements - Contained within this section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparklePositions.map((sparkle, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -8, 0],
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sparkle.delay
            }}
            className="absolute opacity-30"
            style={{
              top: sparkle.top,
              left: sparkle.left,
            }}
          >
            <Sparkles size={sparkle.size} className="text-pink-400" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl mb-4 lg:mb-6 shadow-2xl"
          >
            <Sparkles className="text-white" size={28} />
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Discover Ashiana Mulberry
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
              Phase 3 Excellence
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experience ultra-luxury living nestled in the beautiful Aravalli foothills at Sector 2, Sohna
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Premium Location in<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                Sector 2, Sohna
              </span>
            </h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ashiana Mulberry Blossom offers the perfect blend of luxury and nature. Located just south of Gurgaon, 
                our project provides breathtaking views of the Aravalli hills while being easily accessible from the city.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Enjoy competitive pricing without compromising on quality. We offer premium amenities, 
                modern designs, and stunning views that you won't find anywhere else at this price point.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
             onClick={onDownloadClick}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 group w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              <span>Get Brochure</span>
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://ashianamulbery.com/images/overview.jpg"
                alt="Luxury apartments at Ashiana Mulberry with modern architecture"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-xl font-semibold text-sm lg:text-base">
                  14 Acres Premium Land
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-white to-rose-50 rounded-3xl p-6 lg:p-8 shadow-xl border border-rose-100 mb-16 lg:mb-20 relative"
        >
          {/* Section-specific sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { top: '10%', left: '5%', size: 24 },
              { top: '15%', right: '8%', size: 20 },
              { bottom: '20%', left: '12%', size: 22 },
              { bottom: '15%', right: '15%', size: 26 }
            ].map((sparkle, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 12, 0],
                  scale: [1, 1.08, 1]
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute opacity-25"
                style={sparkle}
              >
                <Sparkles size={sparkle.size} className="text-pink-400" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-8 lg:mb-12 relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Features</span>
            </h3>
            <p className="text-lg text-gray-700">Everything you need for modern luxury living</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-10">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 group hover:bg-gradient-to-br hover:from-rose-50 hover:to-pink-50 text-center relative"
                >
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 ${highlight.color}`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm lg:text-base group-hover:text-rose-700 transition-colors duration-300 leading-tight">
                    {highlight.text}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20 relative"
        >
          {/* Section-specific sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { top: '20%', left: '20%', size: 28 },
              { top: '30%', right: '25%', size: 22 },
              { bottom: '25%', left: '30%', size: 24 },
              { bottom: '35%', right: '20%', size: 26 }
            ].map((sparkle, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, -15, 0],
                  scale: [1, 1.12, 1]
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute opacity-20"
                style={sparkle}
              >
                <Sparkles size={sparkle.size} className="text-rose-500" />
              </motion.div>
            ))}
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 lg:mb-12 relative z-10">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Thousands</span>
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg`}
                  >
                    <Icon className="text-white" size={24} />
                  </motion.div>
                  <motion.h4 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2"
                  >
                    {stat.value}
                  </motion.h4>
                  <p className="text-gray-700 font-medium text-sm lg:text-base">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative"
        >
          {/* Image sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { top: '20%', left: '10%', size: 20 },
              { top: '30%', right: '15%', size: 18 },
              { bottom: '25%', left: '20%', size: 22 }
            ].map((sparkle, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute opacity-30"
                style={sparkle}
              >
                <Sparkles size={sparkle.size} className="text-pink-400" />
              </motion.div>
            ))}
          </div>

          <img
            src="https://ashianamulbery.com/images/highlights.webp"
            alt="Modern amenities and luxury features at Ashiana Mulberry"
            className="w-full h-48 sm:h-64 lg:h-80 object-cover relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;