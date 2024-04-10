import { Route, Routes, useNavigate } from 'react-router-dom';
import { Header, Nav, Footer } from './components';
import {
  HomePage,
  AboutPage,
  BookingPage,
  MenuPage,
  OrderOnlinePage,
  LoginPage,
  ConfirmBookingPage,
} from './pages';
import './App.css';
import { useState, useReducer } from 'react';
import { initializeTimes, updateTimes } from './utils/times';
import { submitAPI } from './utils/API';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const minDate = new Date().toISOString().split('T')[0];
  const initialValues = {
    date: minDate,
    time: availableTimes.bookingSlots[0],
    numOfGuests: 1,
    occasion: '',
    instructions: '',
    name: '',
    email: '',
    phone: '',
  };

  const [formState, setFormState] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    date: '',
    time: '',
    numOfGuests: '',
    name: '',
    email: '',
    phone: '',
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    if (submitAPI(formState)) {
      navigate('/confirm-bookings');
    }
  };

  const bookingPageProps = {
    formState,
    setFormState,
    availableTimes,
    dispatch,
    isDisabled,
    setIsDisabled,
    formErrors,
    setFormErrors,
    navigate,
    submitForm,
    minDate,
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="top-wrapper max-width">
          <Header />
          <Nav />
        </div>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<BookingPage {...bookingPageProps} />} path="/bookings" />
          <Route element={<ConfirmBookingPage formState={formState} />} path="/confirm-bookings" />
          <Route element={<MenuPage />} path="/menu" />
          <Route element={<OrderOnlinePage />} path="/order" />
          <Route element={<LoginPage />} path="/login" />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
