import React, { ReactElement, useContext, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Button, Grid } from '@mui/material';
import { number, object } from 'yup';

import { useActualCurrencyPrice } from '../../../../hooks/useActualCurrencyPrice';
import { ModalFormContext } from '../../../../store/modal-form.context';
import { useTrades } from '../../TradesTable/hooks/useTrades';
import { SellTradeDto } from '../dto';
import { NumberInput } from '../inputs';

interface Props {
   onClose: () => void;
}

export const SellTradeFromShape = object().shape({
   sellPrice: number()
      .typeError('Please provide a number value')
      .required('Please provide a sell price value'),
});

const SellTradeForm = ({ onClose }: Props): ReactElement => {
   const {
      data: { tradesList },
   } = useTrades();
   const modalFormCtx = useContext(ModalFormContext);
   const { currency } = tradesList.filter((el) => el.id === modalFormCtx.tradeId.value)[0];
   const { data: actualPrice } = useActualCurrencyPrice(currency);
   const methods = useForm<SellTradeDto>({
      resolver: yupResolver(SellTradeFromShape),
   });

   useEffect(() => {
      methods.setValue('sellPrice', actualPrice);
   }, []);

   return (
      <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(modalFormCtx.sellHandler)}>
            <Grid container spacing={2}>
               <Grid item width='100%' xs={12}>
                  <NumberInput name='sellPrice' label='Sell price' endAdornment='$' />
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

export { SellTradeForm };
