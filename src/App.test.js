import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { BookingForm } from './components';

describe('BookingForm', () => {
  test('it renders BookingForm labels and fields', () => {
    render(
      <BookingForm
        formState={{
          date: new Date(),
          time: '',
          numOfGuests: 1,
          occasion: '',
          instructions: '',
          name: '',
          email: '',
          phone: '',
        }}
        setFormState={jest.fn()}
        availableTimes={{ bookingSlots: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] }}
        dispatch={jest.fn((action) => action)}
        submitForm={jest.fn((data) => true)}
      />
    );

    // label '*Date:' and Input field
    expect(screen.getByText(/date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date:/i)).toBeInTheDocument();
    // label '*Time:' and select Input field
    expect(screen.getByText(/time:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time:/i)).toBeInTheDocument();
    // label 'Number Of Guests' and Input field
    expect(screen.getByText(/number of guests:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests:/i)).toBeInTheDocument();
    // label 'Occasion' and select Input field
    expect(screen.getByText(/occasion:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion:/i)).toBeInTheDocument();
    // label 'Special Instructions' and textaria
    expect(screen.getByText('special instructions: (optional)')).toBeInTheDocument();
    expect(screen.getByLabelText('special instructions: (optional)')).toBeInTheDocument();
    // label 'Full Name:' and Input field
    expect(screen.getByText(/full name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name:/i)).toBeInTheDocument();
    // label 'Email:' and Input field
    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
    // label 'Phone:' and Input field
    expect(screen.getByText(/phone:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone:/i)).toBeInTheDocument();
    // submit btn Input field
    expect(screen.getByDisplayValue(/make your reservation/i)).toBeInTheDocument();
  });

  test('User is unable to submit the form, if any required field is empty', () => {
    const formState = {
      date: new Date(),
      time: '', // empty field
      numOfGuests: 1,
      occasion: '',
      instructions: '',
      name: 'john',
      email: 'john@gmail.com',
      phone: '123456789',
    };
    const submitForm = jest.fn(() => {});
    const validateData = (callback, state) => {
    const { date, time, name, email, phone } = state;
      if (date && time && name && email && phone) {
        callback();
      }
    };

validateData(submitForm, formState)
    expect(submitForm).not.toHaveBeenCalled();
  });

  test('User is able to submit the form if all required fields are not empty', () => {
    const formState = {
      date: new Date(),
      time: '18:00',
      name: 'john',
      email: 'john@gmail.com',
      phone: '123456789',
    };

    const submitForm = jest.fn(() => {});
    const validateData = (callback, state) => {
    const { date, time, name, email, phone } = state;
      if (date && time && name && email && phone) {
        callback();
      }
    };

validateData(submitForm, formState)
    expect(submitForm).toHaveBeenCalled();
  });

  test('User navigate to the confirmation page after submitting the form', () => {
    const formState = {
      date: new Date(),
      time: '18:00',
      numOfGuests: 1,
      occasion: '',
      instructions: '',
      name: 'john doe',
      email: 'john@gmail.com',
      phone: '123456789',
    };
    
    const navigate = jest.fn((path) => {});
    const submitForm = (callback, state, path) => {
    const { date, time, name, email, phone } = state;
      if (date && time && name && email && phone) {
        callback(path);
      }
    };

submitForm(navigate, formState, '/confirm-bookings')
    expect(navigate).toHaveBeenCalled();
  });
});
