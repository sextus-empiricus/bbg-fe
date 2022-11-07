import React, { ReactElement, useContext } from 'react';
import { TradeMinified } from '@backend';
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';

import { useActualCurrencyPrice } from '../../../../hooks/useActualCurrencyPrice';
import { CockpitContext } from '../../../../store/cockpit.context';
import { CockpitContextMode } from '../../../../types';

import { DisplayData } from './utils/DisplayData';
import { DoubleTd } from './DoubleTd';
import { RowButton } from './RowButton';

import classes from './TableRow.module.scss';

interface Props {
   trade: TradeMinified;
}

const TableRow = ({ trade }: Props): ReactElement => {
   const {
      mode: { value: mode },
   } = useContext(CockpitContext);
   const { data: actualCurrencyPrice } = useActualCurrencyPrice(trade.currency);
   const { currency, price, boughtFor, boughtAt, amount, iconUrl } = trade;
   const move: number = (actualCurrencyPrice * 100) / +price - 100;
   const worthToday: number = +boughtFor + (+boughtFor * move) / 100;

   const renderDateTd = () => {
      if (mode === CockpitContextMode.trades) {
         return (
            <td className={classes['td-date']} data-label='date'>
               {DisplayData.date(boughtAt)}
               <span className={classes.time}>{DisplayData.time(boughtAt)}</span>
            </td>
         );
      }
      if (mode === CockpitContextMode.history && trade.tradeHistory) {
         const { soldAt } = trade.tradeHistory;

         return (
            <DoubleTd
               mode='date'
               dataLabel='date'
               tooltipTiles={{
                  historical: 'purchase date',
                  actual: 'sell date',
               }}
               historicalValue={boughtAt}
               actualValue={soldAt}
            ></DoubleTd>
         );
      }
   };
   const renderInvests = () => {
      if (mode === CockpitContextMode.trades) {
         return (
            <DoubleTd
               dataLabel='invests'
               tooltipTiles={{
                  historical: 'invested',
                  actual: 'worth now',
               }}
               actualValue={+worthToday}
               historicalValue={+boughtFor}
            ></DoubleTd>
         );
      }
      if (mode === CockpitContextMode.history && trade.tradeHistory) {
         const { soldFor } = trade.tradeHistory;
         return (
            <DoubleTd
               dataLabel='entrance/exit'
               tooltipTiles={{
                  historical: 'entrance',
                  actual: 'exit',
               }}
               actualValue={+soldFor}
               historicalValue={+boughtFor}
            ></DoubleTd>
         );
      }
   };

   const renderPrices = () => {
      if (mode === CockpitContextMode.trades) {
         return (
            <DoubleTd
               dataLabel='price'
               tooltipTiles={{
                  historical: 'purchase price',
                  actual: 'actual price',
               }}
               actualValue={+actualCurrencyPrice}
               historicalValue={+price}
            ></DoubleTd>
         );
      }
      if (mode === CockpitContextMode.history && trade.tradeHistory) {
         return (
            <DoubleTd
               dataLabel='prices'
               tooltipTiles={{
                  historical: 'purchase price',
                  actual: 'sell price',
               }}
               actualValue={+trade.tradeHistory.price}
               historicalValue={+price}
            ></DoubleTd>
         );
      }
   };
   return (
      <motion.tr
         className={classes['Table-row']}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.2, ease: 'easeIn' }}
      >
         {renderDateTd()}
         <td className={classes['td-currency']} data-label='currency'>
            <div className={classes['td-currency-wrapper']}>
               <img
                  src={iconUrl ?? ''}
                  alt={currency + ' ' + 'icon'}
                  className={classes['td-currency-icon']}
               />
               {DisplayData.currency(currency)}
            </div>
         </td>
         <td data-label='amount'>
            <Tooltip title={DisplayData.amount(amount)}>
               <span>{DisplayData.amountMini(amount)}</span>
            </Tooltip>
         </td>
         {mode === CockpitContextMode.trades && (
            <td
               className={`${move >= 0 ? classes['text__profit'] : classes['text__loss']}`}
               data-label='move%'
            >
               {DisplayData.perc(+move)}
            </td>
         )}
         {renderInvests()}
         {renderPrices()}
         {mode === CockpitContextMode.history && trade.tradeHistory && (
            <DoubleTd
               mode='profit'
               dataLabel='profits'
               tooltipTiles={{
                  historical: 'percents',
                  actual: 'cash',
               }}
               actualValue={+trade.tradeHistory.profitCash}
               historicalValue={+trade.tradeHistory.profitPerc}
            ></DoubleTd>
         )}
         <td style={{ paddingRight: '30px', textAlign: 'right' }}>
            <RowButton tradeId={trade.id} />
         </td>
      </motion.tr>
   );
};

export { TableRow };
