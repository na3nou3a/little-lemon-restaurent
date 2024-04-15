function isFormValid(formState) {
  const { date, time, numOfGuests, name, email, phone } = formState;
  if (
    isValidDate(date) &&
    isValidTime(time) &&
    isValidNumOfGuests(numOfGuests) &&
    isValidName(name) &&
    isValidEmail(email) &&
    isValidPhone(phone)
  ) {
    return true;
  }
  return false;
}

function isSignUpFormValid(formState) {
  const { name, email, password, confirmPassword } = formState;
  if (
    isValidName(name) &&
    isValidEmail(email) &&
    isValidPassword(password) &&
    isValidConfirmPassword(confirmPassword, password)
  ) {
    return true;
  }
  return false;
}

function isLoginFormValid(formState) {
  const { name, email, password } = formState;
  if (isValidName(name) && isValidEmail(email) && isValidPassword(password)) {
    return true;
  }
  return false;
}

function validateEmail(email, formErrors, setFormErrors) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!email) {
    setFormErrors({ ...formErrors, email: 'email must not be empty!' });
  } else if (!regex.test(email)) {
    setFormErrors({ ...formErrors, email: 'invalid email format!' });
  } else {
    setFormErrors({ ...formErrors, email: '' });
  }
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!email || !regex.test(email)) {
    return false;
  }
  return true;
}

function validateDate(date, formErrors, setFormErrors) {
  if (!date) {
    setFormErrors({ ...formErrors, date: 'date must not be empty!' });
  } else {
    setFormErrors({ ...formErrors, date: '' });
  }
}

function isValidDate(date) {
  if (!date) {
    return false;
  }
  return true;
}

function validateTime(time, formErrors, setFormErrors) {
  if (time === 'Select a Time' || !time) {
    setFormErrors({ ...formErrors, time: 'you must select a time!' });
  } else {
    setFormErrors({ ...formErrors, time: '' });
  }
}

function isValidTime(time) {
  if (time === 'Select a Time' || !time) {
    return false;
  }
  return true;
}

function validateNumOfGuests(numOfGuests, formErrors, setFormErrors) {
  if (numOfGuests <= 0 || numOfGuests > 10) {
    setFormErrors({ ...formErrors, numOfGuests: 'num of guests must be min 1 and max 10' });
  } else {
    setFormErrors({ ...formErrors, numOfGuests: '' });
  }
}

function isValidNumOfGuests(numOfGuests) {
  if (numOfGuests <= 0 || numOfGuests > 10) {
    return false;
  }
  return true;
}

function validateName(name, formErrors, setFormErrors) {
  if (!name) {
    setFormErrors({ ...formErrors, name: 'name must not be empty!' });
  } else if (name.length < 3) {
    setFormErrors({ ...formErrors, name: 'no less than 3 characters' });
  } else {
    setFormErrors({ ...formErrors, name: '' });
  }
}

function isValidName(name) {
  if (!name || name.length < 3) {
    return false;
  }
  return true;
}

function validatePhone(phone, formErrors, setFormErrors) {
  if (!phone) {
    setFormErrors({ ...formErrors, phone: 'please provide a phone number!' });
  } else if (phone.length < 6) {
    setFormErrors({ ...formErrors, phone: 'please provide a valid phone number!' });
  } else {
    setFormErrors({ ...formErrors, phone: '' });
  }
}

function isValidPhone(phone) {
  if (!phone || phone.length < 6) {
    return false;
  }
  return true;
}

function validatePassword(password, formErrors, setFormErrors) {
  if (!password) {
    setFormErrors({ ...formErrors, password: 'password must not be empty!' });
  } else if (password.length < 6) {
    setFormErrors({ ...formErrors, password: 'no less than 6 characters' });
  } else {
    setFormErrors({ ...formErrors, password: '' });
  }
}

function isValidPassword(password) {
  if (!password || password.length < 6) {
    return false;
  }
  return true;
}

function validateConfirmPassword(newPassword, password, formErrors, setFormErrors) {
  if (!newPassword) {
    setFormErrors({ ...formErrors, confirmPassword: 'password must not be empty!' });
  } else if (newPassword.length < 6) {
    setFormErrors({ ...formErrors, confirmPassword: 'no less than 6 characters' });
  } else if (newPassword !== password) {
    setFormErrors({ ...formErrors, confirmPassword: "password doesn't mutch" });
  } else {
    setFormErrors({ ...formErrors, confirmPassword: '' });
  }
}

function isValidConfirmPassword(newPassword, password) {
  if (!newPassword || newPassword.length < 6 || newPassword !== password) {
    return false;
  }
  return true;
}

export {
  isFormValid,
  isSignUpFormValid,
  isLoginFormValid,
  validateDate,
  validateTime,
  validateNumOfGuests,
  validateName,
  validateEmail,
  validatePhone,
  validatePassword,
  validateConfirmPassword,
  isValidDate,
  isValidTime,
  isValidNumOfGuests,
  isValidName,
  isValidEmail,
  isValidPhone,
  isValidPassword,
  isValidConfirmPassword,
};
