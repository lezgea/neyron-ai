'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useContext } from 'react';
import { LayoutContext } from './layoutContainer';

const NotFound = () => {
  const { selectedLanguage } = useContext(LayoutContext);
  const t = useTranslations('404');

  return (
    <main className="ai-main ai-main--404">
      <section className="ai-section ai-section--404">
        <div className="container">
          <div className="ai-section__content">
            <div className="ai-section__header ai-section__header--lg ai-section__header--center">
              <h1 className="ai-section__title">{t('title')}</h1>
              <div className="ai-section__desc">{t('description')}</div>
              <Link href={`/${selectedLanguage}`} className="ai-btn ai-btn--primary ai-btn--lg" type="button">
                {t('button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
