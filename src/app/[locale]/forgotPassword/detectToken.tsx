'use client';

import { useSearchParams } from 'next/navigation';

import { Grid } from '@mui/material';

import ForgotPassword from './forgotPasswordForm';
import ResetPassword from './resetPasswordForm';

const DetectToken = () => {
  const searchParams = useSearchParams();

  const token = searchParams.get('token');
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      <div className="login-box">{token ? <ResetPassword /> : <ForgotPassword />}</div>
    </Grid>
  );
};

export default DetectToken;
