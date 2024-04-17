import React from 'react';

function ErrorMsg({ msg }) {
  return <p className="error-msg">{msg}</p>;
}

function LoginErrorMsg() {
  return (
    <p className="login-error">
      <span className="error">error!!! </span>there is no such account in our database. please
      verify your data!
    </p>
  );
}

export { ErrorMsg, LoginErrorMsg };
