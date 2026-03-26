import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
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

  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Framer Motion', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
  ];

  return (
    <motion.section
      id="about"
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
          About Us
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="text-zinc-300 space-y-6">
            <p>
              Welcome to WellCoded, where innovation meets elegant design. We are a team of passionate developers and designers dedicated to building exceptional web experiences. With a keen eye for detail and a commitment to modern technologies, we transform ideas into pixel-perfect, high-performance applications.
            </p>
            <p>
              Our philosophy revolves around creating intuitive, engaging, and visually stunning digital products that not only meet but exceed client expectations. From intricate front-end animations with Framer Motion to robust back-end solutions, we handle every aspect of the development process with expertise.
            </p>
            <p>
              We thrive on challenges and are constantly exploring new tools and techniques to deliver cutting-edge solutions. Let's work together to bring your vision to life.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-zinc-800 rounded-xl p-8 shadow-lg border border-zinc-700">
            <h3 className="text-2xl font-bold text-zinc-100 mb-6">Our Expertise</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="bg-zinc-700 text-zinc-200 px-4 py-2 rounded-lg text-center text-sm font-medium"
                  whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }} // Tailwind blue-500
                  transition={{ duration: 0.2 }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
