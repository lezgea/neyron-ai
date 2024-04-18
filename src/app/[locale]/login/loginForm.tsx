'use client';
import React, { ChangeEvent, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { FormControlLabel, Switch } from '@mui/material';

import { useLogin } from 'src/api/login/mutation';
import EyeIcon from 'src/assets/images/eyeIcon.svg';
import GoogleIcon from 'src/assets/images/googleIcon.svg';
import { loginFormSchema } from 'src/constant/formValidations';
import { setAuthCookies } from 'src/utils/cookie';

import useNotification from '../components/partials/useNotification';
import { LayoutContext } from '../layoutContainer';

interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

const LoginForm = () => {
  const { selectedLanguage } = useContext(LayoutContext);
  const { setUserIsActive, setSelectedLanguage } = useContext(LayoutContext);
  const [inputType, setInputType] = useState(true);
  const [checked, setChecked] = useState(false);

  const navigate = useRouter();
  const t = useTranslations('login');
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
        rememberMe: checked,
      },
      {
        onSuccess: (res) => {
          showNotification({ title: 'Success', variant: 'success' });
          setAuthCookies(res?.data?.data?.token);
          navigate.push('/');
          setUserIsActive(true);
          setSelectedLanguage(res?.data?.data?.language);
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
      <h1>{t('title')}</h1>
      <div className="form-group">
        <label htmlFor="email">{t('email')}</label>
        <input type="email" {...register('email')} id="email" placeholder={t('email')} />
      </div>
      <div className="form-group">
        <label htmlFor="password">{t('password')}</label>
        <div className="password-input">
          <input
            {...register('password')}
            id="password"
            placeholder={t('enterPassword')}
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
          label={t('rememberMe')}
          labelPlacement="end"
        />
        <Link href={`/${selectedLanguage}/forgotPassword`} className="link-text">
          {t('forgotPassword')}
        </Link>
      </div>
      <button type="submit" className="filled-gradient-btn">
        {t('signIn')}
      </button>

      <div className="line"></div>

      <Link href={`${process.env.NEXT_LOGIN_GOOGLE_URL as string}`}>
        <button type="button" className="black-btn">
          <Image src={GoogleIcon} alt="sign in with Google" />
          {t('loginWithGoogle')}
        </button>
      </Link>
      <p className="sign-up">
        {t('createAccount')}
        <Link href={`/${selectedLanguage}/register`} className="link-text">
          {t('register')}
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
