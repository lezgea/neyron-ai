'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';
import Person2 from 'src/assets/images/anne.svg';
import ArrowIcon from 'src/assets/images/arrow.svg';
import Person4 from 'src/assets/images/khayal.svg';
import Person1 from 'src/assets/images/roger.svg';
import Person3 from 'src/assets/images/samantha.svg';
import MonsterWithThanks from 'src/assets/images/monsterWithThanks.svg';
import { wrapWordWithSpan } from 'src/utils/wrapWordWithSpan';

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
    <section className="ai-section ai-section--feedbacks">
      <div className="container">
        <Grid container>
          <Grid item xs={6} ref={ref} sx={{ overflow: scrollStyle }}>
            <div className="ai-scroll">
              <div className="ai-scroll__wrapper" id="scroll-one">
                <div className="ai-testimonial">
                  <div className="ai-testimonial__image">
                    <Image src={Person1} alt="person1" />
                  </div>
                  <div className="ai-testimonial__text">
                    <h5 className="ai-testimonial__name">{t('personName1')}</h5>
                    <p className="ai-testimonial__field">AI Engineer</p>
                    <p className="ai-testimonial__message">{t('personFeedback1')}</p>
                  </div>
                </div>
                <div className="ai-testimonial">
                  <div className="ai-testimonial__image">
                    <Image src={Person2} alt="person2" />
                  </div>
                  <div className="ai-testimonial__text">
                    <h5 className="ai-testimonial__name">{t('personName2')}</h5>
                    <p className="ai-testimonial__field">Project Manager</p>
                    <p className="ai-testimonial__message">{t('personFeedback2')}</p>
                  </div>
                </div>
                <div className="ai-testimonial">
                  <div className="ai-testimonial__image">
                    <Image src={Person3} alt="person1" />
                  </div>
                  <div className="ai-testimonial__text">
                    <h5 className="ai-testimonial__name">{t('personName3')}</h5>
                    <p className="ai-testimonial__field">Graphic Designer</p>
                    <p className="ai-testimonial__message">{t('personFeedback3')}</p>
                  </div>
                </div>
                <div className="ai-testimonial">
                  <div className="ai-testimonial__image">
                    <Image src={Person4} alt="person2" />
                  </div>
                  <div className="ai-testimonial__text">
                    <h5 className="ai-testimonial__name">{t('personName4')}</h5>
                    <p className="ai-testimonial__field">Product Manager</p>
                    <p className="ai-testimonial__message">{t('personFeedback4')}</p>
                  </div>
                </div>
              </div>
              <div className="ai-scroll__wrapper" id="scroll-two">
                <div className="ai-testimonial">
                  <div className="ai-testimonial__image">
                    <Image src={Person1} alt="person1" />
                  </div>
                  <div className="ai-testimonial__text">
                    <h5 className="ai-testimonial__name">{t('personName1')}</h5>
                    <p className="ai-testimonial__field">AI Engineer</p>
                    <p className="ai-testimonial__message">{t('personFeedback1')}</p>
                  </div>
                </div>
                <div className="ai-testimonial">
                  <div className="ai-testimonial__image">
                    <Image src={Person2} alt="person2" />
                  </div>
                  <div className="ai-testimonial__text">
                    <h5 className="ai-testimonial__name">{t('personName2')}</h5>
                    <p className="ai-testimonial__field">Project Manager</p>
                    <p className="ai-testimonial__message">{t('personFeedback2')}</p>
                  </div>
                </div>
                <div className="ai-testimonial">
                  <div className="ai-testimonial__image">
                    <Image src={Person3} alt="person1" />
                  </div>
                  <div className="ai-testimonial__text">
                    <h5 className="ai-testimonial__name">{t('personName3')}</h5>
                    <p className="ai-testimonial__field">Graphic Designer</p>
                    <p className="ai-testimonial__message">{t('personFeedback3')}</p>
                  </div>
                </div>
                <div className="ai-testimonial">
                  <div className="ai-testimonial__image">
                    <Image src={Person4} alt="person2" />
                  </div>
                  <div className="ai-testimonial__text">
                    <h5 className="ai-testimonial__name">{t('personName4')}</h5>
                    <p className="ai-testimonial__field">Product Manager</p>
                    <p className="ai-testimonial__message">{t('personFeedback4')}</p>
                  </div>
                </div>
              </div>
              <div className="ai-scroll__fade"></div>
            </div>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex' }}>
            <div className="ai-section__content">
              <div className="ai-section__header ai-section__header--md">
                <h1 className="ai-section__title">{t('feedbackHead')}</h1>
                <div className="ai-section__desc">
                  <div
                    className="ai-highlight"
                    dangerouslySetInnerHTML={{ __html: wrapWordWithSpan(t('feedbackText'), 'Neyron.ai') }}
                  ></div>
                </div>
                <button className="ai-btn ai-btn--primary ai-btn--lg" type="button">
                  <span>{tBtn('join')}</span>
                  <Image src={ArrowIcon} alt="arrow-icon" />
                </button>
              </div>
              <div className="ai-section__graphic ai-section__graphic--feedbacks">
                <Image src={MonsterWithThanks} alt="monster" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Feedbacks;
