import React from 'react';
import './styles.css';
import { BookingForm } from '../../components';

function BookingSection(props) {
  return (
    <section className="booking-section">
      <div className="content max-width">
        <header className="header">
          <h1 className="title">lemon restaurant reservation</h1>
        </header>
        <div className="wrapper">
          <article className="description">
            <h2 className="sub-title">Experience the perfect balance of tradition and luxury.</h2>
            <p className="text">
              At Little Lemon, we take great pride in providing our customers with the greatest
              luxurious experience with a touch of tradition.
            </p>
            <p className="text">Book a table with us to share in this experience.</p>
          </article>
          <BookingForm {...props} />
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
