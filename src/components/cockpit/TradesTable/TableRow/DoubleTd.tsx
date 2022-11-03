import React, { ReactElement } from 'react';
import { AttachMoney, CurrencyExchange, DateRange, Percent } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

import { DisplayData } from './utils/DisplayData';

import classes from './DoubleTd.module.scss';

interface tooltipTiles {
   historical: string;
   actual: string;
}

interface Props {
   mode?: 'date' | 'cash' | 'profit';
   dataLabel: string;
   tooltipTiles?: tooltipTiles;
   historicalValue: number | Date;
   actualValue: number | Date;
}

const DoubleTd = ({
   mode = 'cash',
   dataLabel,
   tooltipTiles,
   historicalValue,
   actualValue,
}: Props): ReactElement => {
   const renderValues = (): string[] => {
      if (
         mode === 'cash' &&
         typeof historicalValue === 'number' &&
         typeof actualValue === 'number'
      ) {
         return [DisplayData.cash(historicalValue), DisplayData.cash(actualValue)];
      }
      if (
         mode === 'date' &&
         typeof historicalValue !== 'number' &&
         typeof actualValue !== 'number'
      ) {
         return [DisplayData.date(historicalValue), DisplayData.date(actualValue)];
      }
      if (
         mode === 'profit' &&
         typeof historicalValue === 'number' &&
         typeof actualValue === 'number'
      ) {
         return [DisplayData.perc(historicalValue), DisplayData.cash(actualValue)];
      }
      return ['', ''];
   };

   const renderIcon = (type: 'historical' | 'actual') => {
      if (mode !== 'profit') {
         if (type === 'historical') {
            return <DateRange opacity={0.2} className={classes.icon} />;
         } else {
            return <CurrencyExchange opacity={0.2} className={classes.icon} />;
         }
      } else {
         if (type === 'historical') {
            return <Percent opacity={0.2} className={classes.icon} />;
         } else {
            return <AttachMoney opacity={0.2} className={classes.icon} />;
         }
      }
   };

   return (
      <td className={`${classes.DoubleTd}`} data-label={dataLabel}>
         <div className={`${classes['historical']} ${mode === 'date' && classes['__date']}`}>
            <Tooltip title={tooltipTiles?.historical}>{renderIcon('historical')}</Tooltip>
            <span
               className={`${classes['text']} ${
                  mode === 'profit' &&
                  (historicalValue > 0 ? classes['text__profit'] : classes['text__loss'])
               }`}
            >
               {renderValues()[0]}
            </span>
         </div>
         <div className={`${classes['actual']} ${mode === 'date' && classes['__date']}`}>
            <Tooltip title={tooltipTiles?.actual}>{renderIcon('actual')}</Tooltip>
            <span
               className={`${
                  mode === 'cash' &&
                  (actualValue > historicalValue ? classes['text__profit'] : classes['text__loss'])
               }
               ${
                  mode === 'profit' &&
                  (actualValue > 0 ? classes['text__profit'] : classes['text__loss'])
               }`}
            >
               {renderValues()[1]}
            </span>
         </div>
      </td>
   );
};

export { DoubleTd };
