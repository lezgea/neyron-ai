import React, { useEffect } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import Image from 'next/image';

import { Grid } from '@mui/material';

import BeginnerFriendly from 'src/assets/images/beginnerFriendly.svg';
import CommunityDriven from 'src/assets/images/communityDriven.svg';
import Interactive from 'src/assets/images/interactive.svg';

import LandingAnimation2 from '../../../public/landingAnimation2.riv';

const WhyUs = () => {
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
    <section id="why-us">
      <div className="container">
        {' '}
        <Grid container>
          <Grid item xs={4}>
            <h1 className="page-head">Why us?</h1>
            <div className="boxes">
              <div className="box">
                <div className="image">
                  <Image src={BeginnerFriendly} alt="beginner-friendly" />
                </div>
                <div className="box-text">
                  <div className="box-head">Beginner-Friendly</div>
                  <div className="box-info">
                    Start with 'Introduction to AI' - No Prior Experience Needed!
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <Image src={Interactive} alt="beginner-friendly" />
                </div>
                <div className="box-text">
                  <div className="box-head">Interactive & Addictive</div>
                  <div className="box-info">Experience Gamified Learning - Engage with Every Lesson!</div>
                </div>
              </div>
              <div className="box">
                <div className="image">
                  <Image src={CommunityDriven} alt="beginner-friendly" />
                </div>
                <div className="box-text">
                  <div className="box-head">Community-Driven</div>
                  <div className="box-info">Join Learners from all countries - Collaborate and Grow!</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        {RiveComponent && <RiveComponent className="rive-1" />}
      </div>
    </section>
  );
};

export default WhyUs;
