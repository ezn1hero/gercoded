import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader'; // Исправил опечатку тут

function App() {
  // Состояние, которое следит за тем, идет ли загрузка
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-50">
      {/* Обертка для анимации исчезновения прелоадера */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Основной контент сайта показываем только когда isLoading станет false */}
      {!isLoading && (
        <>
          <Header />
          <main>
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;