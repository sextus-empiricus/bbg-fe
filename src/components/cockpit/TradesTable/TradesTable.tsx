import React, { ReactElement, useContext, useEffect } from 'react';
import { TradeMinified } from '@backend';
import { Box } from '@mui/material';

import { TableQueryContext } from '../../../store/table-query.context';

import { useTrades } from './hooks/useTrades';
import { TableFilters } from './TableFilters/TableFilters';
import { TableRow } from './TableRow/TableRow';

import classes from './TradesTable.module.scss';

const TradesTable = (): ReactElement => {
   const { query } = useContext(TableQueryContext);
   const {
      data: { tradesList, userCurrencies },
      refetch,
   } = useTrades(query);

   useEffect(() => {
      /** After changing a query object in `TableQueryContext`
       * ReactQuery is fetching an API before actual context update.
       * For that reason we are triggering the refetch function here one more.*/
      refetch();
   }, [query]);

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
               {tradesList.map((el: TradeMinified) => (
                  <TableRow key={el.id} trade={el} />
               ))}
            </tbody>
         </table>
      </Box>
   );
};

export { TradesTable };
