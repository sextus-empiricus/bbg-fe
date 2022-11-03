import React, {
   Context,
   createContext,
   Dispatch,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from 'react';
import { GetMyPaginatedQueryInterface } from '@backend';

import { CockpitContextMode } from '../types';

import { CockpitContext } from './cockpit.context';

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
/** This context uses `mode` value of CockpitContext */
const TableQueryContextProvider = ({ children }: Props) => {
   const cockpitContext = useContext(CockpitContext);
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

   useEffect(() => {
      if (cockpitContext.mode.value === CockpitContextMode.history) {
         setQuery((prev) => ({ ...prev, historical: 'true' }));
      } else {
         setQuery((prev) => ({ ...prev, historical: 'false' }));
      }
   }, [cockpitContext.mode.value]);

   const contextValue: TableQueryContextInterface = {
      query,
      setQueryObject: setQuery,
   };

   return <TableQueryContext.Provider value={contextValue}>{children}</TableQueryContext.Provider>;
};

export { TableQueryContext, TableQueryContextProvider };
