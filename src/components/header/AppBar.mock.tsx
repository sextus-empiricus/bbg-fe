import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

import classes from './AppBar.mock.module.scss';

const AppBarMock = (): ReactElement => {
   return (
      <Box
         position='fixed'
         display='flex'
         justifyContent='space-between'
         alignItems='center'
         paddingX={2}
         height={50}
         top={0}
         left={0}
         width='100%'
         zIndex={100}
         sx={{
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
         }}
      >
         <h1 className={classes.logo}>BBG</h1>
      </Box>
   );
};

export { AppBarMock };
