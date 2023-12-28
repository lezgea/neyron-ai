'use client';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { useResetPassword } from 'src/api/forgotPassword/mutation';

interface IResetPassword {
  password: string;
  confirmPassword: string | undefined;
}
const ResetPassword = () => {
  const { register, handleSubmit } = useForm<IResetPassword>();
  const param = useSearchParams();
  const { mutate } = useResetPassword();
  const onSubmit = (values: IResetPassword) => {
    mutate({
      password: values?.password,
      confirmPassword: values?.confirmPassword as string,
      token: param.get('token') as string,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Password</label>
        <input type="password" {...register('password')} id="password" placeholder="Password" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Confirm password</label>
        <input
          type="password"
          {...register('confirmPassword')}
          id="confirmPassword"
          placeholder="Confirm password"
        />
      </div>
      <p className="sign-up" style={{ justifyContent: 'flex-start' }}>
        or
        <Link href="/login" className="link-text">
          Log in
        </Link>
      </p>
      <button type="submit" className="filled-gradient-btn">
        Sign In
      </button>
    </form>
  );
};

export default ResetPassword;
