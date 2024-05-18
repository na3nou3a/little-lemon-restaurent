import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { clients } from '../../data';
import { storeClient } from '../../utils';
import LoginForm from './LoginForm';
import { LoginErrorMsg } from '../SharedComponents';

function LoginPage({ setClient }) {
  const [errorLogin, setErrorLogin] = useState(false);
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const [formState, setFormState] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email, password } = formState;
    for (const client of clients) {
      if (name === client.name && email === client.email && password === client.password) {
        setClient({ name, email, password });
        storeClient({ name, email, password });
        setErrorLogin(false);
        navigate('/welcome');
      } else {
        setErrorLogin(true);
        setFormState(initialValues);
      }
    }
  };

  const loginProps = {
    formState,
    setFormState,
    isDisabled,
    setIsDisabled,
    formErrors,
    setFormErrors,
    submitForm,
  };

  return (
    <section className="login">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">login to your account</h1>
        </header>
        <div className="section__body">
          <div className="login__inner-wrapper inner-wrapper">
            {errorLogin && <LoginErrorMsg />}
            <LoginForm {...loginProps} />
            <p className="text-light">
              Dont have an account?{' '}
              <Link to="/signup" className="text-link">
                sign up
              </Link>{' '}
              now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
