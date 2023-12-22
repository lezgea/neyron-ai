'use client';
import React from 'react';
import { useRouter } from 'next/router';

const BlogDetails = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>{id}</div>;
};

export default BlogDetails;
