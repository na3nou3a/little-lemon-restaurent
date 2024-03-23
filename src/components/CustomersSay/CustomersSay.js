import React from 'react';
import './styles.css';
import gina from '../../images/gina.jpeg';
import jake from '../../images/jake.jpeg';
import rosa from '../../images/rosa.jpeg';
import raymond from '../../images/raymond.jpeg';
import Card from './Card';

function CustomersSay() {
  const clients = [
    {
      id: 1,
      name: 'gina',
      rating: 5,
      review: "This is the best Mediterranean food that I've ever had!",
      img: gina,
    },
    {
      id: 2,
      name: 'jake',
      rating: 4,
      review:
        'I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.',
      img: jake,
    },
    {
      id: 3,
      name: 'rosa',
      rating: 5,
      review:
        'This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!',
      img: rosa,
    },
    {
      id: 4,
      name: 'raymond',
      rating: 4,
      review: "This is the best Mediterranean food that I've ever had!",
      img: raymond,
    },
  ];
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
