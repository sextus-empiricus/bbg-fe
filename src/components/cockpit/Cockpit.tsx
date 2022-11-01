import React, { ReactElement, useContext } from 'react';
import { AccountBalance, Add, QueryStats, TrendingUp } from '@mui/icons-material';
import { Box } from '@mui/material';

import { ModalFormContext } from '../../store/modal-form.context';
import { ModalFormMode } from '../../types/enums';

import { CockpitHeader } from './CockpitHeader/CockpitHeader';
import { ColumnButton } from './Menu/ColumnButton/ColumnButton';
import { MobileNav, mobileNavH } from './MobileNav/MobileNav';
import { ModalForm } from './ModalForm/ModalForm';
import { useTrades } from './TradesTable/hooks/useTrades';
import { TableFilters, tableFiltersH } from './TradesTable/TableFilters/TableFilters';
import {
   PaginationController,
   paginationControllerH,
} from './TradesTable/TablePagination/PaginationController';
import { TradesTable } from './TradesTable/TradesTable';

import classes from './Cockpit.module.scss';

const Cockpit = (): ReactElement => {
   const modalFormContext = useContext(ModalFormContext);
   const {
      data: { tradesList, userCurrencies },
   } = useTrades();

   const addTradeButtonHandler = () => {
      modalFormContext.open.open(ModalFormMode.ADD);
   };

   return (
      <Box>
         <CockpitHeader />
         <Box className={classes.main}>
            <Box className={classes.left} display={{ xs: 'none', sm: 'block' }}>
               <Box className={classes.content}>
                  <ColumnButton
                     type='color'
                     icon={<Add />}
                     text='Trade'
                     onClickHandler={addTradeButtonHandler}
                  />
                  <ColumnButton type='regular' icon={<TrendingUp />} text='Trades' />
                  <ColumnButton type='regular' icon={<AccountBalance />} text='History' />
                  <ColumnButton type='regular' icon={<QueryStats />} text='Statistics' />
               </Box>
            </Box>
            <Box className={classes.right}>
               <TableFilters userCurrencies={userCurrencies} />
               <Box
                  position='relative'
                  height={{
                     xs: `calc(100% - ${tableFiltersH + paginationControllerH + mobileNavH}px)`,
                     sm: `calc(100% - ${tableFiltersH + paginationControllerH}px)`,
                  }}
                  className={classes.background}
               >
                  <TradesTable tradesList={tradesList} />
               </Box>
               <Box
                  position='relative'
                  bgcolor='rgba(255, 255, 255, 0.05)'
                  width='100%'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  borderRadius={{ xs: 'none', sm: '0 0 10px 0' }}
               >
                  <div className={classes['border-line']} />
                  <PaginationController />
               </Box>
               <Box display={{ xs: 'block', sm: 'none' }}>
                  <MobileNav />
               </Box>
            </Box>
         </Box>
         <ModalForm />
      </Box>
   );
};

export { Cockpit };
