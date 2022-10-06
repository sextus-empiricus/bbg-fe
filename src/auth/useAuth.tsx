import { AuthDtoInterface } from '@backend';
import { AxiosResponse } from 'axios';

import { axiosInstance } from '../axios';
import { useSnackBar } from '../components/common/SnackBar/hooks/useSnackBar';
import { setStoredAuthTokens } from '../storage/auth.storage';

import { useUser } from './useUser';

interface AuthResponse {
   status: boolean;
   message: string;
}

const useAuth = () => {
   const { clearUser } = useUser();
   const { showSnackBar } = useSnackBar();

   const authServerCall = async (
      urlEndpoint: string,
      authDto: AuthDtoInterface,
   ): Promise<AuthResponse> => {
      try {
         const { data }: AxiosResponse = await axiosInstance({
            url: urlEndpoint,
            method: 'POST',
            data: authDto,
            headers: { 'Content-Type': 'application/json' },
         });
         setStoredAuthTokens(data.tokens);
         return { status: true, message: '' };
         /*eslint-disable*/
      } catch (errorResponse: any) {
         console.log(errorResponse);
         if (errorResponse.code === 'ERR_NETWORK') {
            showSnackBar(errorResponse.message, 'error');
            return {
               status: false,
               message: errorResponse.message,
            };
         }
         return { status: false, message: 'Incorrect email or password' };
      }
   };

   const signIn = async (authDto: AuthDtoInterface): Promise<AuthResponse> => {
      return await authServerCall('/auth/local/signin', authDto);
   };

   // async function signup(email: string, password: string): Promise<void> {
   //   await authServerCall('/user', email, password);
   // }

   //
   function signOut(): void {
      clearUser();
   }

   //

   return {
      signIn,
      signOut,
   };
};
export { useAuth };
