import React, { ReactElement, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputAdornment, TextField } from '@mui/material';

interface Props {
   defaultValue?: string; // for dev purpose
   name: string;
   type: string;
   placeholder: string;
   autoFocus?: boolean;
   icon: ReactNode;
}

const AuthInput = ({
   defaultValue,
   name,
   type,
   placeholder,
   autoFocus,
   icon,
}: Props): ReactElement => {
   const methods = useFormContext();
   return (
      <TextField
         defaultValue={defaultValue}
         margin='dense'
         variant='outlined'
         type={type}
         placeholder={placeholder}
         error={!!methods.formState.errors[name]}
         helperText={(methods.formState.errors[name]?.message ?? ' ') as ReactNode}
         fullWidth
         autoFocus={autoFocus}
         InputProps={{
            startAdornment: <InputAdornment position='start'>{icon}</InputAdornment>,
         }}
         {...methods.register(name)}
      />
   );
};

export { AuthInput };
