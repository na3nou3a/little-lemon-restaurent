import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { submitAPI } from '../../APIS';
import { storeClient } from '../../utils';
import './signup.css';

function SignUpPage({ setClient }) {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [formState, setFormState] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    if (submitAPI(formState)) {
      const { name, email, password } = formState;
      setClient({ name, email, password, newClient: true });
      storeClient({ name, email, password });
      navigate('/welcome');
    }
  };

  const signUpProps = {
    formState,
    setFormState,
    isDisabled,
    setIsDisabled,
    formErrors,
    setFormErrors,
    submitForm,
  };
  return (
    <section className="signup-section">
      <div className="content max-width">
        <header className="header">
          <h1 className="title">create new account</h1>
        </header>
        <div className="wrapper">
          <SignUpForm {...signUpProps} />
          <p className="text">
            already have an account? <Link to="/login">login</Link> now!
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
