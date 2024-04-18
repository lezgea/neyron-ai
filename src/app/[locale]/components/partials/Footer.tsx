import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LayoutContext } from '../../layoutContainer';
import Logo from 'src/assets/images/logo-white.svg';
import LogoAilab from 'src/assets/images/logo-ailab.svg';
import SocialList from './SocialList';

const Footer = () => {
  const { selectedLanguage } = useContext(LayoutContext);
  const t = useTranslations('footer');

  const navLinks = [
    {
      title: t('aboutUs'),
      path: `/${selectedLanguage}/about`,
    },
    {
      title: t('courses'),
      path: `/${selectedLanguage}/courses`,
    },
    {
      title: t('community'),
      path: `/${selectedLanguage}/community`,
    },
    {
      title: t('faq'),
      path: `/${selectedLanguage}/faq`,
    },
    {
      title: t('blog'),
      path: `/${selectedLanguage}/blog`,
    },
    {
      title: t('contactUs'),
      path: `/${selectedLanguage}/contact`,
    },
    {
      title: t('terms'),
      path: `/${selectedLanguage}/terms-and-conditions`,
    },
    {
      title: t('privacy'),
      path: `/${selectedLanguage}/privacy`,
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content footer__content--primary">
          <Link href={`/${selectedLanguage}`} className="header__logo">
            <Image src={Logo} alt="neron.ai" />
          </Link>
          <nav className="footer__nav">
            <ul className="footer__nav__list">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer__content footer__content--secondary">
          <div className="footer__content__item">
            <SocialList />
          </div>
          <div className="footer__content__item">
            <span className="ai-copyright">2023 Neyron.ai {t('rightsReserved')}</span>
          </div>
          <div className="footer__content__item">
            <a href={'https://ailab.az'} target="_blank" className="ai-author">
              <span>{t('productOf')}</span>
              <Image src={LogoAilab} alt="ailab.az" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
