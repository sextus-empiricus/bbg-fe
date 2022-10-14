import React, { ReactElement } from 'react';
import { TradeMinified } from '@backend';
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';

import { useCurrencyActualPrice } from '../../../../hooks/useCurrencyActualPrice';

import { DoubleTd } from './DoubleTd';
import { TableRowButton } from './TableRowButton';

import classes from './TableRow.module.scss';

interface Props {
   trade: TradeMinified;
}

const TableRow = ({ trade }: Props): ReactElement => {
   const actualPrice = useCurrencyActualPrice(trade.currency);
   const move = (actualPrice * 100) / Number(trade.price) - 100;

   return (
      <motion.tr
         className={classes['Table-row']}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.2, ease: 'easeIn' }}
      >
         <td className={classes['td-date']} data-label='date'>
            {new Date(trade.boughtAt).toLocaleDateString()}
            <span className={classes.time}>{new Date(trade.boughtAt).toLocaleTimeString()}</span>
         </td>
         <td className={classes['td-currency']} data-label='currency'>
            <div className={classes['td-currency-wrapper']}>
               <img
                  src={trade.iconUrl as string}
                  alt={trade.currency + ' icon'}
                  className={classes['td-currency-icon']}
               />
               {trade.currency.toUpperCase()}
            </div>
         </td>
         <td data-label='amount'>
            <Tooltip title={Number(trade.amount.toString())}>
               <div>{Number(trade.amount).toFixed(4)}</div>
            </Tooltip>
         </td>
         <td
            className={`${move >= 0 ? classes['text__profit'] : classes['text__loss']}`}
            data-label='move%'
         >
            {move >= 0 ? '+' + move.toFixed(2) : move.toFixed(2)}%
         </td>
         <DoubleTd
            dataLabel='invests'
            tooltipTiles={{
               historical: 'invested',
               actual: 'worth now',
            }}
            actualValue={+(+trade.boughtFor + (+trade.boughtFor * move) / 100).toFixed(2)}
            historicalValue={+(+trade.boughtFor).toFixed(2)}
         ></DoubleTd>
         <DoubleTd
            dataLabel='price'
            tooltipTiles={{
               historical: 'purchase price',
               actual: 'actual price',
            }}
            actualValue={actualPrice}
            historicalValue={+(+trade.price).toFixed(2)}
         ></DoubleTd>
         <td>
            <TableRowButton />
         </td>
      </motion.tr>
   );
};

export { TableRow };
