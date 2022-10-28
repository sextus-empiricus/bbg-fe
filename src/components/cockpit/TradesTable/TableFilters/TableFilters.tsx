import React, { ReactElement } from 'react';
import { UserCurrenciesEntity } from '@backend';
import { Box } from '@mui/material';

import { CurrencyFilter } from './CurrencyFilter/CurrencyFilter';
import { DateFilter } from './DateFilter/DateFilter';

interface Props {
   userCurrencies: UserCurrenciesEntity[];
}

const tableFiltersH = 50;

const TableFilters = ({ userCurrencies }: Props): ReactElement => {
   return (
      <Box height={tableFiltersH} display='flex' justifyContent='space-between'>
         <Box display='flex' sx={{ maxWidth: { xs: 300, sm: 480 } }}>
            <CurrencyFilter userCurrencies={userCurrencies} />
         </Box>
         <Box display='flex' justifyContent='center' alignItems='center'>
            <DateFilter />
         </Box>
      </Box>
   );
};

export { TableFilters, tableFiltersH };
