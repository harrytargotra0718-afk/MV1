import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Download, Phone, Calendar } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any, formType: string) => void;
  formType: 'brochure' | 'callback' | 'tour';
  trigger?: string;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit,
  formType,
  trigger = 'general'
}) => {
  const handleSubmit = (data: any, submittedFormType: string) => {
    onSubmit({ ...data, trigger }, submittedFormType);
    onClose();
  };

  const getModalConfig = () => {
    switch (formType) {
      case 'brochure':
        return {
          title: 'Download Brochure',
          subtitle: 'Get complete project details',
          icon: Download,
          iconColor: 'from-rose-500 to-pink-600'
        };
      case 'callback':
        return {
          title: 'Request Callback',
          subtitle: 'Get exclusive offers',
          icon: Phone,
          iconColor: 'from-blue-500 to-blue-600'
        };
      case 'tour':
        return {
          title: 'Schedule Site Tour',
          subtitle: 'Experience luxury firsthand',
          icon: Calendar,
          iconColor: 'from-purple-500 to-purple-600'
        };
      default:
        return {
          title: 'Exclusive Access',
          subtitle: 'Get premium details',
          icon: Gift,
          iconColor: 'from-rose-500 to-pink-600'
        };
    }
  };

  const config = getModalConfig();
  const ModalIcon = config.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className={`bg-gradient-to-r ${config.iconColor} p-2 rounded-xl`}>
                  <ModalIcon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{config.title}</h3>
                  <p className="text-gray-600 text-sm">{config.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>
            
            <LeadCaptureForm 
              onSubmit={handleSubmit} 
              formType={formType}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;