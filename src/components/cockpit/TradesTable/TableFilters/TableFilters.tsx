import React, { ReactElement, SyntheticEvent, useState } from 'react';
import { UserCurrenciesEntity } from '@backend';
import { Box } from '@mui/material';

import { CurrencyFilter } from './CurrencyFilter/CurrencyFilter';
import { DateFilter } from './DateFilter/DateFilter';

interface Props {
   userCurrencies: UserCurrenciesEntity[];
}

const TableFilters = ({ userCurrencies }: Props): ReactElement => {
   // currency filter logic:
   const [currencyFilterValue, setCurrencyFilterValue] = useState('all');
   const currencyFilterChangeHandler = (e: SyntheticEvent, newValue: string) => {
      setCurrencyFilterValue(newValue);
   };
   // date filter logic:
   // const [fromDate, setFromDate] = React.useState<Dayjs | null>(dayjs('2022-01-01'));
   // const [toDate, setToDate] = React.useState<Dayjs | null>(dayjs());
   // const [showModalDateRangePicker, setShowModalDateRangePicker] = useState<boolean>(false);
   // const openModalDateRangePickerHandler = () => {
   //    setShowModalDateRangePicker(true);
   // };
   // const closeModalDateRangePickerHandler = () => {
   //    setShowModalDateRangePicker(false);
   // };
   return (
      <Box display='flex' justifyContent='space-between'>
         <Box display='flex' sx={{ maxWidth: { xs: 320, sm: 480 } }}>
            <CurrencyFilter
               userCurrencies={userCurrencies}
               actualValue={currencyFilterValue}
               onChangeHandler={currencyFilterChangeHandler}
            />
         </Box>
         <Box display="flex" justifyContent="center">
            <DateFilter />
         </Box>
      </Box>
   );
};

export { TableFilters };
