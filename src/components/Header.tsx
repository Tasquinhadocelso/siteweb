import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
}

export default function Header({ language, setLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { href: '#story', label: { pt: 'Nossa História', en: 'Our Story' } },
    { href: '#menu', label: { pt: 'Nossa Carta', en: 'Our Menu' } },
    { href: '#gallery', label: { pt: 'Galeria', en: 'Gallery' } },
    { href: '#contact', label: { pt: 'Contacto', en: 'Contact' } },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-sm shadow-sm' 
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Zone gauche */}
          <div className="w-12 md:w-48">
            {/* Menu mobile (visible uniquement sur mobile) */}
            <button
              className="md:hidden text-gray-900 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Logo centré */}
          <div className="flex justify-center flex-1 md:flex-none">
            <a href="/" className="block">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczOQopQ4f_oK_DeXhG8kpViFHcV8bwA4TlfJYFpFiYb1poRwZPHNQjylJCkJJIKrMQVf1eFWbaEbCo_HdIMg0yvcAUzAkQMqsE6AyvT8dDTL06tfsJfJ2oIkSsOHgFjeYqTiHjiwzt4NOgxRgGEC5HbI=w698-h357-s-no-gm"
                alt="Solar dos Presuntos"
                className="h-14 md:h-24 w-auto object-contain"
              />
            </a>
          </div>

          {/* Zone droite */}
          <div className="w-12 md:w-48 flex items-center justify-end space-x-4">
            {/* Menu desktop (visible uniquement sur desktop) */}
            <div 
              className="hidden md:block relative group"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <button
                className="text-gray-900 hover:text-primary transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>

              {/* Menu déroulant desktop */}
              <div 
                className={`absolute top-full right-0 w-64 bg-white border border-gray-100 shadow-lg rounded-md transition-all duration-300 ${
                  isMenuOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <nav className="py-2">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {item.label[language]}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <button 
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </nav>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg">
            <nav className="container mx-auto px-6 py-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-900 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label[language]}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}