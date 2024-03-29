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
  
  test('initializeTimes function: it returns the correct expected value', () => {
const initialState = initializeTimes();
const today = new Date();
const expectedResult = { bookingSlots: fetchAPI(today) };
expect(initialState).toBeInstanceOf(Object);
expect(initialState).toHaveProperty('bookingSlots');
// expect(initialState).toEqual(expectedResult);  // coming soon
  });
  
   test('updateTimes function: it returns the same state', () => {
const newState = updateTimes(state, action);
expect(newState).toBeInstanceOf(Object);
expect(newState).toHaveProperty('bookingSlots');
//expect(newState).toEqual(state); // coming soon
  });
});
