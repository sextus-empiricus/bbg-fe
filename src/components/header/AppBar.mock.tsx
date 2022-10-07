import React, { ReactElement } from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Box } from '@mui/material';

import { useAuth } from '../../auth/useAuth';
import { useUser } from '../../auth/useUser';

import classes from './AppBar.mock.module.scss';

const AppBarMock = (): ReactElement => {
   const { signOut } = useAuth();
   const { user } = useUser();
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
         <Box display='flex' justifyContent='center' alignContent='center'>
            {user?.email && (
               <span className={classes['span-email']} onClick={signOut}>
                  {user.email}
               </span>
            )}
            <AccountCircle />
         </Box>
      </Box>
   );
};

export { AppBarMock };
