import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">page not found</h1>
        </header>
        <div className="section__body inner-wrapper not-found__inner-wrapper">
          <p className="text">
            this page doesn\'t exist in our database!
            <Link to="/">go home</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
