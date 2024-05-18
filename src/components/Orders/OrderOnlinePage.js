import React from 'react';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';
import OrdersSummary from './OrdersSummary';

const OrderOnlinePage = ({ orders, setOrders }) => {
  return (
    <section className="orders">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">orders for delivery!</h1>
        </header>
        <div className="section__body">
          <div className="inner-wrapper orders__inner-wrapper">
            {orders.count === 0 ? (
              <p className="text">Your cart is currently empty!</p>
            ) : (
              <>
                <OrdersSummary orders={orders} />
                <div className="shopping-cart">
                  <div className="shopping-cart__top">
                    <h3 className="heading">item</h3>
                    <h3 className="heading">u. price</h3>
                    <h3 className="heading">qty</h3>
                    <h3 className="heading">subtotal</h3>
                  </div>
                  <div className="shopping-cart__body">
                    {orders.dishes.map((dish) => (
                      <OrderCard key={dish.id} dish={dish} orders={orders} setOrders={setOrders} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          <Link className="link-btn shop" to="/menu">
            continue shopping
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderOnlinePage;
