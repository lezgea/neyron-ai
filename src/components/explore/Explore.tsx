import { Grid } from '@mui/material';
import React from 'react';
import Figures from '../figures/Figures';

const Explore = () => {
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} className='explore-landing'>
      <Grid item xs={5} className="explore-left">
        <h1>Explore AI and get addicted to fun</h1>
        <p>Begin your AI Adventure with our Interactive Learning Platform!</p>
        <div className="language">
          <span>Language</span>
          <select name="language-select" id="lang-select">
            <option value="ENG" defaultValue={'ENG'}>
              Eng
            </option>
          </select>
        </div>
        <div className="start-btn">
          <button type="button">Let’s start</button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Figures />
      </Grid>
    </Grid>
  );
};

export default Explore;
