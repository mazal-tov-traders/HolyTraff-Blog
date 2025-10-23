import { useState } from 'react';
import { useTranslation } from './i18n';
import { Header, Footer } from '@/components/layout';
import { MobileMenu } from '@/components/common';

function App() {
  const { t, i18n } = useTranslation();
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
        <div className='container'>
          <div className='hero-section'>
            <h1>{t('common.welcome')}</h1>
            <p>React + Vite + TypeScript + SCSS + i18next</p>
            <p className='language-info'>
              Текущий язык: <strong>{i18n.language}</strong> | Язык браузера:{' '}
              <strong>{navigator.language}</strong>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
