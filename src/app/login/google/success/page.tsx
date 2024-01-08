'use client';
import { useContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { LayoutContext } from 'src/app/layout';
import { setAuthCookies } from 'src/utils/cookie';

const Success = () => {
  const router = useRouter();
  const { setUserIsActive } = useContext(LayoutContext);

  const searchParams = useSearchParams();
  useEffect(() => {
    setAuthCookies(searchParams.get('token') as string);
    setUserIsActive(true);
    router.push('/');
  }, []);

  return <div></div>;
};

export default Success;
