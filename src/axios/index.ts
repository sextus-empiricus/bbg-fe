import axios from 'axios';

import { config } from '../config';
import { getStoredAuthTokens } from '../storage/auth.storage';

const { baseURL } = config.axios;

export function getJWTHeader(): Record<string, string> {
   const tokens = getStoredAuthTokens();
   return { Authorization: `Bearer ${tokens?.accessToken}` };
}

const axiosInstance = axios.create({ baseURL });

export { axiosInstance };
