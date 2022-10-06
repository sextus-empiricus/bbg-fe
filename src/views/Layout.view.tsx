import React, { ReactElement } from 'react';

import { SignInForm } from '../components/auth/SingInForm';
import { CenterContainer } from '../components/common/CenterContainer';
import { MainLayout } from '../components/layouts/Main/Main.layout';

const LayoutView = (): ReactElement => {
   return (
      <MainLayout>
         <CenterContainer>
            <SignInForm />
         </CenterContainer>
      </MainLayout>
   );
};

export { LayoutView };
