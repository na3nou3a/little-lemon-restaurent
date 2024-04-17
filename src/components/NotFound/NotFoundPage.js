import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFoundPage = () => {
  return (
    <section className="not-allowed-section">
      <div className="content max-width">
        <header className="header">
          <h1 className="title">page not found</h1>
        </header>
        <div className="wrapper">
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
