import { useTranslation } from '@/i18n';
import React from 'react';

const PartnersSection: React.FC<{ className?: string }> = ({ className = '' }) => {
    const { t } = useTranslation();

    // Partner logos ordered as they should appear
    const partners = [
        'bumerang', 'colibrix', 'gypsy', // Row 1: 3 logos
        'conversion_club', 'big_betty', 'play_amo', 'stars', 'am', // Row 2: 5 logos
        'hell', '1win', '22bet', 'r2d', 'n_partners', // Row 3: 5 logos
        'growe', 'brazino_777', 'gg_bet', 'wwa', 'gaming', // Row 4: 5 logos
        'onep', 'affhub', 'rocks', 'pin_up', 'white_rhino', // Row 5: 5 logos
        'gorilla', 'ppc', 'arbitage', 'gate', 'traffik_skulls', // Row 6: 5 logos
        'ons', 'banzai', 'melbet' // Row 7: 3 logos
    ];

    return (
        <section className={`partners-section ${className}`} id="partners">
            <div className="page-width">
                <h2 className="partners-section__title custom-heading-primary">
                    PARTNERS
                </h2>
                <p className="partners-section__subtitle custom-heading-secondary">
                    {t('partners.subtitle')}
                </p>
                <div className="partners-section__container">
                    <div className="partners-section__grid">
                        {partners.map((partner, index) => {
                            const imagePath = `/images/partners/${partner}.webp`;
                            const partnerName = partner.replace('_', ' ').toUpperCase();

                            return (
                                <div key={index} className="partners-section__item">
                                    <img
                                        src={imagePath}
                                        alt={partnerName}
                                        className="partners-section__logo"
                                        loading="lazy"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;

