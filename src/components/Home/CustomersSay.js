import React from 'react';
import { testimonials } from '../../data';
import Card from './Card';

function CustomersSay() {
  return (
    <section className="testimonials">
      <div className="content max-width">
        <header className="header">
          <h2 className="title">testimonials</h2>
          <h3 className="sub-title">Read what others have to say about us!</h3>
        </header>
        <div className="cards">
          {testimonials.map((testimonial) => {
            return <Card key={testimonial.id} testimonial={testimonial} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
