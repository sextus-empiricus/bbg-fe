import React, { ReactElement, useContext } from 'react';
import { AccountBalance, Add, QueryStats, TrendingUp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';

import { ModalFormContext } from '../../../store/modal-form.context';
import { ModalFormMode } from '../../../types/enums';

const mobileNavH = 60;

const MobileNav = (): ReactElement => {
   const modalFormCtx = useContext(ModalFormContext);
   const [value, setValue] = React.useState(0);

   const addButtonHandler = () => {
      modalFormCtx.open.open(ModalFormMode.ADD);
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
               setValue(newValue);
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
