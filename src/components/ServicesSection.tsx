import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, Code, Layers } from 'lucide-react'; // Placeholder icons

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <motion.div
      className="bg-zinc-800 rounded-xl p-8 shadow-lg border border-zinc-700 hover:border-blue-500 transition-colors duration-300 transform hover:-translate-y-2"
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
    >
      <div className="text-blue-400 mb-4">
        <Icon size={48} strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-bold text-zinc-100 mb-3">{title}</h3>
      <p className="text-zinc-300 text-base leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Layout,
      title: 'Web Design',
      description: 'Creating visually stunning and user-friendly website interfaces that capture your brand essence.',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building robust, scalable, and high-performance web applications using modern front-end technologies.',
    },
    {
      icon: Palette,
      title: 'Branding & UI/UX',
      description: 'Developing cohesive brand identities and intuitive user experiences for optimal engagement.',
    },
    {
      icon: Layers,
      title: 'SEO & Optimization',
      description: 'Improving your website\'s visibility on search engines and optimizing for speed and performance.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for child elements
      },
    },
  };

  return (
    <motion.section 
      id="services"
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
          Our Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants} // Apply container variants here for staggerChildren
        >
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
