import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const asciiLogo = `
  ____ _____ ____  ____    _    
 / ___| ____|  _ \|  _ \  / \   
| |  _|  _| | |_) | | | |/ _ \  
| |_| | |___|  _ <| |_| / ___ \ 
 \____|_____|_| \_\____/_/   \_\
`;

interface LoadingTask {
  id: string;
  name: string;
  progress: number;
}

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [tasks, setTasks] = useState<LoadingTask[]>([
    { id: 'nginx', name: '$ systemctl start nginx', progress: 0 },
    { id: 'docker', name: '$ docker-compose up -d', progress: 0 },
    { id: 'build', name: '$ npm run build', progress: 0 },
  ]);

  const [showFinalLoader, setShowFinalLoader] = useState(false);

  useEffect(() => {
    if (showFinalLoader) return;

    const interval = setInterval(() => {
      setTasks((prevTasks) => {
        const newTasks = prevTasks.map(t => ({ ...t }));
        const currentTaskIndex = newTasks.findIndex((t) => t.progress < 100);

        if (currentTaskIndex !== -1) {
          const increment = Math.floor(Math.random() * 15) + 5;
          newTasks[currentTaskIndex].progress = Math.min(newTasks[currentTaskIndex].progress + increment, 100);
        } else {
          clearInterval(interval);
          setTimeout(() => setShowFinalLoader(true), 500);
        }

        return newTasks;
      });
    }, 120); // Чуть ускорил загрузку для динамики

    return () => clearInterval(interval);
  }, [showFinalLoader]);

  useEffect(() => {
    if (showFinalLoader) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000); // Время показа финального кружка до скрытия
      return () => clearTimeout(timer);
    }
  }, [showFinalLoader, onComplete]);

  const totalProgress = Math.round(
    tasks.reduce((sum, task) => sum + task.progress, 0) / tasks.length
  );

  const barWidth = 38; 
  const filledChars = Math.round((totalProgress / 100) * barWidth);
  const progressBarText = `[${'#'.repeat(filledChars)}${'.'.repeat(Math.max(0, barWidth - filledChars))}]`;

  const activeTaskIndex = tasks.findIndex((t) => t.progress < 100);

  // Анимация для контейнера (уезжает вверх в конце)
// Обнови этот кусок кода
  const containerVariants = {
    initial: { opacity: 1, y: 0 },
    exit: { 
      y: "-100%", 
      opacity: 0,
      transition: { 
        duration: 0.8, 
        // Добавляем жесткую типизацию кортежа (tuple) вот здесь:
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number] 
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-mono px-4 origin-top"
      variants={containerVariants}
      initial="initial"
      exit="exit"
    >
      <AnimatePresence mode="wait">
        {!showFinalLoader ? (
          <motion.div 
            key="terminal"
            className="w-full max-w-lg flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
          >
            {/* Анимация появления логотипа */}
            <motion.pre 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-[0.5rem] sm:text-[0.6rem] md:text-xs leading-none mb-10 font-bold text-center"
            >
              {asciiLogo}
            </motion.pre>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-zinc-500 mb-8 text-sm self-start w-full animate-pulse"
            >
              Starting system...
            </motion.div>

            <div className="space-y-3 w-full mb-10 text-sm md:text-base">
              {tasks.map((task, index) => {
                const isCompleted = task.progress === 100;
                const isPending = activeTaskIndex !== -1 && index > activeTaskIndex;

                
                return (
                  // Каждая строка плавно выезжает слева
                  <motion.div 
                    key={task.id} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }} // Небольшая задержка для каждой следующей строки
                    className={`flex justify-between items-center ${isPending ? 'text-zinc-700' : 'text-zinc-300'}`}
                  >
                    <span>{task.name}</span>
                    <span className={`font-bold ${isCompleted ? 'text-green-400' : (isPending ? 'text-zinc-800' : 'text-white')}`}>
                      {isCompleted ? '[OK]' : `[${task.progress.toString().padStart(3, ' ')}%]`}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Прогресс бар */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-full flex items-center gap-4 text-zinc-300 text-sm md:text-base border-t border-zinc-800 pt-6"
            >
              <div className="flex-1 text-white tracking-widest whitespace-pre overflow-hidden">
                {progressBarText}
              </div>
              <span className="tabular-nums w-12 text-right">{totalProgress}%</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="loader"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 border-4 border-zinc-800 border-t-purple-500 rounded-full animate-spin" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, repeat: Infinity, repeatType: "reverse", duration: 1 }}
              className="text-zinc-500 text-xs tracking-widest uppercase"
            >
              System Ready
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;