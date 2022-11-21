import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

import { AccountMenu } from './AccountMenu';

interface Props {
   email: string;
}

const AccountNav = ({ email }: Props): ReactElement => {
   return (
      <Box display='flex' justifyContent='center' alignItems='center'>
         <Typography component='span' variant='subtitle1' height='100%'>
            {email}
         </Typography>
         <AccountMenu />
      </Box>
   );
};

export { AccountNav };
