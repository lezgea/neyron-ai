'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');
  }, []);

  return <div></div>;
};

export default Error;
