import SliderModule from '@/components/common/SliderModule';
import { RunningLine } from '@/components/ui';
import { useTranslation } from '@/i18n';
import type { PartnerReviewCard } from '@/types/partnerReviews';
import type { SliderSectionProps } from '@/types/slider';
import React, { useCallback, useMemo } from 'react';

/**
 * SVG иконка звезды для placeholder логотипа
 */
const StarIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" />
    </svg>
);

/**
 * Компонент карточки отзыва партнера
 */
const PartnerReviewCardComponent: React.FC<{ card: PartnerReviewCard }> = ({ card }) => {
    const renderLogo = () => {
        if (card.partnerLogo) {
            return (
                <img
                    src={card.partnerLogo}
                    alt={card.reviewerName}
                    className="partner-review-card__logo"
                    loading="lazy"
                    decoding="async"
                />
            );
        }
        return (
            <div className="partner-review-card__logo-placeholder">
                <StarIcon />
            </div>
        );
    };

    return (
        <div className="partner-review-card">
            <div className="partner-review-card__header">
                {renderLogo()}
            </div>
            <div className="partner-review-card__reviewer">
                {card.reviewerName}
            </div>
            <p className="partner-review-card__text">
                {card.reviewText}
            </p>
        </div>
    );
};

/**
 * Секция отзывов партнеров
 */
const PartnersReviewsSection: React.FC<SliderSectionProps> = ({ className = '' }) => {
    const { t } = useTranslation();

    // Данные для карточек отзывов партнеров
    const reviewCards: PartnerReviewCard[] = useMemo(() => [
        {
            id: 'gypsy-review-1',
            partnerLogo: '/images/partners-reviews/logo-gypsy.webp',
            reviewerName: t('partnerReviews.gypsy.reviewerName'),
            reviewText: t('partnerReviews.gypsy.reviewText')
        },
        {
            id: 'partner-review-2',
            partnerLogo: '/images/partners-reviews/logo-gypsy.webp',
            reviewerName: t('partnerReviews.partner2.reviewerName'),
            reviewText: t('partnerReviews.partner2.reviewText')
        },
        {
            id: 'partner-review-3',
            partnerLogo: '/images/partners-reviews/logo-gypsy.webp',
            reviewerName: t('partnerReviews.partner3.reviewerName'),
            reviewText: t('partnerReviews.partner3.reviewText')
        },
        {
            id: 'partner-review-4',
            partnerLogo: '/images/partners-reviews/logo-gypsy.webp',
            reviewerName: t('partnerReviews.partner4.reviewerName'),
            reviewText: t('partnerReviews.partner4.reviewText')
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
    const renderReviewCard = useCallback((card: PartnerReviewCard) => (
        <PartnerReviewCardComponent key={card.id} card={card} />
    ), []);

    return (
        <section className={`partners-reviews-section ${className}`} id="partner-reviews">
            <div className="partners-reviews-section__title custom-heading-primary">
                REVIEWS
            </div>
            <p className="partners-reviews-section__subtitle custom-heading-secondary">
                {t('partnerReviews.subtitle')}
            </p>
            <div className="partners-reviews-section__container">
                <SliderModule
                    cards={reviewCards}
                    options={sliderOptions}
                    renderCard={renderReviewCard}
                />
            </div>
            <RunningLine
                speed={3}
                count={20}
                className="footer__running-line"
            />
        </section>
    );
};

export default PartnersReviewsSection;

