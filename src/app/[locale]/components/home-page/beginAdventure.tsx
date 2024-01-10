import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Grid } from '@mui/material';

import ArrowIcon from 'src/assets/images/arrow.svg';
import Card1 from 'src/assets/images/backCard.svg';
import Card2 from 'src/assets/images/frontCard.svg';

const BeginAdventure = () => {
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');
  return (
    <section id="begin-adventure">
      <div className="container">
        {' '}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="cards-container">
              <div className="card-1">
                <Image src={Card1} alt="card-1" className="card" />
              </div>
              <div className="card-2">
                <Image src={Card1} alt="card-2" className="card" />
              </div>
              <div className="card-3">
                <Image src={Card2} alt="card-3" className="card" />
              </div>
            </div>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 className="page-head">{t('coursesHead')}</h1>
            <p className="biggerSize-text">{t('coursesText')}</p>
            <div className="gradient-btn">
              <button type="button">
                {tBtn('startButton')}
                <Image src={ArrowIcon} alt="arrow-icon" />
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default BeginAdventure;
