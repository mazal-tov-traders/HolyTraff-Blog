import React from 'react';
import { useTranslation } from '../../i18n';
import { useScroll } from '@/hooks/useScroll';
import { Logo } from '@/components/ui';
import { Navigation } from '@/components/common';
import MobileMenuSVG from '@/assets/MobileMenuSVG';
import CloseButtonSVG from '@/assets/CloseButtonSVG';

interface HeaderProps {
  className?: string;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  className = '',
  isMobileMenuOpen,
  onToggleMobileMenu,
}) => {
  const { isScrolled } = useScroll();
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.holyTraffMarket'), href: '#' },
    { label: t('nav.partners'), href: '#partners' },
    { label: t('nav.calendar'), href: '#calendar' },
    { label: t('nav.contacts'), href: '#contact' },
  ];

  return (
    <header
      className={`header ${isMobileMenuOpen ? 'header--mobile-menu-open' : ''} ${isScrolled ? 'header--scrolled' : ''} ${className}`}
    >
      <div className='header__container page-width'>
        <Logo className='header__logo' />

        <Navigation items={navItems} className='header__nav' />

        <div className='header__controls'>
          <button
            className='header__mobile-toggle'
            onClick={onToggleMobileMenu}
            aria-label={
              isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'
            }
          >
            {isMobileMenuOpen ? <CloseButtonSVG /> : <MobileMenuSVG />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
