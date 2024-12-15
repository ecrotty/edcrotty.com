import React from 'react';
import { motion } from 'framer-motion';
import { contactConfig } from '../../data/contact';

const ContactButton = () => {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({url: contactConfig.calendly.url});
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={openCalendly}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-accent text-white px-3 sm:px-6 py-3 rounded-full font-medium shadow-lg flex items-center gap-2 hover:bg-accent/80 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="hidden sm:inline">Schedule Meeting</span>
      </motion.button>
    </div>
  );
};

export default ContactButton;
