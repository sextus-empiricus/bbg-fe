import React, { ReactElement } from 'react';

import { Cockpit } from '../components/cockpit/Cockpit';
import { CockpitLayout } from '../components/layouts/Cockpit.layout';
import { CockpitContextProvider } from '../store/cockpit.context';
import { ModalFormContextProvider } from '../store/modal-form.context';

const CockpitView = (): ReactElement => {
   return (
      <CockpitLayout>
         <CockpitContextProvider>
            <ModalFormContextProvider>
               <Cockpit />
            </ModalFormContextProvider>
         </CockpitContextProvider>
      </CockpitLayout>
   );
};

export { CockpitView };
