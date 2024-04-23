import React from 'react';
import { DishCard } from '../SharedComponents';
import { dishes } from '../../data';
import './menu.css';

const MenuPage = (props) => {
  return (
    <section className="menu-section">
      <div className="content max-width">
        <header className="header">
          <h2 className="title">our menu</h2>
        </header>
        <div className="dish-cards">
          {dishes.map((dish) => {
            return <DishCard key={dish.id} dish={dish} id={dish.id} {...props} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
