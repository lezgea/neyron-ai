import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormDataProfile } from 'src/types';

interface Props {
  id: string;
  name: 'name' | 'birthDate' | 'surname' | 'email' | 'password' | 'gender' | 'countryId';
  title: string;
  placeholder: string;
  register: UseFormRegister<FormDataProfile>;
  type: string;
  disabled: boolean;
  defaultValue: string;
}

const InputComponent = ({
  id,
  name,
  title,
  register,
  placeholder,
  type = 'text',
  disabled,
  defaultValue,
}: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        {...register(name)}
        placeholder={placeholder}
        className="form-input"
        type={type}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputComponent;
