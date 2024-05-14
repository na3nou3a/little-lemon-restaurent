import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import { Chicago } from '../SharedComponents';

const HomePage = (props) => {
  return (
    <>
      <CallToAction />
      <Specials {...props} />
      <CustomersSay />
      <Chicago />
    </>
  );
};

export default HomePage;
