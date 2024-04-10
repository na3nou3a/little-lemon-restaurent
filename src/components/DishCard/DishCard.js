import React from 'react';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './dishCard.css';

const DishCard = ({ dish }) => {
  const { name, price, description, img } = dish;
  return (
    <article className="dish-card">
      <div className="dish-card-img-container">
        <img className="dish-card-img" src={img} alt={name} />
      </div>
      <div className="dish-card-body">
        <h3 className="dish-card-title">
          {name} <span className="dish-card-price">{price}</span>
        </h3>
        <p className="dish-card-description">{description}</p>
        <Link to="/order" className="dish-card-link">
          Order for delivery <FontAwesomeIcon icon={faMotorcycle} className="dish-card-icon" />
        </Link>
      </div>
    </article>
  );
};

export default DishCard;
