import React from 'react';
import { Link } from 'react-router-dom';
import { specialDishes } from '../../data';
import { DishCard } from '../SharedComponents';

function Specials(props) {
  return (
    <section className="specials">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">This weeks specials!</h1>
          <Link className="link-btn" to="/menu">
            online menu
          </Link>
        </header>
        <div className="section__body dish-cards">
          {specialDishes.map((dish) => {
            return <DishCard key={dish.id} dish={dish} id={dish.id} {...props} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Specials;
