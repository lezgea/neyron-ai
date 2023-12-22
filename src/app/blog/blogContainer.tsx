'use client';
import React, { useState } from 'react';

import { Grid } from '@mui/material';

import { useGetBlogs } from 'src/api/blog/queries';
import Paginate from 'src/components/ui/paginate';

import OneBlog from './oneBlog';

const BlogContainer = () => {
  const [page, setPage] = useState<number>(0);

  const { data, isPreviousData, isLoading } = useGetBlogs({ page });

  return (
    <Grid container sx={{ minHeight: '80vh' }}>
      {' '}
      <Grid container spacing={2} sx={{ mt: 4, mb: 5 }}>
        {data?.data?.content?.map((elem) => (
          <Grid item xs={4} key={elem?.content?.id as number}>
            <OneBlog elem={elem} isLoading={isLoading} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
        {' '}
        <Paginate
          isPreviousData={isPreviousData}
          count={data?.data?.totalElements}
          recordSize={data?.data?.size}
          currentPage={page}
          onChange={(value) => {
            setPage(value);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default BlogContainer;
