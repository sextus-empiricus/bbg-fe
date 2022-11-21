import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem } from '@mui/material';

import { APP_PATHS } from '../../../types/enums/app-paths.enum';

const Burger = () => {
   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const navigate = useNavigate();
   const open = Boolean(anchorEl);

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <Box display={{ xs: 'block', sm: 'none' }}>
         <Button onClick={handleClick} sx={{ justifyContent: 'flex-end' }}>
            <MenuIcon />
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
            <MenuItem onClick={() => navigate(APP_PATHS.HOME)}>Home</MenuItem>
            <MenuItem onClick={() => navigate(APP_PATHS.SIGNUP)}>Sing up</MenuItem>
            <MenuItem onClick={() => navigate(APP_PATHS.SIGNIN)}>Sing in</MenuItem>
         </Menu>
      </Box>
   );
};
export { Burger };
