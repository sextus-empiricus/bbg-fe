import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
   headerHeight?: number;
   footerHeight?: number;
   children: ReactNode;
}

/** Centralize app content in X & Y.
 * To center elements in the window between header and footer provide its height in props.
 * */
const CenterXYContainer = ({ headerHeight, footerHeight, children }: Props): ReactElement => {
   const minusHeader = headerHeight ? `- ${headerHeight}px` : '';
   const minusFooter = footerHeight ? `- ${footerHeight}px` : '';

   return (
      <Box
         display='flex'
         justifyContent='center'
         alignItems='center'
         minHeight={`calc(100vh ${minusFooter} ${minusHeader})`}
      >
         {children}
      </Box>
   );
};

export { CenterXYContainer };
