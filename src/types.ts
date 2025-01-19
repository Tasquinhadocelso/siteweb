export interface NavItem {
  label: {
    pt: string;
    en: string;
  };
  href: string;
}

export interface Testimonial {
  name: string;
  text: {
    pt: string;
    en: string;
  };
  image: string;
  rating: number;
}

export interface MenuItem {
  name: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  price: number;
  category: string;
}

export type Language = 'pt' | 'en';