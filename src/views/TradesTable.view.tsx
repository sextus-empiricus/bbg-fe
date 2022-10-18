import React, { ReactElement } from 'react';

import { PaginationController } from '../components/cockpit/TradesTable/TablePagination/PaginationController';
import { TradesTable } from '../components/cockpit/TradesTable/TradesTable';
import { MainLayout } from '../components/layouts/Main/Main.layout';

const TradesTableView = (): ReactElement => {
   return (
      <MainLayout>
         {/* <TradesTable /> */}
         {/* <PaginationController /> */}
      </MainLayout>
   );
};

export { TradesTableView };
