import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import arrowUp from '../../assets/arrow-up.svg';

const GetStarted = (): ReactElement => {
   const navigate = useNavigate();

   return (
      <Box
         onClick={() => navigate('/signup')}
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '120px',
            height: '120px',
            borderRadius: '100%',
            background: 'linear-gradient(90deg, #4ca5ff 2.34%, #b673f8 100.78%)',
            '&:hover': { cursor: 'pointer' },
         }}
      >
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
               width: '116px',
               height: '116px',
               borderRadius: '100%',
               backgroundColor: '#0a0e16',
            }}
         >
            <Box className='title_gradient' fontWeight={600}>
               <Box display='flex' justifyContent='center' alignItems='center'>
                  Get
                  <img src={arrowUp} alt='arrow' style={{ marginLeft: '3px' }} />
               </Box>
               Started
            </Box>
         </Box>
      </Box>
   );
};

export { GetStarted };
