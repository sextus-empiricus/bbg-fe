import React, { ReactElement, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

interface Props {
   name: string;
   label?: ReactNode;
}

const AuthCheckBox = ({ name, label }: Props): ReactElement => {
   const methods = useFormContext();
   return (
      <FormControl error={!!methods.formState.errors[name]}>
         <FormControlLabel control={<Checkbox {...methods.register(name)} />} label={label} />
         <FormHelperText>
            {(methods.formState.errors[name]?.message ?? ' ') as ReactNode}
         </FormHelperText>
      </FormControl>
   );
};

export { AuthCheckBox };
