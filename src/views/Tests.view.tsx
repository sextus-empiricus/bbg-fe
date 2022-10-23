import React, { ReactElement } from 'react';

import { TableRowButton } from '../components/cockpit/TradesTable/TableRow/TableRowButton';
import { BaseLayout } from '../components/layouts/BaseLayout/Base.layout';

const TestsView = (): ReactElement => {
   return (
      <BaseLayout>
         <TableRowButton />
      </BaseLayout>
   );
};

export { TestsView };
