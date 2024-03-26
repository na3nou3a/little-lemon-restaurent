import React from 'react';
import { Main, ConfirmBooking } from '../components';

const ConfirmBookingPage = ({ formState }) => {
  return (
    <Main>
      <ConfirmBooking formState={formState} />
    </Main>
  );
};

export default ConfirmBookingPage;
