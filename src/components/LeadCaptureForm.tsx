import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MapPin, Calendar, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  preferredDate?: string;
  preferredTime?: string;
}

interface LeadCaptureFormProps {
  onSubmit: (data: FormData, formType: string) => void;
  className?: string;
  formType: 'brochure' | 'callback' | 'tour';
}

const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
];

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ 
  onSubmit, 
  className = '', 
  formType 
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formType === 'tour' && !formData.address?.trim()) {
      newErrors.address = 'Address is required for site tour';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Add country code to phone number
    const fullPhone = selectedCountryCode + formData.phone;
    const submitData = { ...formData, phone: fullPhone };
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Call the parent onSubmit handler
    onSubmit(submitData, formType);
    
    // Navigate to appropriate thank you page
    switch (formType) {
      case 'brochure':
        navigate('/thank-you-brochure');
        break;
      case 'callback':
        navigate('/thank-you-callback');
        break;
      case 'tour':
        navigate('/thank-you-tour');
        break;
    }
    
    setIsSubmitting(false);
  };

  const inputClasses = "w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200";

  const getFormConfig = () => {
    switch (formType) {
      case 'brochure':
        return {
          title: 'Download Brochure',
          subtitle: 'Get complete details about Ashiana Mulberry',
          buttonText: 'Download Brochure',
          buttonIcon: Download,
          buttonColor: 'from-rose-500 to-pink-600'
        };
      case 'callback':
        return {
          title: 'Request Callback',
          subtitle: 'Get exclusive offers and pricing details',
          buttonText: 'Request Callback',
          buttonIcon: Phone,
          buttonColor: 'from-blue-500 to-blue-600'
        };
      case 'tour':
        return {
          title: 'Schedule Site Tour',
          subtitle: 'Experience the luxury firsthand',
          buttonText: 'Schedule Tour',
          buttonIcon: Calendar,
          buttonColor: 'from-purple-500 to-purple-600'
        };
      default:
        return {
          title: 'Contact Us',
          subtitle: 'Get in touch with us',
          buttonText: 'Submit',
          buttonIcon: Send,
          buttonColor: 'from-rose-500 to-pink-600'
        };
    }
  };

  const config = getFormConfig();
  const ButtonIcon = config.buttonIcon;

  return (
    <div className={`bg-white rounded-3xl p-6 shadow-xl ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{config.title}</h3>
        <p className="text-gray-600">{config.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div className="relative">
          <User className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClasses}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        
        {/* Email Field */}
        <div className="relative">
          <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClasses}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        
        {/* Phone Field with Country Code */}
        <div className="relative">
          <Phone className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <div className="flex space-x-2">
            <select
              value={selectedCountryCode}
              onChange={(e) => setSelectedCountryCode(e.target.value)}
              className="w-24 pl-3 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent appearance-none"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="flex-1 pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Address Field (for tour) */}
        {formType === 'tour' && (
          <div className="relative">
            <MapPin className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <textarea
              placeholder="Current Address *"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              rows={3}
              className={inputClasses}
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>
        )}

       
        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r ${config.buttonColor} text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-200 disabled:opacity-50`}
        >
          {isSubmitting ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <ButtonIcon size={16} />
              <span>{config.buttonText}</span>
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;