'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { FormControlLabel, Switch } from '@mui/material';

import { useLogin } from 'src/api/login/mutation';
import { loginFormSchema } from 'src/constant/formValidations';
import { setAuthCookies } from 'src/utils/cookie';

import EyeIcon from '../../../public/eyeIcon.svg';
import GoogleIcon from '../../../public/googleIcon.svg';

interface LoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [inputType, setInputType] = useState(true);
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    // formState: { errors },
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
        onSuccess: () => {
          alert('onSuccess');
        },
        onError: () => {
          alert('error');
        },
      }
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: boolean = event.target.checked;
    setChecked(newValue);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('login/google/success')) {
      setAuthCookies(searchParams.get('token'));
      router.push('/');
    } else {
      router.push('/login');
    }
  }, [pathname]);

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
        {' '}
        <button type="button" className="black-btn">
          <Image src={GoogleIcon} alt="sign in with Google" />
          Or sign in with Google
        </button>
      </Link>
      <p className="sign-up">
        Dont have an account?{' '}
        <Link href="/register" className="link-text">
          Sign up now
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
