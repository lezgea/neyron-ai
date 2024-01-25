import React from 'react';

import { Grid } from '@mui/material';

import RegisterForm from './registerForm';

const Register = () => {
  return (
    <section id="login" className="container">
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <div className="login-box">
          <RegisterForm />
        </div>
      </Grid>
    </section>
  );
};

export default Register;
