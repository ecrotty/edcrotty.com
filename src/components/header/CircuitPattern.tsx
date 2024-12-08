import React from 'react';

const CircuitPattern: React.FC = () => {
  return (
    <svg
      className="absolute right-0 top-0 w-1/2 h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M100,0 L150,50 L200,50 L250,100 L300,100 M0,100 L50,150 L100,150 L150,200"
        stroke="url(#circuit-gradient)"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="150" cy="50" r="4" fill="currentColor" />
      <circle cx="250" cy="100" r="4" fill="currentColor" />
      <circle cx="100" cy="150" r="4" fill="currentColor" />
    </svg>
  );
};

export default CircuitPattern;