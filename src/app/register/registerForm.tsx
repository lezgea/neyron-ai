'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';

import { Checkbox } from '@mui/material';

import { useRegister } from 'src/api/login/mutation';
import CheckBoxIcon from 'src/assets/images/checkBox.svg';
import CheckedIcon from 'src/assets/images/checkedIcon.svg';
import EyeIcon from 'src/assets/images/eyeIcon.svg';
import GoogleIcon from 'src/assets/images/googleIcon.svg';
import ActivateAccountModal from 'src/components/modal/activateAccountModal';
import { loginFormSchema } from 'src/constant/formValidations';
import { useNotification } from 'src/hooks/showNotification';

interface RegisterForm {
  email: string;
  password: string;
  languageId?: number;
}

const RegisterForm = () => {
  const [inputType, setInputType] = useState(true);
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, watch } = useForm<RegisterForm>({
    resolver: yupResolver(loginFormSchema),
  });

  const { mutate } = useRegister();

  const onSubmit = (values: RegisterForm) => {
    mutate(
      {
        email: values?.email,
        password: values?.password,
        languageId: 1,
      },
      {
        onSuccess: () => {
          setVisible(true);
        },
        onError: () => {
          useNotification({ text: 'Error', type: 'error' });
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ActivateAccountModal
        visible={visible}
        setVisible={setVisible}
        textForLink="Re-enter your email, password and try again."
        emailValue={watch('email')}
      />
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
          icon={<Image src={CheckedIcon} alt="checkBox" />}
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

      <Link href={process.env.LOGIN_GOOGLE_URL as string}>
        <button type="submit" className="black-btn">
          <Image src={GoogleIcon} alt="sign in with Google" />
          Or sign up with Google
        </button>
      </Link>

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
