import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionButtonProps {
  text: string;
  href: string;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ text, href }) => {
  return (
    <motion.a
      href={href}
      className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-300"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 191, 255, 0.4)" }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  );
};

export default CallToActionButton;
