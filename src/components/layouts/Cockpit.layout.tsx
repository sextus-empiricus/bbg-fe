import React, { ReactElement, ReactNode } from 'react';

import { BaseLayout } from './BaseLayout/Base.layout';
import { CenterXYContainer } from './Containers/CenterXY.container';
import { CockpitContainer } from './Containers/Cockpit.container';
import { CockpitFooter } from './elements/CockpitFooter/CockpitFooter';

interface Props {
   children: ReactNode;
}

const CockpitLayout = ({ children }: Props): ReactElement => {
   return (
      <BaseLayout footer={<CockpitFooter />}>
         <CenterXYContainer headerHeight={50} footerHeight={30}>
            <CockpitContainer>{children}</CockpitContainer>
         </CenterXYContainer>
      </BaseLayout>
   );
};
export { CockpitLayout };
