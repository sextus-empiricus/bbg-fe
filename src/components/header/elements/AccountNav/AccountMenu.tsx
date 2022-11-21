import React, { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountCircle, Home, Logout, TableChart } from '@mui/icons-material';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useAuth } from '../../../../auth/useAuth';
import { APP_PATHS } from '../../../../types/enums/app-paths.enum';

const AccountMenu = () => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const open = Boolean(anchorEl);
   const { signOut } = useAuth();
   const navigate = useNavigate();
   const menuIconStyle = { fontSize: 20, marginRight: 1, opacity: 0.4 };

   const handleClick = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleLogout = () => {
      handleClose();
      signOut();
      navigate(APP_PATHS.HOME);
   };

   return (
      <Box>
         <Button onClick={handleClick} sx={{ minWidth: '36px', fontSize: '30px' }}>
            <AccountCircle />
         </Button>
         <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
         >
            <MenuItem onClick={() => navigate(APP_PATHS.HOME)}>
               <Home sx={menuIconStyle} />
               Home
            </MenuItem>
            <MenuItem onClick={() => navigate(APP_PATHS.COCKPIT)}>
               <TableChart sx={menuIconStyle} />
               Cockpit
            </MenuItem>
            <MenuItem onClick={handleLogout}>
               <Logout sx={menuIconStyle} />
               Logout
            </MenuItem>
         </Menu>
      </Box>
   );
};

export { AccountMenu };
