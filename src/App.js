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
  const [formState, setFormState] = useState({
    date: new Date(),
    time: '',
    numOfGuests: 1,
    occasion: '',
    instructions: '',
    name: '',
    email: '',
    phone: '',
  });

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(formState.date));
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
    navigate,
    submitForm,
  };
  return (
    <>
      <div className="page-wrapper grid">
        <div className="top-wrapper grid max-width">
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
