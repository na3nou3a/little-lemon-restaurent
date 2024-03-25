import React from 'react';
import './styles.css';
import { clients } from '../../data';
import Card from './Card';

function CustomersSay() {
  return (
    <section className="testimonials">
      <div className="content max-width">
        <header className="header">
          <h2 className="title">testimonials</h2>
          <h3 className="sub-title">Read what others have to say about us</h3>
        </header>
        <div className="cards">
          {clients.map((client) => {
            return <Card key={client.id} client={client} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
