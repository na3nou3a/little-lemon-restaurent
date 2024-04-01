import React from 'react';
import { Main, ConfirmedBooking } from '../components';

const ConfirmBookingPage = ({ formState }) => {
  return (
    <Main>
      <ConfirmedBooking formState={formState} />
    </Main>
  );
};

export default ConfirmBookingPage;
