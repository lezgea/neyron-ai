'use client';
import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

import { axiosOpen } from 'src/api/axiosInstance';
import SuccessFormIcon from 'src/assets/images/successForm.svg';
import { contactFormSchema } from 'src/constant/formValidations';
import { IContactFormState } from 'src/types';

import { LayoutContext } from '../../layoutContainer';
// import InputComponent from '../form/Input';
import Loading from '../ui/loading';

const ContactForm = () => {
  const { selectedLanguage } = useContext(LayoutContext);
  const t = useTranslations('contact');
  const tBtn = useTranslations('buttons');
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<IContactFormState>({
    resolver: yupResolver(contactFormSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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

  const locale = useLocale();
  if (selectedLanguage !== locale) {
    notFound();
  }
  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <fieldset>
        <legend>{t('apply')}</legend>
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
            <div className="form-group">
              {/* <InputComponent
                id="name"
                name="name"
                title="Name, Surname"
                placeholder="Name, Surname"
                register={register}
              /> */}
              <label htmlFor="name"></label>
              <input id="name" {...register('name')} placeholder={t('name')} />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('email')}</label>
              <input type="email" {...register('email')} id="email" placeholder="email@mail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('message')}</label>
              <textarea id="message" {...register('message')} placeholder={t('message')} />
            </div>
            <button type="submit" className="filled-gradient-btn">
              {tBtn('send')}
            </button>
          </>
        )}
      </fieldset>
    </form>
  );
};

export default ContactForm;
