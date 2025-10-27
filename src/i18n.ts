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
      loading: 'Loading...',
    },
    hero: {
      title: 'We Holy Traff',
      description: '- independent media covering events in the Igaming sphere',
      buttonMarket: 'Holy traff Market',
      buttonPartner: 'Become a partner',
    },
    slider: {
      holyApps: {
        description: 'Meet new opportunities. Buy and earn.'
      },
      bashArbitrage: {
        description: 'What you need to know about the most anticipated conference in Lviv. Who might be interested in this conference: Webmasters; Media buyers; Direct advertisers; Other representatives of affiliate marketing'
      },
      holyStudioShow: {
        description: 'Creatives the world SHOULD NOT have seen! Did you think you\'d seen it all? Did you think it couldn\'t get any worse? Then we definitely have something to (un)pleasantly surprise you with.'
      },
      holyTraffBlog: {
        description: 'Latest news and insights from the Igaming industry. Stay updated with HolyTraff Blog for exclusive content and expert analysis.'
      }
    },
    news: {
      holyApps: {
        description: 'Meet new opportunities. Buy and earn.'
      },
      bashArbitrage: {
        description: 'What you need to know about the most anticipated conference in Lviv. Who might be interested in this conference: Webmasters; Media buyers; Direct advertisers; Other representatives of affiliate marketing'
      },
      holyStudioShow: {
        description: 'Creatives the world SHOULD NOT have seen! Did you think you\'d seen it all? Did you think it couldn\'t get any worse? Then we definitely have something to (un)pleasantly surprise you with.'
      },
      holyTraffBlog: {
        description: 'Latest news and insights from the Igaming industry. Stay updated with HolyTraff Blog for exclusive content and expert analysis.'
      }
    },
    partners: {
      subtitle: "OUR PARTNERS"
    },
    about: {
      youtubeSubscribers: '2.2+ THOUSAND',
      instagramSubscribers: '48.5+ THOUSAND',
      description: 'is an expert platform on traffic arbitrage and the iGaming industry, covering key market events: conferences, business meetings and networking events. We talk about key players, affiliate programs, affiliates and brands that drive industry development.',
      benefitsTitle: 'WHAT YOU GET WITH US?',
      benefitsText: 'Brands, affiliate programs, platforms and services – expanding media presence, increasing the customer base and effective product positioning in the market. Affiliates – access to real successful company cases, exclusive terms from top affiliate programs and new opportunities for business scaling.'
    },
    footer: {
      contactUs1: 'Contact',
      contactUs2: 'us',
      socialMedia: 'Social Media',
      navigation: 'Navigation',
      privacy: 'Privacy',
      policy: 'Policy',
      faq: 'FAQ',
      helpCenter: 'Help Center',
      about: 'About',
      copyright: 'HOLYTRAFF 2025. All rights reserved.',
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
      loading: 'Завантаження...',
    },
    hero: {
      title: 'Ми Holy Traff',
      description: '- незалежне медіа, яке висвітлює події у сфері Igaming',
      buttonMarket: 'Holy traff Market',
      buttonPartner: 'Стати партнером',
    },
    slider: {
      holyApps: {
        description: 'Зустрічайте нові можливості. Придбайте та заробляйте.'
      },
      bashArbitrage: {
        description: 'Що треба знати про найочікуванішу конференцію у Львові. Кому може бути цікава ця конференція: Вебмайстри; Медіабаєри; Прямі рекламодавці; Інші представники аффілейт-маркетингу'
      },
      holyStudioShow: {
        description: 'Креативи, які світ НЕ ПОВИНЕН був побачити! Ви думали, що бачили все? Думали, що гірше не може бути? Тоді у нас точно є чим вас (не)приємно здивувати.'
      },
      holyTraffBlog: {
        description: 'Останні новини та інсайти з індустрії Igaming. Будьте в курсі з HolyTraff Blog для ексклюзивного контенту та експертного аналізу.'
      }
    },
    news: {
      holyApps: {
        description: 'Зустрічайте нові можливості. Придбайте та заробляйте.'
      },
      bashArbitrage: {
        description: 'Що треба знати про найочікуванішу конференцію у Львові. Кому може бути цікава ця конференція: Вебмайстри; Медіабаєри; Прямі рекламодавці; Інші представники аффілейт-маркетингу'
      },
      holyStudioShow: {
        description: 'Креативи, які світ НЕ ПОВИНЕН був побачити! Ви думали, що бачили все? Думали, що гірше не може бути? Тоді у нас точно є чим вас (не)приємно здивувати.'
      },
      holyTraffBlog: {
        description: 'Останні новини та інсайти з індустрії Igaming. Будьте в курсі з HolyTraff Blog для ексклюзивного контенту та експертного аналізу.'
      }
    },
    partners: {
      subtitle: "Нашi партнери"
    },
    about: {
      youtubeSubscribers: '2.2+ ТИСЯЧ',
      instagramSubscribers: '48.5+ ТИСЯЧ',
      description: 'єкспертна платформа про арбітраж трафіку та індустрію iGaming, що висвітлює ключові події ринку: конференції, бізнес-мітинги та нетворкінг-заходи. Ми розповідаємо про провідних гравців, партнерські програми, аффіліатів і бренди, які визначають розвиток галузі.',
      benefitsTitle: 'ЩО ВИ ОТРИМАЄТЕ З НАМИ?',
      benefitsText: 'Бренди, партнерські програми, платформи та сервіси – розширення медійної присутності, збільшення клієнтської бази та ефективне позиціонування продуктів на ринку. Аффіліати – доступ до реальних кейсів успішних компаній, ексклюзивні умови від топових партнерських програм і нові можливості для масштабування бізнесу.'
    },
    footer: {
      contactUs1: 'звʼязатись',
      contactUs2: 'з нами',
      socialMedia: 'Соціальні мережі',
      navigation: 'Навігація',
      privacy: 'Конфіденційність',
      policy: 'Політика',
      faq: 'Питання',
      helpCenter: 'Центр допомоги',
      about: 'Про нас',
      copyright: 'HOLYTRAFF 2025. Всі права захищені.',
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
