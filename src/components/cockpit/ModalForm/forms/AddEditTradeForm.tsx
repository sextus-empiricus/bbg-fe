import React, { ReactElement, useContext, useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Button, Grid } from '@mui/material';
import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';

import { axiosInstance, getJWTHeader } from '../../../../axios';
import { ModalFormContext } from '../../../../store/modal-form.context';
import { ModalFormMode } from '../../../../types/enums';
import { AddEditTradeDtoInterface } from '../dto/AddNewTrade.dto';
import { CurrencyInput, DateTimeInput, MoneyInput, NumberInput } from '../inputs';

import { AddEditTradeShape } from './AddEditTradeForm.shape';

interface Props {
   onClose: () => void;
}

const AddEditTradeForm = ({ onClose }: Props): ReactElement => {
   const getActualPriceURL = 'https://www.binance.com/api/v3/ticker/price?symbol=';
   const modalFormCtx = useContext(ModalFormContext);
   const firstUpdate = useRef(true);
   const [boughtAt, setBoughtAt] = useState<Dayjs | null>(dayjs());
   const [showCurrencyIcon, setShowCurrencyIcon] = useState<boolean>(false);
   const methods = useForm<AddEditTradeDtoInterface>({
      resolver: yupResolver(AddEditTradeShape),
   });

   useEffect(() => {
      if (firstUpdate.current) {
         firstUpdate.current = false;
         return;
      }
      setShowCurrencyIcon(false);
      const timerId = setTimeout(async () => {
         try {
            const {
               data: { price },
            } = await axios.get(
               `${getActualPriceURL}${methods.watch('currency').toUpperCase()}USDT`,
            );
            setShowCurrencyIcon(true);
            if (modalFormCtx.mode.value === ModalFormMode.ADD) methods.setValue('price', price);
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

   // useEffect EDIT mode:
   if (modalFormCtx.mode.value === ModalFormMode.EDIT) {
      useEffect(() => {
         (async () => {
            const {
               data: {
                  trade: { boughtAt, currency, boughtFor, price, amount },
               },
            } = await axiosInstance.get(`/trades/my/${modalFormCtx.tradeId.value}`, {
               headers: getJWTHeader(),
            });
            methods.setValue('boughtAt', dayjs(boughtAt));
            methods.setValue('currency', currency.toUpperCase());
            methods.setValue('boughtFor', boughtFor);
            methods.setValue('price', price);
            methods.setValue('amount', amount);
         })();
      }, []);
   }

   return (
      <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(modalFormCtx.submitHandler)}>
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
                     {modalFormCtx.mode.value}
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
   );
};
export { AddEditTradeForm };
