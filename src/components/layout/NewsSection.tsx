import SliderModule from '@/components/common/SliderModule';
import { useTranslation } from '@/i18n';
import type { SliderCard, SliderSectionProps } from '@/types/slider';
import React from 'react';

const NewsSection: React.FC<SliderSectionProps> = ({ className = '' }) => {
    const { t } = useTranslation();

    // Данные для карточек новостей
    const newsCards: SliderCard[] = [
        {
            id: 'holy-apps',
            title: 'HOLY APPS',
            description: t('news.holyApps.description'),
            image: '/images/news/i1.webp',
            imageAlt: 'Holy Apps mobile application'
        },
        {
            id: 'bash-arbitrage',
            title: '*БАШ АРБІТРАЖ ПЛЕМ\'Я',
            description: t('news.bashArbitrage.description'),
            image: '/images/news/i2.webp',
            imageAlt: 'Bash Arbitrage Tribe conference'
        },
        {
            id: 'holy-studio-show',
            title: 'HOLY STUDIO SHOW',
            subtitle: 'ОГЛЯД АРБІТРАЖНИХ КРЕАТИВІВ',
            description: t('news.holyStudioShow.description'),
            image: '/images/news/i3.webp',
            imageAlt: 'Holy Studio Show creative review'
        },
        {
            id: 'holy-traff-blog',
            title: 'HOLYTRAFF BLOG',
            subtitle: 'НОВИНИ ТА ІНСАЙТИ',
            description: t('news.holyTraffBlog.description'),
            image: '/images/news/i2.webp',
            imageAlt: 'HolyTraff Blog news and insights'
        }
    ];

    // Функция рендера карточки новости
    const renderNewsCard = (card: SliderCard) => (
        <div className="news-card">
            <div className="news-card__image">
                <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="news-card__img"
                />
            </div>
            <div className="news-card__content">
                <h3 className="news-card__title">{card.title}</h3>
                <p className="news-card__description">{card.description}</p>
            </div>
        </div>
    );

    return (
        <section className={`news-section ${className}`}>
            <div className="news-section__title">
                NEWS
            </div>
            <div className="news-section__fon-filter">

            </div>
            <div className="news-section__container">
                <SliderModule
                    cards={newsCards}
                    options={{
                        loop: true,
                        align: 'start',
                        slidesToScroll: 1,
                        containScroll: 'trimSnaps'
                    }}
                    renderCard={renderNewsCard}
                />
            </div>
        </section>
    );
};

export default NewsSection;
