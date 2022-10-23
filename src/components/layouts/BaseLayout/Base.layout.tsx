import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';

import { AppBarMock } from '../../header/AppBar.mock';
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
            <AppBarMock />
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
