import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';
import AilabLogo from 'src/assets/images/ailabLogo.svg';
import FacebookIcon from 'src/assets/images/facebook.svg';
import InstagramIcon from 'src/assets/images/instagram.svg';
import LinkedinIcon from 'src/assets/images/linkedin.svg';
import TiktokIcon from 'src/assets/images/tiktok.svg';
import Logo from 'src/assets/images/whiteLogo.svg';
import YouTubeIcon from 'src/assets/images/youtube.svg';
import { LayoutContext } from '../../layoutContainer';

const Footer = () => {
  const { selectedLanguage } = useContext(LayoutContext);

  const t = useTranslations('footer');
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content footer__content--primary">
          <Link href={`/${selectedLanguage}`} className="header__logo">
            <Image src={Logo} alt="neron.ai" />
          </Link>
          <nav className="footer__nav">
            <ul className="footer__nav__list">
              <li>
                <Link href={`/${selectedLanguage}/aboutUs`}>{t('aboutUs')}</Link>
              </li>
              <li>
                <Link href={`/${selectedLanguage}`}>{t('courses')}</Link>
              </li>
              <li>
                <Link href={`/${selectedLanguage}`}>{t('community')}</Link>
              </li>
              <li>
                <Link href={`/${selectedLanguage}/faq`}>{t('faq')}</Link>
              </li>
              <li>
                <Link href={`/${selectedLanguage}/blog`}>{t('blog')}</Link>
              </li>
              <li>
                <Link href={`/${selectedLanguage}/contact`}>{t('contactUs')}</Link>
              </li>
              <li>
                <Link href={`/${selectedLanguage}`}>{t('terms')}</Link>
              </li>
              <li>
                <Link href={`/${selectedLanguage}`}>{t('privacy')}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__content footer__content--secondary">
          <div className="footer__content__item">
            <ul className="ai-socials">
              <li>
                <a href="#" target="_blank">
                  <Image src={TiktokIcon} alt="tik-tok" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Image src={FacebookIcon} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Image src={InstagramIcon} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Image src={LinkedinIcon} alt="linkedin" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Image src={YouTubeIcon} alt="youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__content__item">
            <span className="ai-copyright">2023 Neyron.ai {t('rightsReserved')}</span>
          </div>
          <div className="footer__content__item">
            <a href={'https://ailab.az'} target="_blank" className="ai-author">
              <span>{t('productOf')}</span>
              <Image src={AilabLogo} alt="ailab.az" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
