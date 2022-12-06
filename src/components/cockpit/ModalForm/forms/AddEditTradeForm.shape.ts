import { date, number, object, string } from 'yup';

export const AddEditTradeShape = object().shape({
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
