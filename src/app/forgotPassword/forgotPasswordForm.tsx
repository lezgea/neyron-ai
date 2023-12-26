'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

import ActivateAccountModal from 'src/components/modal/activateAccountModal';
import { forgotPasswordSchema } from 'src/constant/formValidations';

interface ForgotPassword {
  email: string;
}

const ForgotPassword = () => {
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, watch } = useForm<ForgotPassword>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = () => {
    setVisible(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ActivateAccountModal
        visible={visible}
        setVisible={setVisible}
        emailValue={watch('email')}
        textForLink="A type literal property cannot have an initializer."
      />
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
