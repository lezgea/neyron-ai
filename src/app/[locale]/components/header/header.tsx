import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Logo from 'src/assets/images/logo.svg';

import { LayoutContext } from '../../layoutContainer';
import SelectLanguage from '../selecLanguage/selectLanguage';

import HeaderSwitch from './headerSwitch';
import UserProfile from './userProfile';

const Header = () => {
  const {
    selectedLanguage: { abbreviation },
  } = useContext(LayoutContext);

  const t = useTranslations('navbar');

  return (
    <header>
      <div className="container header-container">
        <Link href={`/${abbreviation}`} className="logo">
          <Image src={Logo} alt="logo" />
        </Link>
        <nav>
          <ul className="list-item">
            <li>
              <Link href={`/${abbreviation}/aboutUs`}>{t('about')}</Link>
            </li>
            <li>
              <Link href={`/${abbreviation}`}>{t('courses')}</Link>
            </li>
            <li>
              {' '}
              <Link href={`/${abbreviation}`}>{t('community')}</Link>
            </li>
            <li>
              <Link href={`/${abbreviation}/faq`}>{t('faq')}</Link>
            </li>
            <li>
              <Link href={`/${abbreviation}/contact`}>{t('contact')}</Link>
            </li>
            <li>
              <SelectLanguage />
            </li>
            <li>
              <HeaderSwitch />
            </li>
            <UserProfile />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
