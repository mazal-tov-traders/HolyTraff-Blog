import React from 'react';
import { Logo } from '@/components/ui';
import {
  YouTubeGreenSVG,
  InstagramGreenSVG,
  TelegramGreenSVG,
  TiktokGreenSVG,
  TelegramWhiteSVG,
  EmailWhiteSVG,
} from '@/assets';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container page-width'>
        <Logo className='header__logo' />
        <div className='footer__links'>
          <h3 className='footer__subtitle'>
            <span className='footer__subtitle-withe'>звʼязатись</span>
            <br></br>
            <span className='footer__subtitle-green'>з нами</span>
          </h3>
          <ul className='footer__list-social'>
            <li className='footer__item-social'>
              <a href='https://www.youtube.com' className='footer__link-social'>
                <YouTubeGreenSVG />
              </a>
            </li>
            <li className='footer__item-social'>
              <a
                href='https://www.instagram.com'
                className='footer__link-social'
              >
                <InstagramGreenSVG />
              </a>
            </li>
            <li className='footer__item-social'>
              <a
                href='https://www.telegram.com'
                className='footer__link-social'
              >
                <TelegramGreenSVG />
              </a>
            </li>
            <li className='footer__item-social'>
              <a href='https://www.tiktok.com' className='footer__link-social'>
                <TiktokGreenSVG />
              </a>
            </li>
          </ul>
          <ul className='footer__list-contacts'>
            <li className='footer__item-contacts'>
              <a
                href='https://www.telegram.com/pr_holy'
                className='footer__link-contacts'
              >
                <TelegramWhiteSVG />
                @PR_Holy
              </a>
            </li>
            <li className='footer__item-contacts'>
              <a
                href='https://www.telegram.com/holy_traff_market'
                className='footer__link-contacts'
              >
                <TelegramWhiteSVG />
                @Holy_Traff_Market
              </a>
            </li>
            <li className='footer__item-contacts'>
              <a href='mailto:holy@gmail.com' className='footer__link-contacts'>
                <EmailWhiteSVG />
                holy@gmail.com
              </a>
            </li>
            <li className='footer__item-contacts'></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
