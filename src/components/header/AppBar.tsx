import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import { useUser } from '../../auth/useUser';

import { AccountMenu } from './AccountMenu';

import classes from './AppBar.module.scss';

const AppBar = (): ReactElement => {
   const navigate = useNavigate();
   const { user, isLoading } = useUser();
   const buttonStyle = { height: '32px' };

   const onLogoClickHandler = () => {
      if (user) {
         navigate('/cockpit');
      } else {
         navigate('/');
      }
   };

   return (
      <Box
         position='fixed'
         display='flex'
         justifyContent='space-between'
         alignItems='center'
         paddingX={{
            xs: 1,
            sm: 3,
         }}
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
         <h1 className={classes.logo} onClick={onLogoClickHandler}>
            BBG
         </h1>
         <Box display='flex' justifyContent='center' alignContent='center'>
            {!user && (
               <Box>
                  <Button
                     variant='contained'
                     sx={{ ...buttonStyle, marginRight: '16px' }}
                     onClick={() => navigate('/signup')}
                  >
                     sign up
                  </Button>
                  <Button variant='outlined' sx={buttonStyle} onClick={() => navigate('/signin')}>
                     sign in
                  </Button>
               </Box>
            )}
            {user && !isLoading && (
               <Box display='flex' justifyContent='center' alignContent='center'>
                  <span className={classes['span-email']}>{user.email}</span>
                  <AccountMenu />
               </Box>
            )}
         </Box>
      </Box>
   );
};

export { AppBar };
