import React, { ReactElement } from 'react';

import { SignUpForm } from '../components/auth/SignUpForm';
import { CenterContainer } from '../components/common/CenterContainer';
import { MainLayout } from '../components/layouts/Main/Main.layout';

const SignUpView = (): ReactElement => {
   return (
      <MainLayout>
         <CenterContainer>
            <SignUpForm />
         </CenterContainer>
      </MainLayout>
   );
};

export { SignUpView };
