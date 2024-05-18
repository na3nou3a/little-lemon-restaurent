import React from 'react';
import { DishCard } from '../SharedComponents';
import { dishes } from '../../data';

const MenuPage = (props) => {
  return (
    <section className="menu">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">our menu</h1>
        </header>
        <div className="section__body dish-cards">
          {dishes.map((dish) => {
            return <DishCard key={dish.id} dish={dish} id={dish.id} {...props} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
