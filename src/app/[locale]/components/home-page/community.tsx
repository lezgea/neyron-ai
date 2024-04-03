import React, { useContext } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Grid } from '@mui/material';

import ArrowIcon from 'src/assets/images/arrow.svg';

import { LayoutContext } from '../../layoutContainer';

const Community = () => {
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');
  const { selectedLanguage } = useContext(LayoutContext);
  return (
    <section className="section section--community">
      <div className="container">
        <Grid container>
          <Grid item xs={6} sx={{ display: 'flex' }}>
            <div className="section__content">
              <div className={'section__header section__header--md section__header--' + selectedLanguage}>
                <h1 className="section__title">{t('communityHead')}</h1>
                <p className="section__desc">{t('communityText')}</p>
                <button className="ai-btn ai-btn--primary ai-btn--lg" type="button">
                  <span>{tBtn('join')}</span>
                  <Image src={ArrowIcon} alt="arrow-icon" />
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="cards-wrapper">
              <div className="cards-col">
                <div className="card card--red"></div>
                <div className="card card--purple"></div>
              </div>
              <div className="cards-col">
                <div className="card card--green"></div>
                <div className="card card--yellow"></div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Community;
