import React from 'react';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function testimonialCard({ testimonial }) {
  const { name, rating, review, img } = testimonial;
  const ratingLevels = { 0: faStar, 0.5: faStarHalfStroke, 1: faStar };
  return (
    <article className="testimonial-card">
      <h3 aria-hidden={true}>
        {[...Array(5)].map((one, index) => (
          <FontAwesomeIcon key={index} icon={faStar} size="sm" className="star-icon silver" />
        ))}
      </h3>
      <h3 className="star-rating">
        {rating.map((ratingPoint, index) => (
          <FontAwesomeIcon
            key={index}
            icon={ratingLevels[ratingPoint]}
            size="sm"
            className={ratingPoint === 0 ? 'star-icon silver' : 'star-icon gold'}
          />
        ))}
      </h3>
      <div className="testimonial-card__profile">
        <img src={img} className="testimonial-card__img" alt="client" />
        <h3 className="testimonial-card__name">{name}</h3>
      </div>
      <p className="testimonial-card__review text-light">
        <span className="quote">"</span>
        {review}
        <span className="quote">"</span>
      </p>
    </article>
  );
}

export default testimonialCard;
