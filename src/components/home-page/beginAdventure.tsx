import React from 'react';
import Image from 'next/image';

import { Grid } from '@mui/material';

import ArrowIcon from '../../../public/arrow.svg';
import Card1 from '../../../public/backCard.svg';
import Card2 from '../../../public/frontCard.svg';

const BeginAdventure = () => {
  return (
    <section id="begin-adventure" className="container">
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
          <h1 className="page-head">Begin Your AI Adventure</h1>
          <p className="biggerSize-text">
            Dive into the essentials of AI and see how it shapes our world with beginner-friendly course to
            ignite your AI passion.
          </p>
          <div className="gradient-btn">
            <button type="button">
              Let’s start
              <Image src={ArrowIcon} alt="arrow-icon" />
            </button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default BeginAdventure;
