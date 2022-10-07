import React, { ReactElement } from 'react';
import { CurrencyExchange, DateRange } from '@mui/icons-material';

import classes from './DoubleTd.module.scss';

interface Props {
   historicalValue: any;
   actualValue: any;
}

const DoubleTd = ({ historicalValue, actualValue }: Props): ReactElement => {
   return (
      <td className={classes.DoubleTd}>
         <div className={classes['historical']}>
            <DateRange opacity={0.2} sx={{ marginRight: '5px' }} />
            <span className={classes['text']}>{historicalValue}$</span>
         </div>
         <div className={classes['actual']}>
            <CurrencyExchange opacity={0.2} sx={{ marginRight: '5px' }} />
            <span
               className={`${
                  actualValue > historicalValue ? classes['text__profit'] : classes['text__loss']
               }`}>
               {actualValue}$
            </span>
         </div>
      </td>
   );
};

export { DoubleTd };
