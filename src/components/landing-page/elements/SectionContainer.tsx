import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';

interface Props {
   children: ReactNode;
   sectionId?: string;
}

const SectionContainer = ({ children, sectionId }: Props): ReactElement => {
   return (
      <section id={sectionId}>
         <Box display='flex' justifyContent='center' paddingY={{ xs: 4, sm: 8 }}>
            <Box maxWidth='lg' width='100%' paddingX={{ xs: 2, sm: 5, md: 6, xl: 0 }}>
               {children}
            </Box>
         </Box>
      </section>
   );
};

export { SectionContainer };
