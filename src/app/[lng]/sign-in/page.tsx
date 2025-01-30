"use client";

import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import { useLoginUserMutation } from '@api/user-api';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormInput, Loader } from '@components/shared';
import { toast } from 'react-toastify';
import { CominIllustration, EmailIcon, EyeClosedIcon, EyeIcon, GoogleIcon, Logo, } from '@assets/icons';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@components/shared/buttons';


interface IFormInput {
    email: string;
    password: string;
    rememberMe?: boolean;
}


const SignInContent: React.FC = () => {
    const t = useTranslations();
    const lng = useLocale();
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const selectAuthData = createSelector(
        (state: RootState) => state.user.isAuthenticated,
        (isAuthenticated) => ({ isAuthenticated })
    );

    const { isAuthenticated } = useSelector(selectAuthData);


    const validationSchema = Yup.object().shape({
        email: Yup.string().required(t('emailIsRequired')),
        password: Yup.string()
            .required(t('passwordIsRequired'))
            .min(6, t('atLeast6Characters')),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // RTK Query mutation hook
    const [loginUser, { isLoading, error }] = useLoginUserMutation();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            // Passing rememberMe along with the login data
            const payload = {
                ...data,
                rememberMe: data.rememberMe || false,
            };

            await loginUser(payload).unwrap();
            router.push('/');
        } catch (err: any) {
            if (err?.data?.code === "UNEXPECTED_EXCEPTION = USER_NOT_FOUND") {
                toast.error("User is not found");
            } else {
                toast.error(err.data?.message || 'An unexpected error occurred');
            }
        }
    };

    React.useEffect(() => {
        if (token) {
            router.push('/');
            Cookies.set('neyroken', token as string, {
                secure: process.env.NODE_ENV === 'production',
                expires: 47 / 24,
            });
        }
    }, [token]);


    const togglePasswordVisibility = (): void => {
        setShowPassword(!showPassword);
    };

    if (isAuthenticated) router.push('/')


    return (
        <div className='w-full flex justify-between'>
            <div className="relative min-h-screen max-h-screen flex items-center justify-center w-full content-center px-8 py-[30px] lg:p-20 overflow-y-scroll">
                <CominIllustration className='-ml-[500px] animate-right-svg' />
                <div className="w-full backdrop-blur-2xl absolute mx-auto lg:max-w-[500px] space-y-10 animate-left-svg bg-white/40 p-10 rounded-3xl">
                    <Link href={`/${lng}`} passHref title='Logo' className='w-full flex flex-col items-center justify-center lg:items-end'>
                        <Logo alt="Logo" className="h-[50px] w-[200px]" />
                        <h2 className='text-lg text-gray-400 font-regular'>{t('login.title')}</h2>
                    </Link>
                    <form className="flex flex-col space-y-5 select-none" onSubmit={handleSubmit(onSubmit)}>
                        <FormInput
                            label={`${t('login.email')}*`}
                            type='text'
                            name='email'
                            placeholder={t('login.email')}
                            register={register}
                            errors={errors}
                            icon={<EmailIcon />}
                        />
                        <FormInput
                            label={`${t('login.password')}*`}
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder={t('login.enterPassword')}
                            register={register}
                            errors={errors}
                            onClickIcon={togglePasswordVisibility}
                            icon={showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                        />
                        <div className="flex justify-between items-center pb-4 pt-1 select-none">
                            <label className="inline-flex items-center cursor-pointer">
                                {/* Hidden native checkbox */}
                                <input
                                    type="checkbox"
                                    className="hidden peer"
                                    {...register("rememberMe")}
                                />
                                {/* Custom checkbox */}
                                <span className="w-6 h-6 rounded-lg border-2 border-gray-300 flex items-center justify-center bg-white peer-checked:bg-blue-400 peer-checked:border-transparent transition-colors duration-200">
                                    {/* Checkmark Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 text-white hidden peer-checked:block"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="ml-2 text-gray-700">{t('login.rememberMe')}</span>
                            </label>
                            <Link href={`/${lng}/forgot`} className="!text-gray-700 font-medium hover:!text-purple transition duration-200 ease-in-out transform">{t('login.forgotPassword')}</Link>
                        </div>
                        <Button type="submit" style="black" size="large" label={t('login.signIn')} />
                        {/* <div className="text-center my-4">{t('or')}</div>
                    <Link
                        href="https://api.datarace.ai/oauth2/authorization/google"
                        type="button"
                        className="w-full h-[50px] bg-none text-primary py-2 rounded-xl hover:bg-black ring-2 ring-primary hover:ring-black hover:text-white hover:shadow-lg hover:shadow-neutral-300 hover:outline-none hover:-tranneutral-y-px focus:shadow-none focus:outline-none focus:ring-2 focus:ring-black flex items-center justify-center space-x-2 transition duration-200 ease-in-out transform animate-button"
                    >
                        <GoogleIcon />
                        <span className="font-regmed">{t('loginWithGoogle')}</span>
                    </Link> */}
                    </form>
                    <p className="mt-6 text-center font-light">
                        {t('login.createAccount')} <a href={`/${lng}/sign-up`} className="!text-gray-700 font-semi hover:!text-purple transition duration-200 ease-in-out transform">{t('register.signUp')}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

const SignIn: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <SignInContent />
        </Suspense>
    )
}

export default SignIn;
