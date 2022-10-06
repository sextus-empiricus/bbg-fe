import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LayoutView } from '../views/Layout.view';

const AppRouter = (): ReactElement => {
   return (
      <Routes>
         <Route path='/' element={<h1>init🚀</h1>} />
         <Route path='/layout' element={<LayoutView />} />
      </Routes>
   );
};

export { AppRouter };
