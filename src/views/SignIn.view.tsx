import React, { ReactElement } from 'react';

import { SignInForm } from '../components/auth/SignInForm';
import { CenterContainer } from '../components/common/CenterContainer';
import { MainLayout } from '../components/layouts/Main/Main.layout';

const SignInView = (): ReactElement => {
   return (
      <MainLayout>
         <CenterContainer>
            <SignInForm></SignInForm>
         </CenterContainer>
      </MainLayout>
   );
};

export { SignInView };
