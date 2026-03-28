import { motion } from 'framer-motion';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
  };

  const contacts = [
    {
      name: 'Telegram',
      handle: '@gerdacod',
      url: 'https://t.me/gerdacod',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-4">
          <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
        </svg>
      )
    },
    {
      name: 'Discord',
      handle: 'gerdapeek',
      url: 'https://discordapp.com/users/gerdapeek',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500 mb-4">
          <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7 16.5c-2.9.5-4 2.5-4 2.5l1.5-1.5M17 16.5c2.9.5 4 2.5 4 2.5l-1.5-1.5"/><path d="M15.5 17c0 1 1.5 3 2 3 .5 0 2.5-2 2.5-2.5V11c0-2-1.5-4-3-4H7C5.5 7 4 9 4 11v6.5c0 .5 2 2.5 2.5 2.5.5 0 2-2 2-3"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      handle: 'ezn1hero',
      url: 'https://github.com/ezn1hero',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mb-4">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C4.2 2.7 3 3.1 3 3.1a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 1.5 12c0 4.8 3 6.2 6 6.5-.8.8-1 2-1 3.2v4"></path><path d="M9 18c-4.5 1.6-5-2-7-2"></path>
        </svg>
      )
    }
  ];

  return (
    <motion.section
      id="contact"
      className="py-24 bg-black border-t border-white/5 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Looking for a backend developer to automate your processes? Let's discuss your project. I specialize in Python-based solutions, Selenium scrapers, and API integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              // Убрали whileHover отсюда и перенесли всё в className ниже
              className="flex flex-col items-center p-8 bg-black border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{contact.name}</h3>
              <p className="text-gray-500 text-sm font-mono">{contact.handle}</p>
            </motion.a>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center font-mono text-sm text-gray-600 flex items-center justify-center gap-2">
          <span>{'>'}</span>
          <span>Waiting for your ping...</span>
          <motion.span
            className="w-2 h-4 bg-gray-600 inline-block"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default ContactSection;