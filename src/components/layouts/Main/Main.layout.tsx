import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';

import { AppBarMock } from '../../header/AppBar.mock';
import { WavesDecorator } from '../elements/WavesDecorator';

import classes from './Main.layout.module.scss';

interface Props {
   children?: ReactNode;
}

const MainLayout = ({ children }: Props): ReactElement => {
   return (
      <Box className={classes.Layout}>
         <header>
            <AppBarMock />
            <Box height={50} width='100%' />
         </header>
         <main>
            <Box // app content container;
               sx={{
                  marginY: 5,
                  marginX: {
                     xs: 0,
                     sm: 5,
                     md: 7,
                     lg: 10,
                     xl: 15,
                  },
                  // border: '1px solid rgba(255, 255, 255, 0.2)',
               }}
            >
               {children}
            </Box>
         </main>
         <Box className={classes['gradient-background']} />
         <WavesDecorator className={classes['waves-decorator']} />
      </Box>
   );
};

export { MainLayout };
