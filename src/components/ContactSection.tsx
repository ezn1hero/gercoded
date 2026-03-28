import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './shared/SocialLinks';

const ContactSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-zinc-900"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-zinc-100 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
        >
          Contact
        </motion.h2>

        <div className="max-w-3xl mx-auto text-center">
          <motion.p variants={itemVariants} className="text-zinc-300 text-lg mb-8">
            Un projet ? Une question ? N'hésitez pas à me contacter.
          </motion.p>
          
          <motion.a
            href="mailto:contact@wellcoded.eu"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            contact@wellcoded.eu
          </motion.a>

          <motion.div variants={itemVariants} className="mt-12">
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
