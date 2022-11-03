import React, { ReactElement, useContext } from 'react';
import { TradeMinified } from '@backend';
import { Box } from '@mui/material';

import { CockpitContext } from '../../../store/cockpit.context';
import { CockpitContextMode } from '../../../types';

import { TableRow } from './TableRow/TableRow';
import { ThActive } from './ThFilter/ThActive';
import { columnsWidth, columnsWidthKeys } from './constants';

import classes from './TradesTable.module.scss';

interface Props {
   tradesList: TradeMinified[];
}

const getColumnWidth = (mode: CockpitContextMode, key: columnsWidthKeys) => {
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
                     isDynamic={true}
                     datasetName='boughtAt'
                     title='date'
                     widthPerc={getColumnWidth(mode, 'date')}
                  />
                  <ThActive
                     isDynamic={true}
                     datasetName='currency'
                     title='currency'
                     widthPerc={getColumnWidth(mode, 'currency')}
                  />
                  <ThActive
                     isDynamic={true}
                     datasetName='amount'
                     title='amount'
                     widthPerc={getColumnWidth(mode, 'amount')}
                  />
                  {mode === CockpitContextMode.trades && (
                     <ThActive
                        isDynamic={false}
                        title='move'
                        widthPerc={getColumnWidth(mode, 'move')}
                     />
                  )}
                  <ThActive
                     isDynamic={true}
                     datasetName='boughtFor'
                     title='invests'
                     widthPerc={getColumnWidth(mode, 'invests')}
                  />
                  <ThActive
                     isDynamic={true}
                     datasetName='price'
                     title='prices'
                     widthPerc={getColumnWidth(mode, 'prices')}
                  />
                  {mode === CockpitContextMode.history && (
                     <ThActive
                        isDynamic={true}
                        title='profit'
                        widthPerc={getColumnWidth(mode, 'profit')}
                     />
                  )}
                  <ThActive isDynamic={false} title='' widthPerc={getColumnWidth(mode, 'button')} />
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
