import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';

function Welcome({ client }) {
  const WelcomeHeader = () => {
    if (client) {
      if (client.newClient) {
        return (
          <header className="header">
            <h1 className="title">welcome {client.name}!</h1>
          </header>
        );
      } else {
        return (
          <header className="header">
            <h1 className="title">welcome back {client.name}!</h1>
          </header>
        );
      }
    } else {
      return (
        <header className="header">
          <h1 className="title">welcome to little lemon restaurant!</h1>
        </header>
      );
    }
  };
  const WelcomeBody = () => {
    if (client) {
      if (client.newClient) {
        return (
          <div className="wrapper">
            <p className="text">
              you have successfully created to your <Link to="/profile">account</Link>.
            </p>
          </div>
        );
      } else {
        return (
          <div className="wrapper">
            <p className="text">
              you have successfully logged in to your <Link to="/profile">account</Link>.
            </p>
          </div>
        );
      }
    } else {
      return (
        <div className="wrapper">
          <p className="text">
            dont have an account? <Link to="/signup">sign up</Link> now!
          </p>
        </div>
      );
    }
  };
  return (
    <section className="welcome-section">
      <div className="content max-width">
        <WelcomeHeader />
        <WelcomeBody />
      </div>
    </section>
  );
}

export default Welcome;
