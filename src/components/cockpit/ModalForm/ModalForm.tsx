import React, { ReactElement, useContext } from 'react';
import { Modal, Paper, Typography } from '@mui/material';

import { CockpitContext } from '../../../store/cockpit.context';
import { ModalFormContext } from '../../../store/modal-form.context';
import { CockpitContextMode, ModalFormMode } from '../../../types';

import { AddEditTradeForm } from './forms/AddEditTradeForm';
import { EditHistoryForm } from './forms/EditHistoryForm';

const ModalForm = (): ReactElement => {
   const {
      mode: { value: cockpitMode },
   } = useContext(CockpitContext);
   const modalFormContext = useContext(ModalFormContext);

   const renderTitle = () => {
      switch (modalFormContext.mode.value) {
         case ModalFormMode.ADD: {
            return 'New Trade';
         }
         case ModalFormMode.EDIT: {
            return 'Edit Trade';
         }
         default: {
            return 'New Trade';
         }
      }
   };

   return (
      <Modal onClose={modalFormContext.open.close} open={modalFormContext.open.value}>
         <Paper
            elevation={3}
            sx={{
               position: 'absolute',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               minWidth: '350px',
               maxWidth: '550px',
               height: {
                  xs: '100vh',
                  sm: 'auto',
               },
               overflowY: 'scroll',
               width: {
                  xs: '100vw',
               },
               padding: {
                  xs: '20px',
                  sm: '25px',
               },
               background:
                  'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #170f26 91.61%)',
               border: 'none',
            }}
         >
            <Typography align='center' variant='h4' component='h3' marginBottom={3}>
               {renderTitle()}
            </Typography>
            {cockpitMode === CockpitContextMode.history &&
            modalFormContext.mode.value === ModalFormMode.EDIT ? (
               <EditHistoryForm onClose={modalFormContext.open.close} />
            ) : (
               <AddEditTradeForm onClose={modalFormContext.open.close} />
            )}
         </Paper>
      </Modal>
   );
};

export { ModalForm };
