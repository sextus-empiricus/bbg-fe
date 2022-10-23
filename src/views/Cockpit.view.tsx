import React, { ReactElement } from 'react';

import { Cockpit } from '../components/cockpit/Cockpit';
import { CockpitLayout } from '../components/layouts/Cockpit.layout';

const CockpitView = (): ReactElement => {
   return (
      <CockpitLayout>
         <Cockpit />
      </CockpitLayout>
   );
};

export { CockpitView };
