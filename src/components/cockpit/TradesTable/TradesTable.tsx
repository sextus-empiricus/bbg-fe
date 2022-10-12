import React, { ReactElement, useContext, useEffect } from 'react';
import { TradeMinified } from '@backend';
import { Box } from '@mui/material';

import { TableQueryContext } from '../../../store/table-query.context';

import { useTrades } from './hooks/useTrades';
import { TableFilters } from './TableFilters/TableFilters';
import { TableRow } from './TableRow/TableRow';
import { ThActive } from './ThFilter/ThActive';

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
                  <ThActive isDynamic={true} title='date' widthPerc={25} />
                  <ThActive isDynamic={true} title='currency' widthPerc={10} />
                  <ThActive isDynamic={true} title='amount' widthPerc={10} />
                  <ThActive isDynamic={false} title='move' widthPerc={15} />
                  <ThActive isDynamic={true} title='invests' widthPerc={15} />
                  <ThActive isDynamic={true} title='prices' widthPerc={10} />
                  <ThActive isDynamic={false} title='' widthPerc={15} />
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
