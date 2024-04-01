import React from 'react';
import './styles.css';

function BookingForm({ formState, setFormState, availableTimes, dispatch, submitForm }) {
  const { date, time, numOfGuests, occasion, instructions, name, email, phone } = formState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <form className="booking-form" onSubmit={submitForm}>
      <fieldset>
        <legend>reservation info:</legend>
        <div className="form-control">
          <label htmlFor="date">
            <span className="required">*</span>date:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            required
            value={date}
            onChange={(e) => {
              handleChange(e);
              dispatch({ type: 'update_avalable_times', date: date });
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="time">
            <span className="required">*</span>time:
          </label>
          <select id="time" name="time" required value={time} onChange={handleChange}>
            <option>Select a Time</option>
            {availableTimes.bookingSlots.map((t, i) => (
              <option key={i}>{t}</option>
            ))}
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="guests">number of guests:</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="numOfGuests"
            value={numOfGuests}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="occasion">occasion: (optional)</label>
          <select id="occasion" name="occasion" value={occasion} onChange={handleChange}>
            <option>Select Occasion</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="instructions">special instructions: (optional)</label>
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
      <fieldset>
        <legend>personal info:</legend>
        <div className="form-control">
          <label htmlFor="fullname">
            <span className="required">*</span>full name:
          </label>
          <input
            type="text"
            name="name"
            id="fullname"
            required
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">
            <span className="required">*</span>email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">
            <span className="required">*</span>phone:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={phone}
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <input className="submit-btn" type="submit" value="make your reservation" />
    </form>
  );
}

export default BookingForm;
