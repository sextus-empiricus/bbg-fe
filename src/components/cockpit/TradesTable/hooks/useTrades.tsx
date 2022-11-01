import { useContext, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { GetMyPaginatedQueryInterface, GetMyPaginatedResponse } from '@backend';

import { axiosInstance, getJWTHeader } from '../../../../axios';
import { queryKeys } from '../../../../react-query/queryKeys';
import { TableQueryContext } from '../../../../store/table-query.context';

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
   // pagination:
   if (queryKeys.limit) {
      query += `&limit=${queryKeys.limit}`;
   }
   if (queryKeys.page) {
      query += `&page=${queryKeys.page}`;
   }

   const { data } = await axiosInstance.get(`/trades/my${query}`, {
      headers: getJWTHeader(),
   });
   return data;
};
/** This hook uses `TableQueryContext` and must be used inside its provider. */
const useTrades = () => {
   const queryClient = useQueryClient();
   const { query } = useContext(TableQueryContext);
   const fallback = { tradesList: [], userCurrencies: [], results: 0, pages: 0, page: 0 };
   const { data = fallback, refetch } = useQuery<GetMyPaginatedResponse>(
      [queryKeys.trades, 1],
      () => getTrades(query),
   );

   useEffect(() => {
      (async () => {
         await refetch();
         if (query.page && query.limit)
            if (query.page < query.limit) {
               const nextPage = query.page + 1;
               await queryClient.prefetchQuery([queryKeys.trades, nextPage], () =>
                  getTrades({ ...query, page: nextPage }),
               );
            }
      })();
   }, [query]);

   return { data, refetch };
};

export { useTrades };
