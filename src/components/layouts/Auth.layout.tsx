import React, { ReactElement, ReactNode } from 'react';

import { BaseLayout } from './BaseLayout/Base.layout';
import { CenterXYContainer } from './Containers/CenterXY.container';

interface Props {
   children: ReactNode;
}

const AuthLayout = ({ children }: Props): ReactElement => {
   return (
      <BaseLayout>
         <CenterXYContainer headerHeight={50}>{children}</CenterXYContainer>
      </BaseLayout>
   );
};

export { AuthLayout };
