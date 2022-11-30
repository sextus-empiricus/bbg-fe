import React, { useContext, useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { Button, ButtonGroup, Tooltip } from '@mui/material';

import { CockpitContext } from '../../../../../store/cockpit.context';
import { ModalFormContext } from '../../../../../store/modal-form.context';
import { CockpitContextMode, ModalFormMode } from '../../../../../types';

interface Props {
   tradeId: string;
}

const RowButton = ({ tradeId }: Props) => {
   const modalFormContext = useContext(ModalFormContext);
   const {
      mode: { value: mode },
   } = useContext(CockpitContext);
   const [deleteWarning, setDeleteWarning] = useState<boolean>(false);
   const isTradeMode = mode === CockpitContextMode.trades;

   const editButtonHandler = () => {
      modalFormContext.tradeId.set(tradeId);
      modalFormContext.open.open(ModalFormMode.EDIT);
   };
   const sellHandler = () => {
      modalFormContext.tradeId.set(tradeId);
      modalFormContext.open.open(ModalFormMode.SELL);
   };

   const deleteHandler = () => {
      if (!deleteWarning) {
         setDeleteWarning(true);
         return;
      } else {
         modalFormContext.deleteHandler(tradeId);
      }
   };

   const buttonStyles = { paddingY: '8px' };

   return (
      <ButtonGroup variant='outlined' fullWidth sx={{ height: '40px' }}>
         {isTradeMode && (
            <Button onClick={sellHandler} sx={buttonStyles}>
               sell
            </Button>
         )}
         <Tooltip title='edit'>
            <Button onClick={editButtonHandler} sx={buttonStyles}>
               <Edit sx={{ fontSize: '1.1rem' }} />
            </Button>
         </Tooltip>
         <Tooltip title='delete'>
            <Button
               onMouseLeave={() => setDeleteWarning(false)}
               sx={{ ...buttonStyles, color: deleteWarning ? '#c16a6a' : 'primary' }}
               onClick={deleteHandler}
            >
               <Delete sx={{ fontSize: '1.1rem' }} />
            </Button>
         </Tooltip>
      </ButtonGroup>
   );
};

export { RowButton };
