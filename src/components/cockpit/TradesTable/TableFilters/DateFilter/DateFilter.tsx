import React, { ReactElement, useContext, useState } from 'react';
import { DateRange } from '@mui/icons-material';
import { Box, IconButton, Switch, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';

import { TableQueryContext } from '../../../../../store/table-query.context';
import { useSnackBar } from '../../../../common/SnackBar/hooks/useSnackBar';

import { InputDatePicker } from './InputDatePicker';
import { ModalDateRangePicker } from './ModalDateRangePicker';

const DateFilter = (): ReactElement => {
   // env:
   const { showSnackBar } = useSnackBar();
   const { setQueryObject } = useContext(TableQueryContext);
   // component state:
   const [showDateInputs, setShowDateInputs] = useState<boolean>(false);
   // date pickers states:
   const [fromDate, setFromDate] = useState<Dayjs | null>(null);
   const [toDate, setToDate] = useState<Dayjs | null>(null);
   // handlers:
   const setFromDateHandler = (newValue: Dayjs | null) => {
      setShowDateInputs(true);
      setFromDate(newValue);
      setQueryObject((prev) => ({ ...prev, from: dayjs(newValue).format('YYYY-MM-DD') }));
   };
   const setToDateHandler = (newValue: Dayjs | null) => {
      setShowDateInputs(true);
      if (newValue && Number(newValue) < Number(fromDate)) {
         showSnackBar('Make sure that "to" value is bigger that "from" value', 'warning');
         return;
      }
      setToDate(newValue);
      setQueryObject((prev) => ({ ...prev, to: dayjs(newValue).format('YYYY-MM-DD') }));
   };

   const handleSwitchChange = () => {
      setShowDateInputs((prev) => {
         if (prev) {
            setFromDateHandler(null);
            setToDateHandler(null);
            return !prev;
         } else {
            return !prev;
         }
      });
   };

   // date range picker modal:
   const [showModalDateRangePicker, setShowModalDateRangePicker] = useState<boolean>(false);
   const openModalDateRangePickerHandler = () => {
      setShowModalDateRangePicker(true);
   };
   const closeModalDateRangePickerHandler = () => {
      setShowModalDateRangePicker(false);
   };
   const onResetHandler = () => {
      setFromDateHandler(null);
      setToDateHandler(null);
      setShowDateInputs(false);
      closeModalDateRangePickerHandler();
   };

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <AnimatePresence>
            {showDateInputs && (
               <motion.div
                  initial={{ opacity: 0, x: '100px' }}
                  animate={{ opacity: 1, x: '0px' }}
                  exit={{ opacity: 0, x: '100px' }}
                  transition={{ duration: 0.2, delay: 0.2 }}
               >
                  <Box display={{ xs: 'none', sm: 'none', md: 'flex' }}>
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
                           sx={{ color: 'rgba(255, 255, 255, 0.4)', fontWeight: 400 }}
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
               </motion.div>
            )}
         </AnimatePresence>
         <Box display='flex' justifyContent='center' alignItems='center' marginX={1}>
            <IconButton aria-label='delete' onClick={openModalDateRangePickerHandler}>
               <DateRange opacity={0.6} />
            </IconButton>
         </Box>
         <Switch
            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
            checked={showDateInputs}
            onChange={handleSwitchChange}
            size='small'
            inputProps={{ 'aria-label': 'controlled' }}
         />
         <ModalDateRangePicker
            onResetHandler={onResetHandler}
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
