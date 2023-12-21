import React, { useEffect, useState } from 'react';
import { Alignment, Fit, Layout, useRive, useStateMachineInput } from '@rive-app/react-canvas';
import Image from 'next/image';

import { Grid } from '@mui/material';

import ArrowIcon from '../../../public/arrow.svg';
import LandingAnimation1 from '../../../public/landingAnimation1.riv';

const Explore = () => {
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

  const [maxWidth, setMaxWidth] = useState();
  const [maxHeight, setMaxHeight] = useState();

  const xAxisInput = useStateMachineInput(rive, 'HitBox listener', 'xAxis', 0);
  const yAxisInput = useStateMachineInput(rive, 'HitBox listener', 'yAxis', 0);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      const bodyRect = body.getBoundingClientRect();
      setMaxWidth(bodyRect.right);
      setMaxHeight(bodyRect.bottom);
    }
  }, []);

  useEffect(() => {
    const update = (e) => {
      if (maxWidth && maxHeight && yAxisInput && xAxisInput) {
        xAxisInput.value = (e.x / maxWidth) * 100;
        yAxisInput.value = 100 - (e.y / maxHeight) * 100;
      }
    };
    window.addEventListener('mousemove', update);
    return () => {
      window.removeEventListener('mousemove', update);
    };
  }, [xAxisInput, yAxisInput, maxHeight, maxWidth]);

  return (
    <section id="explore-landing" className="container">
      {' '}
      <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} className="explore-landing">
        <Grid item xs={8} className="explore-left">
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
            <button type="button">
              Let’s start <Image src={ArrowIcon} alt="arrow-icon" />
            </button>
          </div>
        </Grid>
      </Grid>
      {RiveComponent && <RiveComponent className="rive-1" />}
    </section>
  );
};

export default Explore;
