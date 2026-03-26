import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <motion.footer
      className="bg-zinc-950 py-8 text-center text-zinc-400 border-t border-zinc-800"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} WellCoded. All rights reserved.</p>
        {/* Optionally add social links or quick navigation here if needed */}
      </div>
    </motion.footer>
  );
};

export default Footer;
