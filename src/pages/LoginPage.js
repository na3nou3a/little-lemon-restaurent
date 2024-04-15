import React from 'react';
import { Main, LoginSection } from '../components';

const LoginPage = (props) => {
  return (
    <Main>
      <LoginSection {...props} />
    </Main>
  );
};

export default LoginPage;
