import { MobileMenu } from '@/components/common';
import { Footer, Header, Hero, NewsSection, PartnersSection, AboutSection } from '@/components/layout';
import { RunningLine } from '@/components/ui';
import { useState } from 'react';
import { useTranslation } from './i18n';

function App() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('nav.services'), href: '#services' },
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
        <PartnersSection />
        <AboutSection />
        <RunningLine
          speed={3}
          count={20}
          className="footer__running-line"
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
