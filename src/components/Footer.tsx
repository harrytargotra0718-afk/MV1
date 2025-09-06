import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Heart, Shield, Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      action: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@ashianamulbery.com',
      action: 'mailto:info@ashianamulbery.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Sector 2, Sohna, Gurgaon',
      action: null
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Sun: 9:00 AM - 7:00 PM',
      action: null
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-600/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://ashianamulbery.com/images/logo.png" 
                alt="Ashiana Mulbery Logo" 
                className="h-12 w-auto"
              />
             
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience luxury living at the foothills of Aravalli. Premium 3 & 3.5 BHK apartments 
              with world-class amenities and strategic location.
            </p>
            <div className="flex items-center space-x-2 text-pink-300">
              <Shield size={16} />
              <span className="text-sm">Project RERA No.: HRERA-PKL-REA-1281-2022</span>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-6 text-pink-200">Contact Information</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Icon className="text-white" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-pink-100 text-sm">{info.title}</p>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-gray-300 hover:text-white transition-colors text-xs"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-xs">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Disclaimer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-6 text-pink-200">Important Information</h4>
            <div className="bg-white/5 rounded-2xl p-6">
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                <strong className="text-pink-200">Disclaimer:</strong> This is not the official website of developer & property, 
                it belongs to authorised channel partner for information purpose only. All rights for logo & images 
                are reserved to developer.
              </p>
              <p className="text-gray-300 text-xs leading-relaxed mb-4">
                Thank you for visiting our website. This disclaimer ("Disclaimer") is applicable to this website 
                and all microsites and websites owned by us. By using or accessing this website you agree with 
                the Disclaimer without any qualification or limitation.
              </p>
              <p className="text-gray-300 text-xs leading-relaxed">
                This website is in the process of being updated. By accessing this website, the viewer confirms 
                that the information including brochures and marketing collaterals on this website are solely 
                for informational purposes only and the viewer has not relied on this information for making 
                any booking/purchase in any project of the company.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl p-6 mb-8"
        >
          <p className="text-gray-200 text-xs text-center leading-relaxed">
            Nothing on this website, constitutes advertising, marketing, booking, selling or an offer for sale, 
            or invitation to purchase a unit in any project by the company. The company is not liable for any 
            consequence of any action taken by the viewer relying on such material/ information on this website.
          </p>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Copyright size={14} />
              <span className="text-sm">2024 © ashianamulbery.com - All Rights Reserved</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-xs">
                Disclaimer
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-xs">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-xs">
                Terms of Service
              </a>
            </div>

            <div className="flex items-center space-x-2 text-pink-300">
              <Heart size={14} className="fill-current" />
              <span className="text-sm">Made with love for our customers</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 right-4 opacity-30">
        <div className="w-20 h-20 bg-pink-500 rounded-full blur-2xl"></div>
      </div>
      <div className="absolute top-4 left-4 opacity-30">
        <div className="w-16 h-16 bg-rose-500 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
};

export default Footer;