import React from 'react';

import { Grid } from '@mui/material';

import FaqContainer from './faqContainer';

const Faq = () => {
  return (
    <section id="faq" className="container">
      <Grid container>
        <Grid item xs={12} className="faq-container">
          <h1 className="page-head">FAQ</h1>
          <div className="accordion-component">
            <FaqContainer />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Faq;
