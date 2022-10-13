import React, { ReactElement } from 'react';

import { PaginationController } from '../components/cockpit/TradesTable/TablePagination/PaginationController';
import { TradesTable } from '../components/cockpit/TradesTable/TradesTable';
import { MainLayout } from '../components/layouts/Main/Main.layout';
import { TableQueryContextProvider } from '../store/table-query.context';

const TradesTableView = (): ReactElement => {
   return (
      <TableQueryContextProvider>
         <MainLayout>
            <TradesTable />
            <PaginationController />
         </MainLayout>
      </TableQueryContextProvider>
   );
};

export { TradesTableView };
