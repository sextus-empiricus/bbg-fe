// import React, { ReactElement } from 'react';
// import { TradeMinified } from '@backend';
// import { Tooltip } from '@mui/material';
// import { motion } from 'framer-motion';
//
// import { useActualCurrencyPrice } from '../../../../hooks/useActualCurrencyPrice';
//
// import { DisplayData } from './utils/DisplayData';
// import { DoubleTd } from './DoubleTd';
// import { TableRowButton } from './TableRowButton';
//
// import classes from './TableRow.module.scss';
//
// interface Props {
//    trade: TradeMinified;
// }
//
// const TableRow = ({ trade }: Props): ReactElement => {
//    const { data: actualCurrencyPrice } = useActualCurrencyPrice(trade.currency);
//    const { currency, price, boughtFor, boughtAt, amount, iconUrl } = trade;
//    const move = (actualCurrencyPrice * 100) / Number(price) - 100;
//    const worthToday = +boughtFor + (+boughtFor * move) / 100;
//
//    return (
//       <motion.tr
//          className={classes['Table-row']}
//          initial={{ opacity: 0 }}
//          animate={{ opacity: 1 }}
//          transition={{ duration: 0.2, ease: 'easeIn' }}
//       >
//          <td className={classes['td-date']} data-label='date'>
//             {DisplayData.date(boughtAt)}
//             <span className={classes.time}>{DisplayData.time(boughtAt)}</span>
//          </td>
//          <td className={classes['td-currency']} data-label='currency'>
//             <div className={classes['td-currency-wrapper']}>
//                <img
//                   src={iconUrl ?? ''}
//                   alt={currency + ' ' + 'icon'}
//                   className={classes['td-currency-icon']}
//                />
//                {DisplayData.currency(currency)}
//             </div>
//          </td>
//          <td data-label='amount'>
//             <Tooltip title={DisplayData.amount(amount)}>
//                <span>{DisplayData.amountMini(amount)}</span>
//             </Tooltip>
//          </td>
//          <td
//             className={`${move >= 0 ? classes['text__profit'] : classes['text__loss']}`}
//             data-label='move%'
//          >
//             {DisplayData.percMove(move)}
//          </td>
//          <DoubleTd
//             dataLabel='invests'
//             tooltipTiles={{
//                historical: 'invested',
//                actual: 'worth now',
//             }}
//             actualValue={worthToday}
//             historicalValue={+boughtFor}
//          ></DoubleTd>
//          <DoubleTd
//             dataLabel='price'
//             tooltipTiles={{
//                historical: 'purchase price',
//                actual: 'actual price',
//             }}
//             actualValue={actualCurrencyPrice}
//             historicalValue={+price}
//          ></DoubleTd>
//          <td>
//             <TableRowButton tradeId={trade.id} />
//          </td>
//       </motion.tr>
//    );
// };
//
// export { TableRow };
export const x = () => {
   console.log('');
};
