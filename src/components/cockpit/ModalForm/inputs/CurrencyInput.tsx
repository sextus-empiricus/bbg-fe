import React, { ReactElement, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputAdornment, TextField } from '@mui/material';

interface Props {
   showCurrencyIcon: boolean;
   label: string;
   name: string;
}

const CurrencyInput = ({ showCurrencyIcon, name, label }: Props): ReactElement => {
   const methods = useFormContext();

   return (
      <TextField
         label={label}
         variant='outlined'
         fullWidth
         error={!!methods.formState.errors[name]}
         helperText={(methods.formState.errors[name]?.message ?? ' ') as ReactNode}
         InputLabelProps={{ shrink: true }}
         InputProps={{
            endAdornment: (
               <InputAdornment position='end'>
                  {showCurrencyIcon && (
                     <img
                        src={`https://coinicons-api.vercel.app/api/icon/${methods
                           .watch(name)
                           .toLowerCase()}`}
                        alt='currency icon'
                        style={{ height: '24px' }}
                     />
                  )}
               </InputAdornment>
            ),
         }}
         {...methods.register(name)}
      />
   );
};

export { CurrencyInput };
