import React, { ReactElement } from 'react';
import { Box, List, ListItemButton, Typography } from '@mui/material';

import { FooterNav } from '../../types/landing-page.constants';

import { footerIconLinks, footerNavs } from './constants';
import { Paragraph, Title } from './elements';

const miniMenu = (menu: FooterNav) => (
   <Box key={menu.id}>
      <Typography variant='h4' component='h4' fontSize={18} fontWeight={500}>
         {menu.title}
      </Typography>
      <List className='subtitle_color'>
         {menu.items.map((el) => (
            <ListItemButton key={menu.id + el}>{el}</ListItemButton>
         ))}
      </List>
   </Box>
);

const Footer = (): ReactElement => {
   return (
      <Box display='flex' flexDirection='column'>
         <Box display='flex' flexDirection={{ xs: 'column', md: 'row' }}>
            <Box flex={1} marginBottom={{ xs: 3, md: 0 }} paddingRight={1}>
               <Title>
                  <span className='title_gradient' style={{ fontWeight: 700 }}>
                     Baba Ghanoush
                  </span>
               </Title>
               <Paragraph>
                  The simplest way to manage your cryptocurrency trades and track your profits!
               </Paragraph>
            </Box>
            <Box flex={1} display='flex' justifyContent='space-between' flexWrap='wrap'>
               {footerNavs.map((el) => miniMenu(el))}
            </Box>
         </Box>
         <Box
            marginTop={2}
            padding={3}
            display='flex'
            justifyContent='space-between'
            flexDirection={{ xs: 'column', md: 'row' }}
            borderTop='1px solid grey'
         >
            <p>
               Copyright Ⓒ 2022{' '}
               <span className='title_gradient' style={{ fontWeight: 600 }}>
                  Baba Ghanoush
               </span>
               . All Rights Reserved.
            </p>
            <Box
               marginY={{ xs: 2, md: 0 }}
               display='flex'
               justifyContent='center'
               alignItems='center'
            >
               {footerIconLinks.map((el, index) => (
                  <a
                     href={el.link}
                     key={el.id}
                     style={{ marginRight: index + 1 < footerIconLinks.length ? 20 : 0 }}
                  >
                     <img src={el.img} alt={el.id} />
                  </a>
               ))}
            </Box>
         </Box>
      </Box>
   );
};

export { Footer };
