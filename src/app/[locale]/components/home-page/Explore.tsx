import React, { useContext, useEffect } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ArrowIcon from 'src/assets/images/arrow.svg';
import LandingAnimation1 from '../../../../../public/landingAnimation1.riv';
import { LayoutContext } from '../../layoutContainer';
import SelectLanguage from '../selecLanguage/selectLanguage';

const Explore = () => {
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');
  const { rive, RiveComponent } = useRive(
    {
      src: LandingAnimation1,
      autoplay: true,
      stateMachines: 'State Machine 1',
      layout: new Layout({
        fit: Fit.Cover,
        alignment: Alignment.Center,
      }),
      shouldDisableRiveListeners: false,
    },
    {
      fitCanvasToArtboardHeight: true,
    }
  );

  useEffect(() => {
    if (rive) {
      rive?.play('figures');
      const eyeAnimation = () => {
        rive?.play('eyes animation');
      };
      setTimeout(eyeAnimation, 3000);
    }
  }, [rive]);

  const { selectedLanguage } = useContext(LayoutContext);
  return (
    <section className="section section--explore">
      <div className="container">
        <div className="section__content">
          <div className={'section__header section__header--lg section__header--' + selectedLanguage}>
            <h1 className="section__title">{t('exploreHead')}</h1>
            <p className="section__desc">{t('exploreText')}</p>
            <div className="ai-lang">
              <span>{t('languageText')}</span>
              <SelectLanguage />
            </div>
            <button className="ai-btn ai-btn--primary ai-btn--lg" type="button">
              <span>{tBtn('startButton')}</span>
              <Image src={ArrowIcon} alt="arrow-icon" />
            </button>
          </div>
        </div>
        {RiveComponent && <RiveComponent className="section__graphic section__graphic--explore" />}
      </div>
    </section>
  );
};

export default Explore;
