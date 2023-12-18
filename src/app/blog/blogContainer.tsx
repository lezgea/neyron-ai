'use client';
import React from 'react';
import Image from 'next/image';

import { Grid } from '@mui/material';

import BlogImg from '../../../public/blogImg.svg';

const arr = [
  {
    id: 1,
    img: BlogImg,
    cardHead: 'Confusing material?',
    cardText:
      'Dive into the essentials of AI and see how it shapes our world with beginner-friendly course to ignite your ',
  },
];
const BlogContainer = () => {
  arr?.map((elem) => (
    <Grid item xs={4}>
      {' '}
      <div className="card" key={elem?.id}>
        <Image src={elem?.img} alt="blog_img" />
        <div className="card-details">
          <div className="card-head">
            <p>{elem?.cardHead}</p>
          </div>
          <div className="card-text">
            <p>{elem?.cardText}</p>
          </div>
        </div>
      </div>
    </Grid>
  ));
};

export default BlogContainer;
