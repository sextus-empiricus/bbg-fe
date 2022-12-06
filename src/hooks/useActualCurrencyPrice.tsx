import { useQuery } from 'react-query';
import axios from 'axios';

import { queryKeys } from '../react-query/queryKeys';

const getActualCurrencyPrice = async (symbol: string) => {
   const { data } = await axios.get(
      `https://www.binance.com/api/v3/ticker/price?symbol=${symbol.toUpperCase()}USDT`,
   );
   return +data.price;
};
const useActualCurrencyPrice = (symbol: string) => {
   const { data = 0 } = useQuery([queryKeys.actualPrice, symbol], () =>
      getActualCurrencyPrice(symbol),
   );
   return { data };
};
export { useActualCurrencyPrice };
