import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
   children: ReactNode;
}

/** Cockpit margins/width manager.*/
const CockpitContainer = ({ children }: Props): ReactElement => {
   return (
      <Box
         sx={{
            width: '100%',
            maxWidth: '1300px',
            marginY: { xs: 0, sm: 5 },
            marginX: {
               xs: 0,
               sm: 5,
               md: 7,
               lg: 10,
               xl: 15,
            },
         }}
      >
         {children}
      </Box>
   );
};

export { CockpitContainer };
