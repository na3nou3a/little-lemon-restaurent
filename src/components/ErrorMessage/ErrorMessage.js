import React from 'react';
import './styles.css';

function ErrorMessage({ msg }) {
  return <p className="error-msg">{msg}</p>;
}

export default ErrorMessage;
