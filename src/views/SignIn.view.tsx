import React, { ReactElement } from 'react';

import { SignInForm } from '../components/auth/SignInForm';
import { AuthLayout } from '../components/layouts/Auth.layout';

const SignInView = (): ReactElement => {
   return (
      <AuthLayout>
         <SignInForm />
      </AuthLayout>
   );
};

export { SignInView };
