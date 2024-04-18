import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Logo from 'src/assets/images/logo.svg';
import { LayoutContext } from '../../layoutContainer';
import SelectLanguage from './SelectLanguage';
import ThemeSwitch from './ThemeSwitch';
import UserProfile from './UserProfile';

const Header = () => {
  const { selectedLanguage } = useContext(LayoutContext);
  const pathName = usePathname();
  const t = useTranslations('navbar');
  const navLinks = [
    {
      title: t('about'),
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
      title: t('contact'),
      path: `/${selectedLanguage}/contact`,
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link href={`/${selectedLanguage}`} className="header__logo">
            <Image src={Logo} alt="logo" />
          </Link>
          <div className="header__content__group">
            <nav className="header__menu">
              <ul className="header__menu__list">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <Link href={link.path} className={pathName === link.path ? 'active' : ' '}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <SelectLanguage />
            <ThemeSwitch />
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
