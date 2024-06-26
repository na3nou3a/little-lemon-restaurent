import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function OrderCard({ dish, orders, setOrders }) {
  const { img, name, price, quantity } = dish;
  const numPrice = Number(dish.price.slice(1));
  const subTotal = (numPrice * Number(quantity)).toFixed(2);
  const increment = () => {
    dish.quantity = quantity + 1;
    setOrders({ ...orders });
  };
  const decrement = () => {
    const newQty = quantity - 1;
    if (newQty <= 0) {
      const newDishes = orders.dishes.filter((d) => d !== dish);
      setOrders({ count: orders.count - 1, dishes: newDishes });
    } else {
      dish.quantity = quantity - 1;
      setOrders({ ...orders });
    }
  };
  const removeItem = () => {
    const newDishes = orders.dishes.filter((d) => d !== dish);
    setOrders({ count: orders.count - 1, dishes: newDishes });
  };
  return (
    <div className="shopping-cart__item">
      <h3 className="item__name">{name}</h3>
      <p className="item__price">{price}</p>
      <div className="item__qty">
        <button onClick={decrement}>-</button>
        <strong>{quantity}</strong>
        <button onClick={increment}>+</button>
      </div>
      <p className="item__subtotal">
        <strong>${subTotal}</strong>
      </p>
      <img src={img} alt={name} className="item__img" />
      <button className="item__remove" onClick={removeItem}>
        <FontAwesomeIcon icon={faTrash} title="remove item" className="icon" />
        delete
      </button>
    </div>
  );
}

export default OrderCard;
