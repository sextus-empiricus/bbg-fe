import React, { CSSProperties, ReactElement } from 'react';
import { Box } from '@mui/material';

import { useActualCurrencyPrice } from '../../../../hooks/useActualCurrencyPrice';

import { use24Change } from './hooks/use24Change';

interface Props {
   symbol: string;
}

const baseStyle: CSSProperties = {
   marginRight: '10px',
   fontWeight: 500,
   color: 'rgb(255 255 255 / 70%)',
};

const numericValueStyle: CSSProperties = {
   color: 'rgb(255 255 255 / 70%)',
   fontWeight: 300,
};

const CurrencyMoveElement = ({ symbol }: Props): ReactElement => {
   const { data: price } = useActualCurrencyPrice(symbol);
   const priceChange = use24Change(symbol);
   const priceChangeString = priceChange > 0 ? `+${priceChange} %` : `${priceChange} %`;

   const textColor = priceChangeString.includes('+') ? 'var(--profit)' : 'var(--loss)';

   return (
      <Box height='100%' display='flex' alignItems='center'>
         <span style={baseStyle}>{symbol.toUpperCase()}/USDT</span>
         <span style={{ ...baseStyle, ...numericValueStyle, color: textColor }}>
            {priceChangeString}
         </span>
         <span style={numericValueStyle}>{price}</span>
      </Box>
   );
};

export { CurrencyMoveElement };
