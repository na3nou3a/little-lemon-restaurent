import { initializeTimes, updateTimes } from './utils/times';
import { fetchAPI, submitAPI } from './utils/API';

describe('time functions', () => {
  const state = {
    bookingSlots: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };
  const action = { type: 'SOME_ACTION' };
  const formData = {
    date: '2022-10-12',
    time: '20:00',
    guests: 5,
    occasion: 'Birthday',
  };

  test('time functions are defined', () => {
    const today = new Date();
    expect(fetchAPI(today)).toBeDefined();
    expect(updateTimes(state, action)).toBeDefined();
    expect(initializeTimes()).toBeDefined();
    expect(submitAPI()).toBeDefined();
  });
  test('fetchAPI function: it returns an array of times', () => {
    const today = new Date();
    const result = fetchAPI(today);
    expect(result).toBeInstanceOf(Array);
    expect(result).not.toHaveLength(0);
  });

  test('initializeTimes function: it returns the correct expected value', () => {
    const initialState = initializeTimes();
    const today = new Date();
    const expectedResult = { bookingSlots: fetchAPI(today) };
    expect(initialState).toBeInstanceOf(Object);
    expect(initialState).toHaveProperty('bookingSlots');
    expect(initialState).toEqual(expectedResult);
  });

  test('updateTimes function: it returns the same state', () => {
    const newState = updateTimes(state, action);
    expect(newState).toBeInstanceOf(Object);
    expect(newState).toHaveProperty('bookingSlots');
    expect(newState).toEqual(state);
  });
  test('submitAPI function: it returns true', () => {
    const result = submitAPI(formData);
    expect(result).toBe(true);
  });
});
