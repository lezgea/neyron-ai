import React from 'react';
import Image from 'next/image';

import { Grid } from '@mui/material';

import Person2 from 'src/assets/images/anne.svg';
import ArrowIcon from 'src/assets/images/arrow.svg';
import Person4 from 'src/assets/images/khayal.svg';
import MonsterWithThanks from 'src/assets/images/monsterWithThanks.svg';
import Person1 from 'src/assets/images/roger.svg';
import Person3 from 'src/assets/images/samantha.svg';

const Feedbacks = () => {
  return (
    <section id="feedbacks">
      <Image src={MonsterWithThanks} alt="monster" className="feedback-image" />

      <div className="container">
        {' '}
        <Grid container className="feedback-container">
          <Grid item xs={12} className="feedback-content" sx={{ display: 'flex' }} spacing={2}>
            <Grid item xs={6} className="left-feedback">
              <div className="person-box">
                <div className="person-box-image">
                  {' '}
                  <Image src={Person1} alt="person1" />
                </div>
                <div className="person-box-detail">
                  <h5>Roger Smith</h5>
                  <p className="field-name">AI Engineer</p>
                  <p className="content">
                    ”Our platform connects you with a vibrant community of AI learners and experts.
                  </p>
                </div>
              </div>
              <div className="person-box">
                <div className="person-box-image">
                  {' '}
                  <Image src={Person2} alt="person2" />
                </div>
                <div className="person-box-detail">
                  <h5>Anne Johnes</h5>
                  <p>Student</p>
                  <p className="content">Share insights, ask questions, and find inspiration.”</p>
                </div>
              </div>
              <div className="person-box">
                <div className="person-box-image">
                  {' '}
                  <Image src={Person3} alt="person1" />
                </div>
                <div className="person-box-detail">
                  <h5>Samantha Smith</h5>
                  <p className="field-name">Graphic Designer</p>
                  <p className="content">
                    ”Our platform connects you with a vibrant community of AI learners and experts. Share
                    insights, ask questions, and find inspiration.”
                  </p>
                </div>
              </div>
              <div className="person-box">
                <div className="person-box-image">
                  {' '}
                  <Image src={Person4} alt="person2" />
                </div>
                <div className="person-box-detail">
                  <h5>Khayal Aliyev</h5>
                  <p>Product Manager</p>
                  <p className="content">
                    ”Our platform connects you with a vibrant community of AI learners and experts. Share
                    insights, ask questions, and find inspiration.”
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} className="right-feedback" container>
              <Grid
                item
                xs={12}
                className="feedback-head-container"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                <h1 className="page-head">Feedbacks</h1>
                <div className="text">
                  Welcome to <span>Neyron.ai</span> - Your AI Learning Companion At <span>Neyron.ai</span>,
                  our mission is to make Artificia
                </div>
                <div className="gradient-btn">
                  <button>
                    Join Now <Image src={ArrowIcon} alt="arrow-icon" />
                  </button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Feedbacks;
