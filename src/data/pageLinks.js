import {
  faCartShopping,
  faHome,
  faGlobe,
  faUtensils,
  faBook,
  faUser,
  faUserPlus,
  faUserCircle,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const pageLinks = [
  { name: 'home', path: '/', icon: faHome },
  { name: 'about', path: '/about', icon: faGlobe },
  { name: 'menu', path: '/menu', icon: faUtensils },
  { name: 'reservations', path: '/bookings', icon: faBook },
  { name: 'login', path: '/login', icon: faUser },
  { name: 'sign up', path: '/signup', icon: faUserPlus },
  { name: 'profile', path: '/profile', icon: faUserCircle },
  { name: 'logout', path: '/logout', icon: faRightFromBracket },
  { name: 'orders', path: '/order', icon: faCartShopping },
];

export default pageLinks;
