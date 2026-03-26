import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 120, damping: 20 } },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-zinc-950 bg-opacity-90 z-50 py-4 shadow-lg"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-3xl font-bold text-blue-400"
          whileHover={{ scale: 1.05 }}
        >
          wellcoded
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.li key={link.name}>
              <motion.a
                href={link.href}
                className="text-zinc-200 hover:text-blue-400 text-lg transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-200 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-zinc-950 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-200 text-3xl hover:text-blue-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
