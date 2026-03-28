export default function SocialLinks() {
  const links = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/ezn1hero', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C4.2 2.7 3 3.1 3 3.1a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 1.5 12c0 4.8 3 6.2 6 6.5-.8.8-1 2-1 3.2v4"></path>
          <path d="M9 18c-4.5 1.6-5-2-7-2"></path>
        </svg>
      )
    },
    { 
      name: 'Telegram: @gerdacod', 
      url: 'https://t.me/gerdacod', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
        </svg>
      )
    },
    { 
      name: 'Discord: gerdapeek', 
      url: '#', // Discord не имеет прямой веб-ссылки на профиль, оставляем как текст
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.5c3.5-1 5.5-1 9 0"/><path d="M7 16.5c-2.9.5-4 2.5-4 2.5l1.5-1.5M17 16.5c2.9.5 4 2.5 4 2.5l-1.5-1.5"/><path d="M15.5 17c0 1 1.5 3 2 3 .5 0 2.5-2 2.5-2.5V11c0-2-1.5-4-3-4H7C5.5 7 4 9 4 11v6.5c0 .5 2 2.5 2.5 2.5.5 0 2-2 2-3"/>
        </svg>
      )
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {links.map((link) => (
        <a 
          key={link.name}
          href={link.url}
          target={link.url !== '#' ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          {link.icon}
          <span className="font-medium text-sm">{link.name}</span>
        </a>
      ))}
    </div>
  );
}