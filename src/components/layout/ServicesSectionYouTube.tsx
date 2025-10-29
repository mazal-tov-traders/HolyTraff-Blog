import { HolyTraffLogoGreenSVG } from '@/assets';
import { useTranslation } from '@/i18n';
import type { YouTubeServiceCard } from '@/types/services';
import React from 'react';

const ServicesSectionYouTube: React.FC = () => {
    const { t } = useTranslation();

    const youtubeServices: YouTubeServiceCard[] = [
        { id: '1', title: 'HOLYOWNERDAY', titlePart1: 'HOLY', titlePart2: 'OWNERDAY', image: '/images/services/card1.webp', hasLogo: true },
        { id: '2', title: 'HOLYTRAVELBLOG', titlePart1: 'HOLY', titlePart2: 'TRAVELBLOG', image: '/images/services/card2.webp' },
        { id: '3', title: 'HOLYCONFERENCE', titlePart1: 'HOLY', titlePart2: 'CONFERENCE', image: '/images/services/card3.webp' },
        { id: '4', title: 'HOLYSTUDIOSHOW', titlePart1: 'HOLY', titlePart2: 'STUDIOSHOW', image: '/images/services/card4.webp' },
        { id: '5', title: 'EXPATS', titlePart1: ' ', titlePart2: 'EXPATS', image: '/images/services/card5.webp', hasLogo: true },
        { id: '6', title: 'HOLYNEWS', titlePart1: 'HOLY', titlePart2: 'NEWS', image: '/images/services/card6.webp' },
    ];

    return (
        <section className="services-section-youtube" id="services-youtube" aria-label="YouTube каналы и сервисы Holy Traff">
            <div className="services-section-youtube__container page-width">
                <h2 className="services-section-youtube__title custom-heading-primary">YOUTUBE</h2>
                <p className="services-section-youtube__subtitle custom-heading-secondary">{t('services.subtitle')}</p>

                <div className="services-section-youtube__grid">
                    {youtubeServices.map((service) => (
                        <article key={service.id} className="youtube-service-card">
                            {service.hasLogo && <HolyTraffLogoGreenSVG />}
                            <div className="youtube-service-card__image-wrapper">
                                <img src={service.image} alt={`${service.title} - YouTube канал`} className="youtube-service-card__image" loading="lazy" />
                            </div>
                            <div className="border-line"></div>
                            <h3 className="youtube-service-card__title">
                                <span className="youtube-service-card__title-part-1">{service.titlePart1 || service.title}</span>
                                {service.titlePart2 && <span className="youtube-service-card__title-part-2">{service.titlePart2}</span>}
                            </h3>
                            <button className="youtube-service-card__button">{t('services.learnMore')}</button>
                        </article>
                    ))}
                </div>
                <button className="services-section-youtube__cta custom-button-primary">{t('services.becomePartner')}</button>
            </div>
        </section>
    );
};

export default ServicesSectionYouTube;
