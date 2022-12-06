export class DisplayData {
   static date(date: Date): string {
      return new Date(date).toLocaleDateString();
   }

   static time(date: Date): string {
      return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   }

   static currency(val: string): string {
      return val.toUpperCase();
   }

   static amount(val: string | number): number {
      const amount = Number(val);
      return Number(amount.toString());
   }

   static amountMini(val: string | number): number {
      const amount = Number(val);
      return Number(amount.toFixed(4));
   }

   static perc(val: string | number): string {
      const percMove = Number(val);
      return percMove >= 0 ? '+' + +percMove.toFixed(2) + '%' : +percMove.toFixed(2) + '%';
   }

   static cash(val: string | number): string {
      const money = Number(val);
      return money.toFixed(2) + '$';
   }
}
