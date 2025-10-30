import { CalendarGreenSVG, CalendarWhiteSVG, DownArrowSVG, GeoGreenSVG, LittleLeftArrowSVG, LittleRightArrow } from '@/assets';
import { useTranslation } from '@/i18n';
import type { Event } from '@/types/events';
import { eachDayOfInterval, endOfMonth, format, isToday, startOfMonth } from 'date-fns';
import { uk } from 'date-fns/locale';
import React, { useEffect, useMemo, useRef, useState } from 'react';

interface EventsCalendarSectionProps {
    events: Event[];
}

const EventsCalendarSection: React.FC<EventsCalendarSectionProps> = ({ events = [] }) => {
    const [nameFilter, setNameFilter] = useState('');
    const [countryFilter, setCountryFilter] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date(2025, 3)); // Квітень 2025
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const calendarRef = useRef<HTMLDivElement | null>(null);

    const countries = useMemo(() =>
        Array.from(new Set(events.map(e => e.country).filter(Boolean))).sort(),
        [events]
    );

    const names = useMemo(() =>
        Array.from(new Set(events.map(e => e.name).filter(Boolean))).sort(),
        [events]
    );

    // Реактивная фильтрация через useMemo
    const filteredEvents = useMemo(() => {
        let filtered = [...events];

        // Фильтр по названию
        if (nameFilter) {
            filtered = filtered.filter(e => e.name === nameFilter);
        }

        // Фильтр по стране
        if (countryFilter) {
            filtered = filtered.filter(e => e.country === countryFilter);
        }

        // Фильтр по дате
        if (selectedDate) {
            const dateStr = format(selectedDate, 'yyyy-MM-dd');
            filtered = filtered.filter(e => {
                if (!e.date) return false;
                // Поддержка разных форматов даты
                const eventDate = e.date.includes('-')
                    ? e.date
                    : e.date.split('.').reverse().join('-');
                return eventDate === dateStr;
            });
        }

        return filtered;
    }, [events, nameFilter, countryFilter, selectedDate]);

    // Закрытие календаря при клике вне его
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
                setIsCalendarOpen(false);
            }
        };

        if (isCalendarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCalendarOpen]);

    const handleDateSelect = (day: Date) => {
        setSelectedDate(day);
        setIsCalendarOpen(false); // Закрываем календарь после выбора
    };

    const handleClearDate = () => {
        setSelectedDate(null);
    };

    // removed reset handler (no actions UI)

    // removed hasActiveFilters as actions block is removed

    const { t } = useTranslation();

    return (
        <section className="events-calendar-section" id="calendar">
            <div className="events-calendar-section__container page-width">
                <h2 className="events-calendar-section__title custom-heading-primary">CALENDAR</h2>
                <p className="events-calendar-section__subtitle custom-heading-secondary">{t('calendar.subtitle')}</p>
            </div>

            <Navbar
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
                countryFilter={countryFilter}
                setCountryFilter={setCountryFilter}
                names={names}
                countries={countries}
                selectedDate={selectedDate}
                isCalendarOpen={isCalendarOpen}
                currentMonth={currentMonth}
                setCurrentMonth={setCurrentMonth}
                onDateSelect={handleDateSelect}
                onClearDate={handleClearDate}
                onCalendarToggle={() => setIsCalendarOpen(!isCalendarOpen)}
                calendarRef={calendarRef}
                t={t}
            />

            <EventList events={filteredEvents} t={t} />
        </section>
    );
};

// === NAVBAR COMPONENT ===
interface NavbarProps {
    nameFilter: string;
    setNameFilter: React.Dispatch<React.SetStateAction<string>>;
    countryFilter: string;
    setCountryFilter: React.Dispatch<React.SetStateAction<string>>;
    names: string[];
    countries: string[];
    selectedDate: Date | null;
    isCalendarOpen: boolean;
    currentMonth: Date;
    setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
    onDateSelect: (day: Date) => void;
    onClearDate: () => void;
    onCalendarToggle: () => void;
    calendarRef: React.RefObject<HTMLDivElement | null>;
    t: (key: string) => string;
}

const Navbar: React.FC<NavbarProps> = ({
    nameFilter,
    setNameFilter,
    countryFilter,
    setCountryFilter,
    names,
    countries,
    selectedDate,
    isCalendarOpen,
    currentMonth,
    setCurrentMonth,
    onDateSelect,
    onClearDate,
    onCalendarToggle,
    calendarRef,
    t,
}) => {
    const [isNameOpen, setIsNameOpen] = useState(false);
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [nameHighlightIndex, setNameHighlightIndex] = useState(0);
    const [countryHighlightIndex, setCountryHighlightIndex] = useState(0);
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });
    const firstDayOfWeek = monthStart.getDay();
    const adjustedFirstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    const prevMonth = () => setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
    const nextMonth = () => setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));

    return (
        <div className="events-calendar-section__navbar">
            <div className="events-calendar-section__container page-width">
                <div className="events-calendar-section__filters">
                    {/* Фильтр по названию (кастомный select) */}
                    <div className="events-calendar-section__filter-wrapper">
                        <button
                            type="button"
                            className="events-calendar-section__select"
                            aria-haspopup="listbox"
                            aria-expanded={isNameOpen}
                            onClick={() => {
                                setIsNameOpen((v) => !v);
                                if (!isNameOpen) {
                                    const currentIndex = Math.max(0, names.indexOf(nameFilter) as number);
                                    setNameHighlightIndex(currentIndex);
                                }
                            }}
                            onKeyDown={(e) => {
                                if (!isNameOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ')) {
                                    e.preventDefault();
                                    setIsNameOpen(true);
                                    const currentIndex = Math.max(0, names.indexOf(nameFilter) as number);
                                    setNameHighlightIndex(currentIndex);
                                    return;
                                }
                                if (e.key === 'Escape') setIsNameOpen(false);
                                if (!isNameOpen) return;
                                if (e.key === 'ArrowDown') {
                                    e.preventDefault();
                                    setNameHighlightIndex((i) => Math.min(i + 1, names.length - 1));
                                } else if (e.key === 'ArrowUp') {
                                    e.preventDefault();
                                    setNameHighlightIndex((i) => Math.max(i - 1, 0));
                                } else if (e.key === 'Home') {
                                    e.preventDefault();
                                    setNameHighlightIndex(0);
                                } else if (e.key === 'End') {
                                    e.preventDefault();
                                    setNameHighlightIndex(names.length - 1);
                                } else if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    const value = names[nameHighlightIndex];
                                    if (value) {
                                        setNameFilter(value);
                                        setIsNameOpen(false);
                                    }
                                }
                            }}
                        >
                            {nameFilter || t('calendar.filters.name')}
                        </button>
                        <span
                            className={`events-calendar-section__select-arrow ${isNameOpen ? 'is-open' : ''}`}
                            aria-hidden="true"
                        >
                            <DownArrowSVG />
                        </span>
                        {nameFilter && (
                            <button
                                className="events-calendar-section__clear-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setNameFilter('');
                                }}
                                aria-label="Очистити назву"
                            >
                                ✕
                            </button>
                        )}
                        {isNameOpen && (
                            <ul
                                className="events-calendar-section__custom-list"
                                role="listbox"
                                tabIndex={-1}
                            >
                                {names.map((name, index) => (
                                    <li key={name} role="option">
                                        <button
                                            type="button"
                                            className={`events-calendar-section__custom-option ${nameFilter === name ? 'is-selected' : ''} ${index === nameHighlightIndex ? 'is-focused' : ''}`}
                                            onMouseEnter={() => setNameHighlightIndex(index)}
                                            onClick={() => {
                                                setNameFilter(name);
                                                setIsNameOpen(false);
                                            }}
                                        >
                                            {name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Фильтр по стране */}
                    <div className="events-calendar-section__filter-wrapper">
                        <button
                            type="button"
                            className="events-calendar-section__select"
                            aria-haspopup="listbox"
                            aria-expanded={isCountryOpen}
                            onClick={() => {
                                setIsCountryOpen((v) => !v);
                                if (!isCountryOpen) {
                                    const currentIndex = Math.max(0, countries.indexOf(countryFilter) as number);
                                    setCountryHighlightIndex(currentIndex);
                                }
                            }}
                            onKeyDown={(e) => {
                                if (!isCountryOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ')) {
                                    e.preventDefault();
                                    setIsCountryOpen(true);
                                    const currentIndex = Math.max(0, countries.indexOf(countryFilter) as number);
                                    setCountryHighlightIndex(currentIndex);
                                    return;
                                }
                                if (e.key === 'Escape') setIsCountryOpen(false);
                                if (!isCountryOpen) return;
                                if (e.key === 'ArrowDown') {
                                    e.preventDefault();
                                    setCountryHighlightIndex((i) => Math.min(i + 1, countries.length - 1));
                                } else if (e.key === 'ArrowUp') {
                                    e.preventDefault();
                                    setCountryHighlightIndex((i) => Math.max(i - 1, 0));
                                } else if (e.key === 'Home') {
                                    e.preventDefault();
                                    setCountryHighlightIndex(0);
                                } else if (e.key === 'End') {
                                    e.preventDefault();
                                    setCountryHighlightIndex(countries.length - 1);
                                } else if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    const value = countries[countryHighlightIndex];
                                    if (value) {
                                        setCountryFilter(value);
                                        setIsCountryOpen(false);
                                    }
                                }
                            }}
                        >
                            {countryFilter || t('calendar.filters.geo')}
                        </button>
                        <span
                            className={`events-calendar-section__select-arrow ${isCountryOpen ? 'is-open' : ''}`}
                            aria-hidden="true"
                        >
                            <DownArrowSVG />
                        </span>
                        {countryFilter && (
                            <button
                                className="events-calendar-section__clear-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCountryFilter('');
                                }}
                                aria-label="Очистити країну"
                            >
                                ✕
                            </button>
                        )}
                        {isCountryOpen && (
                            <ul
                                className="events-calendar-section__custom-list"
                                role="listbox"
                                tabIndex={-1}
                            >
                                {countries.map((country, index) => (
                                    <li key={country} role="option">
                                        <button
                                            type="button"
                                            className={`events-calendar-section__custom-option ${countryFilter === country ? 'is-selected' : ''} ${index === countryHighlightIndex ? 'is-focused' : ''}`}
                                            onMouseEnter={() => setCountryHighlightIndex(index)}
                                            onClick={() => {
                                                setCountryFilter(country);
                                                setIsCountryOpen(false);
                                            }}
                                        >
                                            {country}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Фильтр по дате */}
                    <div className="events-calendar-section__date-wrapper" ref={calendarRef}>
                        <input
                            type="text"
                            readOnly
                            placeholder={t('calendar.filters.date')}
                            className={`events-calendar-section__date-input ${selectedDate ? 'has-value' : ''}`}
                            value={selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: uk }) : ''}
                            onClick={onCalendarToggle}
                        />

                        {selectedDate ? (
                            <button
                                className="events-calendar-section__calendar-icon clickable"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClearDate();
                                }}
                                aria-label={t('calendar.aria.clearDate')}
                            >
                                ✕
                            </button>
                        ) : (
                            <span
                                className="events-calendar-section__calendar-icon"
                                onClick={onCalendarToggle}
                            >
                                <CalendarWhiteSVG />
                            </span>
                        )}

                        {isCalendarOpen && (
                            <div className="events-calendar-section__calendar-dropdown">
                                <div className="events-calendar-section__calendar-dropdown-header">
                                    <button
                                        onClick={prevMonth}
                                        className="events-calendar-section__nav-btn"
                                        aria-label={t('calendar.aria.prevMonth')}
                                    >
                                        <LittleLeftArrowSVG />
                                    </button>
                                    <span className="events-calendar-section__month-title">
                                        {format(currentMonth, 'LLLL', { locale: uk })}
                                        <span className="events-calendar-section__month-title-green">
                                            {` ${format(currentMonth, 'yyyy', { locale: uk })}`}
                                        </span>
                                    </span>
                                    <button
                                        onClick={nextMonth}
                                        className="events-calendar-section__nav-btn"
                                        aria-label={t('calendar.aria.nextMonth')}
                                    >
                                        <LittleRightArrow />
                                    </button>
                                </div>

                                <div className="events-calendar-section__weekdays">
                                    {[t('calendar.weekdays.mon'), t('calendar.weekdays.tue'), t('calendar.weekdays.wed'), t('calendar.weekdays.thu'), t('calendar.weekdays.fri'), t('calendar.weekdays.sat'), t('calendar.weekdays.sun')].map((day) => (
                                        <div key={day} className="events-calendar-section__weekday">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                <div className="events-calendar-section__days">
                                    {Array.from({ length: adjustedFirstDay }).map((_, index) => (
                                        <div
                                            key={`empty-${index}`}
                                            className="events-calendar-section__day events-calendar-section__day--empty"
                                        />
                                    ))}

                                    {monthDays.map((day) => {
                                        const isTodayDate = isToday(day);
                                        const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString();

                                        return (
                                            <button
                                                key={day.toString()}
                                                type="button"
                                                className={`
                                                    events-calendar-section__day
                                                    ${isTodayDate ? 'events-calendar-section__day--today' : ''}
                                                    ${isSelected ? 'events-calendar-section__day--selected' : ''}
                                                `}
                                                onClick={() => onDateSelect(day)}
                                                aria-label={format(day, 'd MMMM yyyy', { locale: uk })}
                                            >
                                                {format(day, 'd')}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* actions removed by request */}
            </div>
        </div>
    );
};

// === EVENT LIST COMPONENT ===
interface EventListProps {
    events: Event[];
    t: (key: string) => string;
}

const EventList: React.FC<EventListProps> = ({ events, t }) => {
    if (events.length === 0) {
        return (
            <div className="events-calendar-section__container page-width">
                <div className="events-calendar-section__event-list">
                    <p className="events-calendar-section__event-empty">
                        Немає подій за вказаними критеріями
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="events-calendar-section__container page-width">
            <h3 className="events-calendar-section__heading">{t('calendar.eventsHeading')}</h3>
            <div className="events-calendar-section__event-grid">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="events-calendar-section__event-card"
                    >
                        <div className="events-calendar-section__event-logo">
                            {event.logo ? (
                                event.logo.startsWith('/') || event.logo.startsWith('http') ? (
                                    <img
                                        src={event.logo}
                                        alt={event.name}
                                        loading="lazy"
                                        decoding="async"
                                        width={300}
                                        height={150}
                                    />
                                ) : (
                                    <span>{event.logo}</span>
                                )
                            ) : (
                                <span>{event.name}</span>
                            )}
                        </div>

                        <div className="events-calendar-section__event-info">
                            {event.date && (
                                <div className="events-calendar-section__event-detail">
                                    <span className="events-calendar-section__event-icon"><CalendarGreenSVG /></span>
                                    <span className="events-calendar-section__event-text">
                                        {event.date.includes('-')
                                            ? format(new Date(event.date), 'dd.MM.yyyy', { locale: uk })
                                            : event.date
                                        }
                                    </span>
                                </div>
                            )}

                            {event.location && (
                                <div className="events-calendar-section__event-detail">
                                    <span className="events-calendar-section__event-icon"><GeoGreenSVG /></span>
                                    <span className="events-calendar-section__event-text">{event.location}</span>
                                </div>
                            )}

                            {!event.location && event.country && (
                                <div className="events-calendar-section__event-detail">
                                    <span className="events-calendar-section__event-icon">📍</span>
                                    <span className="events-calendar-section__event-text">{event.country}</span>
                                </div>
                            )}
                        </div>

                        <button className="events-calendar-section__event-button custom-button-primary">
                            {t('calendar.buyTicket')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsCalendarSection;
