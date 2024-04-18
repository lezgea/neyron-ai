'use client';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useGetBlogs } from 'src/api/blog/queries';
import Paginate from '../components/partials/Paginate';
import BlogCard from './BlogCard';
import { Grid } from '@mui/material';

const Blog = () => {
  const [page, setPage] = useState<number>(0);
  const { data, isPreviousData, isLoading } = useGetBlogs({ page });
  const t = useTranslations('blog');

  return (
    <main className="ai-main ai-main--blogs">
      <section className="ai-section ai-section--blogs">
        <div className="container">
          <div className="ai-section__content">
            <div className="ai-section__header ai-section__header--center ai-section__header--sm">
              <h1 className="ai-section__title">{t('title')}</h1>
              <p className="ai-section__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <div className="ai-section__body">
              <Grid container rowSpacing={4} columnSpacing={2}>
                {data?.data?.content?.map((elem) => (
                  <Grid item xs={4} key={elem?.id} sx={{ display: 'flex' }}>
                    <BlogCard elem={elem} isLoading={isLoading} />
                  </Grid>
                ))}
              </Grid>
            </div>
            <div className="ai-section__footer">
              <Paginate
                isPreviousData={isPreviousData}
                count={data?.data?.totalElements}
                recordSize={data?.data?.size}
                currentPage={page}
                onChange={(value) => {
                  setPage(value);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
