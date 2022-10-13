import { useQuery } from 'react-query';
import { GetMyPaginatedQueryInterface, GetMyPaginatedResponse } from '@backend';

import { axiosInstance, getJWTHeader } from '../../../../axios';
import { queryKeys } from '../../../../react-query/queryKeys';

const getTrades = async (
   queryKeys: GetMyPaginatedQueryInterface,
): Promise<GetMyPaginatedResponse> => {
   // QUERY BUILDER:
   let query = '?';
   // currency-filter:
   if (queryKeys.currency !== 'all') {
      query += `currency=${queryKeys.currency}`;
   }
   // date-filter:
   if (queryKeys.from && queryKeys.from !== 'Invalid Date') {
      query += `&from=${queryKeys.from}`;
   }
   if (queryKeys.to && queryKeys.to !== 'Invalid Date') {
      query += `&to=${queryKeys.to}`;
   }
   // sortBy:
   if (queryKeys.sortBy) {
      query += `&sortBy=${queryKeys.sortBy}`;
   }
   // order:
   if (queryKeys.order) {
      query += `&order=${queryKeys.order}`;
   }

   console.log(query);
   const { data } = await axiosInstance.get(`/trades/my${query}`, {
      headers: getJWTHeader(),
   });
   return data;
};

const useTrades = (query: GetMyPaginatedQueryInterface) => {
   const fallback = { tradesList: [], userCurrencies: [] };
   const { data = fallback, refetch } = useQuery<GetMyPaginatedResponse>(queryKeys.trades, () =>
      getTrades(query),
   );
   return { data, refetch };
};

export { useTrades };
