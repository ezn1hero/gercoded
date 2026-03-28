import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  // Теперь каждый навык — это объект с именем и официальной ссылкой
 const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", url: "https://www.python.org/" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", url: "https://www.typescriptlang.org/" },
        { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" }
      ]
    },
    {
      title: "Backend & Automation",
      skills: [
        { name: "Telethon", url: "https://docs.telethon.dev/" },
        { name: "Aiogram", url: "https://docs.aiogram.dev/" },
        { name: "Selenium", url: "https://www.selenium.dev/" },
        { name: "REST API", url: "https://restfulapi.net/" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", url: "https://react.dev/" },
        { name: "Vite", url: "https://vitejs.dev/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" }
      ]
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "Git", url: "https://git-scm.com/" },
        { name: "Docker", url: "https://www.docker.com/" },
        { name: "PyCharm", url: "https://www.jetbrains.com/pycharm/" },
        { name: "VS Code", url: "https://code.visualstudio.com/" },
        { name: "Visual Studio 2022", url: "https://visualstudio.microsoft.com/" }
      ]
    },
    {
      title: "OS & Environments",
      skills: [
        { name: "Windows", url: "https://www.microsoft.com/windows" },
        // Твои кастомные системы!
        { name: "Linux Mint 21 (XFCE)", url: "https://linuxmint.com/edition.php?id=300" },
        { name: "Hackintosh (macOS)", url: "https://dortania.github.io/OpenCore-Install-Guide/" }
      ]
    }
  ];
  
  return (
    <motion.section
      id="about"
      className="py-24 bg-transparent"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate developer with hands-on experience in building automation tools, 
            Telegram bots, and seamless API integrations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Левая колонка с текстом и статистикой */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
              <p>
                I'm <span className="font-semibold text-white">Gerda</span>, a developer specializing in backend architecture and process automation. 
                My programming journey started in <span className="text-white font-medium">2023 with Python</span>, and since then, I've completely immersed myself in development.
              </p>
              <p>
                I focus heavily on building high-performance Telegram bots using <span className="text-white font-medium">Telethon and Aiogram</span>, 
                as well as creating complex web scrapers and auto-booking systems via <span className="text-white font-medium">Selenium</span>.
              </p>
              <p>
                Whether it's designing a database structure, setting up API endpoints, or tweaking a React frontend, I love solving technical challenges and bringing ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <h4 className="text-4xl font-bold text-white mb-2">3</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-white mb-2">20+</h4>
                <p className="text-sm text-gray-400">Languages & Tools</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-bold text-white mb-2">10+</h4>
                <p className="text-sm text-gray-400">Completed Projects</p>
              </div>
            </div>
          </motion.div>

          {/* Правая колонка с кликабельными навыками */}
          <motion.div variants={itemVariants} className="space-y-10">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <a 
                      key={skillIndex} 
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#111111] border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300"
                    >
                      {skill.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;