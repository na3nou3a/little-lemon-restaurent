import React from 'react';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './dishCard.css';

const DishCard = ({ dish, orders, setOrders }) => {
  const { id, name, price, description, img } = dish;
  const handleClick = () => {
    const count = orders.count;
    const newDish = { id, name, price, description, img, quantity: 1 };
    const storedDish = orders.dishes.find((dish) => dish.id === newDish.id);
    if (!storedDish) {
      setOrders({ ...orders, count: count + 1, dishes: [...orders.dishes, newDish] });
      return;
    }

    const newDishes = orders.dishes.filter((dish) => dish !== storedDish);
    setOrders({
      ...orders,
      count: count + 1,
      dishes: [...newDishes, { ...newDish, count: storedDish.quantity + 1 }],
    });
  };

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
        <button className="add-btn" onClick={handleClick}>
          add to cart <FontAwesomeIcon icon={faMotorcycle} className="dish-card-icon" />
        </button>
      </div>
    </article>
  );
};

export default DishCard;
