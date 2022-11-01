import React, { ReactElement } from 'react';

import { Cockpit } from '../components/cockpit/Cockpit';
import { CockpitLayout } from '../components/layouts/Cockpit.layout';
import { ModalFormContextProvider } from '../store/modal-form.context';

const CockpitView = (): ReactElement => {
   return (
      <CockpitLayout>
         <ModalFormContextProvider>
            <Cockpit />
         </ModalFormContextProvider>
      </CockpitLayout>
   );
};

export { CockpitView };
