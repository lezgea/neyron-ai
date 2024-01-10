import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import BeginnerFriendly from 'src/assets/images/beginnerFriendly.svg';
import CommunityDriven from 'src/assets/images/communityDriven.svg';
import Interactive from 'src/assets/images/interactive.svg';

const WhyUs = () => {
  const t = useTranslations("Index");
  return (
    <section id="why-us">
      <h1 className="page-head">{t('whyUsHead')}</h1>
      <div className="boxes">
        <div className="box">
          <div className="image">
            <Image src={BeginnerFriendly} alt="beginner-friendly" />
          </div>
          <div className="box-text">
            <div className="box-head">{t('whyUsText1Head')}</div>
            <div className="box-info">{t('whyUsText1')}</div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <Image src={Interactive} alt="beginner-friendly" />
          </div>
          <div className="box-text">
            <div className="box-head">{t('whyUsText2Head')}</div>
            <div className="box-info">{t('whyUsText2')}</div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <Image src={CommunityDriven} alt="beginner-friendly" />
          </div>
          <div className="box-text">
            <div className="box-head">{t('whyUsText3Head')}</div>
            <div className="box-info">{t('whyUsText3')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
