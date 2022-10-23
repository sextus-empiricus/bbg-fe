import React, { ReactElement } from 'react';
import { AccountBalance, Add, QueryStats, TrendingUp } from '@mui/icons-material';
import { Box } from '@mui/material';

import { ColumnButton } from './Menu/ColumnButton/ColumnButton';
import { useTrades } from './TradesTable/hooks/useTrades';
import { TableFilters } from './TradesTable/TableFilters/TableFilters';
import { PaginationController } from './TradesTable/TablePagination/PaginationController';
import { TradesTable } from './TradesTable/TradesTable';
import { CockpitHeader } from './CockpitHeader';

import classes from './Cockpit.module.scss';

const Cockpit = (): ReactElement => {
   const {
      data: { tradesList, userCurrencies },
   } = useTrades();

   return (
      <Box>
         <CockpitHeader />
         <Box className={classes.main}>
            <Box className={classes.left}>
               <Box className={classes.content}>
                  <ColumnButton type='color' icon={<Add />} text='Trade' />
                  <ColumnButton type='regular' icon={<TrendingUp />} text='Trades' />
                  <ColumnButton type='regular' icon={<AccountBalance />} text='History' />
                  <ColumnButton type='regular' icon={<QueryStats />} text='Statistics' />
               </Box>
            </Box>
            <Box className={classes.right}>
               <TableFilters userCurrencies={userCurrencies} />
               <Box height='calc(100% - 110px)' className={classes.background}>
                  <TradesTable tradesList={tradesList} />
               </Box>
               <Box
                  bgcolor='rgba(255, 255, 255, 0.05)'
                  position='absolute'
                  bottom={0}
                  left={0}
                  height={60}
                  width='100%'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  borderRadius='0 0 10px 0'
               >
                  <div className={classes['border-line']} />
                  <PaginationController />
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export { Cockpit };
