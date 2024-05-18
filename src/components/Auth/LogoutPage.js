import React from 'react';
import { Link } from 'react-router-dom';

const LogOutPage = () => {
  return (
    <section className="logout">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">see you soon!!!</h1>
        </header>
        <div className="section__body inner-wrapper logout__inner-wrapper">
          <p className="text">you have successfully logged out!!!</p>
          <Link to="/" className="link-btn">
            back to home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogOutPage;
