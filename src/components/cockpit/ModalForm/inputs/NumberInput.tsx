import React, { ReactElement, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputAdornment, TextField } from '@mui/material';

interface Props {
   endAdornment?: string;
   name: string;
   label: string;
}

const NumberInput = ({ endAdornment, label, name }: Props): ReactElement => {
   const methods = useFormContext();

   return (
      <TextField
         label={label}
         type='text'
         defaultValue={0}
         error={!!methods.formState.errors[name]}
         helperText={(methods.formState.errors[name]?.message ?? ' ') as ReactNode}
         variant='outlined'
         fullWidth
         InputProps={{
            endAdornment: <InputAdornment position='end'>{endAdornment}</InputAdornment>,
         }}
         {...methods.register(name)}
      />
   );
};

export { NumberInput };
