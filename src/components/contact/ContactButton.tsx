import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { contactConfig } from '../../data/contact';

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'chat' | 'calendar' | null>(null);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedOption(null);
      setStatus('idle');
      setMessage('');
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    setIsSending(true);
    // Here you would implement your message sending logic
    // For now, we'll simulate a successful send
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
    setIsSending(false);
    setMessage('');
  };

  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({url: contactConfig.calendly.url});
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const renderContent = () => {
    if (selectedOption === 'calendar') {
      return (
        <div className="p-4 bg-primary/95 backdrop-blur-sm rounded-lg shadow-xl w-[350px] border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{contactConfig.calendly.text}</h3>
            <button 
              onClick={() => setSelectedOption(null)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-300 mb-4">{contactConfig.calendly.description}</p>
          <button
            onClick={openCalendly}
            className="w-full py-2 px-4 bg-accent hover:bg-accent/80 rounded transition-colors font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Open Calendar
          </button>
        </div>
      );
    }

    if (selectedOption === 'chat') {
      return (
        <div className="p-4 bg-primary/95 backdrop-blur-sm rounded-lg shadow-xl w-[350px] border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{contactConfig.quickChat.text}</h3>
            <button 
              onClick={() => setSelectedOption(null)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            {status === 'idle' && (
              <>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <TypeAnimation
                    sequence={[
                      'Ready to chat...',
                      1000,
                      'How can I help?',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:outline-none resize-none"
                  placeholder={contactConfig.quickChat.placeholder}
                  rows={4}
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={isSending || !message.trim()}
                  className="w-full py-2 px-4 bg-accent hover:bg-accent/80 rounded transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {contactConfig.quickChat.submitText}
                    </>
                  )}
                </button>
              </>
            )}
            {status === 'success' && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-500 font-medium">{contactConfig.quickChat.successMessage}</p>
              </div>
            )}
            {status === 'error' && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-red-500 font-medium">{contactConfig.quickChat.errorMessage}</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="p-2 bg-primary/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700">
        <div className="space-y-2">
          <button
            onClick={() => setSelectedOption('calendar')}
            className="w-full p-2 text-left hover:bg-gray-800 rounded transition-colors flex items-center gap-3"
          >
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {contactConfig.calendly.text}
          </button>
          <button
            onClick={() => setSelectedOption('chat')}
            className="w-full p-2 text-left hover:bg-gray-800 rounded transition-colors flex items-center gap-3"
          >
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {contactConfig.quickChat.text}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="absolute bottom-full right-0 mb-4"
          >
            {renderContent()}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-accent text-white px-6 py-3 rounded-full font-medium shadow-lg flex items-center gap-2 hover:bg-accent/80 transition-colors"
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        Contact Me
      </motion.button>
    </div>
  );
};

export default ContactButton;
