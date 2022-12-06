import { GetMyPaginatedQueryInterface } from '@backend';

export const queryBuilder = (queryKeys: GetMyPaginatedQueryInterface): string => {
   let query = '?';

   // historical:
   if (queryKeys.historical === 'true') {
      query += `historical=${queryKeys.historical}`;
   }
   // currency-filter:
   if (queryKeys.currency !== 'all') {
      query += `&currency=${queryKeys.currency}`;
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
   return query;
};
