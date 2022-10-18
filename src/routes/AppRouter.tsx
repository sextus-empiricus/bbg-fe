import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
   CockpitView,
   LayoutView,
   SignInView,
   SignUpView,
   TestsView,
   TradesTableView,
} from '../views';

const AppRouter = (): ReactElement => {
   return (
      <Routes>
         <Route path='/' element={<h1>init🚀</h1>} />
         <Route path='/layout' element={<LayoutView />} />
         <Route path='/cockpit' element={<CockpitView />} />
         <Route path='/signin' element={<SignInView />} />
         <Route path='/signup' element={<SignUpView />} />
         <Route path='/table' element={<TradesTableView />} />
         <Route path='/tests' element={<TestsView />} />
      </Routes>
   );
};

export { AppRouter };
