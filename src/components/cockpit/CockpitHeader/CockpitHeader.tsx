import React, { ReactElement, useContext } from 'react';
import { Box, Typography } from '@mui/material';

import { CockpitContext } from '../../../store/cockpit.context';
import { LiveClock } from '../../common/LiveClock';

import classes from './CockpitHeader.module.scss';

const cockpitHeaderMobileH = 60;

const CockpitHeader = (): ReactElement => {
   const cockpitCtx = useContext(CockpitContext);

   return (
      <Box
         display='flex'
         justifyContent='space-between'
         height={{ xs: cockpitHeaderMobileH, sm: 'auto' }}
         padding='20px'
      >
         <Box display='flex' justifyContent='center' alignItems='center'>
            <Typography variant='h4' component='h2' sx={{ fontSize: { xs: '1rem', sm: '2rem' } }}>
               {cockpitCtx.title + ':'}
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
            <LiveClock className={classes.LiveClock} />
         </Box>
      </Box>
   );
};

export { CockpitHeader, cockpitHeaderMobileH };
