'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useForgotPassword } from 'src/api/forgotPassword/mutation';
import { forgotPasswordSchema } from 'src/constant/formValidations';

import ActivateAccountModal from '../components/modal/activateAccountModal';

interface IForgotPassword {
  email: string;
}

const ForgotPassword = () => {
  const [visible, setVisible] = useState(false);
  const t = useTranslations('forgotPassword');
  const tBtn = useTranslations('buttons');
  const { register, handleSubmit, watch } = useForm<IForgotPassword>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const { mutate } = useForgotPassword();

  const onSubmit = (values: IForgotPassword) => {
    setVisible(true);
    mutate(
      {
        email: values?.email,
      },
      {
        onSuccess: () => {
          setVisible(true);
        },
        onError: () => {
          alert('error');
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ActivateAccountModal
        visible={visible}
        setVisible={setVisible}
        emailValue={watch('email')}
        textForLink="A type literal property cannot have an initializer."
      />
      <h1>{t('head')}</h1>

      <div className="form-group">
        <label htmlFor="email">{t('email')}</label>
        <input type="email" {...register('email')} id="email" placeholder={t('enterEmail')} />
      </div>
      <p className="sign-up" style={{ justifyContent: 'flex-start' }}>
        {t('or')}
        <Link href="/login" className="link-text">
          {t('login')}
        </Link>
      </p>
      <button type="submit" className="filled-gradient-btn">
        {tBtn('send')}
      </button>
    </form>
  );
};

export default ForgotPassword;
