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
      historical: undefined,
      sortBy: undefined,
      order: undefined,
      currency: undefined,
      page: undefined,
      limit: undefined,
      from: undefined,
      to: undefined,
   },
   setQueryObject: () => {},
});

const TableQueryContextProvider = ({ children }: Props) => {
   const [query, setQuery] = useState<GetMyPaginatedQueryInterface>({
      historical: undefined,
      limit: 10,
      page: 1,
      currency: 'all',
      from: undefined,
      order: undefined,
      sortBy: undefined,
      to: undefined,
   });

   const contextValue: TableQueryContextInterface = {
      query,
      setQueryObject: setQuery,
   };

   return <TableQueryContext.Provider value={contextValue}>{children}</TableQueryContext.Provider>;
};

export { TableQueryContext, TableQueryContextProvider };
