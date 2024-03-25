import React from 'react';
import { Main, CallToAction, Specials, CustomersSay, Chicago } from '../components';

const HomePage = () => {
  return (
    <Main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </Main>
  );
};

export default HomePage;
