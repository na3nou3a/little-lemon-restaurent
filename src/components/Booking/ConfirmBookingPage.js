import React from 'react';

function ConfirmBookingPage({ bookingState }) {
  const { date, time, numOfGuests, occasion, instructions, name, email, phone } = bookingState;
  return (
    <section className="confirm-booking">
      <div className="section-content max-width">
        <header className="section-header">
          <h1 className="title">Thank you for your reservation!</h1>
          <p className="lead-text">We look forward to see you at Little Lemon.</p>
        </header>
        <div className="inner-wrapper confirm-booking_inner-wrapper">
          <h2 className="sub-title">your reservation details</h2>
          <div className="details">
            <div className="detail">
              <h3 className="detail-title">name:</h3>
              <p className="detail-value text">{name}</p>
            </div>
            <div className="detail">
              <h3 className="detail-title">email:</h3>
              <p className="detail-value text">{email}</p>
            </div>
            <div className="detail">
              <h3 className="detail-title">phone:</h3>
              <p className="detail-value text">{phone}</p>
            </div>
            <div className="detail">
              <h3 className="detail-title">reservation date:</h3>
              <p className="detail-value text">{date}</p>
            </div>
            <div className="detail">
              <h3 className="detail-title">reservation time:</h3>
              <p className="detail-value text">{time}</p>
            </div>
            {numOfGuests > 1 ? (
              <div className="detail">
                <h3 className="detail-title">number of guests:</h3>
                <p className="detail-value text">{numOfGuests}</p>
              </div>
            ) : (
              false
            )}
            {occasion ? (
              <div className="detail">
                <h3 className="detail-title">occasion:</h3>
                <p className="detail-value text">{occasion}</p>
              </div>
            ) : (
              false
            )}
            {instructions ? (
              <div className="detail instructions">
                <h3 className="detail-title">your instructions:</h3>
                <p className="detail-value text">{instructions}</p>
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
