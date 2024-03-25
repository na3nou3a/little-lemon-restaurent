import { Route, Routes } from 'react-router-dom';
import { Header, Nav, Footer } from './components';
import { HomePage, AboutPage, BookingPage, MenuPage, OrderOnlinePage, LoginPage } from './pages';
import './App.css';

function App() {
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
          <Route element={<BookingPage />} path="/bookings" />
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
