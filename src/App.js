import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState, useReducer } from 'react';
import {
  Header,
  Nav,
  Footer,
  ScrollToTop,
  HomePage,
  AboutPage,
  BookingPage,
  MenuPage,
  OrderOnlinePage,
  SignUpPage,
  LoginPage,
  LogOutPage,
  WelcomePage,
  ProfilePage,
  ConfirmBookingPage,
  NotFoundPage,
} from './components';
import {
  initializeTimes,
  updateTimes,
  getStoredClient,
  getStoredOrders,
  storeOrders,
} from './utils';
import './App.css';

function App() {
  const [client, setClient] = useState(getStoredClient() || false);
  const [orders, setOrders] = useState(getStoredOrders() || { count: 0, dishes: [] });
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

  const [bookingState, setBookingState] = useState(initialValues);

  const bookingPageProps = {
    bookingState,
    setBookingState,
    availableTimes,
    dispatch,
    minDate,
  };
  useEffect(() => {
    storeOrders(orders);
  }, [orders]);
  return (
    <>
      <ScrollToTop />
      <div className="page-wrapper">
        <div className="top-wrapper max-width">
          <Header />
          <Nav client={Boolean(client)} counter={orders.count} />
        </div>
        <main>
          <Routes>
            <Route element={<HomePage orders={orders} setOrders={setOrders} />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<BookingPage {...bookingPageProps} />} path="/bookings" />
            <Route
              element={<ConfirmBookingPage client={Boolean(client)} bookingState={bookingState} />}
              path="/confirm-bookings"
            />
            <Route element={<MenuPage orders={orders} setOrders={setOrders} />} path="/menu" />
            <Route
              element={<OrderOnlinePage orders={orders} setOrders={setOrders} />}
              path="/order"
            />
            <Route
              element={<SignUpPage setClient={setClient} orders={orders} setOrders={setOrders} />}
              path="/signup"
            />
            <Route element={<LoginPage setClient={setClient} />} path="/login" />
            <Route element={<WelcomePage client={client} />} path="/welcome" />
            <Route element={<ProfilePage client={client} />} path="/profile" />
            <Route element={<LogOutPage />} path="/logout" />
            <Route element={<NotFoundPage />} path="*" />
          </Routes>
        </main>
        <Footer client={Boolean(client)} />
      </div>
    </>
  );
}

export default App;
