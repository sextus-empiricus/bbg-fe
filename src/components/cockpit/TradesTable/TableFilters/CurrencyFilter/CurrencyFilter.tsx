import React, { ReactElement } from 'react';
import { UserCurrenciesEntity } from '@backend';
import { Tab, Tabs } from '@mui/material';

interface Props {
   actualValue: any; // TODO
   onChangeHandler: any; // TODO
   userCurrencies: UserCurrenciesEntity[];
}

const CurrencyFilter = ({ userCurrencies, actualValue, onChangeHandler }: Props): ReactElement => {
   return (
      <Tabs
         value={actualValue}
         onChange={onChangeHandler}
         variant='scrollable'
         scrollButtons='auto'
         aria-label='scrollable auto tabs example'
      >
         <Tab key='all' value='all' label='all' style={{ minHeight: 1, height: 50 }} />
         {userCurrencies.map((el) => (
            <Tab
               key={'tab' + el.currency}
               icon={
                  <img
                     src={el.iconUrl}
                     alt={el.currency + ' icon'}
                     style={{ width: '20px' }}
                  />
               }
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
