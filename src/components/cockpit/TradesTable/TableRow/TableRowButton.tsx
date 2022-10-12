import React, { MouseEvent, useState } from 'react';
import { ArrowDropDown, CreditCard, Delete, Edit } from '@mui/icons-material';
import { Button, ButtonGroup, MenuItem, MenuList, Popover } from '@mui/material';

const TableRowButton = () => {
   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
   const open = Boolean(anchorEl);

   const handlePopoverOpen = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handlePopoverClose = () => {
      setAnchorEl(null);
   };

   return (
      <>
         <ButtonGroup variant='outlined'>
            <Button
               sx={{
                  display: {
                     xs: 'none',
                     sm: 'none',
                     md: 'block',
                  },
               }}
            >
               cash
            </Button>
            <Button size='small' onClick={handlePopoverOpen}>
               <ArrowDropDown />
            </Button>
         </ButtonGroup>
         <Popover
            open={open}
            onClose={handlePopoverClose}
            anchorEl={anchorEl}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
         >
            <MenuList>
               <MenuItem
                  sx={{
                     fontSize: '1rem',
                     display: {
                        sm: 'block',
                        md: 'none',
                     },
                  }}
               >
                  <CreditCard sx={{ marginRight: 1, fontSize: '1rem' }} />
                  Cash
               </MenuItem>
               <MenuItem sx={{ fontSize: '1rem' }}>
                  <Edit sx={{ marginRight: 1, fontSize: '1rem' }} />
                  Edit
               </MenuItem>
               <MenuItem sx={{ fontSize: '1rem' }}>
                  <Delete sx={{ marginRight: 1, fontSize: '1rem' }} />
                  Delete
               </MenuItem>
            </MenuList>
         </Popover>
      </>
   );
};

export { TableRowButton };
