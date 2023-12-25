'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Skeleton } from '@mui/material';

import { useGetFile } from 'src/api/file/queries';
import { DataType } from 'src/types';

const SingleBlogCard = ({ elem, isLoading }: { elem: DataType; isLoading: boolean }) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const { data: file, isLoading: fileLoading } = useGetFile({ path: elem?.cover?.filePath });

  useEffect(() => {
    if (file) {
      const blobURL = URL.createObjectURL(file);
      setImageSrc(blobURL);
    }
  }, [file, elem]);

  return (
    <Link href={`blog/${elem?.id}`}>
      {' '}
      <div className="card">
        {fileLoading ? (
          <Skeleton width={350} height={350} />
        ) : (
          <Image src={imageSrc as string} alt="blog_img" width={350} height={350} className="blog-img" />
        )}
        <div className="card-details">
          <div className="card-head">{isLoading ? <Skeleton /> : <p>{elem?.title}</p>}</div>
          <div className="card-text">{isLoading ? <Skeleton /> : <p>{elem?.description}</p>}</div>
        </div>
      </div>
    </Link>
  );
};

export default SingleBlogCard;
