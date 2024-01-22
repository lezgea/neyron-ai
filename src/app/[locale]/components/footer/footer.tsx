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
import WhiteLogo from 'src/assets/images/whiteLogo.svg';
import YouTubeIcon from 'src/assets/images/youtube.svg';

import { LayoutContext } from '../../layoutContainer';

const Footer = () => {
  const { selectedLanguage } = useContext(LayoutContext);

  const t = useTranslations('footer');
  return (
    <footer>
      <Grid item xs={12} className="logo-container">
        <Image src={WhiteLogo} alt="logo" />
      </Grid>
      <Grid item xs={12}>
        <ul className="nav-list" style={{ marginLeft: selectedLanguage === 'ru' ? '10px' : '1rem' }}>
          <li>
            <Link
              style={{ fontSize: selectedLanguage === 'ru' ? '1.2rem' : '1.375rem' }}
              href={`/${selectedLanguage}/aboutUs`}
            >
              {t('aboutUs')}
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: selectedLanguage === 'ru' ? '1.2rem' : '1.375rem' }}
              href={`/${selectedLanguage}`}
            >
              {t('courses')}
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: selectedLanguage === 'ru' ? '1.2rem' : '1.375rem' }}
              href={`/${selectedLanguage}`}
            >
              {t('community')}
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: selectedLanguage === 'ru' ? '1.2rem' : '1.375rem' }}
              href={`/${selectedLanguage}/faq`}
            >
              {t('faq')}
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: selectedLanguage === 'ru' ? '1.2rem' : '1.375rem' }}
              href={`/${selectedLanguage}/blog`}
            >
              {t('blog')}
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: selectedLanguage === 'ru' ? '1.2rem' : '1.375rem' }}
              href={`/${selectedLanguage}/contact`}
            >
              {t('contactUs')}
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: selectedLanguage === 'ru' ? '1.2rem' : '1.375rem' }}
              href={`/${selectedLanguage}`}
            >
              {t('terms')}
            </Link>
          </li>
          <li>
            <Link
              style={{ fontSize: selectedLanguage === 'ru' ? '1.2rem' : '1.375rem' }}
              href={`/${selectedLanguage}`}
            >
              {t('privacy')}
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} className="bottom-line">
        <div className="social-media-icons">
          <Image src={TiktokIcon} alt="tik-tok" />
          <Image src={FacebookIcon} alt="facebook" />
          <Image src={InstagramIcon} alt="instagram" />
          <Image src={LinkedinIcon} alt="linkedin" />
          <Image src={YouTubeIcon} alt="youtube" />
        </div>
        <div className="rights-container">2023 Neyron.ai {t('rightsReserved')}</div>
        <div className="produced-by">
          <span>{t('productOf')}</span>
          <Image src={AilabLogo} alt="logo" />
        </div>
      </Grid>
    </footer>
  );
};

export default Footer;
