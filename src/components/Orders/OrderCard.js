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
    <div className="shopping-cart_item">
      <h3 className="item-name">{name}</h3>
      <p className="item-price">{price}</p>
      <div className="item-qty">
        <button onClick={decrement}>-</button>
        <strong>{quantity}</strong>
        <button onClick={increment}>+</button>
      </div>
      <p className="item-subtotal">
        <strong>${subTotal}</strong>
      </p>
      <img src={img} alt={name} className="item-img" />
      <button className="item-remove" onClick={removeItem}>
        <FontAwesomeIcon icon={faTrash} title="remove item" className="icon" />
        delete
      </button>
    </div>
  );
}

export default OrderCard;
