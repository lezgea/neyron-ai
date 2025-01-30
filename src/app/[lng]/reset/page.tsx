"use client";

import React, { Suspense, useState } from 'react';
import { useResetPasswordMutation } from '@api/user-api';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormInput, Loader } from '@components/shared';
import { toast } from 'react-toastify';
import { EyeClosedIcon, EyeIcon, Logo, } from '@assets/icons';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@components/shared/buttons';


interface IFormInput {
    resetPassword: string;
    confirmResetPassword: string;
}

const validationSchema = Yup.object().shape({
    resetPassword: Yup.string()
        .required('Password is required')
        .min(3, 'Password must be at least 3 characters'),
    confirmResetPassword: Yup.string()
        .required('Password confirmation is required')
        .oneOf([Yup.ref('resetPassword')], 'Passwords must match'),
});


const ResetPasswordContent: React.FC = () => {
    const t = useTranslations();
    const lng = useLocale();
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const selectAuthData = createSelector(
        (state: RootState) => state.user.isAuthenticated,
        (isAuthenticated) => ({ isAuthenticated })
    );

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // RTK Query mutation hook
    const [resetPassword, { isLoading, error }] = useResetPasswordMutation();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            if (token) {
                const payload = {
                    ...data,
                    token: token,
                };
                await resetPassword(payload).unwrap();
                router.push('/');
            }
        } catch (err: any) {
            if (err?.data?.code === "UNEXPECTED_EXCEPTION = USER_NOT_FOUND") {
                toast.error("Something went wrong");
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
                    <div className='flec flex-col gap-4 text-center'>
                        <h2 className="text-2xl font-semi">{t('resetPassword.title')}</h2>
                        <p className="mb-4 text-sm text-gray-600">{t('resetPassword.description')}</p>
                    </div>
                    <form className="flex flex-col space-y-5 select-none" onSubmit={handleSubmit(onSubmit)}>
                        <FormInput
                            label={`${t('resetPassword.password')}*`}
                            type={showPassword ? "text" : "password"}
                            name='resetPassword'
                            placeholder={t('resetPassword.enterPassword')}
                            register={register}
                            errors={errors}
                            onClickIcon={togglePasswordVisibility}
                            icon={showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                        />
                        <FormInput
                            label={`${t('resetPassword.confirmPassword')}*`}
                            type={showPassword ? "text" : "password"}
                            name='confirmResetPassword'
                            placeholder={t('resetPassword.confirmPassword')}
                            register={register}
                            errors={errors}
                            onClickIcon={togglePasswordVisibility}
                            icon={showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                        />
                        <Button type="submit" style="black" size="large" label={t('resetPassword.submit')} />
                    </form>
                    <p className="mt-6 text-center font-light">
                        {t('register.dontHaveAnAccount')} <a href={`/${lng}/sign-up`} className="!text-gray-700 font-semi hover:!text-purple transition duration-200 ease-in-out transform">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};


const ResetPassword: React.FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <ResetPasswordContent />
        </Suspense>
    );
};

export default ResetPassword;
