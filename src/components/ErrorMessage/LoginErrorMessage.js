import React from 'react';
import './error.css';

function LoginError() {
  return (
    <p className="login-error">
      <span className="error">error!!! </span>there is no such account in our database. please
      verify your data!
    </p>
  );
}

export default LoginError;
