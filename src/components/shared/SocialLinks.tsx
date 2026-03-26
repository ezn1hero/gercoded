import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react'; // Placeholder for all social icons

interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Activity,
    href: 'https://github.com/yourusername',
  },
  {
    name: 'Twitter',
    icon: Activity,
    href: 'https://twitter.com/yourusername',
  },
  {
    name: 'LinkedIn',
    icon: Activity,
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Instagram',
    icon: Activity,
    href: 'https://instagram.com/yourusername',
  },
];

const SocialLinks: React.FC = () => {
  return (
    <motion.div
      className="flex justify-center space-x-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' as const, staggerChildren: 0.1 }}
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-blue-500 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
          variants={{ 
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }} // Child variants for staggerChildren
        >
          <link.icon size={28} strokeWidth={1.5} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
