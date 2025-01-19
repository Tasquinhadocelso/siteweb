import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationButton from './components/ReservationButton';
import SectionDivider from './components/SectionDivider';

function App() {
  const [language, setLanguage] = React.useState<'pt' | 'en'>('pt');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: Stop observing after animation
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
    revealElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <SectionDivider />
      <Story language={language} />
      <SectionDivider />
      <Menu language={language} />
      <SectionDivider />
      <Gallery language={language} />
      <SectionDivider />
      <Contact language={language} />
      <Footer language={language} />
      <ReservationButton language={language} />
    </div>
  );
}

export default App;