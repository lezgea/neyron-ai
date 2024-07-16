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

    let { data: imageData, isLoading: imageLoading } = useGetFile({
        path: data?.data?.cover?.filePath as string,
        responseType: 'blob'
    });

    const { data: content, isLoading: contentLoading } = useGetFile({
        path: data?.data?.content?.filePath as string,
        responseType: 'text'
    });

    useEffect(() => {
        if (imageData) {
            const blobURL = URL.createObjectURL(imageData);
            setImageSrc(blobURL);
        }
        if (!contentLoading) {
            setContentBlog(content);
        }
        console.log(contentBlog);
    }, [imageData, contentLoading]);

    return (
        <Grid container spacing={6} className='ai-blog__details'>
            <Grid item xs={6}>
                <div className='ai-blog__details__picture'>
                    {imageLoading ? (
                        <Skeleton animation='wave' />
                    ) : (
                        imageSrc && <Image src={imageSrc as string} alt='blog-image' width='400' height='300' />
                    )}
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className='ai-blog__details__content'>
                    <div className='ai-blog__details__content__header'>{data?.data?.title}</div>
                    <div className='ai-blog__details__content__body'>
                        <div className='ai-content ai-highlight'
                             dangerouslySetInnerHTML={{ __html: contentBlog }}></div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default BlogDetail;
