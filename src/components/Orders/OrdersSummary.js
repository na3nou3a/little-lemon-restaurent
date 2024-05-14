import React from 'react';
import { Link } from 'react-router-dom';

function OrdersSummary({ orders }) {
  let discount = 0;
  const flatRate = 55;
  let subTotal = 0;
  let totalPrice;

  orders.dishes.forEach((dish) => {
    const { quantity, price } = dish;
    const dishPrice = Number(price.slice(1));
    subTotal += quantity * dishPrice;
  });
  discount = ((subTotal * 5) / 100).toFixed(2);
  totalPrice = (subTotal - discount + flatRate).toFixed(2);

  return (
    <article className="cart-summary">
      <h2 className="cart-summary-title">summary</h2>
      <div className="cart-summary-totals">
        <p>
          subtotal: <span>${subTotal.toFixed(2)}</span>
        </p>
        <p>
          discount: <span>-${discount}</span>
        </p>
        <p>
          shipping (flat rate -fixed): <span>${flatRate}</span>
        </p>
        <p>
          order total: <strong>${totalPrice}</strong>
        </p>
      </div>
      <Link to="#" className="link-btn">
        proceed to checkout
      </Link>
    </article>
  );
}

export default OrdersSummary;
