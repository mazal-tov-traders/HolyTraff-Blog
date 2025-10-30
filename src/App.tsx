import { ErrorBoundary, MobileMenu } from '@/components/common';
import { AboutSection, EventsCalendarSection, Footer, Header, Hero, NewsSection, PartnersSection, ServicesSectionInstagram, ServicesSectionMarket, ServicesSectionYouTube } from '@/components/layout';
import { RunningLine } from '@/components/ui';
// import type { Event } from '@/types/events';
import useEvents from '@/hooks/useEvents';
import { useState } from 'react';
import { useTranslation } from './i18n';

function App() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Источник данных через хук с нормализацией дат
  const { events } = useEvents();

  const navItems = [
    { label: t('nav.services'), href: '#services-youtube' },
    { label: t('nav.holyTraffMarket'), href: '#' },
    { label: t('nav.partners'), href: '#partners' },
    { label: t('nav.calendar'), href: '#calendar' },
    { label: t('nav.contacts'), href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className='app'>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={toggleMobileMenu}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={navItems}
        onItemClick={closeMobileMenu}
      />

      <main className='app-main'>
        <Hero />
        <NewsSection />
        <RunningLine
          speed={3}
          count={20}
          className="footer__running-line"
        />
        <ServicesSectionYouTube />
        <RunningLine
          speed={3}
          count={20}
          className="footer__running-line"
        />
        <ServicesSectionInstagram />
        <ServicesSectionMarket />
        <PartnersSection />
        <AboutSection />
        <ErrorBoundary>
          <EventsCalendarSection events={events} />
        </ErrorBoundary>

      </main>

      <Footer />
    </div>
  );
}

export default App;
