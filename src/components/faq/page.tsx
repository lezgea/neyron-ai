import React from 'react';

import { Grid } from '@mui/material';

import AccordionComponent from 'src/components/accordion/accordion';

const Faq = () => {
  return (
    <section id="faq" className="container">
      <Grid container>
        <Grid item xs={12} className="faq-container">
          <h1 className="page-head">FAQ</h1>
          <div className="accordion-component">
            <AccordionComponent
              summary="Our engaging, gamified approach keeps you coming back for?"
              details="”Our platform connects you with a vibrant community of AI learners and experts. Share insights, ask questions, and find inspiration.”"
            />
            <AccordionComponent
              summary="Our engaging, gamified approach keeps you coming back for?"
              details="”Our platform connects you with a vibrant community of AI learners and experts. Share insights, ask questions, and find inspiration.”"
            />
            <AccordionComponent
              summary="Our engaging, gamified approach keeps you coming back for?"
              details="”Our platform connects you with a vibrant community of AI learners and experts. Share insights, ask questions, and find inspiration.”"
            />
            <AccordionComponent
              summary="Our engaging, gamified approach keeps you coming back for?"
              details="”Our platform connects you with a vibrant community of AI learners and experts. Share insights, ask questions, and find inspiration.”"
            />
            <AccordionComponent
              summary="Our engaging, gamified approach keeps you coming back for?"
              details="”Our platform connects you with a vibrant community of AI learners and experts. Share insights, ask questions, and find inspiration.”"
            />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Faq;
