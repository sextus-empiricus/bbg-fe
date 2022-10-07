import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
   children: ReactNode;
}

const CenterContainer = ({ children }: Props): ReactElement => {
   return (
      <Box
         width='100%'
         minHeight='calc(100vh - 130px)'
         display='flex'
         flexDirection='column'
         justifyContent='center'
         alignItems='center'
         sx={{ border: '1px solid white' }}
      >
         {children}
      </Box>
   );
};

export { CenterContainer };
