import React from 'react';
import { LanguageSwitcher } from '@/components/ui';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface NavigationProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  items,
  className = '',
  onItemClick,
}) => {
  return (
    <nav className={`nav ${className}`}>
      <ul className='nav__list'>
        {items.map(item => (
          <li key={item.href} className='nav__item'>
            <a
              href={item.href}
              className={`nav__link ${item.isActive ? 'nav__link--active' : ''}`}
              onClick={onItemClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <LanguageSwitcher className='header__language-switcher' />
    </nav>
  );
};

export default Navigation;
