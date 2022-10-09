import { useQuery } from 'react-query';
import { GetMyPaginatedResponse } from '@backend';

import { axiosInstance, getJWTHeader } from '../../../../axios';
import { queryKeys } from '../../../../react-query/queryKeys';

const getTrades = async (): Promise<GetMyPaginatedResponse> => {
   const { data } = await axiosInstance.get('/trades/my', {
      headers: getJWTHeader(),
   });
   return data;
};

const useTrades = () => {
   const fallback = { tradesList: [], userCurrencies: [] }
   const { data = fallback } = useQuery<GetMyPaginatedResponse>(
      queryKeys.trades,
      getTrades,
   );
   return data;
};

export { useTrades };
