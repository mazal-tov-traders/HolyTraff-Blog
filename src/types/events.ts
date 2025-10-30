// Типы для календаря событий

export interface Event {
    id: number;
    name: string;
    country: string;
    location?: string; // например "Барселона, Іспанія"
    date?: string; // формат "YYYY-MM-DD" или "DD.MM.YYYY"
    logo?: string; // путь к логотипу или текст логотипа
}

