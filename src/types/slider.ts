// Типы для карточек слайдера
export interface SliderCard {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    imageAlt: string;
}

// Типы для секции слайдера
export interface SliderSectionProps {
    className?: string;
}
