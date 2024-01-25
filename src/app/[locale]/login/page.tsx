import React from 'react';

import { Grid } from '@mui/material';

import LoginForm from './loginForm';

const Login = () => {
  return (
    <section id="login" className="container">
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <div className="login-box">
          <LoginForm />
        </div>
      </Grid>
    </section>
  );
};

export default Login;
