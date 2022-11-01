import React, { ReactElement, useContext } from 'react';
import { Modal, Paper, Typography } from '@mui/material';

import { ModalFormContext } from '../../../store/modal-form.context';
import { ModalFormMode } from '../../../types/enums';

import { AddEditTradeForm } from './forms/AddEditTradeForm';

const ModalForm = (): ReactElement => {
   const modalFormContext = useContext(ModalFormContext);

   const renderTitle = () => {
      switch (modalFormContext.mode.value) {
         case ModalFormMode.ADD: {
            return 'New Trade';
         }
         case ModalFormMode.EDIT: {
            return 'Edit';
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
               minHeight: {
                  xs: '100vh',
                  sm: 'auto',
               },
               width: {
                  xs: '100vw',
               },
               padding: {
                  xs: '20px',
                  sm: '25px',
               },
               backgroundColor: 'rgba(255,255,255,0.05)',
               backdropFilter: 'blur(10px)',
               border: 'none',
            }}
         >
            <Typography align='center' variant='h4' component='h3' marginBottom={3}>
               {renderTitle()}
            </Typography>
            <AddEditTradeForm onClose={modalFormContext.open.close} />
         </Paper>
      </Modal>
   );
};

export { ModalForm };
