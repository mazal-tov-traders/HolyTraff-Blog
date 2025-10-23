import React from 'react';

// Простая система переводов без внешних зависимостей
// Логика определения языка:
// 1. Если пользователь уже выбирал язык - используем сохраненный выбор
// 2. Если браузер на английском - показываем английский интерфейс
// 3. Для всех остальных языков (украинский, русский, немецкий и т.д.) - показываем украинский интерфейс
interface Translations {
  [key: string]: string | Translations;
}

const translations: Record<string, Translations> = {
  en: {
    nav: {
      services: 'Services',
      holyTraffMarket: 'Holy Traff Market',
      partners: 'Our Partners',
      calendar: 'Calendar',
      contacts: 'Contacts',
    },
    header: {
      logo: 'Holy Site',
    },
    language: {
      switch: 'Switch Language',
      english: 'English',
      ukrainian: 'Українська',
    },
    common: {
      welcome: 'Welcome to Holy Site',
      loading: 'Loading...',
    },
  },
  uk: {
    nav: {
      services: 'Послуги',
      holyTraffMarket: 'Holy traff Market',
      partners: 'наші партнери',
      calendar: 'календар',
      contacts: 'контакти',
    },
    header: {
      logo: 'Holy Site',
    },
    language: {
      switch: 'Змінити мову',
      english: 'English',
      ukrainian: 'Українська',
    },
    common: {
      welcome: 'Ласкаво просимо на Holy Site',
      loading: 'Завантаження...',
    },
  },
};

class I18n {
  private currentLanguage: string = 'uk';

  constructor() {
    // Загружаем язык из localStorage или определяем по браузеру
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      this.currentLanguage = savedLanguage;
    } else {
      const browserLanguage = navigator.language.split('-')[0];

      // Если браузер на английском - используем английский
      if (browserLanguage === 'en') {
        this.currentLanguage = 'en';
      }
      // Для всех остальных языков (включая украинский) - используем украинский по умолчанию
      else {
        this.currentLanguage = 'uk';
      }
    }
  }

  t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[this.currentLanguage];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback на английский
        value = translations['en'];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = (value as Record<string, unknown>)[fallbackKey];
          } else {
            return key; // Возвращаем ключ, если перевод не найден
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  }

  changeLanguage(language: string): void {
    if (translations[language]) {
      this.currentLanguage = language;
      localStorage.setItem('language', language);
      // Уведомляем компоненты об изменении языка
      window.dispatchEvent(
        new CustomEvent('languageChanged', { detail: language })
      );
    }
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}

export const i18n = new I18n();

// Хук для использования переводов в React компонентах
export const useTranslation = () => {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  React.useEffect(() => {
    const handleLanguageChange = () => {
      forceUpdate();
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    return () =>
      window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  return {
    t: i18n.t.bind(i18n),
    i18n: {
      changeLanguage: i18n.changeLanguage.bind(i18n),
      language: i18n.getCurrentLanguage(),
    },
  };
};
