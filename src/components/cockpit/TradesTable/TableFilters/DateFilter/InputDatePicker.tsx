import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import classes from './InputDatePicker.module.scss';

interface Props {
   startDate: any;
   setStartDateHandler: any;
   label: any;
}

const InputDatePicker = ({ label, setStartDateHandler, startDate }: Props): ReactElement => {
   return (
      <DatePicker
         inputFormat='DD/MM/YYYY'
         label={label}
         value={startDate}
         onChange={(newValue) => {
            setStartDateHandler(newValue);
         }}
         renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <input ref={inputRef} {...inputProps} className={classes['date-picker-input']} />
            </Box>
         )}
      />
   );
};

export { InputDatePicker };
