'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Switch } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';
import Image from 'next/image';

import { useLogin } from 'src/api/login/mutation';
import { loginFormSchema } from 'src/constant/formValidations';

import GoogleIcon from '../../../public/googleIcon.svg';

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
  });

  const { mutate } = useLogin();

  const onSubmit = (values: LoginForm) => {
    mutate(
      {
        email: values?.email,
        password: values?.password,
      },
      {
        onSuccess: () => {},
        onError: () => {},
      }
    );
  };

  return (
    <NextUIProvider>
      {' '}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" {...register('email')} id="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" {...register('password')} id="password" placeholder="Enter password" />
        </div>
        <div className="form-details">
          {' '}
          <Switch>Remember me</Switch>
        </div>
        <button type="submit" className="filled-gradient-btn">
          Login
        </button>

        <div className="line"></div>

        <button type="submit" className="black-btn">
          <Image src={GoogleIcon} alt="sign in with Google" />
          Or sign in with Google
        </button>
        <p>
          Dont have an account? <span>Sign up now</span>
        </p>
      </form>
    </NextUIProvider>
  );
};

export default LoginForm;
