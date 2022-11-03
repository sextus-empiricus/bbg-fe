export type columnsWidthKeys =
   | 'date'
   | 'currency'
   | 'amount'
   | 'move'
   | 'invests'
   | 'prices'
   | 'profit'
   | 'button';

export const columnsWidth: { [index: string]: { [index: string]: number } } = {
   trades: {
      date: 20,
      currency: 10,
      amount: 10,
      move: 15,
      invests: 15,
      prices: 10,
      button: 20,
   },
   history: {
      date: 25,
      currency: 5,
      amount: 15,
      invests: 15,
      prices: 13,
      profit: 12,
      button: 25,
   },
};
