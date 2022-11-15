import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

import { statsData } from './constants';

const Stats = (): ReactElement => {
   return (
      <Box
         width='100%'
         display='flex'
         flexWrap='wrap'
         flexDirection={{ xs: 'column', sm: 'row' }}
         justifyContent='flex-start'
         alignItems='center'
      >
         {statsData.map((el) => (
            <Box
               key={el.id}
               marginY={1}
               marginX={2}
               width='100%'
               display='flex'
               flex='1 1 0%'
               justifyContent='flex-start'
            >
               <Typography
                  variant='h4'
                  component='h3'
                  fontSize={{ xs: 26, sm: 34 }}
                  fontWeight={500}
                  lineHeight='40px'
               >
                  {el.amount}+
               </Typography>
               <Typography
                  className='title_gradient'
                  variant='h4'
                  component='p'
                  marginLeft={1}
                  fontSize={24}
                  fontWeight={400}
                  whiteSpace='nowrap'
                  lineHeight='40px'
                  textTransform='uppercase'
               >
                  {el.title}
               </Typography>
            </Box>
         ))}
      </Box>
   );
};

export { Stats };
