import React from 'react';
import { ButtonProps, styled } from '@mui/material';
import Button from '@mui/material/Button';

const SignButton = (props: ButtonProps) => {
   const CustomButton = styled(Button)<ButtonProps>(() => ({
      height: '32px',
      width: '90px',
      fontWeight: 500,
   }));

   return <CustomButton {...props}>{props.children}</CustomButton>;
};

export { SignButton };
