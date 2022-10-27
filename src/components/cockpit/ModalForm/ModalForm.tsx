import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Button, Grid, Modal, Paper, Typography } from '@mui/material';
import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import { date, number, object, string } from 'yup';

import { CreateTradeDtoInterface } from './dto/AddNewTrade.dto';
import { CurrencyInput } from './elements/Inputs/CurrencyInput';
import { DateTimeInput } from './elements/Inputs/DateTimeInput';
import { MoneyInput } from './elements/Inputs/MoneyInput';
import { NumberInput } from './elements/Inputs/NumberInput';

interface Props {
   onClose: () => void;
   open: boolean;
}

const AddNewTradeSchema = object().shape({
   boughtAt: date()
      .typeError('Please provide a date time value')
      .required('Please provide a purchase date value'),
   currency: string().required('Please provide a currency value'),
   boughtFor: number()
      .typeError('Please provide a number value')
      .required('Please provide a invests value'),
   price: number()
      .typeError('Please provide a number value')
      .required('Please provide a price value'),
   amount: number()
      .typeError('Please provide a number value')
      .required('Please provide an amount value'),
});

const ModalForm = ({ open, onClose }: Props): ReactElement => {
   const getActualPriceURL = 'https://www.binance.com/api/v3/ticker/price?symbol=';
   const [boughtAt, setBoughtAt] = useState<Dayjs | null>(dayjs());
   const [showCurrencyIcon, setShowCurrencyIcon] = useState<boolean>(false);
   const firstUpdate = useRef(true);
   const methods = useForm<CreateTradeDtoInterface>({
      resolver: yupResolver(AddNewTradeSchema),
   });

   const onSubmitHandler: SubmitHandler<CreateTradeDtoInterface> = (
      CreateTradeDto: CreateTradeDtoInterface,
   ) => {
      console.log(CreateTradeDto);
   };

   useEffect(() => {
      if (firstUpdate.current) {
         firstUpdate.current = false;
         return;
      }
      const timerId = setTimeout(async () => {
         try {
            const {
               data: { price },
            } = await axios.get(
               `${getActualPriceURL}${methods.watch('currency').toUpperCase()}USDT`,
            );
            setShowCurrencyIcon(true);
            methods.setValue('price', price);
         } catch (e) {
            setShowCurrencyIcon(false);
         }
      }, 400);
      return () => {
         clearTimeout(timerId);
      };
   }, [methods.watch('currency')]);

   useEffect(() => {
      if (+methods.watch('boughtFor') > 0 && +methods.watch('price') > 0) {
         methods.setValue('amount', +methods.watch('boughtFor') / +methods.watch('price'));
      }
   }, [methods.watch('price'), methods.watch('boughtFor')]);

   return (
      <Modal onClose={onClose} open={open}>
         <Paper
            elevation={3}
            sx={{
               position: 'absolute',
               top: '50%',
               left: '50%',
               transform: 'translate(-50%, -50%)',
               minWidth: '350px',
               maxWidth: '550px',
               minHeight: {
                  xs: '100vh',
                  sm: 'auto',
               },
               width: {
                  xs: '100vw',
               },
               padding: {
                  xs: '20px',
                  sm: '25px',
               },
               backgroundColor: 'rgba(255,255,255,0.05)',
               backdropFilter: 'blur(10px)',
               border: 'none',
            }}
         >
            <Typography align='center' variant='h4' component='h3' marginBottom={3}>
               New Trade
            </Typography>
            <FormProvider {...methods}>
               <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
                  <Grid container spacing={2}>
                     <Grid item width='100%' xs={12}>
                        <DateTimeInput
                           name='boughtAt'
                           label='Purchase date-time'
                           onChangeHandler={setBoughtAt}
                           defaultValue={boughtAt}
                        />
                     </Grid>
                     <Grid item width='100%' xs={12} sm={6}>
                        <CurrencyInput
                           name='currency'
                           label='Currency'
                           showCurrencyIcon={showCurrencyIcon}
                        />
                     </Grid>
                     <Grid item width='100%' xs={12} sm={6}>
                        <MoneyInput name='boughtFor' label='Invests' />
                     </Grid>
                     <Grid item width='100%' xs={12} sm={6}>
                        <MoneyInput name='price' label='Price' />
                     </Grid>
                     <Grid item width='100%' xs={12} sm={6}>
                        <NumberInput name='amount' label='Amount' />
                     </Grid>
                     <Grid item width='100%'>
                        <Button variant='contained' type='submit' fullWidth>
                           add
                        </Button>
                     </Grid>
                     <Grid item width='100%' textAlign='center'>
                        <Button variant='outlined' fullWidth onClick={onClose}>
                           cancel
                        </Button>
                     </Grid>
                  </Grid>
               </form>
            </FormProvider>
         </Paper>
      </Modal>
   );
};

export { ModalForm };
