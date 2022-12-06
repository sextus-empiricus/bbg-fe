import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { LottieOptions, useLottie } from 'lottie-react';

import flyingBuilding from '../../assets/lottie/flying-building.json';

import { Paragraph } from './elements';
import { GetStarted } from './GetStarted';

const Hero = (): ReactElement => {
   const lottieOptions: LottieOptions = {
      style: { width: '100%' },
      animationData: flyingBuilding,
      loop: true,
      autoplay: true,
   };
   const { View } = useLottie(lottieOptions);

   return (
      <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }} justifyContent='center'>
         <Box
            paddingRight={{ lg: 15 }}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignContent='center'
         >
            <Box
               display={{ xs: 'none', md: 'block' }}
               padding='5px 25px'
               borderRadius={2.5}
               sx={{
                  background:
                     'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);',
               }}
            >
               <Typography variant='subtitle1' component='span' className='subtitle_color'>
                  <span className='text-white'>100%</span> free,{' '}
                  <span className='text-white'>100%</span> safe,{' '}
                  <span className='text-white'>100% </span> gratifyingly!
               </Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' position='relative'>
               <Typography
                  variant='h1'
                  component='h1'
                  fontWeight='bolder'
                  lineHeight={1.3}
                  fontSize={{ xs: 40, sm: 60, md: 72 }}
               >
                  The Simplest <br />
                  <span className='title_gradient'>Cryptocurrency</span> <br />
                  Trade Manager
               </Typography>
               <Box display={{ xs: 'none', md: 'block' }} position='absolute' top={0} right={-120}>
                  <GetStarted />
               </Box>
            </Box>
            <Paragraph>
               Welcome to <b className='title_gradient'>Baba Ghanoush</b>, the simplest way to
               manage your cryptocurrency trades and track your profits! Our goal is to make your
               trade experience as easy as possible. Buy cheap, sell high and maximize your profits
               by easily tracking the current prices of every individual transaction.
            </Paragraph>
         </Box>
         <Box width='100%' paddingX={{ sm: 20, md: 0 }}>
            {View}
         </Box>
      </Box>
   );
};

export { Hero };
