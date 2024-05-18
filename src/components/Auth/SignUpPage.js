import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { submitAPI } from '../../APIS';
import { storeClient } from '../../utils';

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
    <section className="signup">
      <div className="section__container max-width">
        <header className="section__header">
          <h1 className="title">create new account</h1>
        </header>
        <div className="section__body">
          <div className="inner-wrapper signup__inner-wrapper">
            <SignUpForm {...signUpProps} />
            <p className="text-light">
              already have an account?{' '}
              <Link to="/login" className="text-link">
                login
              </Link>{' '}
              now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
