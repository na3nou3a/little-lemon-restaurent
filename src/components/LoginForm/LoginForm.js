import React, { useEffect } from 'react';
import './loginForm.css';
import {
  isLoginFormValid,
  validateName,
  validateEmail,
  validatePassword,
} from '../../utils/validate';
import { ErrorMessage } from '../../components';

function LoginForm({
  formState,
  setFormState,
  isDisabled,
  setIsDisabled,
  formErrors,
  setFormErrors,
  submitForm,
}) {
  const { name, email, password } = formState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    switch (name) {
      case 'name':
        validateName(value, formErrors, setFormErrors);
        break;
      case 'email':
        validateEmail(value, formErrors, setFormErrors);
        break;
      case 'password':
        validatePassword(value, formErrors, setFormErrors);
        break;
      default:
        console.log('validation error!!!!!');
        break;
    }

    if (isLoginFormValid(formState) && isDisabled) {
      setIsDisabled(false);
    } else if (!isLoginFormValid(formState) && !isDisabled) {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    if (isLoginFormValid(formState) && isDisabled) {
      setIsDisabled(false);
    } else if (!isLoginFormValid(formState) && !isDisabled) {
      setIsDisabled(true);
    }
  });
  return (
    <form className="login-form" onSubmit={submitForm} noValidate>
      {/*========== Field ==========*/}
      <div className="form-control">
        <label htmlFor="name">
          <span className="required">*</span>your name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="your name..."
          className={formErrors.name && 'input-error'}
          required
          value={name}
          onChange={handleChange}
        />
        {formErrors.name && <ErrorMessage msg={formErrors.name} />}
      </div>
      {/*========== Field ==========*/}
      <div className="form-control">
        <label htmlFor="email">
          <span className="required">*</span>email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com..."
          className={formErrors.email && 'input-error'}
          required
          value={email}
          onChange={handleChange}
        />
        {formErrors.email && <ErrorMessage msg={formErrors.email} />}
      </div>
      {/*========== Field ==========*/}
      <div className="form-control">
        <label htmlFor="password">
          <span className="required">*</span>password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password..."
          className={formErrors.password && 'input-error'}
          required
          value={password}
          onChange={handleChange}
        />
        {formErrors.password && <ErrorMessage msg={formErrors.password} />}
      </div>
      {/* Field submit btn */}
      <input className="submit-btn" type="submit" value="login" disabled={isDisabled} />
    </form>
  );
}

export default LoginForm;
