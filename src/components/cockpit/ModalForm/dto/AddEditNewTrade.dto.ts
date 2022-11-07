import { Dayjs } from 'dayjs';

export interface AddEditTradeDtoInterface {
   boughtAt: Dayjs | null;
   currency: string;
   boughtFor: number;
   price: number;
   amount: number;
}
