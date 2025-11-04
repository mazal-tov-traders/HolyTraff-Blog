import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  href?: string;
  src?: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  variant?: 'image' | 'text';
}

const Logo: React.FC<LogoProps> = ({
  href,
  src = '/images/logo.webp',
  alt = 'Logo',
  className = '',
  onClick,
}) => {
  const logoContent = <img src={src} alt={alt} className='logo__image' />;

  // Всегда ведет на главную страницу
  if (!href) {
    return (
      <Link 
        to="/"
        onClick={onClick}
        className={`logo ${className}`}
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <a 
      href={href} 
      onClick={onClick} 
      className={`logo ${className}`}
    >
      {logoContent}
    </a>
  );
};

export default Logo;
