import React, { ReactElement } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthDtoInterface } from '@backend';
import { yupResolver } from '@hookform/resolvers/yup';
import { Email, Lock } from '@mui/icons-material';
import { Box, Button, Grid, Link, Paper, Typography } from '@mui/material';
import { object, string } from 'yup';

import { useAuth } from '../../auth/useAuth';
import { useSnackBar } from '../common/SnackBar/hooks/useSnackBar';

import { useFormError } from './hooks/useFormError';
import { AuthInput, Separator } from './elements';

const SigninDtoSchema = object().shape({
   email: string()
      .email('Please provide a correct email address')
      .required('Please provide an email'),
   password: string().required('Please provide a password'),
});

const SignInForm = (): ReactElement => {
   const { signIn } = useAuth();
   const { showSnackBar } = useSnackBar();
   const navigate = useNavigate();
   const methods = useForm<AuthDtoInterface>({
      resolver: yupResolver(SigninDtoSchema),
   });
   const { setAllErrors } = useFormError(methods);

   const onSubmit: SubmitHandler<AuthDtoInterface> = async (authDto) => {
      try {
         const res = await signIn(authDto);
         if (res.message === 'Network Error') {
            setAllErrors();
         } else if (!res.status) {
            setAllErrors('Incorrect email or password');
         } else {
            showSnackBar('Logged in', 'success');
            navigate('/cockpit');
         }
      } catch (e) {
         setAllErrors();
         showSnackBar('Something went wrong', 'error');
      }
   };

   return (
      <Paper
         elevation={3}
         sx={{
            backgroundColor: 'rgba(255,255,255,0.03)',
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
                        name='email'
                        type='text'
                        placeholder='Email'
                        icon={<Email />}
                        autoFocus
                     />
                  </Grid>
                  <Grid item width='100%'>
                     <AuthInput
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
