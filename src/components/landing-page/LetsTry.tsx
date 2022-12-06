import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import { Paragraph, Title } from './elements';

const LetsTry = (): ReactElement => {
   const navigate = useNavigate();

   return (
      <Box>
         <Box
            width='100%'
            display='flex'
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent='space-between'
            sx={{
               padding: { xs: 3, md: 5 },
               borderRadius: 3,
               boxShadow: '0px 0px 10px rgb(0 0 0 / 50%)',
               background:
                  'linear-gradient(-168.39deg,#ffffff -278.56%,#9263e9 -78.47%,#1a113c 91.61%)',
            }}
         >
            <Box>
               <Title>Let yourself be Ghanoushed!</Title>
               <Paragraph>
                  Join us and make your trading experience better. Buy cheap, sell high and maximize
                  your profits!
               </Paragraph>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
               <Button
                  onClick={() => navigate('/signup')}
                  variant='contained'
                  size='large'
                  className='button-gradient'
                  sx={{
                     marginTop: { xs: 4, md: 0 },
                     fontSize: '18px',
                  }}
               >
                  Let&apos;s BBG!
               </Button>
            </Box>
         </Box>
      </Box>
   );
};

export { LetsTry };
