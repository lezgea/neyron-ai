import React from 'react';

import { Grid } from '@mui/material';

import ForgotPassword from './forgotPasswordForm';

const Login = () => {
  return (
    <section id="login" className="container">
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <div className="login-box">
          <h1>Enter your email adress</h1>
          <ForgotPassword />
        </div>
      </Grid>
    </section>
  );
};

export default Login;
