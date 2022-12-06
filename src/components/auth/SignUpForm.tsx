import React, { ReactElement } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthDtoInterface } from '@backend';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Email, Lock } from '@mui/icons-material';
import { Box, Button, Grid, Link, Paper, Typography } from '@mui/material';
import * as Yup from 'yup';
import { boolean, object, string } from 'yup';

import { useAuth } from '../../auth/useAuth';
import { APP_PATHS } from '../../types/enums/app-paths.enum';
import { useSnackBar } from '../common/SnackBar/hooks/useSnackBar';

import { AuthCheckBox, AuthInput } from './elements/';
import { useFormError } from './hooks/useFormError';

interface SignUpFormDto extends AuthDtoInterface {
   providePassword: string;
   termsAcceptance: boolean;
}

const SignupDtoSchema = object().shape({
   email: string()
      .email('Please provide a correct email address')
      .required('Please provide an email'),
   password: string().required('Please provide a password').min(6, 'Minimum password length is 6'),
   providePassword: string()
      .required('Please provide a password')
      .min(6, 'Minimum password length is 6')
      .oneOf([Yup.ref('password'), null], 'Provided passwords do not match'),
   termsAcceptance: boolean().oneOf([true], 'Please accept Terms of User'),
});

const SignUpForm = (): ReactElement => {
   const { signUp } = useAuth();
   const { showSnackBar } = useSnackBar();
   const navigate = useNavigate();
   const methods = useForm<SignUpFormDto>({ resolver: yupResolver(SignupDtoSchema) });
   const { setFieldError, setAllErrors } = useFormError(methods);

   const onSubmit: SubmitHandler<SignUpFormDto> = async (authDto) => {
      const { email, password } = authDto;
      try {
         const response = await signUp({ email, password });
         if (response.message === 'Network Error') {
            setAllErrors();
         } else if (!response.status) {
            setFieldError('email', response.message);
         } else {
            showSnackBar('Singed up', 'success');
            navigate(APP_PATHS.COCKPIT);
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
            display: 'flex',
            padding: '25px',
            backdropFilter: 'blur(5px)',
         }}
      >
         <Box
            display={{
               xs: 'none',
               md: 'block',
            }}
            maxWidth={450}
            padding={5}
         >
            <Typography variant='h3' component='h4' fontSize='2.8rem'>
               Welcome to
            </Typography>
            <Typography
               variant='h3'
               component='h4'
               sx={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'transparent',
                  background: 'linear-gradient(90deg, #4ca5ff 2.34%, #b673f8 60%)',
                  backgroundClip: 'text',
               }}
            >
               Baba Ghanoush
            </Typography>
            <Typography variant='subtitle1' component='p' color='#97b5d4' marginY={3}>
               The simplest way to manage your cryptocurrency trades and track your profits!
            </Typography>
            <Typography variant='body1' component='p' marginY={1}>
               Not sure yet?
               <Link variant='subtitle1' href={APP_PATHS.HOME} marginLeft={1}>
                  Learn more!
               </Link>
            </Typography>
         </Box>
         <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width={300}
         >
            <Typography align='center' variant='h4' component='h3' marginBottom={3}>
               Sign up
            </Typography>
            <FormProvider {...methods}>
               <form style={{ width: '100%' }} onSubmit={methods.handleSubmit(onSubmit)}>
                  <Grid container direction='column'>
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
                     <Grid item width='100%'>
                        <AuthInput
                           name='providePassword'
                           type='password'
                           placeholder='Provide a password'
                           icon={<Lock />}
                        />
                     </Grid>
                     <Grid item width='100%'>
                        <AuthCheckBox
                           name='termsAcceptance'
                           label={
                              <span>
                                 I agree to
                                 <Link href='#' marginLeft={1}>
                                    Terms of User
                                 </Link>
                              </span>
                           }
                        ></AuthCheckBox>
                     </Grid>
                     <Grid item width='100%'>
                        <Button variant='contained' type='submit' fullWidth>
                           Sign up
                        </Button>
                     </Grid>
                  </Grid>
               </form>
            </FormProvider>
         </Box>
      </Paper>
   );
};

export { SignUpForm };
