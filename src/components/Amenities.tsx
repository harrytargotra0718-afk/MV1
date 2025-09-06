import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDumbbell, FaUsers, FaShieldAlt, FaHeartbeat, FaCoffee, FaHome,
  FaClock, FaKey, FaPhone, FaBook, FaBirthdayCake, FaGamepad,
  FaTree, FaTint, FaRecycle, FaThermometerHalf, FaBicycle,
  FaSpa, FaGem, FaLeaf, FaFireExtinguisher, FaIdCard, FaVideo,
  FaTrophy, FaBookOpen, FaBuilding
} from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { GiTennisCourt,GiPowerGenerator } from "react-icons/gi";
import { MdPool,MdSolarPower } from "react-icons/md";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaHotTubPerson ,FaBasketball,FaTableTennisPaddleBall} from "react-icons/fa6"; 

const Amenities: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const amenitiesCategories = [
    {
      title: "Sports & Fitness",
      icon: FaDumbbell,
      items: [
        { icon: FaDumbbell, name: "Gymnasium" },
        { icon: MdPool, name: "Swimming Pool" },
        { icon: FaUsers, name: "Kids' Pool" },
        { icon: GiTennisCourt, name: "Badminton Court(s)" },
        { icon: GiTennisCourt, name: "Tennis Court(s)" },
        { icon: GiTennisCourt, name: "Squash Court" },
        { icon: FaSpa, name: "Yoga Areas" },
        { icon: FaBasketball, name: "Basketball" },
        { icon: FaBicycle, name: "Jogging / Cycle Track" },
        { icon: FaTableTennisPaddleBall, name: "Table Tennis" },
      ],
    },
    {
      title: "Convenience",
      icon: FaHome,
      items: [
        { icon: GiPowerGenerator, name: "Power Backup" },
        { icon: MdSolarPower, name: "Solar Heaters" },
        { icon: TbAirConditioning, name: "AC Waiting Lobby" },
        { icon: FaKey, name: "Private Lift" },
        { icon: FaTint, name: "24*7 Water Supply" },
      ],
    },
    {
      title: "Safety & Security",
      icon: FaShieldAlt,
      items: [
        { icon: FaClock, name: "24 x 7 Security" },
        { icon: FaFireExtinguisher, name: "Fire Fighting Systems" },
        { icon: FaIdCard, name: "Smart Card Access" },
        { icon: FaPhone, name: "Intercom Facility" },
        { icon: FaVideo, name: "CCTV / Video Surveillance" },
      ],
    },
    {
      title: "Leisure & Entertainment",
      icon: FaBirthdayCake,
      items: [
        { icon: FaBookOpen, name: "Reading Room/Library" },
        { icon: FaHotTubPerson, name: "Sauna" },
        { icon: FaBirthdayCake, name: "Party Hall" },
        { icon: FaBook, name: "Cards Room" },
        { icon: FaGamepad, name: "Indoor Games" },
        { icon: FaBuilding, name: "Conference Room" },
        { icon: FaSpa, name: "Spa" },
        { icon: FaHome, name: "Luxurious Clubhouse" },
        { icon: FaGem, name: "Jacuzzi" },
      ],
    },
    {
      title: "Environment",
      icon: FaTree,
      items: [
        { icon: FaTint, name: "Rain Water Harvesting" },
        { icon: FaRecycle, name: "Sewage Treatment Plant" },
        { icon: FaLeaf, name: "Eco Friendly" },
        { icon: FaTree, name: "Large Green Area" },
      ],
    },
  ];

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  const displayedCategories = showAll
    ? amenitiesCategories
    : amenitiesCategories.slice(0, 3);

  return (
    <section
      id="amenities"
      className="py-16 lg:py-24 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl mb-4 lg:mb-6 shadow-2xl mx-auto"
          >
            <FaHeartbeat className="text-white" size={28} />
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
            Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
              Amenities
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto">
            Experience unparalleled luxury with our comprehensive range of
            world-class amenities designed for modern living
          </p>
        </motion.div>

        {/* Desktop Flow Layout */}
        <div className="hidden lg:block space-y-12">
          {amenitiesCategories.map((category, i) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Section Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 flex items-center justify-center shadow-md">
                    <CategoryIcon className="text-white" size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                {/* Items in Responsive Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.items.map((item, j) => {
                    const ItemIcon = item.icon;
                    return (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 }}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-white shadow-sm hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                          <ItemIcon className="text-rose-600" size={18} />
                        </div>
                        <span className="text-gray-800 font-medium">
                          {item.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Accordion Layout (unchanged) */}
        <div className="lg:hidden space-y-4">
          {displayedCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const isExpanded = expandedCategory === category.title;

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <CategoryIcon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="text-rose-600" size={20} />
                  ) : (
                    <ChevronDown className="text-rose-600" size={20} />
                  )}
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 space-y-2">
                    {category.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      return (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.05 }}
                          className="flex items-center space-x-3 p-3 rounded-xl bg-rose-50/50 transition-all duration-200"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-500 rounded-lg flex items-center justify-center">
                            <ItemIcon className="text-white" size={16} />
                          </div>
                          <span className="text-gray-800 font-medium text-sm">
                            {item.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Show More/Less Button for Mobile */}
          {amenitiesCategories.length > 3 && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setShowAll(!showAll)}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {showAll ? (
                <>
                  <ChevronUp size={20} />
                  <span>Show Less Amenities</span>
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  <span>Show All Amenities</span>
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Amenities;