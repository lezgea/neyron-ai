import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  id: string;
  name: string;
  title: string;
  placeholder: string;
  register: UseFormRegister;
  type: string;
}

const InputComponent = ({ id, name, title, register, placeholder, type = 'text' }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        {...register(name as string)}
        placeholder={placeholder}
        className="form-input"
        type={type}
      />
    </div>
  );
};

export default InputComponent;
