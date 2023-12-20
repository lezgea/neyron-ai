'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Skeleton } from '@mui/material';

import { useGetFile } from 'src/api/file/queries';

interface DataType {
  title: string;
  description: string;
  cover: Content;
  content: Content;
  publishDate: Date;
}

interface Content {
  id: number;
  filePath: string;
}

const OneBlog = ({ elem }: { elem: DataType }) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const { data: file, isLoading: fileLoading } = useGetFile({ path: elem?.cover?.filePath });

  useEffect(() => {
    if (file) {
      const blobURL = URL.createObjectURL(file);
      setImageSrc(blobURL);
    }
  }, [file, elem]);

  return (
    <div className="card">
      {true ? (
        <Skeleton sx={{width}} />
      ) : (
        <Image src={imageSrc} alt="blog_img" width={350} height={350} className="blog-img" />
      )}
      <div className="card-details">
        <div className="card-head">
          <p>{elem?.title}</p>
        </div>
        <div className="card-text">
          <p>{elem?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default OneBlog;
