import React from 'react';

function ConfirmBookingPage({ bookingState }) {
  const { date, time, numOfGuests, occasion, instructions, name, email, phone } = bookingState;
  return (
    <section className="confirm-booking">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">Thank you for your reservation!</h1>
          <p className="lead-text">We look forward to see you at Little Lemon.</p>
        </header>
        <div className="section__body inner-wrapper confirm-booking__inner-wrapper">
          <h2 className="sub-title">your reservation details</h2>
          <div className="details">
            <div className="detail">
              <h3 className="detail__title">name:</h3>
              <p className="detail__value text">{name}</p>
            </div>
            <div className="detail">
              <h3 className="detail__title">email:</h3>
              <p className="detail__value text">{email}</p>
            </div>
            <div className="detail">
              <h3 className="detail__title">phone:</h3>
              <p className="detail__value text">{phone}</p>
            </div>
            <div className="detail">
              <h3 className="detail__title">reservation date:</h3>
              <p className="detail__value text">{date}</p>
            </div>
            <div className="detail">
              <h3 className="detail__title">reservation time:</h3>
              <p className="detail__value text">{time}</p>
            </div>
            {numOfGuests > 1 ? (
              <div className="detail">
                <h3 className="detail__title">number of guests:</h3>
                <p className="detail__value text">{numOfGuests}</p>
              </div>
            ) : (
              false
            )}
            {occasion ? (
              <div className="detail">
                <h3 className="detail__title">occasion:</h3>
                <p className="detail__value text">{occasion}</p>
              </div>
            ) : (
              false
            )}
            {instructions ? (
              <div className="detail instructions">
                <h3 className="detail__title">your instructions:</h3>
                <p className="detail__value text">{instructions}</p>
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmBookingPage;
