import React from 'react';
import { NotAllowedPage } from '../../components';

function ProfilePage({ client }) {
  if (!client) {
    return <NotAllowedPage />;
  }
  const { name, email, password } = client;
  return (
    <section className="profile">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">client dashboard</h1>
        </header>
        <div className="section__body profile__inner-wrapper inner-wrapper">
          <ul className="account-info">
            <li>
              your name: <span>{name}</span>
            </li>
            <li>
              your email: <span>{email}</span>
            </li>
            <li>
              your password: <span>{password}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
