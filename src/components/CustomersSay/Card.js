import React from 'react';
import { FaStar } from 'react-icons/fa';

function Card({ client }) {
  const { name, rating, review, img } = client;
  console.log(name);
  return (
    <article className="card">
      <h3 className="star-rating">
        {[...Array(5)].map((star, index) => {
          return <FaStar size={26} color={index + 1 <= rating ? '#ffc107' : '#e4e5e9'} />;
        })}
      </h3>
      <div className="profile">
        <img src={img} className="client-img" alt="client" />
        <h3 className="client-name">{name}</h3>
      </div>
      <p className="client-review">
        <span className="quote">"</span>
        {review}
        <span className="quote">"</span>
      </p>
    </article>
  );
}

export default Card;
