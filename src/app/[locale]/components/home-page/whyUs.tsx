import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import BeginnerFriendly from 'src/assets/images/beginnerFriendly.svg';
import CommunityDriven from 'src/assets/images/communityDriven.svg';
import Interactive from 'src/assets/images/interactive.svg';
import { Grid } from '@mui/material';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import SingleCharacterAnimation from '../../../../../public/singleCharacter.riv';

const WhyUs = () => {
  const t = useTranslations('Index');
  const { rive, RiveComponent } = useRive({
    src: SingleCharacterAnimation,
    autoplay: true,
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  useEffect(() => {
    if (rive) {
      rive?.play('figures');
      const eyeAnimation = () => {
        rive?.play('eyes animation');
      };
      setTimeout(eyeAnimation, 3000);
    }
  }, [rive]);
  return (
    <section className="ai-section ai-section--why">
      <div className="container">
        <Grid container>
          <Grid item xs={6}>
            {RiveComponent && <RiveComponent className="ai-section__graphic ai-section__graphic--why" />}
          </Grid>
          <Grid item xs={6}>
            <div className="ai-section__content">
              <div className="ai-section__header ai-section__header--lg">
                <h1 className="ai-section__title">{t('whyUsHead')}</h1>
              </div>
              <div className="ai-section__body">
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
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default WhyUs;
