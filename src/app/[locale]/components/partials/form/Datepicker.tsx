import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { FormDataProfile } from 'src/types';

interface CustomSelectProps {
  control: Control<FormDataProfile>;
  name: 'name' | 'birthDate' | 'surname' | 'email' | 'password' | 'gender' | 'countryId';
  title: string;
}

const DatepickerComponent = ({ control, name, title }: CustomSelectProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="form-group">
        <label htmlFor="">
          {title}
          <Controller
            control={control}
            name={name}
            render={({ field }) => {
              return (
                <DatePicker
                  sx={{
                    '&': {
                      width: '100%',
                      borderRadius: ' 0.3125rem',
                      marginTop: '0.44rem',
                    },
                    '& input': {
                      fontSize: '15px',
                      fontWeight: '400',
                      lineHeight: '18px',
                      color: '#616367',
                      padding: '0.85rem 0.9rem',
                    },
                  }}
                  onChange={(newValue) => {
                    if (field) {
                      field.onChange(new Date(newValue as Date));
                    }
                  }}
                />
              );
            }}
          />
        </label>
      </div>
    </LocalizationProvider>
  );
};

export default DatepickerComponent;
