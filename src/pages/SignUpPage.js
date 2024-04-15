import React from 'react';
import { Main, SignUpSection } from '../components';

const SignUpPage = (props) => {
  return (
    <Main>
      <SignUpSection {...props} />
    </Main>
  );
};

export default SignUpPage;
