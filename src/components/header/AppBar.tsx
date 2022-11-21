import React, { ReactElement } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { useUser } from '../../auth/useUser';
import { APP_PATHS } from '../../types/enums/app-paths.enum';

import { AccountNav, Burger, HomeNav, Logo, SignButton } from './elements';

const AppBar = (): ReactElement => {
   const navigate = useNavigate();
   const location = useLocation();
   const { user, isLoading } = useUser();
   const isHomePage = location.pathname === APP_PATHS.HOME;

   const onLogoClickHandler = () => {
      navigate(APP_PATHS.HOME);
   };

   return (
      <Box
         paddingX={{ xs: 2, sm: 5, md: 6, xl: 0 }}
         height={50}
         width='100vw'
         position='fixed'
         top={0}
         left={0}
         display='flex'
         justifyContent='center'
         alignItems='center'
         zIndex={100}
         sx={{
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
         }}
      >
         <Box width='100%' maxWidth='lg' justifyContent='space-between' alignItems='center'>
            <Box width='100%' display='flex' justifyContent='space-between' alignItems='center'>
               <Logo onClick={onLogoClickHandler} />
               {!user && (
                  <>
                     <Burger />
                     <Box
                        display={{ xs: 'none', sm: 'flex' }}
                        justifyContent='center'
                        alignItems='center'
                     >
                        {isHomePage && <HomeNav />}
                        <SignButton
                           variant='contained'
                           onClick={() => navigate(APP_PATHS.SIGNUP)}
                           sx={{ marginRight: '15px' }}
                        >
                           sign up
                        </SignButton>
                        <SignButton variant='outlined' onClick={() => navigate(APP_PATHS.SIGNIN)}>
                           sign up
                        </SignButton>
                     </Box>
                  </>
               )}
               {user && !isLoading && <AccountNav email={user.email} />}
            </Box>
         </Box>
      </Box>
   );
};

export { AppBar };
