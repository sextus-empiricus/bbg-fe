import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Button, Grid } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

import { axiosInstance, getJWTHeader } from '../../../../axios';
import { ModalFormContext } from '../../../../store/modal-form.context';
import { UpdateTradeHistoryDto } from '../dto';
import { CurrencyInput, DateTimeInput, NumberInput } from '../inputs';

import { EditHistoryFormShape } from './EditHistoryForm.shape';

interface Props {
   onClose: () => void;
}

const EditHistoryForm = ({ onClose }: Props): ReactElement => {
   const modalFormCtx = useContext(ModalFormContext);
   const [boughtAt, setBoughtAt] = useState<Dayjs | null>(dayjs());
   const [soldAt, setSoldAt] = useState<Dayjs | null>(dayjs());
   const [showCurrencyIcon, setShowCurrencyIcon] = useState<boolean>(false);
   const methods = useForm<UpdateTradeHistoryDto>({
      resolver: yupResolver(EditHistoryFormShape),
   });

   useEffect(() => {
      (async () => {
         const {
            data: { trade },
         } = await axiosInstance.get(`/trades/my/${modalFormCtx.tradeId.value}`, {
            headers: getJWTHeader(),
         });
         methods.setValue('boughtAt', dayjs(trade.boughtAt));
         methods.setValue('soldAt', dayjs(trade.tradeHistory.soldAt));
         methods.setValue('currency', trade.currency.toUpperCase());
         methods.setValue('amount', trade.amount);
         methods.setValue('boughtFor', trade.boughtFor);
         methods.setValue('soldFor', trade.tradeHistory.soldFor);
         methods.setValue('buyPrice', trade.price);
         methods.setValue('sellPrice', trade.tradeHistory.price);
         methods.setValue('profitPerc', trade.tradeHistory.profitPerc);
         methods.setValue('profitCash', trade.tradeHistory.profitCash);
         setShowCurrencyIcon(true);
      })();
   }, []);

   return (
      <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(modalFormCtx.submitHandlerHistory)}>
            <Grid container spacing={2}>
               <Grid item width='100%' xs={12}>
                  <DateTimeInput
                     name='boughtAt'
                     label='Purchase date-time'
                     onChangeHandler={setBoughtAt}
                     defaultValue={boughtAt}
                  />
               </Grid>
               <Grid item width='100%' xs={12}>
                  <DateTimeInput
                     name='soldAt'
                     label='Sell date-time'
                     onChangeHandler={setSoldAt}
                     defaultValue={soldAt}
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
                  <NumberInput name='amount' label='Amount' />
               </Grid>
               <Grid item width='100%' xs={12} sm={6}>
                  <NumberInput name='boughtFor' label='Entrance' endAdornment='$' />
               </Grid>
               <Grid item width='100%' xs={12} sm={6}>
                  <NumberInput name='soldFor' label='Exit' endAdornment='$' />
               </Grid>
               <Grid item width='100%' xs={12} sm={6}>
                  <NumberInput name='buyPrice' label='Purchase price' endAdornment='$' />
               </Grid>
               <Grid item width='100%' xs={12} sm={6}>
                  <NumberInput name='sellPrice' label='Sell price' endAdornment='$' />
               </Grid>
               <Grid item width='100%' xs={12} sm={6}>
                  <NumberInput name='profitPerc' label='Profit %' endAdornment='%' />
               </Grid>
               <Grid item width='100%' xs={12} sm={6}>
                  <NumberInput name='profitCash' label='Profit $' endAdornment='$' />
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
export { EditHistoryForm };
