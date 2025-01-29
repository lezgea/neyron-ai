"use client";

import React from 'react';
import { Teamwork } from '@assets/icons';
import Link from 'next/link';
import { useActivateUserMutation } from '@api/user-api';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { toast } from 'react-toastify';


interface IOTPProps {
    token: string,
}

export const OTPScreen: React.FC<IOTPProps> = (props) => {
    let { token } = props;

    const lng = useLocale();
    const router = useRouter();

    const [otp, setOtp] = React.useState<number>();
    const [activateUser] = useActivateUserMutation();

    async function onActivateUser() {
        try {
            await activateUser({ token, otp }).unwrap();
            router.push(`/${lng}/sign-in`);
            toast.success('Your account has been activated successfully!');
        } catch (err: any) {
            console.log('Error on activation: ', err)
            toast.error(err.data?.error || 'User activation has failed');
        }
    }


    return (
        <div className="flex flex-col w-full items-center justify-center mx-auto lg:max-w-md space-y-7 animate-right-svg text-center">
            <Teamwork />
            <h2 className="text-[2.3rem] font-regmed">E-mail has been sent</h2>
            <p className="text-sm text-gray-600">
                Please confirm dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer
            </p>
            <input
                type="number"
                value={otp}
                placeholder={'OTP code'}
                onChange={(e) => setOtp(Number(e.target.value))}
                className="w-full h-[50px] backdrop-blur-2xl bg-white/10 px-5 py-2 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple transition duration-200 ease-in-out transform"
            />
            <div
                className="flex w-full text-center justify-center items-center px-6 py-3 text-white transition-all bg-primary rounded-xl hover:bg-primaryDark hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                aria-label="Back to homepage"
                onClick={onActivateUser}
            >
                Activate
            </div>
        </div>
    );
}

