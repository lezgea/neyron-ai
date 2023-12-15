import React from 'react';

import { Grid } from '@mui/material';

const Explore = () => {
  return (
    <section id="explore-landing" className="container">
      {' '}
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} className="explore-landing">
        <Grid item xs={7} className="explore-left">
          <h1 className="page-head">Explore AI and get addicted to fun</h1>
          <p className="biggerSize-text">Begin your AI Adventure with our Interactive Learning Platform!</p>
          <div className="language">
            <span>Language</span>
            <select name="language-select" id="lang-select">
              <option value="ENG" defaultValue={'ENG'}>
                Eng
              </option>
            </select>
          </div>
          <div className="gradient-btn">
            <button type="button">Let’s start</button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Explore;
