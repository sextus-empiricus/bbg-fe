import React, { ReactElement } from 'react';

import { Cockpit } from '../components/cockpit/Cockpit';
import { CockpitLayout } from '../components/layouts/Cockpit.layout';
import { CockpitContextProvider } from '../store/cockpit.context';
import { ModalFormContextProvider } from '../store/modal-form.context';
import { TableQueryContextProvider } from '../store/table-query.context';

const CockpitView = (): ReactElement => {
   return (
      <CockpitLayout>
         <CockpitContextProvider>
            <TableQueryContextProvider>
               <ModalFormContextProvider>
                  <Cockpit />
               </ModalFormContextProvider>
            </TableQueryContextProvider>
         </CockpitContextProvider>
      </CockpitLayout>
   );
};

export { CockpitView };
