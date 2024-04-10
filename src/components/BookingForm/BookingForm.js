import React, { useEffect } from 'react';
import './bookingForm.css';
import {
  isFormValid,
  validateDate,
  validateTime,
  validateNumOfGuests,
  validateName,
  validateEmail,
  validatePhone,
} from '../../utils/validate';
import { ErrorMessage } from '../../components';

function BookingForm({
  formState,
  setFormState,
  availableTimes,
  dispatch,
  isDisabled,
  setIsDisabled,
  formErrors,
  setFormErrors,
  submitForm,
  minDate,
}) {
  const { date, time, numOfGuests, occasion, instructions, name, email, phone } = formState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    if (name === 'instructions' || name === 'occasion') return;
    switch (name) {
      case 'date':
        validateDate(value, formErrors, setFormErrors);
        break;
      case 'time':
        validateTime(value, formErrors, setFormErrors);
        break;
      case 'numOfGuests':
        validateNumOfGuests(value, formErrors, setFormErrors);
        break;
      case 'name':
        validateName(value, formErrors, setFormErrors);
        break;
      case 'email':
        validateEmail(value, formErrors, setFormErrors);
        break;
      case 'phone':
        validatePhone(value, formErrors, setFormErrors);
        break;

      default:
        console.log('validation error!!!!!');
        break;
    }

    if (isFormValid(formState) && isDisabled) {
      setIsDisabled(false);
    } else if (!isFormValid(formState) && !isDisabled) {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    if (isFormValid(formState) && isDisabled) {
      setIsDisabled(false);
    } else if (!isFormValid(formState) && !isDisabled) {
      setIsDisabled(true);
    }
  });

  return (
    <form className="booking-form" onSubmit={submitForm} noValidate>
      <fieldset>
        <legend>personal info:</legend>
        {/*========== Field ==========*/}
        <div className="form-control">
          <label htmlFor="fullname">
            <span className="required">*</span>full name
          </label>
          <input
            type="text"
            name="name"
            id="fullname"
            placeholder="your full name..."
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
          <label htmlFor="phone">
            <span className="required">*</span>phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="123456789..."
            className={formErrors.phone && 'input-error'}
            required
            value={phone}
            onChange={handleChange}
          />
          {formErrors.phone && <ErrorMessage msg={formErrors.phone} />}
        </div>
      </fieldset>
      <fieldset>
        <legend>reservation info:</legend>
        {/*========== Field ==========*/}
        <div className="form-control">
          <label htmlFor="date">
            <span className="required">*</span>date
          </label>
          <input
            className={formErrors.date && 'input-error'}
            type="date"
            name="date"
            id="date"
            min={minDate}
            value={date}
            onChange={(e) => {
              handleChange(e);
              dispatch({
                type: 'update_avalable_times',
                date: e.target.value,
              });
            }}
          />
          {formErrors.date && <ErrorMessage msg={formErrors.date} />}
        </div>
        {/*========== Field ==========*/}
        <div className="form-control">
          <label htmlFor="time">
            <span className="required">*</span>time
          </label>
          <select
            id="time"
            name="time"
            className={formErrors.time && 'input-error'}
            required
            value={time}
            onChange={handleChange}
          >
            <option>Select a Time</option>
            {availableTimes.bookingSlots.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>
          {formErrors.time && <ErrorMessage msg={formErrors.time} />}
        </div>
        {/*========== Field ==========*/}
        <div className="form-control">
          <label htmlFor="guests">number of guests</label>
          <input
            type="number"
            className={formErrors.numOfGuests && 'input-error'}
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="numOfGuests"
            value={numOfGuests}
            onChange={handleChange}
          />
          {formErrors.numOfGuests && <ErrorMessage msg={formErrors.numOfGuests} />}
        </div>
        {/*========== Field ==========*/}
        <div className="form-control">
          <label htmlFor="occasion">occasion (optional)</label>
          <select id="occasion" name="occasion" value={occasion} onChange={handleChange}>
            <option>Select Occasion</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
            <option>Other</option>
          </select>
        </div>
        {/*========== Field ==========*/}
        <div className="form-control">
          <label htmlFor="instructions">special instructions (optional)</label>
          <textarea
            id="instructions"
            name="instructions"
            cols={30}
            rows={10}
            placeholder="Some Instructions..."
            value={instructions}
            onChange={handleChange}
          ></textarea>
        </div>
      </fieldset>
      {/* Field submit btn */}
      <input
        className="submit-btn"
        type="submit"
        value="make your reservation"
        disabled={isDisabled}
      />
    </form>
  );
}

export default BookingForm;
