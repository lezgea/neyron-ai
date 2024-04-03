'use client';
import { useEffect, useRef } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import { Grid } from '@mui/material';
import LandingAnimation2 from '../../../../../public/landingAnimation2.riv';
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
    }
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
    <main className="main main--home">
      <div className="ai-stack">
        <div className="ai-stack__card">
          <Explore />
        </div>
        <div className="ai-stack__card">
          <BeginAdventure />
        </div>
        <div className="ai-stack__card">
          <div className="container">
            <Grid container>
              <Grid item xs={6}>
                <div className="sections-wrapper">
                  <AboutUs />
                  <WhyUs />
                </div>
              </Grid>
              <Grid item xs={6}>
                {RiveComponent && <RiveComponent className="section__graphic section__graphic--about" />}
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="ai-stack__card">
          <Community />
        </div>
        <div className="ai-stack__card">
          <Feedbacks />
        </div>
        <div className="ai-stack__card ai-stack__card--auto">
          <Faq mainPage={true} />
        </div>
      </div>
    </main>
  );
};

export default ContainerPage;
