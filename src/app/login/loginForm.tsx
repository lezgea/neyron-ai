'use client';
import React, { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';

import { FormControlLabel, Switch } from '@mui/material';

import { useLogin } from 'src/api/login/mutation';
import EyeIcon from 'src/assets/images/eyeIcon.svg';
import GoogleIcon from 'src/assets/images/googleIcon.svg';
import { loginFormSchema } from 'src/constant/formValidations';
import useNotification from 'src/components/ui/useNotification';
import { setAuthCookies } from 'src/utils/cookie';

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [inputType, setInputType] = useState(true);
  const [checked, setChecked] = useState(false);

  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
  });

  const { mutate } = useLogin();
  const { showNotification } = useNotification();

  const onSubmit = (values: LoginForm) => {
    mutate(
      {
        email: values?.email,
        password: values?.password,
      },
      {
        onSuccess: (res) => {
          showNotification({ title: 'Success', variant: 'success' });
          setAuthCookies(res?.data?.data?.token);
        },
        onError: () => {
          showNotification({ title: 'Error', variant: 'error' });
        },
      }
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: boolean = event.target.checked;
    setChecked(newValue);
  };

  //   href={`${process.env.LOGIN_GOOGLE_URL as string}`}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email')} id="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="password-input">
          <input
            {...register('password')}
            id="password"
            placeholder="Enter password"
            type={inputType ? 'text' : 'password'}
          />
          <Image src={EyeIcon} alt="eye icon" onClick={() => setInputType(!inputType)} />
        </div>
      </div>
      <div className="form-details">
        <FormControlLabel
          value="remember"
          control={
            <Switch
              defaultChecked={true}
              className="remember-switch"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Remember me"
          labelPlacement="end"
        />
        <Link href="/forgotPassword" className="link-text">
          Forgot password?
        </Link>
      </div>
      <button type="submit" className="filled-gradient-btn">
        Login
      </button>

      <div className="line"></div>

      <Link href="https://api.neyron.ai/oauth2/authorization/google">
        <button type="button" className="black-btn">
          <Image src={GoogleIcon} alt="sign in with Google" />
          Or sign in with Google
        </button>
      </Link>
      <p className="sign-up">
        Dont have an account?
        <Link href="/register" className="link-text">
          Sign up now
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
