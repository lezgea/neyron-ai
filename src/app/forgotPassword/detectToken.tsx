'use client';

import { useSearchParams } from 'next/navigation';

import ForgotPassword from './forgotPasswordForm';
import ResetPassword from './resetPasswordForm';

const DetectToken = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  return token ? <ResetPassword /> : <ForgotPassword />;
};

export default DetectToken;
