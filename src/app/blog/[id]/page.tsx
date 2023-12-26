'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Grid, Skeleton } from '@mui/material';

import { useGetBlogDetail } from 'src/api/blog/queries';
import { useGetFile } from 'src/api/file/queries';

const BlogDetail = ({ params }: { params: { id: number } }) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [contentBlog, setContentBlog] = useState('');
  const { data } = useGetBlogDetail({ id: params?.id });
  const { data: imageData, isLoading: imageLoading } = useGetFile({
    path: data?.data?.cover?.filePath,
    responseType: 'blob',
  });

  const { data: content, isLoading: contentLoading } = useGetFile({
    path: data?.data?.content?.filePath,
    responseType: 'text',
  });

  useEffect(() => {
    if (imageData) {
      const blobURL = URL.createObjectURL(imageData);
      setImageSrc(blobURL);
    }
    if (!contentLoading) {
      setContentBlog(content);
    }
  }, [imageData, contentLoading]);

  return (
    <section id="blog-detail" className="container">
      <Grid container>
        <Grid item xs={6} className="blog-image-container">
          {imageLoading ? (
            <Skeleton width={555} height={367} />
          ) : (
            <Image
              src={imageSrc as string}
              alt="blog image"
              className="blog-detail-image"
              width="400"
              height="300"
            />
          )}
        </Grid>
        <Grid item xs={6} className='blog-content-container'>
          <div className="gradient top-gradient"></div>
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: contentBlog }}></div>
          <div className="gradient bottom-gradient"></div>
        </Grid>
      </Grid>
    </section>
  );
};

export default BlogDetail;
