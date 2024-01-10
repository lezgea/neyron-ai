import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import ArrowIcon from 'src/assets/images/arrow.svg';
import { wrapWordWithSpan } from 'src/utils/wrapWordWithSpan';

const AboutUs = () => {
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');
  return (
    <section id="about-us">
      {' '}
      <h1 className="page-head">{t('aboutHead')}</h1>
      <div className="text">
        {' '}
        {/* {t('about')} */}
        <p dangerouslySetInnerHTML={{ __html: wrapWordWithSpan(t('aboutTextHead'), 'Neyron.ai') }}></p>
        <p dangerouslySetInnerHTML={{ __html: wrapWordWithSpan(t('aboutText'), 'Neyron.ai') }}></p>
      </div>
      <div className="gradient-btn">
        <button>
          {tBtn('startButton')} <Image src={ArrowIcon} alt="arrow-icon" />
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
