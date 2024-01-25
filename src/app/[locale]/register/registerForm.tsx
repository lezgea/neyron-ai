'use client';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Checkbox } from '@mui/material';

import { useGetLanguages } from 'src/api/language/queries';
import { useRegister } from 'src/api/login/mutation';
import CheckBoxIcon from 'src/assets/images/checkBox.svg';
import CheckedIcon from 'src/assets/images/checkedIcon.svg';
import EyeIcon from 'src/assets/images/eyeIcon.svg';
import GoogleIcon from 'src/assets/images/googleIcon.svg';
// import { loginFormSchema } from 'src/constant/formValidations';
import { useNotification } from 'src/hooks/showNotification';

import ActivateAccountModal from '../components/modal/activateAccountModal';
import { LayoutContext } from '../layoutContainer';

interface RegisterForm {
  email: string;
  password: string;
  languageId?: number;
  source: string;
  campaignId: string;
}

const RegisterForm = () => {
  const { selectedLanguage } = useContext(LayoutContext);
  const t = useTranslations('register');
  const tModal = useTranslations('resetPasswordModal');
  const [inputType, setInputType] = useState(true);
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, watch } = useForm<RegisterForm>();
  const { data } = useGetLanguages();
  const { mutate } = useRegister();

  const onSubmit = (values: RegisterForm) => {
    mutate(
      {
        email: values?.email,
        password: values?.password,
        languageId: data?.data?.find((elem) => elem?.abbreviation === selectedLanguage)?.id as number,
        source: window.localStorage.getItem('source') || '',
        campaignId: window.localStorage.getItem('campaignId') || '',
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
      <h1>{t('head')}</h1>

      <ActivateAccountModal
        visible={visible}
        setVisible={setVisible}
        textForLink={tModal('reEnter')}
        emailValue={watch('email')}
      />
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
        <p>
          {selectedLanguage === 'az' || selectedLanguage === 'tr' ? (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <Link className="link-text" href="/register" style={{ marginRight: '6px' }}>
                {t('termsConditions')}
              </Link>
              {t('agree')}
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {t('agree')}
              <Link
                className="link-text"
                href="/register"
                style={{ marginLeft: '6px', wordBreak: 'break-all' }}
              >
                {t('termsConditions')}
              </Link>
            </span>
          )}
        </p>
      </div>
      <button type="submit" className="filled-gradient-btn">
        {t('signUp')}
      </button>

      <div className="line"></div>

      <Link href="https://api.neyron.ai/oauth2/authorization/google">
        <button type="submit" className="black-btn">
          <Image src={GoogleIcon} alt="sign in with Google" />
          {t('withGoogle')}
        </button>
      </Link>

      <p className="sign-up">
        {t('haveAnAccount')}
        <Link href={`/${selectedLanguage}/login`} className="link-text">
          {t('login')}
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
