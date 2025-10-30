import type { Event } from '@/types/events';

export const events: Event[] = [
  { id: 1, name: 'SIGMA', country: 'Іспанія', location: 'Барселона, Іспанія', date: '2025-04-14', logo: '/images/events/sigma.webp' },
  { id: 2, name: 'IGB', country: 'Україна', location: 'Київ, Україна', date: '2025-04-20', logo: 'IGB' },
  { id: 3, name: 'CONVERSION CONF', country: 'Англія', location: 'Лондон, Англія', date: '2025-04-25', logo: 'CONVERSION CONF' },
  { id: 4, name: 'SIGMA', country: 'Польща', location: 'Варшава, Польща', date: '2025-05-10', logo: '/images/events/sigma.webp' },
  { id: 5, name: 'IGB', country: 'Іспанія', location: 'Мадрид, Іспанія', date: '2025-05-15', logo: 'IGB' },
  { id: 6, name: 'CONVERSION CONF', country: 'Україна', location: 'Львів, Україна', date: '2025-05-22', logo: 'CONVERSION CONF' },
];

export default events;

