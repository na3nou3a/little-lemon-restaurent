import { Route, Routes } from 'react-router-dom';
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

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  const [formState, setFormState] = useState({
    date: '',
    time: '',
    numOfGuests: 1,
    occasion: '',
    instructions: '',
    name: '',
    email: '',
    phone: '',
  });

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
          <Route
            element={
              <BookingPage
                formState={formState}
                setFormState={setFormState}
                availableTimes={availableTimes}
                dispatch={dispatch}
              />
            }
            path="/bookings"
          />
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
