import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, GraduationCap, 
  ShoppingBag, Train, Plane, Car, Download, Star, Sparkles, Navigation
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface LocationProps {
  onDownloadClick: () => void;
  onTourClick: () => void;
  onCallbackClick: () => void;
}

  const Location: React.FC<LocationProps> = ({ onDownloadClick, onTourClick, onCallbackClick }) => {

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      action: 'tel:+919876543210',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@ashianamulbery.com',
      action: 'mailto:info@ashianamulbery.com',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Sector 2, Sohna, Gurgaon',
      action: null,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Sun: 9:00 AM - 7:00 PM',
      action: null,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const nearbyPlaces = [
    { icon: GraduationCap, name: 'Top Schools', distance: '0.5 km', color: 'text-blue-500' },
    { icon: ShoppingBag, name: 'Shopping Malls', distance: '1.2 km', color: 'text-green-500' },
    { icon: MessageCircle, name: 'Hospitals', distance: '0.8 km', color: 'text-red-500' },
    { icon: Train, name: 'Metro Station', distance: '1.5 km', color: 'text-purple-500' },
    { icon: Plane, name: 'Airport', distance: '25 km', color: 'text-orange-500' },
    { icon: Car, name: 'Highway', distance: '2 km', color: 'text-gray-600' }
  ];

  const connectivityFeatures = [
    'Direct connectivity to major business districts',
    'Easy access to IT parks and commercial centers',
    'Well-developed road infrastructure',
    'Public transportation hub nearby',
    'Close to educational institutions',
    'Proximity to healthcare facilities'
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute opacity-20"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${10 + (i * 6)}%`,
            }}
          >
            <Sparkles size={32} className="text-pink-400" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl mb-4 lg:mb-6 shadow-2xl"
          >
            <MessageCircle className="text-white" size={28} />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Connect With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
              Ashiana Mulberry
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto">
            Ready to experience luxury living? Our team is here to guide you through every step of your journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact & Location Info */}
          <div className="space-y-6 lg:space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Get In <span className="text-rose-600">Touch</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-4 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                      <info.icon className="text-white" size={18} />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">{info.title}</h4>
                    {info.action ? (
                      <a
                        href={info.action}
                        className="text-gray-600 hover:text-rose-600 transition-colors text-xs"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-xs">{info.details}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+919876543210"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/919876543210?text=Hi, I'm interested in Ashiana Mulberry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
                >
                  <FaWhatsapp size={16} />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Location Advantages */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Prime <span className="text-rose-600">Location</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {nearbyPlaces.map((place, index) => {
                  const Icon = place.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all duration-200 group"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Icon className="text-white" size={16} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{place.name}</p>
                        <p className="text-gray-600 text-xs">{place.distance}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <h4 className="font-bold text-gray-800 mb-3 text-sm">Connectivity Features:</h4>
              <ul className="space-y-2">
                {connectivityFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-700 text-xs"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                      <Star size={10} className="text-white" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Map Section */}
          <div className="space-y-6 lg:space-y-8">
            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-rose-100"
            >
              <div className="relative h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.868258982907!2d77.06185912662352!3d28.272011250358975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d25a45b40a18f%3A0xd087e2dcd0927b45!2sAshiana%20Mulberry%2C%20Sohna%20Rural%2C%20Haryana%20122103!5e0!3m2!1sen!2sin!4v1757142852854!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-3xl"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://maps.google.com/?q=Ashiana+Mulberry,Sohna+Rural,Haryana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
                  >
                    <Navigation size={16} />
                    <span>Open in Google Maps</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Brochure Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-6 text-center shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Get Complete Information
              </h3>
              <p className="text-rose-100 mb-4 text-sm">
                Download our detailed brochure with floor plans, amenities, and pricing
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                 onClick={onDownloadClick}
                className="bg-white text-rose-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 mx-auto text-sm"
              >
                <Download size={18} />
                <span>Download Brochure</span>
              </motion.button>
            </motion.div>

            {/* Visit Us Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-rose-100 text-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Schedule a Site Visit
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Experience the luxury firsthand with a personal tour
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                 onClick={onTourClick}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 w-full text-sm"
              >
                Book Your Visit
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;