import React from 'react';
import './confirmedBooking.css';

function ConfirmedBooking({ formState }) {
  const { date, time, numOfGuests, occasion, instructions, name, email, phone } = formState;
  return (
    <section className="confirm-booking">
      <div className="content max-width">
        <header className="header">
          <h1 className="title">Thank you for your reservation!</h1>
          <p className="lead-text">We Look Forward To Seeing You At Little Lemon.</p>
        </header>
        <div className="body">
          <h2 className="sub-title">your reservation details</h2>
          <div className="details">
            <div className="detail">
              <h3 className="detail-title">name:</h3>
              <p className="slot">{name}</p>
            </div>
            <div className="detail">
              <h3 className="detail-title">email:</h3>
              <p className="slot">{email}</p>
            </div>
            <div className="detail">
              <h3 className="detail-title">phone:</h3>
              <p className="slot">{phone}</p>
            </div>
            <div className="detail">
              <h3 className="detail-title">reservation date:</h3>
              <p className="slot">{date}</p>
            </div>
            <div className="detail">
              <h3 className="detail-title">reservation time:</h3>
              <p className="slot">{time}</p>
            </div>
            {numOfGuests > 1 ? (
              <div className="detail">
                <h3 className="detail-title">number of guests:</h3>
                <p className="slot">{numOfGuests}</p>
              </div>
            ) : (
              false
            )}
            {occasion ? (
              <div className="detail">
                <h3 className="detail-title">occasion:</h3>
                <p className="slot">{occasion}</p>
              </div>
            ) : (
              false
            )}
            {instructions ? (
              <div className="detail instructions">
                <h3 className="detail-title">your instructions:</h3>
                <p className="slot">{instructions}</p>
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

export default ConfirmedBooking;
