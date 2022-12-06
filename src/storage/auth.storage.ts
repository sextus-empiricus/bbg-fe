import { TokensObject } from '@backend';

const AUTH_LOCALSTORAGE_KEY = 'bbg-auth-tokens';

export function getStoredAuthTokens(): TokensObject | null {
   const storedUser = localStorage.getItem(AUTH_LOCALSTORAGE_KEY);
   return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredAuthTokens(tokens: TokensObject): void {
   localStorage.setItem(AUTH_LOCALSTORAGE_KEY, JSON.stringify(tokens));
}

export function clearStoredAuthTokens(): void {
   localStorage.removeItem(AUTH_LOCALSTORAGE_KEY);
}
