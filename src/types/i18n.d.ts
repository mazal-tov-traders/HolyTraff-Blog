// Типы для переводов
declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: {
        nav: {
          services: string;
          holyTraffMarket: string;
          partners: string;
          calendar: string;
          contacts: string;
        };
        header: {
          logo: string;
        };
        language: {
          switch: string;
          english: string;
          ukrainian: string;
        };
        common: {
          welcome: string;
          loading: string;
        };
      };
    };
  }
}
