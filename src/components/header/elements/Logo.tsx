import React from 'react';
import { styled, Typography, TypographyProps } from '@mui/material';

const Logo = (props: TypographyProps) => {
   const TypographyLogo = styled(Typography)<TypographyProps>(() => ({
      component: 'h1',
      fontSize: '2rem',
      fontWeight: 700,
      color: 'transparent',
      background: 'linear-gradient(90deg, #4ca5ff 0%, #b673f8 80%)',
      backgroundClip: 'text',
      '&:hover': {
         cursor: 'pointer',
      },
   }));

   return <TypographyLogo {...props}>BBG</TypographyLogo>;
};

export { Logo };
