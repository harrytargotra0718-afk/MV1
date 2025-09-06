import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Home, Square, Bed, MapPin, Clock, Car, School,  ShoppingBag, ChevronRight, X } from 'lucide-react';
import { FaHospital } from "react-icons/fa";

interface FloorPlanProps {
   onDownloadClick: () => void;
  onTourClick: () => void;
  onCallbackClick: () => void;
}

const FloorPlan: React.FC<FloorPlanProps> = ({ onDownloadClick, onTourClick, onCallbackClick}) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const floorPlans = [
    {
      type: '3 BHK',
      area: 'Request Onwards',
      price: 'Get Price',
      bedrooms: 3,
      image: 'https://ashianamulbery.com/images/3-bhk.webp',
      features: ['Master Bedroom', '2 Guest Bedrooms', 'Living Room', 'Kitchen', '3 Bathrooms', 'Balcony']
    },
    {
      type: '3.5 BHK',
      area: 'Request Onwards',
      price: 'Get Price',
      bedrooms: 3.5,
      image: 'https://ashianamulbery.com/images/4-bhk.webp',
      features: ['Master Suite', '2.5 Bedrooms', 'Living Room', 'Dining Room', 'Kitchen', '3.5 Bathrooms', 'Balcony']
    }
  ];

  const locationAdvantages = [
    { icon: Clock, text: 'Cyberhub & Galleria - 25 mins' },
    { icon: Clock, text: 'Grand Hyatt Gurgaon - 5 mins' },
    { icon: Clock, text: 'Rapid Metro Gurgaon - 6 mins' },
    { icon: FaHospital, text: 'Artemis Hospital Gurgaon - 20 mins' },
    { icon: ShoppingBag, text: 'Airia Mall - 15 mins' },
    { icon: ShoppingBag, text: 'Worldmark Gurgaon - 10 mins' },
    { icon: School, text: 'St. Xavier\'s High School - 12 mins' },
    { icon: School, text: 'DPS International Edge - 12 mins' },
    { icon: Car, text: 'National Highway 48 - 20 mins' }
  ];

  return (
    <section id="floor-plan" className="py-16 lg:py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Choose Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
              Perfect Home
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our thoughtfully designed floor plans that cater to modern luxury living
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          {/* Floor Plans */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              Available <span className="text-rose-600">Floor Plans</span>
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {floorPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-rose-100"
                >
                  <div className="relative h-48 lg:h-56">
                    <img
                      src={plan.image}
                      alt={`${plan.type} floor plan`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl px-4 py-2 shadow-lg">
                      <span className="font-bold">{plan.type}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center bg-rose-50 rounded-xl p-3">
                        <Square className="mx-auto text-rose-600 mb-2" size={20} />
                        <p className="text-sm text-gray-600">Size</p>
                        <p className="font-semibold text-gray-800">{plan.area}</p>
                      </div>
                      <div className="text-center bg-pink-50 rounded-xl p-3">
                        <Bed className="mx-auto text-pink-600 mb-2" size={20} />
                        <p className="text-sm text-gray-600">Price</p>
                        <p className="font-semibold text-gray-800">{plan.price}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3 text-gray-700">
                          <div className="w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                            <Home size={12} className="text-white" />
                          </div>
                          <span className="text-sm lg:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                        onClick={onDownloadClick}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-200"
                    >
                      <Download size={18} />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Location Advantages */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              Prime <span className="text-rose-600">Location Advantages</span>
            </h3>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-rose-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationAdvantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Icon className="text-white" size={18} />
                      </div>
                      <span className="text-sm lg:text-base text-gray-800 font-medium">
                        {advantage.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Site Plan Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 rounded-2xl overflow-hidden shadow-lg border-2 border-rose-100"
              >
                <img
                  src="https://ashianamulbery.com/images/site-plan.webp"
                  alt="Site Plan Location"
                  className="w-full h-48 object-cover"
                />
              </motion.div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
               onClick={onCallbackClick}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-2xl font-semibold mt-6 shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MapPin size={20} />
                <span>Enquire Now</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Brochure CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-8 lg:p-12 text-center shadow-2xl"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Get A Digital Copy Of Our Brochure
          </h3>
          <p className="text-rose-100 text-lg mb-6">
            And Learn More About Our Spacious Residences
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDownloadClick}
            className="bg-white text-rose-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 mx-auto"
          >
            <Download size={20} />
            <span>Open Brochure</span>
          </motion.button>
        </motion.div>

        
      </div>
    </section>
  );
};

export default FloorPlan;