import React from 'react';
import { Main, BookingSection } from '../components';

const BookingPage = (props) => {
  return (
    <Main>
      <BookingSection {...props} />
    </Main>
  );
};

export default BookingPage;
