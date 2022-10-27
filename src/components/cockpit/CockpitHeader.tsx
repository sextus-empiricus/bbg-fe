import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

import { LiveClock } from '../common/LiveClock';

const CockpitHeader = (): ReactElement => {
   return (
      <Box display='flex' justifyContent='space-between' sx={{ padding: '20px' }}>
         <Box>
            <Typography variant='h4' component='h2' sx={{ fontSize: '2rem' }}>
               Active Trades:
            </Typography>
         </Box>
         <Box display='flex' flexDirection='column' alignItems='end' minWidth={80}>
            <Typography
               variant='subtitle2'
               component='span'
               color='rgba(255, 255, 255, 0.4)'
               fontWeight={300}
               fontSize='1rem'
               fontFamily='Roboto Mono'
            >
               {new Date().toLocaleDateString()}
            </Typography>
            <LiveClock
               style={{ fontWeight: 300, fontSize: '1.3rem', color: 'rgba(255,255,255, 0.75)' }}
            />
         </Box>
      </Box>
   );
};

export { CockpitHeader };
