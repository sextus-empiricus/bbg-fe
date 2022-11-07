import { date, number, object, string } from 'yup';
export const EditHistoryFormShape = object().shape({
   boughtAt: date()
      .typeError('Please provide a date time value')
      .required('Please provide a purchase date value'),
   soldAt: date()
      .typeError('Please provide a date time value')
      .required('Please provide a purchase date value'),
   currency: string().required('Please provide a currency value'),
   amount: number()
      .typeError('Please provide a number value')
      .required('Please provide an amount value'),
   boughtFor: number()
      .typeError('Please provide a number value')
      .required('Please provide a entrance invests'),
   soldFor: number()
      .typeError('Please provide a number value')
      .required('Please provide a exit value'),
   buyPrice: number() // tradeHistory.price
      .typeError('Please provide a number value')
      .required('Please provide a buy price value'),
   sellPrice: number() // tradeHistory.price
      .typeError('Please provide a number value')
      .required('Please provide a sell price value'),
   profitPerc: number()
      .typeError('Please provide a number value')
      .required('Please provide a profit perc value'),
   profitCash: number()
      .typeError('Please provide a number value')
      .required('Please provide a profit cash value'),
});
