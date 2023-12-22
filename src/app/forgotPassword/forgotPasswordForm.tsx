'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';

import Modal from 'src/components/ui/Modal';
import { forgotPasswordSchema } from 'src/constant/formValidations';

import GmailIcon from '../../../public/gmailIcon.svg';
import OutlookIcon from '../../../public/outlookIcon.svg';
interface ForgotPassword {
  email: string;
}

const ForgotPassword = () => {
  const [visible, setVisible] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ForgotPassword>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = (values: ForgotPassword) => {
    setVisible(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal visible={visible} setVisible={setVisible} width="28rem" height="28rem">
        <div className="forgot-password-modal">
          {' '}
          <div className="modal-head">
            {' '}
            <h1>Check your email</h1>
            <p>We've sent a message to rahilali97@gmail.com with a link to activate your account.</p>
          </div>
          <div className="medias">
            <Link href="https://mail.google.com/mail" target="_blank">
              {' '}
              <Image src={GmailIcon} alt="gmail" />
              <span className="link-text">Open Gmail</span>
            </Link>
            <Link href="https://mail.outlook.com/mail" target="_blank">
              <Image src={OutlookIcon} alt="outlook" />
              <span className="link-text">Open Outlook</span>
            </Link>
          </div>
          <div className="bottom-text">
            <p>Didn't get an email? Check your spam folder!</p>
            <Link href="/forgotPassword" className="link-text" onClick={() => setVisible(false)}>
              Re-enter your email and try again
            </Link>
          </div>
        </div>
      </Modal>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email')} id="email" placeholder="Email" />
      </div>
      <p className="sign-up" style={{ justifyContent: 'flex-start' }}>
        or
        <Link href="/login" className="link-text">
          Log in
        </Link>
      </p>
      <button type="submit" className="filled-gradient-btn">
        Send
      </button>
    </form>
  );
};

export default ForgotPassword;
