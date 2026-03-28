import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-lg border-b border-border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 20 }}
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-primary">
          GERda
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-muted hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu could be re-added here if needed */}
      </nav>
    </motion.header>
  );
};

export default Header;
