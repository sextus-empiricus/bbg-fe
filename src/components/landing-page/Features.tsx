import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { featuresData } from './constants';
import { Paragraph, Title } from './elements';

const Features = (): ReactElement => {
   const navigate = useNavigate();

   return (
      <Box
         display='flex'
         flexDirection={{ xs: 'column', md: 'row' }}
         justifyContent='center'
         alignItems='center'
      >
         <Box flex='2 1 0%'>
            <Title>Trading as easy as ever</Title>
            <Paragraph>
               Daily trading can be a great way to beat rampant inflation by trying to make some
               profit. Sometimes, however, this involves performing many transactions that are
               difficult to track easily. <b className='title_gradient'>Baba Ghanoush</b> is a
               simple application that will allow you to manage your trades and watch their profit
               or loss in real time in a simple, clear interface.
            </Paragraph>
            <Button variant='contained' sx={{ marginTop: 5 }} onClick={() => navigate('/signup')}>
               get started
            </Button>
         </Box>
         <Box flex='1 1 0%' marginLeft={12} marginTop={{ xs: 7, lg: 0 }}>
            <Box
               display='flex'
               flexDirection='column'
               justifyContent='center'
               alignItems='flex-start'
            >
               {featuresData.map((el, index) => (
                  <Box
                     key={el.id}
                     marginTop={index === 0 ? 0 : 4}
                     display='flex'
                     justifyContent='center'
                     alignItems='center'
                  >
                     <Box
                        marginRight={2}
                        width={64}
                        height={64}
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        borderRadius='100%'
                        sx={{ backgroundColor: '#13072a' }}
                     >
                        {<el.icon sx={{ fontSize: '30px', color: '#9263e9' }} />}
                     </Box>
                     <Box display='flex' flexDirection='column'>
                        <Typography variant='h4' component='h4' fontWeight={600} fontSize={18}>
                           {el.title}
                        </Typography>
                        <Typography
                           variant='subtitle1'
                           component='p'
                           className='subtitle_color'
                           marginTop={1}
                        >
                           {el.text}
                        </Typography>
                     </Box>
                  </Box>
               ))}
            </Box>
         </Box>
      </Box>
   );
};

export { Features };
