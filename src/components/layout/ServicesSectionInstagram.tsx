import { HolyTraffLogoGreenSVG } from '@/assets';
import { useTranslation } from '@/i18n';
import React from 'react';

const ServicesSectionInstagram: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="services-section-instagram" id="services-instagram" aria-label="Instagram послуги Holy Traff">
            <div className="services-section-instagram__container page-width">
                <h2 className="services-section-instagram__title custom-heading-primary">INSTAGRAM</h2>
                <p className="services-section-instagram__subtitle custom-heading-secondary">{t('instagramServices.subtitle')}</p>

                <div className="services-section-instagram__content">
                    <div className="instagram-service-card instagram-service-card--reels">
                        <div className="instagram-service-card__logo">
                            <HolyTraffLogoGreenSVG />
                        </div>
                        <h3 className="instagram-service-card__title">{t('instagramServices.reels.title')}</h3>
                        <p className="instagram-service-card__description">{t('instagramServices.reels.description')}</p>
                    </div>

                    <div className="instagram-service-card instagram-service-card--center">
                        <img src="/images/services/img_reels.webp" alt="reels" />
                    </div>

                    <div className="instagram-service-card instagram-service-card--stories">
                        <div className="instagram-service-card__logo">
                            <HolyTraffLogoGreenSVG />
                        </div>
                        <h3 className="instagram-service-card__title">{t('instagramServices.stories.title')}</h3>
                        <p className="instagram-service-card__description">{t('instagramServices.stories.description')}</p>
                    </div>
                    <img className="services-section-instagram__ellipse" src="/images/services/light_inst.webp" alt="ellipse" />
                    <div className="border-line"></div>
                </div>

                <button className="services-section-instagram__cta custom-button-primary">{t('instagramServices.becomePartner')}</button>
            </div>
        </section>
    );
};

export default ServicesSectionInstagram;
