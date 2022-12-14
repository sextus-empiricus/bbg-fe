import React, { ReactElement, ReactNode } from 'react';
import { IconButton } from '@mui/material';

interface Props {
   icon: ReactNode;
   isActive?: boolean;
   type?: 'color' | 'regular';
   text?: string;
   onClickHandler?: () => void;
}

const ColumnButton = ({ isActive, onClickHandler, type, icon, text }: Props): ReactElement => {
   return (
      <IconButton
         onClick={onClickHandler}
         sx={{
            marginTop: 1,
            width: 70,
            height: 70,
            flexDirection: 'column',
            bgcolor: type === 'color' ? '#9263e9' : '',
            borderBottom: isActive ? '3px solid #9263e9' : '3px solid transparent',
            borderRadius: '3px',
         }}
      >
         {icon}
         <span
            style={{
               marginTop: '3px',
               color: '#c3c3c3',
               fontSize: '.7rem',
            }}
         >
            {text}
         </span>
      </IconButton>
   );
};

export { ColumnButton };
