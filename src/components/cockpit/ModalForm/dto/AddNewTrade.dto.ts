import { Dayjs } from 'dayjs';

export interface CreateTradeDtoInterface {
   boughtAt: Dayjs | null;
   currency: string;
   boughtFor: number;
   price: number;
   amount: number;
}
