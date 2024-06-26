import { fetchAPI } from '../APIS';

const initializeTimes = function () {
  const today = new Date();
  return { bookingSlots: fetchAPI(today) };
};

const updateTimes = function (state, action) {
  if (action.type === 'update_avalable_times')
    return { ...state, bookingSlots: fetchAPI(action.date) };
  return state;
};

export { initializeTimes, updateTimes };
