'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Grid } from '@mui/material';

import Person2 from 'src/assets/images/anne.svg';
import ArrowIcon from 'src/assets/images/arrow.svg';
import Person4 from 'src/assets/images/khayal.svg';
import MonsterWithThanks from 'src/assets/images/monsterWithThanks.svg';
import Person1 from 'src/assets/images/roger.svg';
import Person3 from 'src/assets/images/samantha.svg';
import ThanksComment from 'src/assets/images/thanksComment.svg';

const Feedbacks = () => {
  const [scrollStyle, setScrollStyle] = useState('hidden');

  const t = useTranslations('Index');
  const tBtn = useTranslations('buttons');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = ref?.current?.getBoundingClientRect().top as number;
      if (currentPosition <= 100) {
        setScrollStyle('auto');
      } else {
        setScrollStyle('hidden');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      ref.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="feedbacks">
      <div className="container">
        <Grid container className="feedback-container">
          <Grid item container xs={12} className="feedback-content" sx={{ display: 'flex' }} spacing={2}>
            <Grid
              item
              xs={6}
              className="left-feedback"
              ref={ref}
              style={{ overflow: scrollStyle, paddingTop: '26px' }}
            >
              <div className="person-box">
                <div className="person-box-image">
                  <Image src={Person1} alt="person1" />
                </div>
                <div className="person-box-detail">
                  <h5>{t('personName1')}</h5>
                  <p className="field-name">AI Engineer</p>
                  <p className="content">{t('personFeedback1')}</p>
                </div>
              </div>
              <div className="person-box">
                <div className="person-box-image">
                  <Image src={Person2} alt="person2" />
                </div>
                <div className="person-box-detail">
                  <h5>{t('personName2')}</h5>
                  <p>Student</p>
                  <p className="content">{t('personFeedback2')}</p>
                </div>
              </div>
              <div className="person-box">
                <div className="person-box-image">
                  <Image src={Person3} alt="person1" />
                </div>
                <div className="person-box-detail">
                  <h5>{t('personName3')}</h5>
                  <p className="field-name">Graphic Designer</p>
                  <p className="content">{t('personFeedback3')}</p>
                </div>
              </div>
              <div className="person-box">
                <div className="person-box-image">
                  <Image src={Person4} alt="person2" />
                </div>
                <div className="person-box-detail">
                  <h5>{t('personName4')}</h5>
                  <p>Product Manager</p>
                  <p className="content">{t('personFeedback4')}</p>
                </div>
              </div>
              <div className="person-box">
                <div className="person-box-image">
                  <Image src={Person4} alt="person2" />
                </div>
                <div className="person-box-detail">
                  <h5>{t('personName5')}</h5>
                  <p>Product Manager</p>
                  <p className="content">{t('personFeedback5')}</p>
                </div>
              </div>
              <div className="person-box">
                <div className="person-box-image">
                  <Image src={Person4} alt="person2" />
                </div>
                <div className="person-box-detail">
                  <h5>{t('personName6')}</h5>
                  <p>Product Manager</p>
                  <p className="content">{t('personFeedback6')}</p>
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
                <h1 className="page-head">{t('feedbackHead')}</h1>
                <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: t('feedbackText') }}
                  style={{ marginTop: '1.63rem' }}
                ></div>
                <div className="feedback-image">
                  <Image src={MonsterWithThanks} alt="monster" />
                  <Image src={ThanksComment} alt="thanks" className="thanks-image" />
                </div>
                <div className="gradient-btn">
                  <button>
                    {tBtn('join')}
                    <Image src={ArrowIcon} alt="arrow-icon" />
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
