'use client';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useGetLanguages } from 'src/api/language/queries';
import { useRegister } from 'src/api/login/mutation';
import { GoogleBrandIcon, EyeIcon, CheckIcon, EyeStrokeIcon } from 'src/assets/icons';
import { useNotification } from 'src/hooks/showNotification';
import ActivateAccountModal from '../components/partials/modal/activateAccountModal';
import { LayoutContext } from '../layoutContainer';
import Input from '../components/partials/form/Input';

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
  const { register, handleSubmit, getValues, watch } = useForm<RegisterForm>();
  const { data } = useGetLanguages();
  const { mutate } = useRegister();

  const [showPassword, setShowPassword] = useState(false);
  const [visible, setVisible] = useState(false);

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
      }
    );
  };

  const handleShowPassword = () => {
    if (!!getValues('password')) {
      setShowPassword((prev) => !prev);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ai-form ai-form--login">
      <ActivateAccountModal
        visible={visible}
        setVisible={setVisible}
        textForLink={tModal('reEnter')}
        emailValue={watch('email')}
      />
      <div className="ai-form__content">
        <div className="ai-form__header">{t('title')}</div>
        <div className="ai-form__body">
          <Input
            name={'email'}
            type={'email'}
            register={register}
            label={t('email')}
            placeholder={t('email')}
            variant="primary"
          />
          <Input
            name={'password'}
            type={showPassword ? 'text' : 'password'}
            register={register}
            label={t('password')}
            placeholder={t('enterPassword')}
            variant="primary"
            suffix={<div onClick={handleShowPassword}>{showPassword ? <EyeStrokeIcon /> : <EyeIcon />}</div>}
          />
          <div className="ai-btns-wrapper">
            <FormControlLabel
              className="ai-form__check"
              control={<Checkbox {...{ inputProps: { 'aria-label': 'Checkbox demo' } }} defaultChecked />}
              label={t('agree')}
            />
            <Link href={`/${selectedLanguage}/forgotPassword`} className="ai-btn ai-btn--text ai-btn--sm">
              {t('termsConditions')}
            </Link>
          </div>
        </div>
        <div className="ai-form__footer">
          <div className="ai-form__footer__btns">
            <button type="submit" className="ai-btn ai-btn--tertiary">
              {t('signUp')}
            </button>
            <div className="line"></div>
            <Link href="https://api.neyron.ai/oauth2/authorization/google" className="ai-btn ai-btn--google">
              <GoogleBrandIcon />
              {t('withGoogle')}
            </Link>
          </div>
          <div className="ai-form__footer__text">
            {t('haveAnAccount')}
            <Link href={`/${selectedLanguage}/login`} className="ai-btn ai-btn--text ai-btn--sm">
              {t('login')}
            </Link>
          </div>
        </div>
      </div>
    </form>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <h1>{t('title')}</h1>
    //   <ActivateAccountModal
    //     visible={visible}
    //     setVisible={setVisible}
    //     textForLink={tModal('reEnter')}
    //     emailValue={watch('email')}
    //   />
    //   <div className="form-group">
    //     <label htmlFor="email">{t('email')}</label>
    //     <input type="email" {...register('email')} id="email" placeholder={t('email')} />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="password">{t('password')}</label>
    //     <div className="password-input">
    //       <input
    //         {...register('password')}
    //         id="password"
    //         placeholder={t('enterPassword')}
    //         type={inputType ? 'text' : 'password'}
    //       />
    //       <Image src={EyeIcon} alt="eye icon" onClick={() => setInputType(!inputType)} />
    //     </div>
    //   </div>
    //   <div className="form-details">
    //     <Checkbox
    //       {...{ inputProps: { 'aria-label': 'Checkbox demo' } }}
    //       defaultChecked
    //       checkedIcon={<Image src={CheckBoxIcon} alt="checkBox" />}
    //       icon={<Image src={CheckedIcon} alt="checkBox" />}
    //       sx={{
    //         color: '#B4B4B4',
    //         borderRadius: 50,
    //         '&.Mui-checked': {
    //           color: '#4285F4',
    //         },
    //       }}
    //     />
    //     <p>
    //       {selectedLanguage === 'az' || selectedLanguage === 'tr' ? (
    //         <span style={{ display: 'flex', alignItems: 'center' }}>
    //           <Link className="link-text" href="/register" style={{ marginRight: '6px' }}>
    //             {t('termsConditions')}
    //           </Link>
    //           {t('agree')}
    //         </span>
    //       ) : (
    //         <span style={{ display: 'flex', alignItems: 'center' }}>
    //           {t('agree')}
    //           <Link
    //             className="link-text"
    //             href="/register"
    //             style={{ marginLeft: '6px', wordBreak: 'break-all' }}
    //           >
    //             {t('termsConditions')}
    //           </Link>
    //         </span>
    //       )}
    //     </p>
    //   </div>
    //   <button type="submit" className="filled-gradient-btn">
    //     {t('signUp')}
    //   </button>
    //   <div className="line"></div>
    //   <Link href="https://api.neyron.ai/oauth2/authorization/google">
    //     <button type="submit" className="black-btn">
    //       <Image src={GoogleIcon} alt="sign in with Google" />
    //       {t('withGoogle')}
    //     </button>
    //   </Link>
    //   <p className="sign-up">
    //     {t('haveAnAccount')}
    //     <Link href={`/${selectedLanguage}/login`} className="link-text">
    //       {t('login')}
    //     </Link>
    //   </p>
    // </form>
  );
};

export default RegisterForm;
