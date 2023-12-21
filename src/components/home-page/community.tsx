import React from 'react';

import { Grid } from '@mui/material';

import ArrowIcon from '../../../public/arrow.svg';
import Image from 'next/image';

const Community = () => {
  return (
    <section id="community" className="container">
      <Grid container sx={{ height: '100%', paddingLeft: '1.87rem' }} spacing={2}>
        <Grid item xs={7} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 className="page-head">You’re not alone on this journey!</h1>
          <div className="text">
            {' '}
            <p>
              Our platform connects you with a vibrant community of AI learners and experts. Share insights,
              ask questions, and find inspiration.
            </p>
          </div>
          <div className="gradient-btn">
            <button>
              Join Now
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
    </section>
  );
};

export default Community;
