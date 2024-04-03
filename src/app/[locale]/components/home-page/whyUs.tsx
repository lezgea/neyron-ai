import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import BeginnerFriendly from 'src/assets/images/beginnerFriendly.svg';
import CommunityDriven from 'src/assets/images/communityDriven.svg';
import Interactive from 'src/assets/images/interactive.svg';

const WhyUs = () => {
  const t = useTranslations('Index');
  return (
    <section className="section section--why">
      <div className="section__content">
        <div className="section__header section__header--lg">
          <h1 className="section__title">{t('whyUsHead')}</h1>
        </div>
        <div className="section__body">
          <div className="cards__wrapper">
            <div className="card">
              <div className="card__image">
                <Image src={BeginnerFriendly} alt="beginner-friendly" />
              </div>
              <div className="card__text">
                <div className="card__title">{t('whyUsText1Head')}</div>
                <div className="card__desc">{t('whyUsText1')}</div>
              </div>
            </div>
            <div className="card">
              <div className="card__image">
                <Image src={Interactive} alt="beginner-friendly" />
              </div>
              <div className="card__text">
                <div className="card__title">{t('whyUsText2Head')}</div>
                <div className="card__desc">{t('whyUsText2')}</div>
              </div>
            </div>
            <div className="card">
              <div className="card__image">
                <Image src={CommunityDriven} alt="beginner-friendly" />
              </div>
              <div className="card__text">
                <div className="card__title">{t('whyUsText3Head')}</div>
                <div className="card__desc">{t('whyUsText3')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
