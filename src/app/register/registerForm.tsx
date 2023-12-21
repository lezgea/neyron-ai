'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useGoogleLogin } from '@react-oauth/google';
import Image from 'next/image';
import Link from 'next/link';

import { Checkbox } from '@mui/material';

import { useLogin } from 'src/api/login/mutation';
import { RegisterFormSchema } from 'src/constant/formValidations';

import CheckBoxIcon from '../../../public/checkBox.svg';
import EyeIcon from '../../../public/eyeIcon.svg';
import GoogleIcon from '../../../public/googleIcon.svg';
interface RegisterForm {
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [inputType, setInputType] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterForm>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.log(error),
  });

  const { mutate } = useLogin();

  const onSubmit = (values: RegisterForm) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email')} id="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Create password</label>
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
        <Checkbox
          {...{ inputProps: { 'aria-label': 'Checkbox demo' } }}
          defaultChecked
          checkedIcon={<Image src={CheckBoxIcon} alt="checkBox" />}
          icon={<Image src={CheckBoxIcon} alt="checkBox" />}
          sx={{
            color: '#B4B4B4',
            borderRadius: 50,
            '&.Mui-checked': {
              color: '#4285F4',
            },
          }}
        />
        <p style={{ display: 'flex', alignItems: 'center' }}>
          I agree with
          <Link className="link-text" href="/register">
            user terms and conditiouns & privacy policy
          </Link>
        </p>
      </div>
      <button type="submit" className="filled-gradient-btn">
        Sign up
      </button>

      <div className="line"></div>

      <button type="submit" className="black-btn" onClick={() => login()}>
        <Image src={GoogleIcon} alt="sign in with Google" />
        Or sign up with Google
      </button>
      <p className="sign-up">
        Have an account?
        <Link href="/login" className="link-text">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
