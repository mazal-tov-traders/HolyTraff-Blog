import { EllipseSVG, LittleEllipseSVG } from '@/assets';
import { useTranslation } from '@/i18n';
import React from 'react';

const AboutSection: React.FC<{ className?: string }> = ({ className = '' }) => {
    const { t } = useTranslation();

    return (
        <section className={`about-section ${className}`} id="about">
            <div className="about-section__container">
                {/* Statistics Section */}
                <div className="about-section__stats">
                    <div className="about-section__platform-container">
                        <div className="about-section__platform">YOUTUBE</div>
                        <div className="about-section__ellipse">
                            <LittleEllipseSVG />
                        </div>
                        <div className="about-section__number">{t('about.youtubeSubscribers')}</div>
                    </div>
                    <div className="about-section__platform-container">
                        <div className="about-section__platform">INSTAGRAM</div>
                        <div className="about-section__ellipse">
                            <LittleEllipseSVG />
                        </div>
                        <div className="about-section__number">{t('about.instagramSubscribers')}</div>
                    </div>
                    <div className="about-section__line"></div>
                    <div className="about-section__line--vertical"></div>
                </div>


                {/* Content Area */}
                <div className="about-section__content">
                    <div className="about-section__left">
                        {/* ABOUT Title */}
                        <div className="about-section__title">
                            <h2 className="about-section__title-text">ABOUT</h2>
                            <p className="about-section__description">
                                Holy <span className="about-section__title-text--green">Traff</span> {t('about.description')}
                            </p>
                        </div>


                    </div>
                    <div className="about-section__middle">
                        <img
                            src="/images/img_eye.webp"
                            alt="Eye"
                            className="about-section__eye-image"
                        />
                        <div className="about-section__eye-ellipse">
                            <EllipseSVG />
                        </div>
                    </div>
                    {/* Right Side - Eye Image */}
                    <div className="about-section__right">
                        {/* WHAT YOU GET WITH US? */}
                        <div className="about-section__benefits">
                            <h3 className="about-section__benefits-title">
                                {t('about.benefitsTitle').split(' ').map((word, index) => {
                                    const isGreen = word.toUpperCase() === 'ВИ' || word.toUpperCase() === 'YOU';
                                    return (
                                        <React.Fragment key={index}>
                                            {isGreen ? (
                                                <span className="about-section__benefits-title--green">{word}</span>
                                            ) : (
                                                word
                                            )}
                                            {index < t('about.benefitsTitle').split(' ').length - 1 && ' '}
                                        </React.Fragment>
                                    );
                                })}
                            </h3>
                            <div className="about-section__benefits-text">
                                <p>{t('about.benefitsText')}</p>
                            </div>
                        </div>
                        <div className="about-section__line"></div>
                        <div className="about-section__line--vertical"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

