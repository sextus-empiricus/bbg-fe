import React, { ReactElement } from 'react';
import { TradeMinified } from '@backend';
import { Box } from '@mui/material';

import { TableRow } from './TableRow/TableRow';
import { ThActive } from './ThFilter/ThActive';

import classes from './TradesTable.module.scss';

interface Props {
   tradesList: TradeMinified[];
}

const TradesTable = ({ tradesList }: Props): ReactElement => {
   return (
      <Box sx={{ width: '100%', height: '100%', overflowY: 'auto' }}>
         <table className={classes.TradesTable}>
            <thead>
               <tr>
                  <ThActive isDynamic={true} datasetName='boughtAt' title='date' widthPerc={25} />
                  <ThActive
                     isDynamic={true}
                     datasetName='currency'
                     title='currency'
                     widthPerc={10}
                  />
                  <ThActive isDynamic={true} datasetName='amount' title='amount' widthPerc={10} />
                  <ThActive isDynamic={false} title='move' widthPerc={15} />
                  <ThActive
                     isDynamic={true}
                     datasetName='boughtFor'
                     title='invests'
                     widthPerc={15}
                  />
                  <ThActive isDynamic={true} datasetName='price' title='prices' widthPerc={10} />
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
