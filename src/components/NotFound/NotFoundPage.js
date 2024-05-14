import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <div className="section-content max-width">
        <header className="section-header">
          <h1 className="section-title">page not found</h1>
        </header>
        <div className="inner-wrapper not-found-inner-wrapper">
          <p className="not-found-text">
            this page doesn\'t exist in our database!
            <Link to="/">go home</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
