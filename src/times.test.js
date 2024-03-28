import  { initializeTimes, updateTimes,  fetchAPI} from './utils/times';

describe('time functions', () => {
    const state = {
      bookingSlots: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
    };
    const action = { type: "SOME_ACTION" };
test('time functions are defined', () => {
  expect(fetchAPI()).toBeDefined();
  expect(updateTimes(state, action)).toBeDefined();
  expect(initializeTimes()).toBeDefined();
});
  test('fetchAPI function: it returns an array of times even without argument!', () => {
const result = fetchAPI();
expect(result).toBeInstanceOf(Array);
expect(result).not.toHaveLength(0);
  });
  
  test('initializeTimes function: it return an Object with a bookingSlots property', () => {
const result = initializeTimes();
expect(result).toBeInstanceOf(Object);
expect(result).toHaveProperty('bookingSlots');
  });
  
   test('updateTimes function: it returns an object with a bookingSlots property', () => {
const result = updateTimes(state, action);
expect(result).toBeInstanceOf(Object);
expect(result).toHaveProperty('bookingSlots');
  });
});
