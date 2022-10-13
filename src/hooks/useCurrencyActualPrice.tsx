import { useEffect, useState } from 'react';

const useCurrencyActualPrice = (currency: string): number => {
   const [actualPrice, setActualPrice] = useState<number>(0);

   useEffect(() => {
      (async () => {
         const res = await fetch(
            `https://www.binance.com/api/v3/ticker/price?symbol=${currency.toUpperCase()}USDT`,
         );
         const resData = await res.json();
         const price = Number(resData.price);
         setActualPrice(price);
      })();
   }, []);

   return actualPrice;
};

export { useCurrencyActualPrice };
