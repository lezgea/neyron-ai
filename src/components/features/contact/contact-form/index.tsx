"use client";

import { FormInput, Modal } from '@components/shared';
import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useLocale, useTranslations } from 'next-intl';
import { useSendContactDetailsMutation } from '@api/contact-api';
import { Button } from '@components/shared/buttons';


interface IFormInput {
    name: string;
    email: string;
    message: string;
}


export const ContactForm: React.FC = () => {
    const lng = useLocale();
    const t = useTranslations();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Full name is required'),
        email: Yup.string().email(t('invalidEmail')).required(t('emailIsRequired')),
        message: Yup.string().required('Message is required'),
    });


    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    // RTK Query mutation hook
    const [sendContactDetails, { isLoading, error }] = useSendContactDetailsMutation()

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            await sendContactDetails(data);
            toast.success("Success! We have received your data and will get back to you shortly!");
            reset();
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || err);
        }
    };


    return (
        <div className="w-full mx-auto animate-right-svg">
            <form className="space-y-5 select-none" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                    <FormInput
                        label={`${t('contact.name')}*`}
                        type='text'
                        name='name'
                        placeholder="John Doe"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label={`${t('contact.email')}*`}
                        type='email'
                        name='email'
                        placeholder="example@company.com"
                        register={register}
                        errors={errors}
                    />
                </div>
                {/* <FormInput
                    label={`${t('subject')}*`}
                    type="text"
                    name='subject'
                    placeholder={t('subject')}
                    register={register}
                    errors={errors}
                /> */}
                <FormInput
                    isTextarea={true}
                    label={`${t('contact.message')}*`}
                    name='message'
                    placeholder={t('contact.message')}
                    register={register}
                    errors={errors}
                />
                <div className='flex w-full'>
                    <Button
                        type="submit"
                        size="medium"
                        style="primary"
                        label={t('main.submit')}
                    />
                </div>
            </form>
        </div>
    )
}
