import React, { useContext } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import { Button, ButtonGroup, Tooltip } from '@mui/material';

import { CockpitContext } from '../../../../store/cockpit.context';
import { ModalFormContext } from '../../../../store/modal-form.context';
import { CockpitContextMode, ModalFormMode } from '../../../../types';

interface Props {
   tradeId: string;
}

const RowButton = ({ tradeId }: Props) => {
   const modalFormContext = useContext(ModalFormContext);
   const {
      mode: { value: mode },
   } = useContext(CockpitContext);
   const isTradeMode = mode === CockpitContextMode.trades;

   const editButtonHandler = () => {
      modalFormContext.tradeId.set(tradeId);
      modalFormContext.open.open(ModalFormMode.EDIT);
   };

   const buttonStyles = { paddingY: '8px' };

   return (
      <ButtonGroup variant='outlined' fullWidth>
         {isTradeMode && <Button sx={buttonStyles}>sell</Button>}
         <Tooltip title='edit'>
            <Button onClick={editButtonHandler} sx={buttonStyles}>
               <Edit sx={{ fontSize: '1.1rem' }} />
            </Button>
         </Tooltip>
         <Tooltip title='delete'>
            <Button sx={buttonStyles}>
               <Delete sx={{ fontSize: '1.1rem' }} />
            </Button>
         </Tooltip>
      </ButtonGroup>
   );
};

export { RowButton };
