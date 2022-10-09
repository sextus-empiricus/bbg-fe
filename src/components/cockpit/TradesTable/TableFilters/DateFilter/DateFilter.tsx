import React, { ReactElement, useState } from 'react';
import { DateRange } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

import { InputDatePicker } from './InputDatePicker';
import { ModalDateRangePicker } from './ModalDateRangePicker';

const DateFilter = (): ReactElement => {
   // date filter logic:
   const [fromDate, setFromDate] = React.useState<Dayjs | null>(dayjs('2022-01-01'));
   const [toDate, setToDate] = React.useState<Dayjs | null>(dayjs());
   const [showModalDateRangePicker, setShowModalDateRangePicker] = useState<boolean>(false);
   const openModalDateRangePickerHandler = () => {
      setShowModalDateRangePicker(true);
   };
   const closeModalDateRangePickerHandler = () => {
      setShowModalDateRangePicker(false);
   };

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <InputDatePicker
            label='filter start date'
            startDate={fromDate}
            setStartDateHandler={setFromDate}
         />
         <Box display='flex' justifyContent='center' alignItems='center' marginX={2}>
            <Typography
               variant='subtitle2'
               component='span'
               lineHeight='50px'
               sx={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 400 }}
            >
               to
            </Typography>
         </Box>
         <InputDatePicker
            label='filter to date'
            startDate={toDate}
            setStartDateHandler={setToDate}
         />
         <Box display='flex' justifyContent='center' alignItems='center' marginX={1}>
            <IconButton aria-label='delete' onClick={() => openModalDateRangePickerHandler()}>
               <DateRange opacity={0.7} />
            </IconButton>
         </Box>
         <ModalDateRangePicker
            closeModalHandler={closeModalDateRangePickerHandler}
            showModalDateRangePicker={showModalDateRangePicker}
            toDateValue={toDate}
            fromDateValue={fromDate}
            updateFromDateHandler={setFromDate}
            updateToDateHandler={setToDate}
         />
      </LocalizationProvider>
   );
};

export { DateFilter };
