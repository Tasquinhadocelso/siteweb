import { MenuItem, NavItem, Testimonial } from '../types';

export const navigation: NavItem[] = [
  { label: { pt: 'Início', en: 'Home' }, href: '#home' },
  { label: { pt: 'Nossa História', en: 'Our Story' }, href: '#story' },
  { label: { pt: 'Ementa', en: 'Menu' }, href: '#menu' },
  { label: { pt: 'Galeria', en: 'Gallery' }, href: '#gallery' },
  { label: { pt: 'Contacto', en: 'Contact' }, href: '#contact' },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Maria Santos',
    text: {
      pt: 'A melhor comida portuguesa tradicional que já experimentei em Lisboa. O bacalhau à Brás é simplesmente divinal!',
      en: 'The best traditional Portuguese food I\'ve ever tried in Lisbon. The Bacalhau à Brás is simply divine!'
    },
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5
  },
  {
    name: 'John Smith',
    text: {
      pt: 'Uma experiência autêntica portuguesa. O Chef Celso é um verdadeiro mestre da culinária tradicional.',
      en: 'An authentic Portuguese experience. Chef Celso is a true master of traditional cuisine.'
    },
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    rating: 5
  }
];

export const translations = {
  hero: {
    title: {
      pt: 'Sabores Autênticos de Portugal',
      en: 'Authentic Portuguese Flavors'
    },
    subtitle: {
      pt: 'Uma experiência gastronômica única no coração de Lisboa',
      en: 'A unique culinary experience in the heart of Lisbon'
    }
  },
  story: {
    title: {
      pt: 'Nossa História',
      en: 'Our Story'
    },
    content: {
      pt: 'Há mais de 30 anos, a Tasquinha do Celso tem sido um símbolo da autêntica cozinha portuguesa em Lisboa. Nossa jornada começou com a paixão do Chef Celso pela culinária tradicional e seu desejo de compartilhar os sabores genuínos de Portugal.',
      en: 'For over 30 years, Tasquinha do Celso has been a symbol of authentic Portuguese cuisine in Lisbon. Our journey began with Chef Celso\'s passion for traditional cooking and his desire to share the genuine flavors of Portugal.'
    }
  },
  contact: {
    address: 'Rua das Flores 123, 1200-195 Lisboa',
    phone: '+351 21 123 4567',
    email: 'info@tasquinhadocelso.pt',
    hours: {
      pt: 'Terça a Domingo: 12h00 - 23h00',
      en: 'Tuesday to Sunday: 12:00 PM - 11:00 PM'
    }
  },
  cta: {
    reservation: {
      pt: 'Fazer Reserva',
      en: 'Make Reservation'
    },
    menu: {
      pt: 'Ver Ementa',
      en: 'View Menu'
    }
  }
};