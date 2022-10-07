import React, { ReactElement } from 'react';

import { TableRowButton } from '../components/cockpit/TradesTable/TableRow/TableRowButton';
import { CenterContainer } from '../components/common/CenterContainer';
import { MainLayout } from '../components/layouts/Main/Main.layout';

const TestsView = (): ReactElement => {
   return (
      <MainLayout>
         <CenterContainer>
            <TableRowButton />
         </CenterContainer>
      </MainLayout>
   );
};

export { TestsView };
