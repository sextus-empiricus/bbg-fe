import React, { ReactElement } from 'react';

import { SignUpForm } from '../components/auth/SignUpForm';
import { AuthLayout } from '../components/layouts/Auth.layout';

const SignUpView = (): ReactElement => {
   return (
      <AuthLayout>
         <SignUpForm />
      </AuthLayout>
   );
};

export { SignUpView };
