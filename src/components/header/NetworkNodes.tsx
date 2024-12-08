import React from 'react';
import { motion } from 'framer-motion';

const NetworkNodes: React.FC = () => {
  const nodes = [
    { x: '20%', y: '30%' },
    { x: '80%', y: '20%' },
    { x: '60%', y: '70%' },
    { x: '30%', y: '60%' },
    { x: '70%', y: '40%' }
  ];

  return (
    <div className="absolute inset-0">
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-accent rounded-full"
          style={{ left: node.x, top: node.y }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5
          }}
        />
      ))}
    </div>
  );
};

export default NetworkNodes;