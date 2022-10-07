import React, { ReactElement } from 'react';

import { TradesTable } from '../components/cockpit/TradesTable/TradesTable';
import { CenterContainer } from '../components/common/CenterContainer';
import { MainLayout } from '../components/layouts/Main/Main.layout';

const TradesTableView = (): ReactElement => {
   return (
      <MainLayout>
         <CenterContainer>
            <TradesTable />
         </CenterContainer>
      </MainLayout>
   );
};

export { TradesTableView };
