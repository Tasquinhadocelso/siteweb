import React from 'react';
import { Calendar } from 'lucide-react';

interface ReservationButtonProps {
  language: 'pt' | 'en';
}

export default function ReservationButton({ language }: ReservationButtonProps) {
  return (
    <a
      href="https://reservation.dish.co/widget/hydra-1964a841-c99f-4383-9b9b-e98078eb6683"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-50"
    >
      <Calendar className="w-5 h-5" />
      <span>{language === 'pt' ? 'Reservar' : 'Book a Table'}</span>
    </a>
  );
}