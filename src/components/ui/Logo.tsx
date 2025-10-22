import React from 'react';

interface LogoProps {
  href?: string;
  src?: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  variant?: 'image' | 'text';
}

const Logo: React.FC<LogoProps> = ({
  href = '#home',
  src = '/images/logo.webp',
  alt = 'Logo',
  className = '',
  onClick,
}) => {
  const logoContent = <img src={src} alt={alt} className='logo__image' />;

  return (
    <a href={href} onClick={onClick} className={`logo ${className}`}>
      {logoContent}
    </a>
  );
};

export default Logo;
