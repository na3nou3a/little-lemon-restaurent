import React from 'react';
import { Link } from 'react-router-dom';
import { specialDishes } from '../../data';
import { DishCard } from '../SharedComponents';

function Highlights() {
  return (
    <section className="specials">
      <div className="content max-width">
        <header className="header">
          <h2 className="title">This weeks specials!</h2>
          <Link className="link-btn" to="/menu">
            online menu
          </Link>
        </header>
        <div className="dish-cards">
          {specialDishes.map((dish) => {
            return <DishCard key={dish.id} dish={dish} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
