import React, { Context, createContext, ReactNode, useState } from 'react';
import { AlertColor } from '@mui/material';

import { SnackBar } from '../components/common/SnackBar/SnackBar';

interface SnackBarContextInterface {
   showSnackBar: (message: string, severity: AlertColor | undefined) => void;
}

interface Props {
   children: ReactNode;
}

const SnackBarContext: Context<SnackBarContextInterface> = createContext({
   /*eslint-disable*/
   showSnackBar: (message: string, severity: AlertColor | undefined) => {},
});

const SnackBarProvider = ({ children }: Props) => {
   const [open, setOpen] = useState<boolean>(false);
   const [message, setMessage] = useState<string>('');
   const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

   const handleClose = () => setOpen(false);

   const showSnackBar = (message: string, severity: AlertColor | undefined): void => {
      setMessage(message);
      setSeverity(severity);
      setOpen(true);
   };

   const contextValue: SnackBarContextInterface = {
      showSnackBar,
   };

   return (
      <SnackBarContext.Provider value={contextValue}>
         {children}
         <SnackBar handleClose={handleClose} message={message} open={open} severity={severity} />
      </SnackBarContext.Provider>
   );
};

export { SnackBarContext, SnackBarProvider };
