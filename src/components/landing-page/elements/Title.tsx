import React, { ReactElement, ReactNode } from 'react';
import { Typography } from '@mui/material';

interface Props {
   children: ReactNode;
}

const Title = ({ children }: Props): ReactElement => {
   return (
      <Typography
         variant='h2'
         component='h2'
         fontWeight={500}
         lineHeight={1.3}
         fontSize={{ xs: 36, sm: 46 }}
      >
         {children}
      </Typography>
   );
};

export { Title };
