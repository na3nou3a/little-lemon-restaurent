import React from 'react';
import './styles.css';

function ConfirmBooking({ formState }) {
  const { date, time, numOfGuests, occasion, instructions, name, email, phone } = formState;
  return (
    <section className="confirm-booking">
      <div className="content max-width">
        <header className="header">
          <h1 className="title">congratulations you completed your reservation!</h1>
        </header>
        <div className="body">
          <h2 className="sub-title">your reservation details</h2>
          <div className="details">
            <p className="text">
              name: <span className="slot">{name}</span>
            </p>
            <p className="text">
              email: <span className="slot">{email}</span>
            </p>
            <p className="text">
              phone: <span className="slot">{phone}</span>
            </p>
            <p className="text">
              reservation date: <span className="slot">{date}</span>
            </p>
            <p className="text">
              reservation time: <span className="slot">{time}</span>
            </p>
            {numOfGuests > 1 ? (
              <p className="text">
                number of guests: <span className="slot">{numOfGuests}</span>
              </p>
            ) : (
              false
            )}
            {occasion ? (
              <p className="text">
                occasion: <span className="slot">{occasion}</span>
              </p>
            ) : (
              false
            )}
            {instructions ? (
              <p className="text">
                your instructions: <span className="slot">{instructions}</span>
              </p>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConfirmBooking;
