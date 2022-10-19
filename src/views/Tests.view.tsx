import React, { ReactElement } from 'react';

import { TableRowButton } from '../components/cockpit/TradesTable/TableRow/TableRowButton';
import { CenterContainer } from '../components/common/CenterContainer';
import { BaseLayout } from '../components/layouts/BaseLayout/Base.layout';

const TestsView = (): ReactElement => {
   return (
      <BaseLayout>
         <CenterContainer>
            <TableRowButton />
         </CenterContainer>
      </BaseLayout>
   );
};

export { TestsView };
