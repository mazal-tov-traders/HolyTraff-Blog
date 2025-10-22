import React from 'react';
import Navigation from './Navigation';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  onItemClick: () => void;
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  items,
  onItemClick,
  className = '',
}) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''} ${className}`}
    >
      <Navigation
        items={items}
        className='mobile-menu__nav'
        onItemClick={onItemClick}
      />
    </div>
  );
};

export default MobileMenu;
