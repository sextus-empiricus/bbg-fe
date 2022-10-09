import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

import { useTrades } from './hooks/useTrades';
import { TableFilters } from './TableFilters/TableFilters';
import { TableRow } from './TableRow/TableRow';

import classes from './TradesTable.module.scss';

const TradesTable = (): ReactElement => {
   const { tradesList, userCurrencies } = useTrades();

   return (
      <Box sx={{ width: '100%' }}>
         <TableFilters userCurrencies={userCurrencies ?? []} />
         <table className={classes.TradesTable}>
            <thead>
               <tr>
                  <td>date</td>
                  <td style={{ width: '140px' }}>currency</td>
                  <td style={{ width: '140px' }}>amount</td>
                  <td style={{ width: '170px' }}>move</td>
                  <td style={{ width: '180px' }}>invests</td>
                  <td style={{ width: '180px' }}>prices</td>
                  <td style={{ width: '150px' }}></td>
               </tr>
            </thead>
            <tbody>
               {tradesList.map((el: any) => (
                  <TableRow key={el.id} trade={el} />
               ))}
            </tbody>
         </table>
      </Box>
   );
};

export { TradesTable };
