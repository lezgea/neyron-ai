import React from 'react';
import { RegisterOptions, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  id: string;
  name: string;
  title: string;
  placeholder: string;
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
}

const InputComponent = ({ id, name, title, register, placeholder }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input id={id} {...register(name as string)} placeholder={placeholder} />
    </div>
  );
};

export default InputComponent;
