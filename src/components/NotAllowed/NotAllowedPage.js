import React from 'react';
import { Link } from 'react-router-dom';

function NotAllowedPage() {
  return (
    <section className="not-allowed">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">not allowed</h1>
        </header>
        <div className="section__body inner-wrapper not-allowed__inner-wrapper">
          <p className="text">
            this section is restricted for autenticated users only! please{' '}
            <Link to="/login" className="text-link">
              login
            </Link>{' '}
            to your account.
          </p>
          <p className="text">
            you dont have an account! please{' '}
            <Link to="/signup" className="text-link">
              sign up
            </Link>{' '}
            for new one.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NotAllowedPage;
