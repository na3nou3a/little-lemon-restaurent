import React from 'react';
import { Link } from 'react-router-dom';
import './logout.css';

const LogOutPage = () => {
  return (
    <section className="logout-section">
      <div className="content max-width">
        <header className="header">
          <h1 className="title">see you soon!!!</h1>
        </header>
        <div className="wrapper">
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
