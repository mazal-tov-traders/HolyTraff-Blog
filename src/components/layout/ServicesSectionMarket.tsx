import { RunningLine } from '@/components/ui';
import { useTranslation } from '@/i18n';
import type { MarketService } from '@/types/services';
import React from 'react';

const ServicesSectionMarket: React.FC = () => {
    const { t } = useTranslation();

    const marketServices: MarketService[] = [
        { id: '1', title: 'holyapps', titlePart1: 'holy', titlePart2: 'apps' },
        { id: '2', title: 'holycreo', titlePart1: 'holy', titlePart2: 'creo' },
        { id: '3', title: 'holyvideo', titlePart1: 'holy', titlePart2: 'video' },
        { id: '4', title: 'holylanding', titlePart1: 'holy', titlePart2: 'landing' },
    ];

    return (
        <section className="services-section-market" id="services-market" aria-label="Market послуги Holy Traff">
            <h2 className="services-section-market__title custom-heading-primary">MARKET</h2>
            <div className="services-section-market__fon-filter"></div>

            <div className="services-section-market__container page-width">
                <div className="border-line-top"></div>
                {marketServices.map((service) => (
                    <div key={service.id} className="services-section-market__item">
                        <h3 className="services-section-market__item-title">
                            <span className="services-section-market__title-part-1">{service.titlePart1}</span>
                            <span className="services-section-market__title-part-2">{service.titlePart2}</span>
                        </h3>
                    </div>
                ))}
                <div className="border-line-bottom"></div>
            </div>

            <button className="services-section-market__cta custom-button-primary">{t('marketServices.buy')}</button>

            <RunningLine
                speed={3}
                count={20}
                className="footer__running-line"
            />
        </section>
    );
};

export default ServicesSectionMarket;