import React from 'react';
import { testimonials } from '../../data';
import TestimonialCard from './TestimonialCard';

function CustomersSay() {
  return (
    <section className="testimonials">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">testimonials</h1>
          <h2 className="sub-title">Read what others have to say about us!</h2>
        </header>
        <div className="section__body testimonial-cards">
          {testimonials.map((testimonial) => {
            return <TestimonialCard key={testimonial.id} testimonial={testimonial} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
