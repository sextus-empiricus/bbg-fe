import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';

import { AppBar } from '../../header/AppBar';
import { WavesDecorator } from '../elements/WavesDecorator';

import classes from './Base.layout.module.scss';

interface Props {
   footer?: ReactNode;
   children?: ReactNode;
}

const BaseLayout = ({ footer, children }: Props): ReactElement => {
   return (
      <Box className={classes.Layout}>
         <header>
            <AppBar />
            <Box height={50} width='100%' />
         </header>
         <main>{children}</main>
         <footer>{footer}</footer>
         <Box className={classes['gradient-background']} />
         <WavesDecorator className={classes['waves-decorator']} />
      </Box>
   );
};

export { BaseLayout };
