import { useEffect, useMemo, useState } from 'react';
import type { Event } from '@/types/events';
import eventsStatic from '@/data/events';

function normalizeDateString(date?: string): string | undefined {
  if (!date) return undefined;
  if (date.includes('-')) return date; // already ISO-like YYYY-MM-DD
  // expect DD.MM.YYYY -> YYYY-MM-DD
  const parts = date.split('.');
  if (parts.length === 3) {
    const [dd, mm, yyyy] = parts;
    if (yyyy && mm && dd) {
      return `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
    }
  }
  return date;
}

export interface UseEventsResult {
  events: Event[];
  loading: boolean;
  error: string | null;
}

// Mock loader: imitates async fetch and normalizes dates once
export function useEvents(): UseEventsResult {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // Simulate network latency
    const timer = setTimeout(() => {
      try {
        const normalized: Event[] = eventsStatic.map((e) => {
          const normalizedDate = normalizeDateString(e.date);
          if (normalizedDate) {
            return { ...e, date: normalizedDate } as Event;
          }
          const { date, ...rest } = e as Event;
          return { ...rest } as Event;
        });
        if (isMounted) {
          setEvents(normalized);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load events');
          setLoading(false);
        }
      }
    }, 50);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  // Stable memo to avoid re-renders if not changed
  const memoized = useMemo(() => events, [events]);

  return { events: memoized, loading, error };
}

export default useEvents;

