import React from 'react';
import { Link } from 'react-router-dom';
import { OrderCard, OrdersSummary } from '../../components';
import './orders.css';

const OrderOnlinePage = ({ orders, setOrders }) => {
  return (
    <section className="orders">
      <div className="content max-width">
        <header className="header">
          <h2 className="title">orders for delivery!</h2>
        </header>
        {orders.count === 0 ? (
          <p className="empty-cart-text">Your cart is currently empty.</p>
        ) : (
          <div className="content-wrapper">
            <OrdersSummary orders={orders} />
            <div className="shopping-cart">
              <div className="row header-row">
                <h3 className="col header-col">item</h3>
                <h3 className="col header-col">u. price</h3>
                <h3 className="col header-col">qty</h3>
                <h3 className="col header-col">subtotal</h3>
              </div>

              {orders.dishes.map((dish) => (
                <OrderCard key={dish.id} dish={dish} orders={orders} setOrders={setOrders} />
              ))}
            </div>
          </div>
        )}
        <Link className="link-btn shop" to="/menu">
          continue shopping
        </Link>
      </div>
    </section>
  );
};

export default OrderOnlinePage;
