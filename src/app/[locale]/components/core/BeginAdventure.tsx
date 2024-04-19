import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';
import { ArrowRightIcon } from 'src/assets/icons';
import { AdventureCard1, AdventureCard2, AdventureCard3 } from 'src/assets/images';

const BeginAdventure = () => {
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');

  return (
    <section className="ai-section ai-section--adventure">
      <div className="container">
        <Grid container>
          <Grid item xs={6} sx={{ display: 'flex' }}>
            <div className="ai-section__graphic">
              <div className="cards-wrapper">
                <div className="card card--1">
                  <Image src={AdventureCard1} alt="card-1" className="card__picture" />
                </div>
                <div className="card card--2">
                  <Image src={AdventureCard2} alt="card-2" className="card__picture" />
                </div>
                <div className="card card--3">
                  <Image src={AdventureCard3} alt="card-3" className="card__picture" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex' }}>
            <div className="ai-section__content">
              <div className="ai-section__header ai-section__header--md">
                <h2 className="ai-section__title">{t('coursesHead')}</h2>
                <p className="ai-section__desc">{t('coursesText')}</p>
                <button className="ai-btn ai-btn--primary ai-btn--lg" type="button">
                  <span>{tBtn('startButton')}</span>
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default BeginAdventure;
