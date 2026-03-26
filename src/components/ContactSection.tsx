import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './shared/SocialLinks';

const ContactSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for child elements
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
          Get In Touch
        </motion.h2>

        <div className="max-w-3xl mx-auto bg-zinc-800 rounded-xl p-8 shadow-lg border border-zinc-700">
          <motion.form variants={itemVariants} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-zinc-200 text-lg font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 rounded-md bg-zinc-700 border border-zinc-600 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-zinc-200 text-lg font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-3 rounded-md bg-zinc-700 border border-zinc-600 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-zinc-200 text-lg font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full p-3 rounded-md bg-zinc-700 border border-zinc-600 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-zinc-300 text-lg mb-4">Connect with us:</p>
            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
