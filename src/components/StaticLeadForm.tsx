import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

interface StaticLeadFormProps {
  onSubmit: (data: any) => void;
}

const StaticLeadForm: React.FC<StaticLeadFormProps> = ({ onSubmit }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="text-yellow-300" size={24} />
            <span className="text-yellow-300 font-semibold">Exclusive Offer</span>
            <Star className="text-yellow-300" size={24} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Don't Miss Out
          </h2>
          <p className="text-xl text-rose-100 max-w-3xl mx-auto">
            Get instant access to floor plans, pricing details, and exclusive offers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-6">
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Gift className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Get Premium Access
            </h3>
            <p className="text-gray-600">
              Join thousands who've already discovered their perfect home
            </p>
          </div>
          
          <LeadCaptureForm onSubmit={onSubmit} />
        </motion.div>
      </div>
    </section>
  );
};

export default StaticLeadForm;