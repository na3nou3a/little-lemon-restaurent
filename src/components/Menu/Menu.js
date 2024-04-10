import React from 'react';
import './menu.css';
import { DishCard } from '../../components';
import { dishes } from '../../data';

function Menu() {
  return (
    <section className="menu-section">
      <div className="content max-width">
        <header className="header">
          <h2 className="title">our menu</h2>
        </header>
        <div className="dish-cards">
          {dishes.map((dish) => {
            return <DishCard key={dish.id} dish={dish} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Menu;
