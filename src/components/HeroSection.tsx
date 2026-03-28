import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Убедись, что файл SocialLinks.tsx также был обновлен кликабельными SVG-иконками
import SocialLinks from './shared/SocialLinks';

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Твои новые специализации для эффекта печатной машинки
  const toRotate = ["Python Developer", "Automation Specialist", "Backend Engineer"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
      
      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, toRotate, typingSpeed]);

  return (
    <motion.section
      className="relative flex items-center justify-center min-h-[calc(100vh-6rem)] bg-black text-center py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
        
        {/* Главный заголовок */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 tracking-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          Hi, I'm <span className="text-blue-500">Gerda</span>
        </motion.h1>
        
        {/* Эффект печатной машинки (под терминал) */}
        <motion.div 
          className="text-xl md:text-2xl text-blue-400 mb-6 h-8 font-mono flex items-center justify-center gap-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-zinc-500">{'>'}</span> 
          <span className="relative text-zinc-300">
            {text}
            {/* Мигающий нижний курсор (эффект полоски снизу) */}
            <motion.span
              className="absolute bottom-0 left-full w-2.5 h-0.5 bg-white"
              animate={{ opacity: [1, 0, 1] }} // Мигание
              transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
            />
          </span>
        </motion.div>

        {/* Короткое статичное описание */}
        <motion.p
          className="text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I build robust Telegram bots, seamless API integrations, and web automation tools using Selenium and Telethon.
        </motion.p>

        {/* Твои ссылки (которые мы сделали на SVG) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <SocialLinks />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default HeroSection;