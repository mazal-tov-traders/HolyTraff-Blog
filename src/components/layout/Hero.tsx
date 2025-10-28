import {
    InstagramWitheSVG,
    TelegramWhiteSVG,
    TiktokWitheSVG,
    YouTubeWitheSVG
} from '@/assets';
import { useTranslation } from '@/i18n';
import React from 'react';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className='hero'>
            <div className='hero__background'>
                <picture>
                    <source
                        srcSet="/images/hero-mob.webp"
                        type="image/webp"
                        media="(max-width: 768px)"
                    />
                    <img
                        src="/images/hero.webp"
                        alt="Hero background"
                        className="hero__bg-image"
                        fetchPriority="high"
                        decoding="async"
                    />
                </picture>
                <div className='hero__gradient-overlay'></div>
            </div>

            <div className='hero__content'>
                <div className='hero__container'>
                    <div className='hero__main'>
                        <h2 className='hero__title'>
                            {t('hero.title')}
                        </h2>
                        <p className='hero__description'>
                            {t('hero.description')}
                        </p>
                        <div className='hero__social-mobile'>
                            <a href='https://www.youtube.com/@holytraff' className='hero__social-link'>
                                <YouTubeWitheSVG />
                            </a>
                            <a href='https://www.instagram.com/holytraff' className='hero__social-link'>
                                <InstagramWitheSVG />
                            </a>
                            <a href='https://t.me/holytraff' className='hero__social-link'>
                                <TelegramWhiteSVG />
                            </a>
                            <a href='https://www.tiktok.com/@holytraff' className='hero__social-link'>
                                <TiktokWitheSVG />
                            </a>
                        </div>
                        <div className='hero__buttons'>
                            <button className='hero__button custom-button-primary'>
                                {t('hero.buttonMarket')}
                            </button>
                            <button className='hero__button custom-button-primary'>
                                {t('hero.buttonPartner')}
                            </button>
                        </div>
                    </div>


                </div>
            </div>
            <div className='hero__social'>
                <a href='https://www.youtube.com/@holytraff' className='hero__social-link'>
                    <YouTubeWitheSVG />
                </a>
                <a href='https://www.instagram.com/holytraff' className='hero__social-link'>
                    <InstagramWitheSVG />
                </a>
                <a href='https://t.me/holytraff' className='hero__social-link'>
                    <TelegramWhiteSVG />
                </a>
                <a href='https://www.tiktok.com/@holytraff' className='hero__social-link'>
                    <TiktokWitheSVG />
                </a>
            </div>
        </section>
    );
};

export default Hero;
