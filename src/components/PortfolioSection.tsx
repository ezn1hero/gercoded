import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioSection() {
  const projects = [
    {
      title: "Telegram Automation System",
      description: "An asynchronous mass-messaging and automation tool for Telegram chats, built for high performance using the Telethon library.",
      tags: ["Python", "Telethon", "AsyncIO", "API"]
    },
    {
      title: "Courtcheck Auto-Booker",
      description: "A Selenium-integrated bot that automatically logs into accounts at scheduled times to secure and book specific sports courts without manual intervention.",
      tags: ["Python", "Selenium", "Web Scraping", "Automation"]
    },
    {
      title: "Coffee Shop Assistant Bot",
      description: "A comprehensive Telegram bot designed to automate coffee shop operations, handling customer orders, interactive menus, and feedback collection.",
      tags: ["Python", "Telegram Bot API", "Databases"]
    },
    {
      title: "Request Management System",
      description: "A streamlined bot for collecting, processing, and managing user applications and support tickets directly within Telegram.",
      tags: ["Python", "Aiogram", "Git"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 
      }
    }
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="portfolio" className="py-20 w-full max-w-5xl mx-auto px-4 overflow-hidden">
      
      {/* Анимированный заголовок секции */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
        <p className="text-gray-400 text-lg">A selection of my recent automation and backend work.</p>
      </motion.div>

      {/* Анимированная сетка проектов */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }} 
            className="flex flex-col h-full p-8 bg-black border border-white/10 rounded-3xl hover:border-blue-500/50 transition-colors shadow-none hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
            <p className="text-gray-400 text-base mb-8 leading-relaxed flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="px-3 py-1.5 bg-black border border-white/10 rounded-xl text-xs font-medium text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </section>
  );
}