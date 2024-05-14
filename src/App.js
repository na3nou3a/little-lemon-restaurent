import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useState, useReducer } from 'react';
import {
  Header,
  Footer,
  ScrollToTop,
  HomePage,
  AboutPage,
  BookingPage,
  MenuPage,
  OrderOnlinePage,
  SignUpPage,
  LoginPage,
  LogoutPage,
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
        <Header client={Boolean(client)} counter={orders.count} />
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
            <Route element={<LogoutPage />} path="/logout" />
            <Route element={<NotFoundPage />} path="*" />
          </Routes>
        </main>
        <Footer client={Boolean(client)} />
      </div>
    </>
  );
}

export default App;
