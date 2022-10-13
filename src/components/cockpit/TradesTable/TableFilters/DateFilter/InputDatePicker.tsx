import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';

import classes from './InputDatePicker.module.scss';

interface Props {
   dateValue: Dayjs | null;
   setStartDateHandler: (newValue: Dayjs | null) => void;
   label: string;
}

const InputDatePicker = ({ label, setStartDateHandler, dateValue }: Props): ReactElement => {
   return (
      <DatePicker
         inputFormat='DD/MM/YYYY'
         label={label}
         value={dateValue}
         onChange={(newValue) => {
            setStartDateHandler(newValue);
         }}
         renderInput={({ inputRef, inputProps }) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <input ref={inputRef} {...inputProps} className={classes['date-picker-input']} />
            </Box>
         )}
      />
   );
};

export { InputDatePicker };
