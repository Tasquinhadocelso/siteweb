import React from 'react';
import { ChevronDown, Calendar } from 'lucide-react';

interface HeroProps {
  language: 'pt' | 'en';
}

export default function Hero({ language }: HeroProps) {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[calc(100vh-122px)]">
      {/* Background Image with subtle zoom animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-subtle-zoom"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/pw/AP1GczPPPncAq6c-_iegwmMo8OGwLYd1XYCYaaj-5BzbcwoxazHezOeUBGDhy3zI2K3P1-x-FejmUBuEZW02KoXhrG9GSdRHaxWcSUgpFflQNrpKm94bK-DM4Mbi_yuEbwsTYrEg4XOmabDJM8ZBvalrqlq6=w2939-h1519-s-no-gm")',
          backgroundPosition: 'center 40%'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-sm md:text-base uppercase tracking-wider mb-4 animate-fade-in">
          {language === 'pt' ? 'Restaurante Tradicional' : 'Traditional Restaurant'}
        </h1>
        <p className="text-4xl md:text-7xl font-serif max-w-4xl leading-tight mb-8 md:mb-12 animate-slide-up">
          {language === 'pt' 
            ? 'Quem entra nesta Casa, entra na sua Casa'
            : 'Those who enter this House, enter their Home'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up w-full max-w-md mx-auto">
          <a
            href="https://reservation.dish.co/widget/hydra-1964a841-c99f-4383-9b9b-e98078eb6683"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>{language === 'pt' ? 'Reservar Mesa' : 'Book a Table'}</span>
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 text-center"
          >
            {language === 'pt' ? 'Ver Menu' : 'View Menu'}
          </a>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-10 animate-bounce cursor-pointer hover:text-amber-300 transition-colors"
          aria-label={language === 'pt' ? 'Rolar para a próxima seção' : 'Scroll to next section'}
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}