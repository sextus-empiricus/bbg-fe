import React, { ReactElement, useContext, useState } from 'react';
import { Close, DateRange } from '@mui/icons-material';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

import { TableQueryContext } from '../../../../../store/table-query.context';
import { useSnackBar } from '../../../../common/SnackBar/hooks/useSnackBar';

import { InputDatePicker } from './InputDatePicker';
import { ModalDateRangePicker } from './ModalDateRangePicker';

const DateFilter = (): ReactElement => {
   // env:
   const { showSnackBar } = useSnackBar();
   const { setQueryObject } = useContext(TableQueryContext);
   // date picker states:
   const [fromDate, setFromDate] = useState<Dayjs | null>(null);
   const [toDate, setToDate] = useState<Dayjs | null>(null);
   // handler:
   const setFromDateHandler = (newValue: Dayjs | null) => {
      setFromDate(newValue);
      setQueryObject((prev) => ({ ...prev, from: dayjs(newValue).format('YYYY-MM-DD') }));
   };
   const setToDateHandler = (newValue: Dayjs | null) => {
      if (newValue && Number(newValue) < Number(fromDate)) {
         showSnackBar('Make sure that "to" value is bigger that "from" value', 'warning');
         return;
      }
      setToDate(newValue);
      setQueryObject((prev) => ({ ...prev, to: dayjs(newValue).format('YYYY-MM-DD') }));
   };
   const resetDateFilter = () => {
      setFromDate(null);
      setToDate(null);
      setFromDateHandler(null);
      setToDateHandler(null);
   };

   // date range picker modal:
   const [showModalDateRangePicker, setShowModalDateRangePicker] = useState<boolean>(false);
   const openModalDateRangePickerHandler = () => {
      setShowModalDateRangePicker(true);
   };
   const closeModalDateRangePickerHandler = () => {
      setShowModalDateRangePicker(false);
   };
   // TODO - 🚩 from here; data-range inputs animations;
   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <Box display={fromDate || toDate ? 'flex' : 'none'}>
            <Tooltip title='reset'>
               <IconButton onClick={resetDateFilter}>
                  <Close sx={{ opacity: 0.7 }} />
               </IconButton>
            </Tooltip>
            <InputDatePicker
               label='filter start date'
               dateValue={fromDate}
               setStartDateHandler={setFromDateHandler}
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
               dateValue={toDate}
               setStartDateHandler={setToDateHandler}
            />
         </Box>
         <Box display='flex' justifyContent='center' alignItems='center' marginX={1}>
            <Tooltip title='Date range filter'>
               <IconButton aria-label='delete' onClick={() => openModalDateRangePickerHandler()}>
                  <DateRange opacity={0.7} />
               </IconButton>
            </Tooltip>
         </Box>
         <ModalDateRangePicker
            closeModalHandler={closeModalDateRangePickerHandler}
            showModalDateRangePicker={showModalDateRangePicker}
            fromDateValue={fromDate}
            toDateValue={toDate}
            updateFromDateHandler={setFromDateHandler}
            updateToDateHandler={setToDateHandler}
         />
      </LocalizationProvider>
   );
};

export { DateFilter };
