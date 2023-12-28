'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { setAuthCookies } from 'src/utils/cookie';

const Success = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    setAuthCookies(searchParams.get('token') as string);
    router.push('/');
  }, []);

  return <div></div>;
};

export default Success;
