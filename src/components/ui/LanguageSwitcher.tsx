import React from 'react';
import { useTranslation } from '../../i18n';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
}) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className={`language-switcher ${className}`}>
      <button
        className={`language-switcher__button ${
          currentLanguage === 'uk' ? 'language-switcher__button--active' : ''
        }`}
        onClick={() => changeLanguage('uk')}
        aria-label={t('language.ukrainian')}
      >
        UA
      </button>
      <span className='language-switcher__separator'>|</span>
      <button
        className={`language-switcher__button ${
          currentLanguage === 'en' ? 'language-switcher__button--active' : ''
        }`}
        onClick={() => changeLanguage('en')}
        aria-label={t('language.english')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
