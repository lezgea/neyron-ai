'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from '@mui/material';
import { useGetFile } from 'src/api/file/queries';
import { IDataType } from 'src/types';

const BlogCard = ({ elem, isLoading }: { elem: IDataType; isLoading: boolean }) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  let { data: file, isLoading: fileLoading } = useGetFile({
    path: elem?.cover?.filePath,
    responseType: 'blob',
  });

  useEffect(() => {
    if (file) {
      const blobURL = URL.createObjectURL(file);
      setImageSrc(blobURL);
    }
  }, [file, elem]);

  return (
    <Link href={`blog/${elem?.id}`} className="ai-blog">
      <div className="ai-blog__picture">
        {fileLoading ? (
          <Skeleton animation="wave" />
        ) : (
          <Image src={imageSrc as string} alt="blog-picture" width={350} height={350} />
        )}
      </div>
      <div className="ai-blog__details">
        <div className="ai-blog__title">{isLoading ? <Skeleton animation="wave" /> : elem?.title}</div>
        <div className="ai-blog__desc">{isLoading ? <Skeleton animation="wave" /> : elem?.description}</div>
      </div>
    </Link>
  );
};

export default BlogCard;
