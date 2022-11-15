import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CockpitView, LandingPage, LayoutView, SignInView, SignUpView, TestsView } from '../views';

const AppRouter = (): ReactElement => {
   return (
      <Routes>
         <Route path='/' element={<LandingPage />} />
         <Route path='/layout' element={<LayoutView />} />
         <Route path='/cockpit' element={<CockpitView />} />
         <Route path='/signin' element={<SignInView />} />
         <Route path='/signup' element={<SignUpView />} />
         <Route path='/tests' element={<TestsView />} />
      </Routes>
   );
};

export { AppRouter };
