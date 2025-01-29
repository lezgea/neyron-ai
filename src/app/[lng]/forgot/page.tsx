"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useForgotPasswordMutation, useLoginUserMutation } from '@api/user-api';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormInput, Loader } from '@components/shared';
import { toast } from 'react-toastify';
import { EmailIcon, EyeClosedIcon, EyeIcon, GoogleIcon, Logo, } from '@assets/icons';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@components/shared/buttons';


interface IFormInput {
    email: string;
}


const ForgotPassword: React.FC = () => {
    const t = useTranslations();
    const lng = useLocale();
    const router = useRouter();

    const selectAuthData = createSelector(
        (state: RootState) => state.user.isAuthenticated,
        (isAuthenticated) => ({ isAuthenticated })
    );

    const { isAuthenticated } = useSelector(selectAuthData);

    const validationSchema = Yup.object().shape({
        email: Yup.string().required(t('emailNicknameIsRequired')),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // RTK Query mutation hook
    const [forgotPassword, { isLoading, error }] = useForgotPasswordMutation();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            // Passing rememberMe along with the login data
            const payload = {
                ...data,
            };

            await forgotPassword(payload).unwrap();
            router.push('/');
        } catch (err: any) {
            if (err?.data?.code === "UNEXPECTED_EXCEPTION = USER_NOT_FOUND") {
                toast.error("Email is not found");
            } else {
                toast.error(err.data?.message || 'An unexpected error occurred');
            }
        }
    };

    const togglePasswordVisibility = (): void => {
        setShowPassword(!showPassword);
    };

    if (isLoading) return <Loader />

    return (
        <div className="min-h-screen max-h-screen flex">
            <div className="w-full bg-white content-center px-8 py-[30px] lg:p-20 overflow-y-scroll">
                <div className="w-full mx-auto lg:max-w-md space-y-10 animate-right-svg">
                    <Link href={`/${lng}`} passHref title='Logo' className='w-full flex flex-col items-center justify-center lg:items-end'>
                        <Logo alt="Logo" className="h-[50px] w-[200px]" />
                    </Link>
                    <div className='flex flex-col text-center gap-2'>
                        <h1 className="text-4xl font-medium">{t('forgotPassword.title')}</h1>
                        <p className="mb-4 text-sm text-gray-600 text-center">{t('forgotPassword.description')}</p>
                    </div>
                    <form className="flex flex-col space-y-10 select-none" onSubmit={handleSubmit(onSubmit)}>
                        <FormInput
                            label={`${t('forgotPassword.email')}*`}
                            type='text'
                            name='email'
                            placeholder="example@company.com"
                            register={register}
                            errors={errors}
                            icon={<EmailIcon />}
                        />
                        <Button type="submit" style="black" size="large" label={t('forgotPassword.send')} />
                    </form>
                    <p className="mt-6 text-center font-light">
                        {t('register.dontHaveAnAccount')} <a href={`/${lng}/sign-up`} className="!text-gray-700 font-semi hover:!text-primaryLight transition duration-200 ease-in-out transform">{t('register.signUp')}</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
