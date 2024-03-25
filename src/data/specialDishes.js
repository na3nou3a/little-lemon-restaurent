import dishes from './menuDishes';

const specialDishes = dishes.filter((dish) => dish.special === true);

export default specialDishes;
