import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import { Typography } from '@mui/material';

interface Props {
   sx?: CSSProperties;
   children: ReactNode;
}

const Title = ({ sx, children }: Props): ReactElement => {
   return (
      <Typography
         variant='h2'
         component='h2'
         fontWeight={500}
         lineHeight={1.3}
         fontSize={{ xs: 36, sm: 46 }}
         sx={sx}
      >
         {children}
      </Typography>
   );
};

export { Title };
