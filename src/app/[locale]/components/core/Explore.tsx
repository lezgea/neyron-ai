import React, { useContext } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import { useTranslations } from 'next-intl';
import LandingAnimation1 from '../../../../../public/landingAnimation1.riv';
import { LayoutContext } from '../../layoutContainer';
import SelectLanguage from '../partials/SelectLanguage';
import { Grid } from '@mui/material';
import { ArrowRightIcon } from '../../../../assets/icons/';
import Link from 'next/link';

const Explore = () => {
  const { selectedLanguage } = useContext(LayoutContext);
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');

  const { rive, RiveComponent } = useRive({
    src: LandingAnimation1,
    autoplay: true,
    stateMachines: 'State Machine 1',
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center
    }),
    shouldDisableRiveListeners: false
  });

  return (
      <section className='ai-section ai-section--explore'>
        <div className='container'>
          <Grid container>
            <Grid item xs={7} sx={{ display: 'flex' }}>
              <div className='ai-section__content'>
                <div
                    className={
                        'ai-section__header ai-section__header--lg ai-section__header--' + selectedLanguage
                    }
                >
                  <h1 className='ai-section__title'>{t('exploreHead')}</h1>
                  <p className='ai-section__desc'>{t('exploreText')}</p>
                  <div className='ai-lang'>
                    <span>{t('languageText')}</span>
                    <SelectLanguage />
                  </div>
                  <Link
                      className='ai-btn ai-btn--primary ai-btn--lg'
                      type='button'
                      href={`/${selectedLanguage}/chapters`}
                  >
                    <span>{tBtn('startButton')}</span>
                    {/* <Image src={ArrowIcon} alt="arrow-icon" /> */}
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={5}>
              {RiveComponent &&
                  <RiveComponent className='ai-section__graphic ai-section__graphic--explore' />}
            </Grid>
          </Grid>
        </div>
      </section>
  );
};

export default Explore;
