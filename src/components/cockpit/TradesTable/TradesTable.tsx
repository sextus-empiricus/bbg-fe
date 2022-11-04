import React, { ReactElement, useContext } from 'react';
import { TradeMinified } from '@backend';
import { Box } from '@mui/material';

import { CockpitContext } from '../../../store/cockpit.context';
import { CockpitContextMode, ColumnType } from '../../../types';

import { TableRow } from './TableRow/TableRow';
import { ThActive } from './ThActive/ThActive';
import { columnsWidth, columnsWidthKeys } from './constants';

import classes from './TradesTable.module.scss';

interface Props {
   tradesList: TradeMinified[];
}

const getColumnWidth = (mode: CockpitContextMode, key: columnsWidthKeys): number => {
   if (mode === CockpitContextMode.trades) {
      return columnsWidth.trades[key];
   }
   if (mode === CockpitContextMode.history) {
      return columnsWidth.history[key];
   }
   return 0;
};

const TradesTable = ({ tradesList }: Props): ReactElement => {
   const {
      mode: { value: mode },
   } = useContext(CockpitContext);

   return (
      <Box sx={{ width: '100%', height: '100%', overflowY: 'auto' }}>
         <table className={classes.TradesTable}>
            <thead>
               <tr>
                  <ThActive
                     columnType={ColumnType.DATE}
                     isDynamic={true}
                     title='date'
                     widthPerc={getColumnWidth(mode, 'date')}
                  />
                  <ThActive
                     columnType={ColumnType.CURRENCY}
                     isDynamic={true}
                     title='currency'
                     widthPerc={getColumnWidth(mode, 'currency')}
                  />
                  <ThActive
                     columnType={ColumnType.AMOUNT}
                     isDynamic={true}
                     title='amount'
                     widthPerc={getColumnWidth(mode, 'amount')}
                  />
                  {mode === CockpitContextMode.trades && (
                     <ThActive
                        columnType={ColumnType.MOVE}
                        isDynamic={false}
                        title='move'
                        widthPerc={getColumnWidth(mode, 'move')}
                     />
                  )}
                  <ThActive
                     columnType={ColumnType.INVESTS}
                     isDynamic={true}
                     title='invests'
                     widthPerc={getColumnWidth(mode, 'invests')}
                  />
                  <ThActive
                     columnType={ColumnType.PRICE}
                     isDynamic={true}
                     title='prices'
                     widthPerc={getColumnWidth(mode, 'price')}
                  />
                  {mode === CockpitContextMode.history && (
                     <ThActive
                        columnType={ColumnType.PROFIT}
                        isDynamic={true}
                        title='profit'
                        widthPerc={getColumnWidth(mode, 'profit')}
                     />
                  )}
                  <ThActive
                     columnType={ColumnType.BUTTON}
                     isDynamic={false}
                     title=''
                     widthPerc={getColumnWidth(mode, 'button')}
                  />
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
