import { useContext, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { GetMyPaginatedQueryInterface, GetMyPaginatedResponse } from '@backend';

import { axiosInstance, getJWTHeader } from '../../../../axios';
import { queryKeys } from '../../../../react-query/queryKeys';
import { TableQueryContext } from '../../../../store/table-query.context';

import { queryBuilder } from './utils';

const getTrades = async (
   queryKeys: GetMyPaginatedQueryInterface,
): Promise<GetMyPaginatedResponse> => {
   const query = queryBuilder(queryKeys);
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
