import React, { Context, createContext, ReactNode, useState } from 'react';

import { CockpitContextMode } from '../types';

interface CockpitContext {
   title: string;
   mode: {
      value: CockpitContextMode;
      set: (mode: CockpitContextMode) => void;
   };
}

interface Props {
   children: ReactNode;
}

/*eslint-disable*/
/*@ts-ignore*/
const CockpitContext: Context<CockpitContext> = createContext({
   title: {
      value: '',
   },
   mode: {
      value: CockpitContextMode.trades,
      set: () => {},
   },
});

const CockpitContextProvider = ({ children }: Props) => {
   const titles = {
      trades: 'Active Trades',
      history: 'Historical Trades',
      statistics: 'Statistics',
   };
   const [title, setTitle] = useState<string>(titles.trades);
   const [mode, setMode] = useState<CockpitContextMode>(CockpitContextMode.trades);

   const setModeHandler = (mode: CockpitContextMode) => {
      setMode(mode);
      if (mode === CockpitContextMode.trades) setTitle(titles.trades);
      if (mode === CockpitContextMode.history) setTitle(titles.history);
      if (mode === CockpitContextMode.statistics) setTitle(titles.statistics);
   };

   const contextValue: CockpitContext = {
      title,
      mode: {
         value: mode,
         set: setModeHandler,
      },
   };

   return <CockpitContext.Provider value={contextValue}>{children}</CockpitContext.Provider>;
};

export { CockpitContext, CockpitContextProvider };
