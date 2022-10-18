import React, { ReactElement } from 'react';

import { Cockpit } from '../components/cockpit/Cockpit';
import { MainLayout } from '../components/layouts/Main/Main.layout';

const CockpitView = (): ReactElement => {
   return (
      <MainLayout>
         <Cockpit />
      </MainLayout>
   );
};

export { CockpitView };
