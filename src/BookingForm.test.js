import * as React from 'react';
import { render, screen } from '@testing-library/react';

import {BookingForm} from './components';

describe('BookingForm', () => {
  it('renders BookingForm component', () => {
    render(<BookingForm />);
// label '*Date:' and Input field
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
// label '*Time:' and select Input field
    expect(screen.getByText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
// label 'Number Of Guests' and Input field
    expect(screen.getByText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
// label 'Occasion' and select Input field
    expect(screen.getByText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });
// label 'Special Instructions' and textaria
    expect(screen.getByText('Special Instructions: (Optional)')).toBeInTheDocument();
    expect(screen.getByLabelText('Special Instructions: (Optional)')).toBeInTheDocument();
// label 'Full Name:' and Input field
    expect(screen.getByText('Full Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name:')).toBeInTheDocument();
// label 'Email:' and Input field
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
// label 'Phone:' and Input field
    expect(screen.getByText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
// submit btn Input field
    expect(screen.getByDisplayValue(/make your reservation/i)).toBeInTheDocument();
  });
