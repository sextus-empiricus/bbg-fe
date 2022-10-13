import React, { Context, createContext, Dispatch, ReactNode, useState } from 'react';
import { GetMyPaginatedQueryInterface } from '@backend';

interface TableQueryContextInterface {
   query: GetMyPaginatedQueryInterface;
   setQueryObject: Dispatch<React.SetStateAction<GetMyPaginatedQueryInterface>>;
}

interface Props {
   children: ReactNode;
}

/*eslint-disable*/
/*@ts-ignore*/
const TableQueryContext: Context<TableQueryContextInterface> = createContext({
   query: {
      historical: '',
      sortBy: '',
      order: '',
      currency: '',
      page: '',
      limit: '',
      from: '',
      to: '',
   },
   setQueryObject: () => {},
});

const TableQueryContextProvider = ({ children }: Props) => {
   const [query, setQuery] = useState<GetMyPaginatedQueryInterface>({
      historical: '',
      limit: '10',
      page: '1',
      currency: 'all',
      from: '',
      order: '',
      sortBy: '',
      to: '',
   });

   const contextValue: TableQueryContextInterface = {
      query,
      setQueryObject: setQuery,
   };

   return <TableQueryContext.Provider value={contextValue}>{children}</TableQueryContext.Provider>;
};

export { TableQueryContext, TableQueryContextProvider };
