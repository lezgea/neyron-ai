'use client';
import React, { ChangeEvent, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FormControlLabel, Switch } from '@mui/material';
import { useLogin } from 'src/api/login/mutation';
import { EyeIcon, EyeStrokeIcon, GoogleBrandIcon } from 'src/assets/icons';
import { loginFormSchema } from 'src/constant/formValidations';
import { setAuthCookies } from 'src/utils/cookie';

import useNotification from '../components/partials/useNotification';
import { LayoutContext } from '../layoutContainer';
import Input from '../components/partials/form/Input';

interface LoginForm {
    email: string;
    password: string;
    rememberMe?: boolean;
}

const LoginForm = () => {
    const { selectedLanguage } = useContext(LayoutContext);
    const { setUserIsActive, setSelectedLanguage } = useContext(LayoutContext);
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);

    const navigate = useRouter();
    const t = useTranslations('login');
    const { register, handleSubmit, getValues } = useForm<LoginForm>({
        resolver: yupResolver(loginFormSchema)
    });

    const { mutate } = useLogin();
    const { showNotification } = useNotification();

    const onSubmit = (values: LoginForm) => {
        mutate(
            {
                email: values.email,
                password: values.password,
                rememberMe: checked
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
                }
            }
        );
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue: boolean = event.target.checked;
        setChecked(newValue);
    };

    const handleShowPassword = () => {
        if (!!getValues('password')) {
            setShowPassword((prev) => !prev);
        }
    };

    let process;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='ai-form ai-form--login'>
            <div className='ai-form__content'>
                <div className='ai-form__header'>{t('title')}</div>
                <div className='ai-form__body'>
                    <Input
                        name={'email'}
                        type={'email'}
                        register={register}
                        label={t('email')}
                        placeholder={t('email')}
                        variant='primary'
                    />
                    <Input
                        name={'password'}
                        type={showPassword ? 'text' : 'password'}
                        register={register}
                        label={t('password')}
                        placeholder={t('enterPassword')}
                        variant='primary'
                        suffix={<div onClick={handleShowPassword}>{showPassword ? <EyeStrokeIcon /> :
                            <EyeIcon />}</div>}
                    />
                    <div className='ai-btns-wrapper'>
                        <FormControlLabel
                            className='ai-form__switch'
                            value='remember'
                            control={
                                <Switch
                                    defaultChecked={true}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label={t('rememberMe')}
                            labelPlacement='end'
                        />
                        <Link href={`/${selectedLanguage}/forgotPassword`} className='ai-btn ai-btn--text ai-btn--sm'>
                            {t('forgotPassword')}
                        </Link>
                    </div>
                </div>
                <div className='ai-form__footer'>
                    <div className='ai-form__footer__btns'>
                        <button type='submit' className='ai-btn ai-btn--tertiary'>
                            {t('signIn')}
                        </button>
                        <div className='line'></div>
                        <Link href={`${process.env.NEXT_LOGIN_GOOGLE_URL as string}`} className='ai-btn ai-btn--google'>
                            <GoogleBrandIcon />
                            <span>{t('loginWithGoogle')}</span>
                        </Link>
                    </div>
                    <div className='ai-form__footer__text'>
                        {t('createAccount')}
                        <Link className='ai-btn ai-btn--text ai-btn--sm' href={`/${selectedLanguage}/register`}>
                            {t('register')}
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
