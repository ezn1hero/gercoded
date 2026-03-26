import React from 'react';
import { motion } from 'framer-motion';
import CallToActionButton from './shared/CallToActionButton'; // Assuming this component will be created

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative flex items-center justify-center min-h-[calc(100vh-6rem)] bg-gradient-to-br from-zinc-950 to-gray-900 text-center py-20 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background elements, if any, could go here with parallax */}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6"
          variants={itemVariants}
        >
          Elevate Your Digital Presence
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Crafting exceptional web experiences with modern technologies and a pixel-perfect approach.
        </motion.p>
        <motion.div variants={itemVariants}>
          <CallToActionButton text="Start Your Project" href="#contact" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
