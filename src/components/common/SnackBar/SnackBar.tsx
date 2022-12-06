import React, { ReactElement } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';

interface Props {
   open: boolean;
   handleClose: () => void;
   severity: AlertColor | undefined;
   message: string;
}

const SnackBar = ({ open, handleClose, severity, message }: Props): ReactElement => {
   return (
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
         <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {message}
         </Alert>
      </Snackbar>
   );
};

export { SnackBar };
