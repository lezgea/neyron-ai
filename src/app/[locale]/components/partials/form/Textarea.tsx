import React, { FC, useId } from 'react';
import { FieldValues } from 'react-hook-form';
import { getClassName } from 'src/utils';
import { InputStatus, InputVariant } from './Input';

interface TextareaProps extends Partial<FieldValues> {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  status?: InputStatus;
  variant?: InputVariant;
}

const Textarea: FC<TextareaProps> = (props) => {
  const id = useId();
  const {
    name,
    register,
    label,
    placeholder,
    value,
    defaultValue,
    rows,
    cols,
    maxLength,
    minLength,
    required,
    readOnly,
    disabled,
    autoComplete = 'on',
    status,
    variant = 'general',
    ...rest
  } = props;

  const cnFormControl = getClassName('ai-form__control', [
    'textarea',
    variant,
    status && status,
    disabled && 'disabled',
    readOnly && 'readonly',
  ]);

  return (
    <div className="ai-form__group">
      {label && (
        <label className="ai-form__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={cnFormControl}>
        <textarea
          id={id}
          {...register(name)}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          rows={rows}
          cols={cols}
          maxLength={maxLength}
          minLength={minLength}
          autoComplete={autoComplete}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Textarea;
