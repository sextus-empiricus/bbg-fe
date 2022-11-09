import React, { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountCircle, Home, Logout } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useAuth } from '../../auth/useAuth';

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
      navigate('/');
   };

   const handeGoToCockpit = () => {
      handleClose();
      navigate('/cockpit');
   };

   return (
      <div>
         <Button onClick={handleClick} sx={{ minWidth: '36px' }}>
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
            <MenuItem onClick={handeGoToCockpit}>
               <Home sx={menuIconStyle} />
               Cockpit
            </MenuItem>
            <MenuItem onClick={handleLogout}>
               <Logout sx={menuIconStyle} />
               Logout
            </MenuItem>
         </Menu>
      </div>
   );
};

export { AccountMenu };
