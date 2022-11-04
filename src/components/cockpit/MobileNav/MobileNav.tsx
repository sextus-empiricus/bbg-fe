import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { AccountBalance, Add, QueryStats, TrendingUp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';

import { CockpitContext } from '../../../store/cockpit.context';
import { ModalFormContext } from '../../../store/modal-form.context';
import { CockpitContextMode, ModalFormMode } from '../../../types/enums';

const mobileNavH = 60;

const getInitValue = (mode: CockpitContextMode) => {
   switch (mode) {
      case CockpitContextMode.trades:
         return 0;
      case CockpitContextMode.history:
         return 1;
      case CockpitContextMode.statistics:
         return 2;
      default:
         return 0;
   }
};

const MobileNav = (): ReactElement => {
   const modalFormCtx = useContext(ModalFormContext);
   const cockpitContext = useContext(CockpitContext);
   const [value, setValue] = useState<number>(0);

   useEffect(() => {
      setValue(getInitValue(cockpitContext.mode.value));
   }, [cockpitContext.mode.value]);

   const addButtonHandler = () => {
      modalFormCtx.open.open(ModalFormMode.ADD);
   };

   const onChangeHandler = (newValue: number) => {
      setValue(newValue);
      switch (newValue) {
         case 0:
            cockpitContext.mode.set(CockpitContextMode.trades);
            break;
         case 1:
            cockpitContext.mode.set(CockpitContextMode.history);
            break;
         case 2:
            cockpitContext.mode.set(CockpitContextMode.statistics);
            break;
         default:
            cockpitContext.mode.set(CockpitContextMode.trades);
      }
   };

   return (
      <Box
         width='100%'
         bgcolor='rgba(0, 0, 0, 0.5)'
         display='flex'
         justifyContent='center'
         alignItems='center'
      >
         <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
               onChangeHandler(newValue);
            }}
            sx={{ height: mobileNavH, width: '100%', bgcolor: 'transparent' }}
         >
            <BottomNavigationAction label='Trades' icon={<TrendingUp />} />
            <BottomNavigationAction label='History' icon={<AccountBalance />} />
            <BottomNavigationAction label='Statistics' icon={<QueryStats />} />
         </BottomNavigation>
         <IconButton
            onClick={addButtonHandler}
            sx={{
               marginX: '10px',
               bgcolor: '#9263e9',
               height: '44px',
               width: '44px',
               borderRadius: '10px',
            }}
         >
            <Add />
         </IconButton>
      </Box>
   );
};

export { MobileNav, mobileNavH };
