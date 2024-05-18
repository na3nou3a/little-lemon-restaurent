import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage({ client }) {
  const WelcomeHeader = () => {
    if (client) {
      if (client.newClient) {
        return (
          <header className="section__header">
            <h1 className="title">welcome {client.name}!</h1>
          </header>
        );
      } else {
        return (
          <header className="section__header">
            <h1 className="title">welcome back {client.name}!</h1>
          </header>
        );
      }
    } else {
      return (
        <header className="section__header">
          <h1 className="title">welcome to little lemon restaurant!</h1>
        </header>
      );
    }
  };
  const WelcomeBody = () => {
    if (client) {
      if (client.newClient) {
        return (
          <div className="section__body inner-wrapper welcome__inner-wrapper">
            <p className="text">
              You have successfully created to your{' '}
              <Link to="/profile" className="text-link">
                account
              </Link>
              .
            </p>
          </div>
        );
      } else {
        return (
          <div className="section__body inner-wrapper welcome__inner-wrapper">
            <p className="text">
              you have successfully logged in to your{' '}
              <Link to="/profile" className="text-link">
                account
              </Link>
              .
            </p>
          </div>
        );
      }
    } else {
      return (
        <div className="section__body inner-wrapper welcome__inner-wrapper">
          <p className="text">
            dont have an account?{' '}
            <Link to="/signup" className="text-link">
              sign up
            </Link>{' '}
            now!
          </p>
        </div>
      );
    }
  };
  return (
    <section className="welcome">
      <div className="section__container max-width">
        <WelcomeHeader />
        <WelcomeBody />
      </div>
    </section>
  );
}

export default WelcomePage;
