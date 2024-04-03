import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import ArrowIcon from 'src/assets/images/arrow.svg';
import { wrapWordWithSpan } from 'src/utils/wrapWordWithSpan';

const AboutUs = () => {
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');
  return (
    <section className="section section--about">
      <div className="section__content">
        <div className="section__header section__header--lg">
          <h1 className="section__title">{t('aboutHead')}</h1>
          <div className="section__desc">
            <div
              className="ai-highlight"
              dangerouslySetInnerHTML={{ __html: wrapWordWithSpan(t('aboutTextHead'), 'Neyron.ai') }}
            ></div>
            <div
              className="ai-highlight"
              dangerouslySetInnerHTML={{ __html: wrapWordWithSpan(t('aboutText'), 'Neyron.ai') }}
            ></div>
          </div>
          <button className="ai-btn ai-btn--primary ai-btn--lg" type="button">
            <span>{tBtn('startButton')}</span>
            <Image src={ArrowIcon} alt="arrow-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
