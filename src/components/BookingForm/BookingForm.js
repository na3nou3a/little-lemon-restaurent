import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function BookingForm({ formState, setFormState, availableTimes, dispatch }) {
  const { date, time, numOfGuests, occasion, instructions, name, email, phone } = formState;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirm-bookings');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
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
              setFormState({
                ...formState,
                date: e.target.value,
              });
              dispatch({ type: 'update_avalable_times', date: date });
            }}
          />
          {new Date(date) < new Date() ? (
            <p className="error-msg">please select a valid date</p>
          ) : (
            ''
          )}
        </div>
        {date ? (
          <div className="form-control">
            <label htmlFor="time">
              <span className="required">*</span>time:
            </label>
            <select
              id="time"
              name="time"
              required
              value={time}
              onChange={(e) => setFormState({ ...formState, time: e.target.value })}
            >
              <option>Select a Time</option>
              {availableTimes.bookingSlots.map((t, i) => (
                <option key={i}>{t}</option>
              ))}
            </select>
          </div>
        ) : (
          false
        )}

        <div className="form-control">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numOfGuests}
            onChange={(e) => setFormState({ ...formState, numOfGuests: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="occasion">Occasion: (optional)</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setFormState({ ...formState, occasion: e.target.value })}
          >
            <option>Select Occasion</option>
            <option>Birthday</option>
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
            onChange={(e) => setFormState({ ...formState, instructions: e.target.value })}
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
            name="fullname"
            id="fullname"
            required
            value={name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
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
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
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
            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
          />
        </div>
      </fieldset>
      <input className="submit-btn" type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
