import React, { Dispatch, ReactElement, ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

interface Props {
   defaultValue: Dayjs | null;
   onChangeHandler: Dispatch<React.SetStateAction<Dayjs | null>>;
   name: string;
   label: string;
}

const DateTimeInput = ({ name, label, defaultValue, onChangeHandler }: Props): ReactElement => {
   const methods = useFormContext();
   return (
      <Controller
         name={name}
         defaultValue={defaultValue}
         control={methods.control}
         render={({ field: { onChange, ...restField } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DateTimePicker
                  label={label}
                  onChange={(event) => {
                     onChange(event);
                     onChangeHandler(event);
                  }}
                  renderInput={(params) => (
                     <TextField
                        fullWidth
                        error={!!methods.formState.errors[name]}
                        helperText={(methods.formState.errors[name]?.message ?? ' ') as ReactNode}
                        {...params}
                     />
                  )}
                  {...restField}
               />
            </LocalizationProvider>
         )}
      />
   );
};

export { DateTimeInput };
