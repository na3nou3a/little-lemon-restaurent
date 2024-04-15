import React from 'react';
import { NotAllowed } from '../../components';
import './profile.css';

function ProfileSection({ client }) {
  if (!client) {
    return <NotAllowed />;
  }
  const { name, email, password } = client;
  return (
    <section className="profile-section">
      <div className="content max-width">
        <header className="header">
          <h1 className="title">client dashboard</h1>
        </header>
        <div className="wrapper">
          <ul className="list">
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

export default ProfileSection;
