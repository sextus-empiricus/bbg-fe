import React, { CSSProperties, ReactElement } from 'react';
import { AccessTimeFilled, Help } from '@mui/icons-material';
import { Box } from '@mui/material';

import { LiveClock } from '../../../common/LiveClock';

import { CurrencyMoveElement } from './CurrencyMoveElement';

const separatorStyle: CSSProperties = {
   margin: '0 15px',
   height: '100%',
   lineHeight: '30px',
   color: 'rgb(255 255 255 / 40%)',
};
const iconStyle: CSSProperties = {
   fontSize: '1rem',
   marginRight: '3px',
};

const CockpitFooter = (): ReactElement => {
   return (
      <Box
         paddingX={3}
         position='absolute'
         left={0}
         bottom={0}
         height={30}
         display='flex'
         justifyContent='space-between'
         bgcolor='rgba(0, 0, 0, 0.5)'
         width='100%'
         sx={{ fontSize: '.9rem' }}
      >
         <Box height='100%' display='flex'>
            <CurrencyMoveElement symbol='btc' />
            <span style={separatorStyle}>|</span>
            <CurrencyMoveElement symbol='eth' />
         </Box>
         <Box height='100%' display='flex' justifyContent='right'>
            <Box
               display='flex'
               height='100%'
               alignItems='center'
               color='rgba(255, 255, 255, 0.7)'
               marginRight={2}
            >
               <Help sx={iconStyle} />
               <span>help</span>
            </Box>
            <Box display='flex' height='100%' alignItems='center' color='rgba(255, 255, 255, 0.7)'>
               <AccessTimeFilled sx={iconStyle} />
               <LiveClock />
            </Box>
         </Box>
      </Box>
   );
};

export { CockpitFooter };
