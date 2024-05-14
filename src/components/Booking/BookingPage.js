import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { submitAPI } from '../../APIS';

const BookingPage = (props) => {
  const { bookingState } = props;

  const [formErrors, setFormErrors] = useState({
    date: '',
    time: '',
    numOfGuests: '',
    name: '',
    email: '',
    phone: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    if (submitAPI(bookingState)) {
      navigate('/confirm-bookings');
    }
  };
  const formProps = {
    isDisabled,
    setIsDisabled,
    formErrors,
    setFormErrors,
    navigate,
    submitForm,
  };
  return (
    <section className="booking">
      <div className="section-content max-width">
        <header className="section-header">
          <h1 className="title">little lemon reservation</h1>
        </header>
        <div className="inner-wrapper booking_inner-wrapper">
          <div className="booking_description">
            <h2 className="sub-title">Experience the perfect balance of tradition and luxury.</h2>
            <p className="text">
              At Little Lemon, we take great pride in providing our customers with the greatest
              luxurious experience with a touch of tradition.
            </p>
            <p className="text">Book a table with us to share in this experience.</p>
          </div>
          <BookingForm {...formProps} {...props} />
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
