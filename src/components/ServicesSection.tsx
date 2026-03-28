import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Server } from 'lucide-react'; // Updated icons

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
      className="bg-zinc-800 rounded-xl p-8 shadow-lg border border-zinc-700 hover:border-purple-500 transition-colors duration-300 transform hover:-translate-y-2"
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
    >
      <div className="text-purple-400 mb-4">
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
      icon: Code,
      title: 'Développement web',
      description: 'Création de sites web sur mesure, responsives et optimisés pour le référencement.',
    },
    {
      icon: Layers,
      title: 'Full-stack',
      description: 'Développement d\'applications web complètes, du front-end au back-end.',
    },
    {
      icon: Server,
      title: 'Back-end',
      description: 'Mise en place de serveurs, bases de données et API pour vos applications web.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          What I do
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
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
