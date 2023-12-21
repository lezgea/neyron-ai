import React from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import Image from 'next/image';

import { Grid } from '@mui/material';

import ArrowIcon from '../../../public/arrow.svg';
import LandingAnimation1 from '../../../public/landingAnimation2.riv';

const AboutUs = () => {
  const { rive, RiveComponent } = useRive(
    {
      src: LandingAnimation1,
      autoplay: true,
      animations: 'figures',
      layout: new Layout({
        fit: Fit.Cover,
        alignment: Alignment.Center,
      }),
    },
    {
      fitCanvasToArtboardHeight: true,
    }
  );
  return (
    <section id="about-us" className="container">
      <Grid container sx={{ height: '100%', paddingLeft: '1.87rem' }}>
        <Grid item xs={7} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 className="page-head">About us</h1>
          <div className="text">
            {' '}
            <p>
              Welcome to <span>Neyron.ai</span> - Your AI Learning Companion
            </p>
            <p>
              At <span>Neyron.ai</span>, our mission is to make Artificial Intelligence not just
              understandable but also enjoyable. Whether you're an AI enthusiast or a seasoned professional,
              we've created an environment where AI is accessible to everyone.
            </p>
          </div>
          <div className="gradient-btn">
            <button>
              Join Now <Image src={ArrowIcon} alt="arrow-icon" />
            </button>
          </div>
        </Grid>
      </Grid>
      {RiveComponent && <RiveComponent className="rive-1" />}
    </section>
  );
};

export default AboutUs;
