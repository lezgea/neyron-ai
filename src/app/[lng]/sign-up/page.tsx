import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { SignUpForm } from '@components/features';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { CominIllustration, Logo } from '@assets/icons';


export const metadata: Metadata = {
    title: "Sign Up | Neyron AI",
    description: "Neyron AI is an innovative platform designed to bring data scientists and AI enthusiasts together to compete in data-driven challenges.",
};


const SignUp: React.FC = () => {
    const t = useTranslations();
    const lng = useLocale();

    return (
        <div className='w-full flex justify-between'>
            <div className="relative min-h-screen max-h-screen flex items-center justify-center w-full content-center px-8 py-[30px] lg:p-20 overflow-y-scroll">
                <CominIllustration className='-ml-[500px] animate-right-svg' />
                <div className="w-full backdrop-blur-2xl absolute mx-auto lg:max-w-[500px] space-y-10 animate-left-svg bg-white/40 p-10 rounded-3xl">
                    <Link href={`/${lng}`} passHref title='Logo' className='w-full flex flex-col items-center justify-center lg:items-end'>
                        <Logo alt="Logo" className="h-[50px] w-[200px]" />
                        <h2 className='text-lg text-gray-400 font-regular'>{t('register.title')}</h2>
                    </Link>
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
