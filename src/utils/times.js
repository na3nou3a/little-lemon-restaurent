import { fetchAPI } from './API';

const initializeTimes = function () {
  const today = new Date();
  return { bookingSlots: fetchAPI(today) };
};

const updateTimes = function (state, action) {
  console.log(action.date);
  if (action.type === 'update_avalable_times')
    return { ...state, bookingSlots: fetchAPI(action.date) };
  return state;
};

export { initializeTimes, updateTimes };
