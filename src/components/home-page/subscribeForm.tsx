'use client';
import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

import ErrorIcon from 'src/assets/images/errorIcon.svg';
import SuccessFormIcon from 'src/assets/images/successForm.svg';
import Loading from 'src/components/loading';

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const _onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Make a POST request to the API endpoint
      const resp = await axios.post('https://api.neyron.ai/v1/email-subscriptions', { email });
      if (resp.data.status === 200) {
        setIsLoading(false);
        setIsSuccess(true);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={_onSubmit}>
      {!isSuccess ? (
        <>
          <div className="form-group">
            <label id="email">Enter your email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: isError ? '1px solid #FF4A4A' : '' }}
              placeholder="email@mail.com"
            />
            {isError && (
              <div className="input-error">
                <Image src={ErrorIcon} alt="error" /> <span>Incorrect mail adress</span>
              </div>
            )}
            {isLoading && <Loading className="input-loading" />}
          </div>
          <button type="submit">Subscribe</button>
        </>
      ) : (
        <div className="success-message">
          <Image src={SuccessFormIcon} alt="success" />
          <span>Subscribed</span>
        </div>
      )}
    </form>
  );
};

export default SubscribeForm;
