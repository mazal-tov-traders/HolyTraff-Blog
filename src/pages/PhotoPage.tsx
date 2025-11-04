import { MobileMenu } from '@/components/common';
import { Footer, Header } from '@/components/layout';
import { useState } from 'react';
import { useTranslation } from '@/i18n';
import CollectionPhoto from '@/components/layout/CollectionPhoto';

const PhotoPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('nav.services'), href: '/#services-youtube' },
    { label: t('nav.holyTraffMarket'), href: '/' },
    { label: t('nav.partners'), href: '/#partners' },
    { label: t('nav.calendar'), href: '/#calendar' },
    { label: t('nav.contacts'), href: '/#contact' },
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
        <CollectionPhoto isFullPage={true} />
      </main>

      <Footer />
    </div>
  );
};

export default PhotoPage;

