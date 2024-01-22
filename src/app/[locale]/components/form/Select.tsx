import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Select, { GroupBase, StylesConfig } from 'react-select';
import { useTranslations } from 'next-intl';

import { FormDataProfile } from 'src/types';

interface CustomSelectProps<T> {
  options: T[];
  control: Control<FormDataProfile>;
  name: 'name' | 'birthDate' | 'surname' | 'email' | 'password' | 'gender' | 'countryId';
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string;
  title: string;
}
interface CustomState {
  isFocused: boolean;
}

const SelectComponent = <T extends object>({
  options,
  control,
  name,
  getOptionLabel,
  getOptionValue,
  title,
}: CustomSelectProps<T>) => {
  const t = useTranslations('select');

  const customStyles: StylesConfig<T, boolean, GroupBase<T>> = {
    control: (base: object, state: CustomState) => ({
      ...base,
      padding: '0.25rem 0.81rem',
      borderRadius: '0.3125rem',
      cursor: 'pointer',
      border: state.isFocused ? '0' : '1px solid #DFE4EC',
      outline: 0,
      '&:hover': {
        border: '1px solid #DFE4EC',
      },
      boxShadow: '0 !important',
      marginTop: '0.44rem',
    }),
    menuList: (base: object) => ({
      ...base,
      maxHeight: '200px',
    }),
    multiValue: (base: object) => ({
      ...base,
      borderRadius: '12px',
    }),
    valueContainer: (base: object) => ({
      ...base,
      padding: 0,
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (base: object) => ({
      ...base,
      paddingLeft: '0px 0px 0px 8px',
    }),
    placeholder: (provided: object) => ({
      ...provided,
      color: 'transparent',
    }),
  };

  return (
    <div className="form-group">
      <label htmlFor="">
        {title}
        <Controller
          control={control}
          name={name}
          render={() => {
            return (
              <Select
                styles={customStyles}
                options={options}
                getOptionLabel={getOptionLabel}
                getOptionValue={getOptionValue}
                isMulti={false}
                noOptionsMessage={() => t('noOption')}
              />
            );
          }}
        />
      </label>
    </div>
  );
};

export default SelectComponent;
