"use client";

import { FormInput, Modal, TermsModal } from '@components/shared';
import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EmailIcon, EyeClosedIcon, EyeIcon } from '@assets/icons';
import { useRegisterUserMutation } from '@api/user-api';
import { toast } from 'react-toastify';
import { useLocale, useTranslations } from 'next-intl';
import { OTPScreen } from '../otp-screen';
import { Button } from '@components/shared/buttons';


interface IFormInput {
    email: string;
    password: string;
}


export const SignUpForm: React.FC = () => {
    const lng = useLocale();
    const t = useTranslations();

    const [terms, acceptTerms] = React.useState<boolean>(false);
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [activationToken, setActivationToken] = React.useState<string>();
    const [termsModal, setTermsModal] = React.useState<boolean>(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(t('invalidEmail'))
            .required(t('emailIsRequired')),
        password: Yup.string()
            .required(t('passwordIsRequired'))
            .min(6, t('atLeast6Characters')),
    });


    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    const [registerUser, { isLoading, error }] = useRegisterUserMutation();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            let response = await registerUser(data).unwrap();
            setActivationToken(response.data);
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    };

    const togglePasswordVisibility = (): void => {
        setShowPassword(!showPassword);
    };


    if (activationToken)
        return <OTPScreen token={activationToken} />


    return (
        <div className="w-full mx-auto lg:max-w-md animate-right-svg">
            <div>
                <h2 className="text-2xl font-semi mb-4 lg:text-start text-center">{t('register.signUp')}</h2>
            </div>
            <form className="flex flex-col space-y-5 select-none" onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    label={`${t('login.email')}*`}
                    type='email'
                    name='email'
                    placeholder="example@company.com"
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
                <div className="flex items-center pb-4 pt-1 select-none">
                    <label className="inline-flex items-center cursor-pointer">
                        {/* Hidden native checkbox */}
                        <input
                            type="checkbox"
                            className="hidden peer"
                            onChange={() => acceptTerms(!terms)}
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
                    </label>
                    <div className="ml-2 text-gray-700 hover:text-purple underline cursor-pointer" onClick={() => setTermsModal(true)}>{t('register.termsConditions')}</div>
                </div>
                <Button type="submit" style="black" size="large" label={t('register.signUp')} />
                {/* <div className="text-center my-4">{t('or')}</div>
                <Link
                    href="https://api.datarace.ai/oauth2/authorization/google"
                    type="button"
                    className="w-full h-[50px] bg-none text-primaryLight py-2 rounded-xl hover:bg-black ring-2 ring-primaryLight hover:ring-black hover:text-white hover:shadow-lg hover:shadow-neutral-300 hover:outline-none hover:-tranneutral-y-px focus:shadow-none focus:outline-none focus:ring-2 focus:ring-black flex items-center justify-center space-x-2 transition duration-200 ease-in-out transform animate-button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /><path d="M1 1h22v22H1z" fill="none" /></svg>
                    <span className="font-regmed">{t('registerWithGoogle')}</span>
                </Link> */}
            </form>
            <p className="mt-6 text-center font-light">
                {t('register.haveAnAccount')} <a href={`/${lng}/sign-in`} className="!text-gray-700 font-semi hover:!text-purple transition duration-200 ease-in-out transform">{t('login.signIn')}</a>
            </p>

            {/* <TermsModal
                visible={termsModal}
                onConfirm={() => acceptTerms(true)}
                onClose={() => setTermsModal(false)}
            /> */}
        </div>
    )
}


