import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LayoutView, SignInView } from '../views';
import { SignUpView } from '../views/SignUp.view';

const AppRouter = (): ReactElement => {
   return (
      <Routes>
         <Route path='/' element={<h1>init🚀</h1>} />
         <Route path='/layout' element={<LayoutView />} />
         <Route path='/signin' element={<SignInView />} />
         <Route path='/signup' element={<SignUpView />} />
      </Routes>
   );
};

export { AppRouter };
