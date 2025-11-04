import { AffHubSVG } from '@/assets';
import SliderModule from '@/components/common/SliderModule';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useTranslation } from '@/i18n';
import type { ReviewCard } from '@/types/reviews';
import type { SliderSectionProps } from '@/types/slider';
import { stripHtml, truncateHtml } from '@/utils/htmlUtils';
import React, { useCallback, useMemo, useState } from 'react';

const MAX_DESCRIPTION_LENGTH = 250;
const MOBILE_BREAKPOINT = '(max-width: 767px)';

/**
 * Компонент карточки отзыва с логикой развертывания/свертывания описания
 */
const ReviewCardComponent: React.FC<{ card: ReviewCard }> = ({ card }) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);
    const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

    // Определяем отображаемый текст
    const displayedDescription = useMemo(() => {
        if (!isMobile || isExpanded) {
            return card.description;
        }
        return truncateHtml(card.description, MAX_DESCRIPTION_LENGTH);
    }, [card.description, isMobile, isExpanded]);

    // Определяем, нужно ли показывать кнопку развертывания
    const shouldShowExpandButton = useMemo(() => {
        if (!isMobile) return false;
        return stripHtml(card.description).length > MAX_DESCRIPTION_LENGTH;
    }, [card.description, isMobile]);

    const toggleExpand = useCallback(() => {
        setIsExpanded(prev => !prev);
    }, []);

    const expandButtonText = isExpanded
        ? t('sliderInsideView.collapse')
        : t('sliderInsideView.expand');

    return (
        <div className="review-card">
            <div className="review-card__image">
                <picture>
                    <source srcSet={card.imageMobile} media="(max-width: 768px)" />
                    <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="review-card__img"
                        loading="lazy"
                        decoding="async"
                    />
                </picture>
            </div>
            <div className="review-card__content">
                <h3 className="review-card__title">{card.title}</h3>
                <p
                    className="review-card__description"
                    dangerouslySetInnerHTML={{ __html: displayedDescription }}
                />
                {shouldShowExpandButton && (
                    <button
                        className="review-card__expand-button"
                        onClick={toggleExpand}
                        aria-expanded={isExpanded}
                        aria-label={expandButtonText}
                    >
                        {expandButtonText}
                    </button>
                )}
                <button className="review-card__button">
                    {card.buttonText}
                </button>
                <div className="review-card__footer">
                    <AffHubSVG />
                    <span className="review-card__date">{card.date}</span>
                </div>
            </div>
        </div>
    );
};

/**
 * Основной компонент секции отзывов "Inside View"
 */
const ReviewsInsideView: React.FC<SliderSectionProps> = ({ className = '' }) => {
    const { t } = useTranslation();

    // Данные для карточек отзывов
    const reviewCards: ReviewCard[] = useMemo(() => [
        {
            id: 'bash-arbitrage-may-2025',
            title: '*БАШ АРБІТРАЖ ПЛЕМ\'Я',
            description: t('sliderInsideView.bashArbitrage.description'),
            image: '/images/reviews-inside-view/img-1.webp',
            imageMobile: '/images/reviews-inside-view/img-1-mob.webp',
            imageAlt: 'Bash Arbitrage Tribe conference review',
            date: t('sliderInsideView.bashArbitrage.date'),
            buttonText: t('sliderInsideView.viewPhotoReport')
        },
        {
            id: 'event-review-2',
            title: '*БАШ АРБІТРАЖ ПЛЕМ\'Я',
            description: t('sliderInsideView.eventReview2.description'),
            image: '/images/reviews-inside-view/img-1.webp',
            imageMobile: '/images/reviews-inside-view/img-1-mob.webp',
            imageAlt: 'Event review 2',
            date: t('sliderInsideView.eventReview2.date'),
            buttonText: t('sliderInsideView.viewPhotoReport')
        },
        {
            id: 'event-review-3',
            title: '*БАШ АРБІТРАЖ ПЛЕМ\'Я',
            description: t('sliderInsideView.eventReview3.description'),
            image: '/images/reviews-inside-view/img-1.webp',
            imageMobile: '/images/reviews-inside-view/img-1-mob.webp',
            imageAlt: 'Event review 3',
            date: t('sliderInsideView.eventReview3.date'),
            buttonText: t('sliderInsideView.viewPhotoReport')
        }
    ], [t]);

    // Настройки слайдера
    const sliderOptions = useMemo(() => ({
        loop: true,
        align: 'start' as const,
        slidesToScroll: 1,
        containScroll: 'trimSnaps' as const
    }), []);

    // Функция рендера карточки отзыва
    const renderReviewCard = useCallback((card: ReviewCard) => (
        <ReviewCardComponent key={card.id} card={card} />
    ), []);

    return (
        <section className={`reviews-section ${className}`} id="reviews">
            <div className="reviews-section__title custom-heading-primary">
                REVIEWS
            </div>
            <p className="reviews-section__subtitle custom-heading-secondary">
                {t('reviews.subtitle')}
            </p>
            <div className="reviews-section__container">
                <SliderModule
                    cards={reviewCards}
                    options={sliderOptions}
                    renderCard={renderReviewCard}
                />
            </div>
        </section>
    );
};

export default ReviewsInsideView;

