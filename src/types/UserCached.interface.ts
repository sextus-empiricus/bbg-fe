import { TokensObject } from '@backend';

export interface UserCached {
   id: string;
   email: string;
   tokens: TokensObject;
}
