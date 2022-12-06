import { useQuery } from 'react-query';
import axios from 'axios';

import { queryKeys } from '../../../../../react-query/queryKeys';

const get24Change = async (symbol: string): Promise<number> => {
   const { data } = await axios.get(
      `https://www.binance.com/api/v3/ticker/24hr?symbol=${symbol.toUpperCase()}USDT`,
   );
   return +data.priceChangePercent;
};

const use24Change = (symbol: string): number => {
   const { data = 0 } = useQuery([queryKeys.change24, symbol], () => get24Change(symbol));
   return data;
};
export { use24Change };
