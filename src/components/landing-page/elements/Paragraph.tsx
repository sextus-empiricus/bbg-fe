import React, { ReactElement, ReactNode } from 'react';
import { Typography } from '@mui/material';

interface Props {
   noMarginTop?: boolean;
   children: ReactNode;
}

const Paragraph = ({ noMarginTop = false, children }: Props): ReactElement => {
   return (
      <Typography
         className='subtitle_color'
         variant='subtitle1'
         marginTop={noMarginTop ? 0 : 3}
         component='p'
         fontSize={18}
         maxWidth={600}
      >
         {children}
      </Typography>
   );
};

export { Paragraph };
