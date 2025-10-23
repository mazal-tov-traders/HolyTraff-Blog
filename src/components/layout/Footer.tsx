import {
  EmailWhiteSVG,
  InstagramGreenSVG,
  TelegramGreenSVG,
  TelegramWhiteSVG,
  TiktokGreenSVG,
  YouTubeGreenSVG,
} from '@/assets';
import { Logo, RunningLine } from '@/components/ui';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container page-width'>
        <Logo className='header__logo' />
        <div className='footer__links'>
          <h3 className='footer__subtitle'>
            <span className='footer__subtitle-withe'>звʼязатись</span>

            <span className='footer__subtitle-green'>з нами</span>
          </h3>
          <ul className='footer__list-social'>
            <li className='footer__item-social'>
              <a
                href='https://www.youtube.com/@holytraff'
                className='footer__link-social'
                aria-label='YouTube канал HolyTraff'
                target='_blank'
                rel='noopener noreferrer'
              >
                <YouTubeGreenSVG />
              </a>
            </li>
            <li className='footer__item-social'>
              <a
                href='https://www.instagram.com/holytraff'
                className='footer__link-social'
                aria-label='Instagram профиль HolyTraff'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramGreenSVG />
              </a>
            </li>
            <li className='footer__item-social'>
              <a
                href='https://t.me/holytraff'
                className='footer__link-social'
                aria-label='Telegram канал HolyTraff'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TelegramGreenSVG />
              </a>
            </li>
            <li className='footer__item-social'>
              <a
                href='https://www.tiktok.com/@holytraff'
                className='footer__link-social'
                aria-label='TikTok профиль HolyTraff'
                target='_blank'
                rel='noopener noreferrer'
              >
                <TiktokGreenSVG />
              </a>
            </li>
          </ul>
          <ul className='footer__list-contacts'>
            <li className='footer__item-contacts'>
              <a
                href='https://t.me/pr_holy'
                className='footer__link-contacts'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Telegram PR HolyTraff'
              >
                <TelegramWhiteSVG />
                @PR_Holy
              </a>
            </li>
            <li className='footer__item-contacts'>
              <a
                href='https://t.me/holy_traff_market'
                className='footer__link-contacts'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Telegram HolyTraff Market'
              >
                <TelegramWhiteSVG />
                @Holy_Traff_Market
              </a>
            </li>
            <li className='footer__item-contacts'>
              <a
                href='mailto:contact@holytraff.com'
                className='footer__link-contacts'
                aria-label='Email HolyTraff'
              >
                <EmailWhiteSVG />
                contact@holytraff.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <RunningLine
        speed={3}
        count={20}
        className="footer__running-line"
      />
      <nav className="footer__nav-links" aria-label="Footer navigation">
        <ul className='footer__list-nav-links'>
          <li className='footer__item-nav-link'>
            <a href='/privacy' className='footer__link-nav-link'>Privacy</a>
          </li>
          <li className='footer__item-nav-link'>
            <a href='/policy' className='footer__link-nav-link'>Policy</a>
          </li>
          <li className='footer__item-nav-link'>
            <a href='/faq' className='footer__link-nav-link'>FAQ</a>
          </li>
          <li className='footer__item-nav-link'>
            <a href='/help' className='footer__link-nav-link'>Help Center</a>
          </li>
          <li className='footer__item-nav-link'>
            <a href='/about' className='footer__link-nav-link'>About</a>
          </li>
        </ul>
      </nav>
      <div className='footer__copyright'>
        <p className='footer__copyright-text'>
          HOLYTRAFF 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
