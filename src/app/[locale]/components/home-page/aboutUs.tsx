import React, { useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ArrowIcon from 'src/assets/images/arrow.svg';
import { wrapWordWithSpan } from 'src/utils/wrapWordWithSpan';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import LandingAnimation2 from '../../../../../public/landingAnimation2.riv';
import { Grid } from '@mui/material';

const AboutUs = () => {
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');

  const { rive, RiveComponent } = useRive(
    {
      src: LandingAnimation2,
      autoplay: true,
      stateMachines: 'State Machine 1',
      layout: new Layout({
        fit: Fit.Cover,
        alignment: Alignment.Center,
      }),
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

  return (
    <section className="ai-section ai-section--about">
      <div className="container">
        <Grid container>
          <Grid item xs={6}>
            <div className="ai-section__content">
              <div className="ai-section__header ai-section__header--lg">
                <h1 className="ai-section__title">{t('aboutHead')}</h1>
                <div className="ai-section__desc">
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
          </Grid>
          <Grid item xs={6}>
            {RiveComponent && <RiveComponent className="ai-section__graphic ai-section__graphic--about" />}
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default AboutUs;
