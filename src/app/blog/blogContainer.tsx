'use client';
import React, { useState } from 'react';

import { Grid } from '@mui/material';

import { useGetBlogs } from 'src/api/blog/queries';
import Paginate from 'src/components/ui/paginate';

import OneBlog from './oneBlog';

const BlogContainer = () => {
  const [page, setPage] = useState<number>(0);

  const { data, isPreviousData } = useGetBlogs({ page });
  console.log(data);
  return (
    <Grid container spacing={2} sx={{ mt: 4, mb: 5 }}>
      {data?.data?.content?.map((elem) => (
        <Grid item xs={4} key={elem?.content?.id as number}>
          <OneBlog elem={elem} />
        </Grid>
      ))}
      <Paginate
        isPreviousData={isPreviousData}
        count={data?.totalElements}
        recordSize={data?.size}
        currentPage={page}
        onChange={(event, value) => {
          setPage(value);
        }}
      />
    </Grid>
  );
};

export default BlogContainer;
