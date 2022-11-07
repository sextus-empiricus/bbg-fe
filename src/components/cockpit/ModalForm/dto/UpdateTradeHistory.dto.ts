import { Dayjs } from 'dayjs';

export interface UpdateTradeHistoryDto {
   boughtAt: Dayjs | null;
   soldAt: Dayjs | null;
   currency: string;
   amount: number;
   boughtFor: number;
   soldFor: number;
   buyPrice: number;
   sellPrice: number;
   profitPerc: number;
   profitCash: number;
}
