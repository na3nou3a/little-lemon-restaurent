import React from 'react';
import { Main, Welcome } from '../components';

const WelcomePage = (props) => {
  return (
    <Main>
      <Welcome {...props} />
    </Main>
  );
};

export default WelcomePage;
