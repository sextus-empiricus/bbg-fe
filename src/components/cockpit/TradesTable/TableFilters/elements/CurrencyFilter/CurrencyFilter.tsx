import React, { ReactElement, SyntheticEvent, useContext, useState } from 'react';
import { GetMyPaginatedQueryInterface, UserCurrenciesEntity } from '@backend';
import { Tab, Tabs } from '@mui/material';

import { TableQueryContext } from '../../../../../../store/table-query.context';

interface Props {
   userCurrencies: UserCurrenciesEntity[];
}

const CurrencyFilter = ({ userCurrencies }: Props): ReactElement => {
   const { setQueryObject } = useContext(TableQueryContext);
   const [currencyFilterValue, setCurrencyFilterValue] = useState('all');
   const currencyFilterChangeHandler = (e: SyntheticEvent, newValue: string) => {
      setCurrencyFilterValue(newValue);
      setQueryObject((prev: GetMyPaginatedQueryInterface) => ({ ...prev, currency: newValue }));
   };

   return (
      <Tabs
         value={currencyFilterValue}
         onChange={currencyFilterChangeHandler}
         variant='scrollable'
         scrollButtons='auto'
         aria-label='scrollable auto tabs example'
      >
         <Tab key='all' value='all' label='all' style={{ minHeight: 1, height: 50 }} />
         {userCurrencies.map((el) => (
            <Tab
               key={'tab' + el.currency}
               icon={<img src={el.iconUrl} alt={el.currency + ' icon'} style={{ width: '20px' }} />}
               iconPosition='start'
               value={el.currency}
               label={el.currency.toUpperCase()}
               style={{ minHeight: 1, height: 50 }}
            />
         ))}
      </Tabs>
   );
};

export { CurrencyFilter };
