import React, { ReactElement } from 'react';
import { FormProvider, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { AuthDtoInterface } from '@backend';
import { yupResolver } from '@hookform/resolvers/yup';
import { Email, Lock } from '@mui/icons-material';
import { Box, Button, Grid, Link, Paper, Typography } from '@mui/material';
import { object, string } from 'yup';

import { useAuth } from '../../auth/useAuth';

import { AuthInput, Separator } from './elements';

const SigninDtoSchema = object().shape({
   email: string()
      .email('Please provide a correct email address')
      .required('Please provide an email'),
   password: string().required('Please provide a password'),
});

const setInvalidCredentialsError = (methods: UseFormReturn<AuthDtoInterface>, message: string) => {
   methods.setError('password', {
      type: 'string',
      message,
   });
   methods.setError('email', {
      type: 'string',
      message,
   });
};

const SignInForm = (): ReactElement => {
   const { signIn } = useAuth();
   const methods = useForm<AuthDtoInterface>({
      resolver: yupResolver(SigninDtoSchema),
   });

   const onSubmit: SubmitHandler<AuthDtoInterface> = async (authDto) => {
      const res = await signIn(authDto);
      if (!res.status) {
         setInvalidCredentialsError(methods, res.message);
      }
   };

   return (
      <Paper
         elevation={3}
         sx={{
            backgroundColor: 'transparent',
            padding: '25px',
            width: '350px',
            backdropFilter: 'blur(5px)',
         }}
      >
         <Typography align='center' variant='h4' component='h3' marginBottom={3}>
            Sign in
         </Typography>
         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
               <Grid container>
                  <Grid item width='100%'>
                     <AuthInput
                        defaultValue='test@test.test'
                        name='email'
                        type='text'
                        placeholder='Email'
                        icon={<Email />}
                        autoFocus
                     />
                  </Grid>
                  <Grid item width='100%'>
                     <AuthInput
                        defaultValue='test1234'
                        name='password'
                        type='password'
                        placeholder='Password'
                        icon={<Lock />}
                     />
                  </Grid>
                  <Grid item marginTop={2} width='100%'>
                     <Button variant='contained' type='submit' fullWidth>
                        Login
                     </Button>
                  </Grid>
               </Grid>
            </form>
         </FormProvider>
         <Box display='flex' justifyContent='center' marginY={2}>
            <Link href='#' color='secondary'>
               I forgot my password
            </Link>
         </Box>
         <Separator>Don&apos;t have an account?</Separator>
         <Button variant='contained' fullWidth type='submit' href='/signup'>
            Sign up
         </Button>
      </Paper>
   );
};

export { SignInForm };
