/** Enums copied from BE. React Create App found some issues with importing it from '@backed'. Make sure it matches a BE declaration.*/
export enum QuerySortBy {
   BOUGHT_AT = 'boughtAt',
   SOLD_AT = 'soldAt',
   CURRENCY = 'currency',
   AMOUNT = 'amount',
   BOUGHT_FOR = 'boughtFor',
   SOLD_FOR = 'soldFor',
   BUY_PRICE = 'buyPrice',
   SELL_PRICE = 'sellPrice',
   PROFIT_CASH = 'profitCash',
   PROFIT_PERC = 'profitPerc',
}

export enum QueryOrder {
   ASC = 'asc',
   DESC = 'desc',
}
