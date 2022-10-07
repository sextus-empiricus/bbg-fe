import { useQuery } from 'react-query';
import { GetPaginatedMyResponse } from '@backend';

import { axiosInstance, getJWTHeader } from '../../../../axios';
import { queryKeys } from '../../../../react-query/queryKeys';

const getTrades = async (): Promise<GetPaginatedMyResponse> => {
   const { data } = await axiosInstance.get('/trades/my', {
      headers: getJWTHeader(),
   });
   return data;
};

const useTrades = () => {
   const { data = { tradesList: [] } } = useQuery(queryKeys.trades, getTrades);
   return data;
};

export { useTrades };
