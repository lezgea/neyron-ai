import React from 'react';

import { Grid } from '@mui/material';

import FaqContainer from './faqContainer';

const Faq = ({ mainPage }: { mainPage: boolean }) => {
  return (
    <section id="faq">
      <div className="container">
        {' '}
        <Grid container>
          <Grid item xs={12} className="faq-container">
            <h1 className="page-head">FAQ</h1>
            <div className="accordion-component">
              <FaqContainer mainPage={mainPage} />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Faq;
