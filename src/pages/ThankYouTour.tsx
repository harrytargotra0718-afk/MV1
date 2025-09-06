import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, MapPin, ArrowRight, Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { trackEvent } from '../utils/analytics';

const ThankYouTour: React.FC = () => {
  useEffect(() => {
    // Track thank you page view
    trackEvent('page_view', {
      page_title: 'Thank You - Tour Scheduled',
      page_location: window.location.href
    });

    // Track conversion
    trackEvent('conversion', {
      conversion_type: 'tour_schedule',
      value: 1
    });
  }, []);

  return (
    <>
      <SEOHead
        title="Thank You - Tour Scheduled | Ashiana Mulberry"
        description="Thank you for scheduling your property tour. Our team will contact you to confirm your visit and provide detailed directions to Ashiana Mulberry."
        canonicalUrl="https://ashianamulbery.com/thank-you-tour"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl max-w-2xl w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6"
          >
            <CheckCircle className="text-white" size={40} />
          </motion.div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Tour Request Confirmed!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Thank you for scheduling your property tour. Our team will contact you within 2 hours to confirm your visit timing and provide detailed directions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6"
            >
              <Phone className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Confirmation Call</h3>
              <p className="text-sm text-gray-600">We'll call within 2 hours to confirm</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6"
            >
              <Calendar className="text-green-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Flexible Timing</h3>
              <p className="text-sm text-gray-600">Available 7 days a week</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6"
            >
              <MapPin className="text-purple-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Easy Location</h3>
              <p className="text-sm text-gray-600">Detailed directions provided</p>
            </motion.div>
          </div>
          

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white mb-8"
          >
            <Calendar className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-4">Your Tour Experience Includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-rose-100">
              <div className="space-y-2">
                <p>✓ Sample apartment walkthrough</p>
                <p>✓ Amenities and facilities tour</p>
                <p>✓ Location connectivity overview</p>
              </div>
              <div className="space-y-2">
                <p>✓ Pricing and payment discussion</p>
                <p>✓ Construction progress update</p>
                <p>✓ Q&A with property experts</p>
              </div>
            </div>
          </motion.div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Important Information:</h3>
            <div className="text-left space-y-3 text-gray-600">
              <div className="flex items-start space-x-3">
                <Clock className="text-rose-500 mt-1" size={16} />
                <div>
                  <p className="font-semibold">Tour Duration:</p>
                  <p className="text-sm">Approximately 60-90 minutes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-rose-500 mt-1" size={16} />
                <div>
                  <p className="font-semibold">Meeting Point:</p>
                  <p className="text-sm">Ashiana Mulberry Sales Office, Sector 2, Sohna</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-rose-500 mt-1" size={16} />
                <div>
                  <p className="font-semibold">Contact:</p>
                  <p className="text-sm">+91 98765 43210 (Available 24/7)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
              >
                <Home size={20} />
                <span>Back to Home</span>
              </motion.button>
            </Link>

            <Link to="/download-brochure">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-rose-500 text-rose-600 px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:bg-rose-50 transition-all duration-200"
              >
                <span>Download Brochure</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need to reschedule or have questions? Call us at{' '}
              <a href="tel:+919876543210" className="text-rose-600 font-semibold hover:underline">
                +91 98765 43210
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ThankYouTour;