'use client';

import { useEffect } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

import { Grid } from '@mui/material';

import LandingAnimation2 from '../../../../../public/landingAnimation1.riv';

import AboutUs from './aboutUs';
import BeginAdventure from './beginAdventure';
import Community from './community';
import Explore from './Explore';
import Faq from './faq';
import Feedbacks from './feedbacks';
import WhyUs from './whyUs';

const ContainerPage = () => {
  const { rive, RiveComponent } = useRive(
    {
      src: LandingAnimation2,
      autoplay: true,
      stateMachines: 'State Machine 1',
      layout: new Layout({
        fit: Fit.Cover,
        alignment: Alignment.Center,
      }),
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
    <div className="stack">
      <div className="stack__card">
        <Explore />
      </div>
      <div className="stack__card">
        <BeginAdventure />
      </div>
      <div className="stack__card">
        <Grid container className="container">
          <Grid item xs={7} className="stacked_card_container">
            {' '}
            <div className="stacked_card">
              {' '}
              <AboutUs />
              <WhyUs />
            </div>
          </Grid>
          <Grid item xs={4}>
            {RiveComponent && <RiveComponent className="rive-1" />}
          </Grid>
        </Grid>
      </div>
      <div className="stack__card">
        <Community />
      </div>
      <div className="stack__card">
        <Feedbacks />
      </div>
      <div className="stack__card faq-stack">
        <Faq mainPage={true} />
      </div>
    </div>
  );
};

export default ContainerPage;
