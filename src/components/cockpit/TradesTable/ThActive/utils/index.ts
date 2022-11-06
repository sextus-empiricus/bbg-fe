import { CockpitContextMode, ColumnType, QuerySortBy } from '../../../../../types';

export const getSortByValues = (
   mode: CockpitContextMode,
   columnType: ColumnType,
): QuerySortBy[] => {
   if (mode === CockpitContextMode.trades) {
      if (columnType === ColumnType.DATE) return [QuerySortBy.BOUGHT_AT];
      if (columnType === ColumnType.CURRENCY) return [QuerySortBy.CURRENCY];
      if (columnType === ColumnType.AMOUNT) return [QuerySortBy.AMOUNT];
      if (columnType === ColumnType.INVESTS) return [QuerySortBy.BOUGHT_FOR];
      if (columnType === ColumnType.PRICE) return [QuerySortBy.BUY_PRICE];
   }
   if (mode === CockpitContextMode.history) {
      if (columnType === ColumnType.DATE) {
         return [QuerySortBy.BOUGHT_AT, QuerySortBy.SOLD_AT];
      }
      if (columnType === ColumnType.CURRENCY) {
         return [QuerySortBy.CURRENCY];
      }
      if (columnType === ColumnType.AMOUNT) {
         return [QuerySortBy.AMOUNT];
      }
      if (columnType === ColumnType.INVESTS) {
         return [QuerySortBy.BOUGHT_FOR, QuerySortBy.SOLD_FOR];
      }
      if (columnType === ColumnType.PRICE) {
         return [QuerySortBy.BUY_PRICE, QuerySortBy.SELL_PRICE];
      }
      if (columnType === ColumnType.PROFIT) {
         return [QuerySortBy.PROFIT_PERC, QuerySortBy.PROFIT_CASH];
      }
   }
   return [];
};

export const getMaxSteps = (mode: CockpitContextMode, columnType: ColumnType): number => {
   if (mode === CockpitContextMode.trades) {
      return 2;
   } else {
      if (columnType === ColumnType.AMOUNT || columnType === ColumnType.CURRENCY) {
         return 2;
      } else {
         return 4;
      }
   }
};
