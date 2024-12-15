import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import HeaderBackground from './header/HeaderBackground';

const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <HeaderBackground />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10"
      >
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-accent shadow-lg bg-white/10 flex items-center justify-center overflow-hidden">
            <svg 
              className="w-32 h-32 text-accent/50" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 14.016q2.906 0 4.945 2.039t2.039 4.945v1.5h-14.016v-1.5q0-2.906 2.039-4.945t4.993-2.039zM12 12q-1.641 0-2.813-1.172t-1.172-2.813 1.172-2.836 2.813-1.195 2.813 1.195 1.172 2.836-1.172 2.813-2.813 1.172z"/>
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Available for opportunities</span>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4">Ed Crotty</h1>
        <div className="text-2xl text-gray-300 mb-6">
          <TypeAnimation
            sequence={[
              'IT Leader',
              1000,
              'Staff Engineer',
              1000,
              'AI Strategist',
              1000,
              'Cloud Operations Specialist',
              1000,
              'Infrastructure SME',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="max-w-2xl mx-auto text-gray-300">
          I'm Ed Crotty—a seasoned technologist and entrepreneur who turns complex challenges into streamlined, scalable solutions. By blending hands-on execution with industry best practices, I help teams adopt emerging technologies to drive sustainable growth. My work bridges vision and execution, ensuring every initiative delivers measurable impact and lasting value.
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
