import React, { ReactElement } from 'react';
import { CurrencyExchange, DateRange } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

import classes from './DoubleTd.module.scss';

interface tooltipTiles {
   historical: string;
   actual: string;
}

interface Props {
   dataLabel: string;
   tooltipTiles?: tooltipTiles;
   historicalValue: number;
   actualValue: number;
}

const DoubleTd = ({
   dataLabel,
   tooltipTiles,
   historicalValue,
   actualValue,
}: Props): ReactElement => {
   return (
      <td className={classes.DoubleTd} data-label={dataLabel}>
         <div className={classes['historical']}>
            <Tooltip title={tooltipTiles?.historical}>
               <DateRange opacity={0.2} className={classes.icon} />
            </Tooltip>
            <span className={classes['text']}>{historicalValue}$</span>
         </div>
         <div className={classes['actual']}>
            <Tooltip title={tooltipTiles?.actual}>
               <CurrencyExchange opacity={0.2} className={classes.icon} />
            </Tooltip>
            <span
               className={`${
                  actualValue > historicalValue ? classes['text__profit'] : classes['text__loss']
               }`}
            >
               {actualValue}$
            </span>
         </div>
      </td>
   );
};

export { DoubleTd };
