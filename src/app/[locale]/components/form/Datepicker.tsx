import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface CustomSelectProps {
  control: Control;
  name: string;
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
            render={() => {
              return (
                <DatePicker
                slots={{
                    open
                }}
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
