import { useQuery, useQueryClient } from 'react-query';

import { axiosInstance, getJWTHeader } from '../axios';
import { queryKeys } from '../react-query/queryKeys';
import { clearStoredAuthTokens, getStoredAuthTokens } from '../storage/auth.storage';
import { UserCached } from '../types/UserCached.interface';

const getUser = async () => {
   const resp = await axiosInstance.get('/users', {
      headers: getJWTHeader(),
   });
   /*eslint-disable*/
   const { refreshToken, ...user } = resp.data.user;
   return {
      ...user,
      tokens: getStoredAuthTokens(),
   };
};

const useUser = () => {
   const { data: user } = useQuery<UserCached | null>(queryKeys.user, getUser);
   const queryClient = useQueryClient();

   const clearUser = () => {
      queryClient.setQueryData(queryKeys.user, null);
      clearStoredAuthTokens();
   };
   return { user, clearUser };
};

export { useUser };
