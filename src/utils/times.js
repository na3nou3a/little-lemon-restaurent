const initializeTimes = (date) => {
  return { bookingSlots: fetchAPI(date) };
};

const fetchAPI = (date) => {
  if (!date) return [];
  let timeStart = 17;
  let timeEnd = 23;

  const availableTimes = [];
  const helper = [':00', ':30'];

  for (let i = timeStart; i <= timeEnd; i++) {
    const r = Math.random();
    if (i === 23) {
      availableTimes.push(`${i}${helper[0]}`);
      continue;
    }
    if (r <= 0.5) {
      availableTimes.push(`${i}${helper[0]}`);
    } else {
      availableTimes.push(`${i}${helper[1]}`);
    }
  }
  return availableTimes;
};

const updateTimes = (state, action) => {
  if (action.type === 'update_avalable_times')
    return { ...state, bookingSlots: fetchAPI(action.date) };
  return state;
};

export { initializeTimes, updateTimes };
