import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Ashiana Mulberry - Data Protection & Privacy"
        description="Read our comprehensive privacy policy to understand how Ashiana Mulberry collects, uses, and protects your personal information in compliance with data protection regulations."
        keywords="privacy policy, data protection, personal information, Ashiana Mulberry privacy, GDPR compliance, data security"
        canonicalUrl="https://ashianamulbery.com/privacy-policy"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-rose-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-rose-100">
                Your privacy and data security are our top priorities
              </p>
              <p className="text-sm text-rose-200 mt-2">
                Last updated: January 2024
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12"
          >
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <FileText className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ashiana Mulberry ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Eye className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Name and contact information (email, phone number, address)</li>
                    <li>• Demographic information (age, occupation, income details)</li>
                    <li>• Property preferences and requirements</li>
                    <li>• Communication history and preferences</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• IP address and browser information</li>
                    <li>• Device information and operating system</li>
                    <li>• Website usage data and analytics</li>
                    <li>• Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marketing Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Marketing preferences and communication history</li>
                    <li>• Event attendance and interaction records</li>
                    <li>• Social media interactions and engagement</li>
                    <li>• Survey responses and feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <UserCheck className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Process your inquiries and requests</li>
                    <li>• Schedule property tours and meetings</li>
                    <li>• Provide property information and updates</li>
                    <li>• Process transactions and agreements</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Communication</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Send property updates and newsletters</li>
                    <li>• Respond to customer service requests</li>
                    <li>• Provide important notices and updates</li>
                    <li>• Conduct surveys and gather feedback</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marketing</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Send promotional materials and offers</li>
                    <li>• Personalize marketing communications</li>
                    <li>• Analyze marketing campaign effectiveness</li>
                    <li>• Invite to events and property launches</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Improve website functionality and user experience</li>
                    <li>• Analyze customer behavior and preferences</li>
                    <li>• Generate business insights and reports</li>
                    <li>• Enhance our products and services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Lock className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white mb-6">
                <p className="text-lg font-semibold mb-2">We implement industry-standard security measures to protect your data:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Encryption</h3>
                  <p className="text-sm text-gray-600">All data transmission is encrypted using SSL/TLS protocols</p>
                </div>

                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Lock size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Access Control</h3>
                  <p className="text-sm text-gray-600">Strict access controls and authentication measures</p>
                </div>

                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Eye size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Monitoring</h3>
                  <p className="text-sm text-gray-600">Continuous monitoring for security threats and breaches</p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Rights</h2>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6">
                <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Access:</strong> Request access to your personal information</li>
                  <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li>• <strong>Objection:</strong> Object to processing of your personal information</li>
                  <li>• <strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <p className="text-yellow-800">
                  <strong>Note:</strong> Disabling cookies may affect the functionality of our website and your user experience.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-rose-100 mb-6">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold mb-2">Email:</p>
                  <a href="mailto:privacy@ashianamulbery.com" className="text-rose-100 hover:text-white">
                    privacy@ashianamulbery.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-2">Phone:</p>
                  <a href="tel:+919876543210" className="text-rose-100 hover:text-white">
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-2">Address:</p>
                  <p className="text-rose-100">
                    Ashiana Mulberry<br />
                    Sector 2, Sohna, Gurgaon<br />
                    Haryana 122103, India
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Response Time:</p>
                  <p className="text-rose-100">
                    We will respond to your privacy requests within 30 days
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;