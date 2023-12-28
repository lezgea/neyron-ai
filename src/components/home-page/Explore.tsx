import React, { useEffect } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import Image from 'next/image';

import { Grid } from '@mui/material';

import ArrowIcon from 'src/assets/images/arrow.svg';

import LandingAnimation1 from '../../../public/landingAnimation1.riv';
import SelectLanguage from '../selecLanguage/selectLanguage';

const Explore = () => {
  const { rive, RiveComponent } = useRive(
    {
      src: LandingAnimation1,
      autoplay: true,
      stateMachines: 'State Machine 1',
      layout: new Layout({
        fit: Fit.Cover,
        alignment: Alignment.Center,
      }),
      shouldDisableRiveListeners: false,
    },
    {
      fitCanvasToArtboardHeight: true,
    },
  );

  useEffect(() => {
    if (rive) {
      rive?.play('figures');
      const eyeAnimation = () => {
        rive?.play('eyes animation');
      };
      setTimeout(eyeAnimation, 3000);
    }
  }, [rive]);

  return (
    <section id="explore-landing">
      <div className="container">
        {' '}
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} className="explore-landing">
          <Grid item xs={8} className="explore-left">
            <h1 className="page-head">Explore AI and get addicted to fun</h1>
            <p className="biggerSize-text">Begin your AI Adventure with our Interactive Learning Platform!</p>
            <div className="language">
              <span>Language</span>
              <SelectLanguage />
            </div>
            <div className="gradient-btn">
              <button type="button">
                Let’s start <Image src={ArrowIcon} alt="arrow-icon" />
              </button>
            </div>
          </Grid>
        </Grid>
        {RiveComponent && <RiveComponent className="rive-1" />}
      </div>
    </section>
  );
};

export default Explore;
