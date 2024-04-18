import React, { FC, useId } from 'react';
import { FieldValues } from 'react-hook-form';
import { getClassName } from 'src/utils';

export type InputStatus = 'danger' | 'warning' | 'success' | null;
export type InputVariant = 'general' | 'primary' | 'secondary';
export type InputType =
  | 'checkbox'
  | 'color'
  | 'date'
  | 'email'
  | 'file'
  | 'hidden'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'search'
  | 'tel'
  | 'text'
  | 'time';

interface InputProps extends Partial<FieldValues> {
  name: string;
  type?: InputType;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  status?: InputStatus;
  variant?: InputVariant;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input: FC<InputProps> = (props) => {
  const id = useId();
  const {
    name,
    register,
    type = 'text',
    label,
    placeholder,
    value,
    defaultValue,
    readOnly,
    required,
    disabled,
    autoComplete = 'on',
    prefix,
    suffix,
    status,
    variant = 'general',
    ...rest
  } = props;

  const cnFormControl = getClassName('ai-form__control', [
    variant,
    type,
    status && status,
    disabled && 'disabled',
    readOnly && 'readonly',
    prefix && 'has-prefix',
    suffix && 'has-suffix',
  ]);

  return (
    <div className="ai-form__group">
      {label && (
        <label className="ai-form__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={cnFormControl}>
        {prefix && <span className="prefix">{prefix}</span>}
        <input
          id={id}
          {...register(name)}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          autoComplete={autoComplete}
          {...rest}
        />
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
    </div>
  );
};

export default Input;
