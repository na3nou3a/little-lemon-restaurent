import React from 'react';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <div className="dish-card_img-container">
        <img className="dish-card_img" src={img} alt={name} />
      </div>
      <div className="dish-card_info">
        <h3 className="card-title dish-card_title">
          {name} <span className="dish-card_price">{price}</span>
        </h3>
        <p className="dish-card_description text">{description}</p>
        <button className="dish-card_btn" onClick={handleClick}>
          add to cart <FontAwesomeIcon icon={faMotorcycle} className="dish-card_btn-icon" />
        </button>
      </div>
    </article>
  );
};

export default DishCard;
