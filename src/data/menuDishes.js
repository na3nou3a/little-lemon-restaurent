import greekSalad from '../images/greekSalad.jpg';
import bruchetta from '../images/bruschetta.jpg';
import lemonDessert from '../images/lemonDessert.jpg';
import pepperoni from '../images/pepperoni.png';
import diablo from '../images/diablo.png';
import casunziei from '../images/casunziei.png';
import capricciosa from '../images/capricciosa.png';
import fettucine from '../images/fettucine.png';
const dishes = [
  {
    id: 1,
    name: 'greek salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    img: greekSalad,
    special: true,
  },
  {
    id: 2,
    name: 'bruchetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    img: bruchetta,
    special: true,
  },
  {
    id: 3,
    name: 'lemon desset',
    price: '$5.00',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img: lemonDessert,
    special: true,
  },
  {
    id: 4,
    name: 'pepperoni',
    price: '$6.50',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img: pepperoni,
    special: false,
  },
  {
    id: 5,
    name: 'diablo',
    price: '$1.99',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img: diablo,
    special: false,
  },
  {
    id: 6,
    name: 'casunziei',
    price: '$10.60',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img: casunziei,
    special: false,
  },
  {
    id: 7,
    name: 'capricciosa',
    price: '$5.45',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img: capricciosa,
    special: false,
  },
  {
    id: 8,
    name: 'fettucine',
    price: '$10.60',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img: fettucine,
    special: false,
  },
];

export default dishes;
