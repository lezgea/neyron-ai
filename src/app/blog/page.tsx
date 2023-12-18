import React from 'react';

import { Grid } from '@mui/material';

import BlogContainer from './blogContainer';

const Blog = () => {
  return (
    <section id="blog">
      <Grid container>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <h1 className="page-head">Blog</h1>
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <BlogContainer />
        </Grid>
      </Grid>
    </section>
  );
};

export default Blog;
