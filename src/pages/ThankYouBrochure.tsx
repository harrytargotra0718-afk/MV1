import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, FileText, Mail, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { trackEvent } from '../utils/analytics';

const ThankYouBrochure: React.FC = () => {
  useEffect(() => {
    // Track thank you page view
    trackEvent('page_view', {
      page_title: 'Thank You - Brochure Download',
      page_location: window.location.href
    });

    // Track conversion
    trackEvent('conversion', {
      conversion_type: 'brochure_download',
      value: 1
    });
  }, []);

  const handleDownload = () => {
    trackEvent('file_download', {
      file_name: 'Ashiana_Mulberry_Brochure.pdf',
      file_type: 'brochure'
    });
    // In a real application, this would trigger the actual download
    window.open('/brochure/Ashiana_Mulberry_Brochure.pdf', '_blank');
  };

  return (
    <>
      <SEOHead
        title="Thank You - Brochure Download | Ashiana Mulberry"
        description="Thank you for downloading our brochure. Access detailed floor plans, pricing, and complete project information for Ashiana Mulberry luxury apartments."
        canonicalUrl="https://ashianamulbery.com/thank-you-brochure"
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
            Download Successful!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your brochure download request has been processed. Check your email for the complete floor plans and project details.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-6 text-white mb-8"
          >
            <FileText className="mx-auto mb-4" size={48} />
            <h3 className="text-xl font-bold mb-2">Premium Brochure Package</h3>
            <p className="text-rose-100 mb-4">
              Complete project information sent to your email
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="bg-white text-rose-600 px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 mx-auto hover:shadow-lg transition-all duration-200"
            >
              <Download size={20} />
              <span>Download Now</span>
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6"
            >
              <Mail className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Email Sent</h3>
              <p className="text-sm text-gray-600">Check your inbox for the complete brochure with floor plans and pricing</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6"
            >
              <FileText className="text-green-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Detailed Information</h3>
              <p className="text-sm text-gray-600">Floor plans, amenities, pricing, and payment options included</p>
            </motion.div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included in Your Brochure:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">✓ Detailed 3 & 3.5 BHK floor plans</p>
                <p className="text-sm text-gray-600">✓ Complete pricing structure</p>
                <p className="text-sm text-gray-600">✓ Payment plans and schemes</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">✓ Amenities and facilities guide</p>
                <p className="text-sm text-gray-600">✓ Location and connectivity map</p>
                <p className="text-sm text-gray-600">✓ Construction timeline</p>
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
              Didn't receive the email? Check your spam folder or contact us at{' '}
              <a href="mailto:info@ashianamulbery.com" className="text-rose-600 font-semibold hover:underline">
                info@ashianamulbery.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  ); 
};

export default ThankYouBrochure;