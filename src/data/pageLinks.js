import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cart = <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />;
const pageLinks = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'menu', path: '/menu' },
  { name: 'reservations', path: '/bookings' },
  { name: cart, path: '/order' },
  { name: 'login', path: '/login' },
  { name: 'sign up', path: '/signup' },
  { name: 'profile', path: '/profile' },
  { name: 'logout', path: '/logout' },
];

export default pageLinks;
