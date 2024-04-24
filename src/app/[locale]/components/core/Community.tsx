import React, { useContext } from 'react';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';
import { LayoutContext } from '../../layoutContainer';
import { ArrowRightIcon } from 'src/assets/icons';

const Community = () => {
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');
  const { selectedLanguage } = useContext(LayoutContext);
  return (
    <section className="ai-section ai-section--community">
      <div className="container">
        <Grid container>
          <Grid item xs={6} sx={{ display: 'flex' }}>
            <div className="ai-section__content">
              <div
                className={
                  'ai-section__header ai-section__header--md ai-section__header--' + selectedLanguage
                }
              >
                <h1 className="ai-section__title">{t('communityHead')}</h1>
                <p className="ai-section__desc">{t('communityText')}</p>
                <button className="ai-btn ai-btn--primary ai-btn--lg" type="button">
                  <span>{tBtn('join')}</span>
                  <ArrowRightIcon />
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
