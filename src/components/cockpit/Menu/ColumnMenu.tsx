import React, { ReactElement, useContext } from 'react';
import { AccountBalance, Add, QueryStats, TrendingUp } from '@mui/icons-material';
import { Box } from '@mui/material';

import { CockpitContext } from '../../../store/cockpit.context';
import { ModalFormContext } from '../../../store/modal-form.context';
import { CockpitContextMode, ModalFormMode } from '../../../types/enums';

import { ColumnButton } from './ColumnButton/ColumnButton';

import classes from './ColumnMenu.module.scss';

const ColumnMenu = (): ReactElement => {
   const modalFormContext = useContext(ModalFormContext);
   const cockpitContext = useContext(CockpitContext);

   const addTradeButtonHandler = () => {
      modalFormContext.open.open(ModalFormMode.ADD);
   };

   const onClickHandler = (mode: CockpitContextMode) => {
      cockpitContext.mode.set(mode);
   };

   return (
      <Box className={classes.ColumnMenu}>
         <ColumnButton
            type='color'
            icon={<Add />}
            text='Trade'
            onClickHandler={addTradeButtonHandler}
         />
         <ColumnButton
            type='regular'
            icon={<TrendingUp />}
            isActive={cockpitContext.mode.value === CockpitContextMode.trades}
            text='Trades'
            onClickHandler={() => onClickHandler(CockpitContextMode.trades)}
         />
         <ColumnButton
            type='regular'
            icon={<AccountBalance />}
            isActive={cockpitContext.mode.value === CockpitContextMode.history}
            text='History'
            onClickHandler={() => onClickHandler(CockpitContextMode.history)}
         />
         <ColumnButton
            type='regular'
            icon={<QueryStats />}
            isActive={cockpitContext.mode.value === CockpitContextMode.statistics}
            text='Statistics'
            onClickHandler={() => onClickHandler(CockpitContextMode.statistics)}
         />
      </Box>
   );
};

export { ColumnMenu };
