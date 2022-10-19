import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@mui/material';

import { BaseLayout } from './BaseLayout/Base.layout';
import { CenterXYContainer } from './Containers/CenterXY.container';
import { CockpitContainer } from './Containers/Cockpit.container';

interface Props {
   children: ReactNode;
}

const CockpitLayout = ({ children }: Props): ReactElement => {
   const footerMock = (
      <Box position='absolute' left={0} bottom={0} height={30} bgcolor='red' width='100%'>
         asdasdasdsad
      </Box>
   );

   return (
      <BaseLayout footer={footerMock}>
         <CenterXYContainer headerHeight={50} footerHeight={30}>
            <CockpitContainer>{children}</CockpitContainer>
         </CenterXYContainer>
      </BaseLayout>
   );
};

export { CockpitLayout };
