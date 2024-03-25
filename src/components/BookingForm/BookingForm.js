import React from 'react';
import './styles.css';

function BookingForm() {
  return (
    <form className="booking-form" action="/">
      <fieldset>
        <legend>reservation info:</legend>
        <div className="form-control">
          <label htmlFor="date">
            <span className="required">*</span>date:
          </label>
          <input type="date" name="date" id="date" required></input>
        </div>
        <div className="form-control">
          <label htmlFor="time">
            <span className="required">*</span>time:
          </label>
          <select id="time" name="time" required>
            <option selected>select a time</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="guests">Number of guests:</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
        </div>
        <div className="form-control">
          <label htmlFor="occasion">Occasion: (optional)</label>
          <select id="occasion">
            <option selected>select occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="instructions">special instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            cols={30}
            rows={10}
            placeholder="some instructions..."
          ></textarea>
        </div>
      </fieldset>
      <fieldset>
        <legend>personal info:</legend>
        <div className="form-control">
          <label htmlFor="fullname">
            <span className="required">*</span>full name:
          </label>
          <input type="text" name="fullname" id="fullname" required></input>
        </div>
        <div className="form-control">
          <label htmlFor="email">
            <span className="required">*</span>email:
          </label>
          <input type="email" name="email" id="email" required></input>
        </div>
        <div className="form-control">
          <label htmlFor="phone">
            <span className="required">*</span>phone:
          </label>
          <input type="tel" name="phone" id="phone" required></input>
        </div>
      </fieldset>
      <input className="submit-btn" type="submit" value="Make Your reservation"></input>
    </form>
  );
}

export default BookingForm;
