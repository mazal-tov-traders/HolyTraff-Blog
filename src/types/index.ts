// Общие типы для приложения

// Реэкспорт типов из других модулей для удобства импорта
export * from './navigation';
export * from './services';
export * from './slider';
export * from './events';

// Типы для компонентов
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}
