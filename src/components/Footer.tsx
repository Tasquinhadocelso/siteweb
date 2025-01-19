import React from 'react';

interface FooterProps {
  language: 'pt' | 'en';
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white">Tasquinha do Celso</h3>
            <p className="text-sm opacity-80">
              {language === 'pt' 
                ? 'Sabores autênticos da culinária portuguesa no coração de Lisboa.'
                : 'Authentic Portuguese flavors in the heart of Lisbon.'}
            </p>
            <p className="text-sm opacity-80">
              <a href="tel:+351937243060" className="hover:text-amber-300 transition-colors">
                +351 937 243 060
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg text-white mb-4">
              {language === 'pt' ? 'Navegação' : 'Navigation'}
            </h3>
            <ul className="space-y-2">
              {['#carta', '#ementas', '#gracinha'].map((href) => (
                <li key={href}>
                  <a 
                    href={href}
                    className="text-sm hover:text-amber-300 transition-colors"
                  >
                    {href === '#carta' ? (language === 'pt' ? 'Carta' : 'Menu') :
                     href === '#ementas' ? (language === 'pt' ? 'Ementas de Grupo' : 'Group Menus') :
                     'Gracinha'}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs space-y-2 opacity-80">
              <p>© 2024 Tasquinha do Celso</p>
              <a href="#" className="hover:text-amber-300 transition-colors block">
                {language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors block">
                {language === 'pt' ? 'Termos de Serviço' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm opacity-80">
          Made with Passion by <a 
            href="https://www.gosite-web.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-300 hover:text-amber-400 transition-colors"
          >
            GOSITE-WEB
          </a>
        </div>
      </div>
    </footer>
  );
}