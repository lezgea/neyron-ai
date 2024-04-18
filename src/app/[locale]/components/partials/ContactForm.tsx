'use client';
import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { axiosOpen } from 'src/api/axiosInstance';
import SuccessFormIcon from 'src/assets/images/successForm.svg';
import ErrorNotification from 'src/assets/images/errorNotification.svg';
import { contactFormSchema } from 'src/constant/formValidations';
import { IContactFormState } from 'src/types';

import { LayoutContext } from '../../layoutContainer';
import Loading from './Loading';
import Input from './form/Input';
import Textarea from './form/Textarea';

const ContactForm = () => {
  const { selectedLanguage } = useContext(LayoutContext);
  const locale = useLocale();
  const t = useTranslations('contact');
  const tBtn = useTranslations('buttons');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<IContactFormState>({
    resolver: yupResolver(contactFormSchema),
  });

  const _onSubmit: SubmitHandler<IContactFormState> = async (data) => {
    setIsLoading(true);
    try {
      const resp = await axiosOpen.post('/contact-us-requests', data);
      if (resp.data.status === 200) {
        setIsLoading(false);
        setIsSuccess(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  if (selectedLanguage !== locale) {
    notFound();
  }

  return (
    <form onSubmit={handleSubmit(_onSubmit)} className="ai-form ai-form--contact">
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loading />
        </div>
      ) : isSuccess ? (
        <div className="success-message contact-success">
          <Image src={SuccessFormIcon} alt="success" />
          <span>Success</span>
        </div>
      ) : (
        <>
          <div className="ai-form__content">
            <div className="ai-form__body">
              <Input
                name="name"
                register={register}
                label={t('name')}
                placeholder={t('name')}
                variant="primary"
                // status={'danger'}
                // readOnly
                // disabled
                // suffix={<Image src={ErrorNotification} alt="" />}
                // prefix={<Image src={ErrorNotification} alt="" />}
              />
              <Input
                name="email"
                register={register}
                label={t('email')}
                placeholder={'email@mail.com'}
                variant="primary"
              />
              <Textarea
                name="message"
                register={register}
                label={t('message')}
                type={'textarea'}
                placeholder={'Text here'}
                variant="primary"
              />
            </div>
            <div className="ai-form__footer">
              <button type="submit" className="ai-btn ai-btn--tertiary">
                {tBtn('send')}
              </button>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default ContactForm;
