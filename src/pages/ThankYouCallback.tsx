import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Clock, Gift, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { trackEvent } from '../utils/analytics';

const ThankYouCallback: React.FC = () => {
  useEffect(() => {
    // Track thank you page view
    trackEvent('page_view', {
      page_title: 'Thank You - Callback Request',
      page_location: window.location.href
    });

    // Track conversion
    trackEvent('conversion', {
      conversion_type: 'callback_request',
      value: 1
    });
  }, []);

  return (
    <>
      <SEOHead
        title="Thank You - Callback Request Submitted | Ashiana Mulberry"
        description="Thank you for requesting a callback. Our team will contact you within 24 hours with exclusive offers and detailed information about Ashiana Mulberry."
        canonicalUrl="https://ashianamulbery.com/thank-you-callback"
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
            Thank You for Your Interest!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your callback request has been successfully submitted. Our premium property consultant will contact you within the next 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6"
            >
              <Phone className="text-rose-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600">Our team will call you within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6"
            >
              <Gift className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Exclusive Offers</h3>
              <p className="text-sm text-gray-600">Special pricing and payment plans</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6"
            >
              <Clock className="text-green-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Priority Access</h3>
              <p className="text-sm text-gray-600">First access to new launches</p>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white mb-8">
            <h3 className="text-xl font-bold mb-2">What Happens Next?</h3>
            <div className="text-left space-y-2 text-rose-100">
              <p>✓ Our property consultant will call you within 24 hours</p>
              <p>✓ You'll receive exclusive pricing and floor plan details</p>
              <p>✓ We'll schedule a personalized site visit at your convenience</p>
              <p>✓ Get access to special launch offers and payment plans</p>
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

            <Link to="/schedule-tour">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-rose-500 text-rose-600 px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:bg-rose-50 transition-all duration-200"
              >
                <span>Schedule Site Visit</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need immediate assistance? Call us at{' '}
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

export default ThankYouCallback;