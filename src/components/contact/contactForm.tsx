'use client';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';

import { axiosOpen } from 'src/api/axiosInstance';
import SuccessFormIcon from 'src/assets/images/successForm.svg';
import { contactFormSchema } from 'src/constant/formValidations';
import { ContactFormState } from 'src/types';

import InputComponent from '../form/Input';
import Loading from '../ui/loading';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormState>({
    resolver: yupResolver(contactFormSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const _onSubmit: SubmitHandler<ContactFormState> = async (data) => {
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

  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <fieldset>
        <legend>Apply form</legend>
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
              <input id="name" {...register('name')} placeholder="Name, Surname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" {...register('email')} id="email" placeholder="email@mail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" {...register('message')} placeholder="Text here" />
            </div>
            <button type="submit" className='filled-gradient-btn'>Send</button>
          </>
        )}
      </fieldset>
    </form>
  );
};

export default ContactForm;
