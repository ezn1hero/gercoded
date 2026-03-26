import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-zinc-700 hover:border-blue-500 transition-colors duration-300 transform hover:-translate-y-2"
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-zinc-100 mb-2">{title}</h3>
        <p className="text-zinc-300 text-base leading-relaxed">{description}</p>
      </div>
    </motion.a>
  );
};

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A cutting-edge web application built with React and Tailwind CSS.',
      imageUrl: 'https://via.placeholder.com/400x250/0F172A/ffffff?text=Project+Alpha',
      link: '#',
    },
    {
      title: 'Project Beta',
      description: 'An innovative mobile-first design for a modern e-commerce platform.',
      imageUrl: 'https://via.placeholder.com/400x250/0F172A/ffffff?text=Project+Beta',
      link: '#',
    },
    {
      title: 'Project Gamma',
      description: 'Optimized backend services for a high-traffic data analytics dashboard.',
      imageUrl: 'https://via.placeholder.com/400x250/0F172A/ffffff?text=Project+Gamma',
      link: '#',
    },
    {
      title: 'Project Delta',
      description: 'Interactive data visualizations developed for a financial reporting tool.',
      imageUrl: 'https://via.placeholder.com/400x250/0F172A/ffffff?text=Project+Delta',
      link: '#',
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
      id="portfolio"
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
          Our Portfolio
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants} // Apply container variants here for staggerChildren
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
