import React from 'react';
import { Link } from 'react-router-dom';
import './notAllowed.css';

function NotAllowed() {
  return (
    <section className="not-allowed-section">
      <div className="content max-width">
        <header className="header">
          <h1 className="title">not allowed</h1>
        </header>
        <div className="wrapper">
          <p className="text">
            this section is restricted for autenticated users only! please{' '}
            <Link to="/login">login</Link> to your account.
          </p>
          <p className="text">
            you dont have an account! please <Link to="/signup">sign up</Link> for new one.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NotAllowed;
