import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Grid } from '@mui/material';

import ArrowIcon from 'src/assets/images/arrow.svg';

const Community = () => {
  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');
  return (
    <section id="community">
      <div className="container">
        {' '}
        <Grid container sx={{ height: '100%', paddingLeft: '1.87rem' }} spacing={2}>
          <Grid item xs={7} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 className="page-head">{t('communityHead')}</h1>
            <div className="text" style={{ marginTop: '1.69rem' }}>
              {' '}
              <p>{t('communityText')}</p>
            </div>
            <div className="gradient-btn">
              <button>
                {tBtn('join')}
                <Image src={ArrowIcon} alt="arrow-icon" />
              </button>
            </div>
          </Grid>
          <Grid item xs={5} container spacing={2}>
            <Grid item xs={6} container>
              <div className="red-bg" style={{ marginBottom: '0.87rem' }}></div>
              <div className="purple-bg"></div>
            </Grid>
            <Grid item xs={6} container>
              <div className="green-bg" style={{ marginBottom: '0.87rem' }}></div>
              <div className="yellow-bg"></div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Community;
