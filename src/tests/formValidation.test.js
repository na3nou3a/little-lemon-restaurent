import {
  isFormValid,
  isValidDate,
  isValidTime,
  isValidNumOfGuests,
  isValidName,
  isValidEmail,
  isValidPhone,
} from '../utils/validate';

describe('form validation', () => {
  test('isFormValid Fn: it return true if all required fields are there', () => {
    const formState = {
      date: new Date(),
      time: '17:00',
      numOfGuests: 1,
      name: 'john',
      email: 'john@gmail.com',
      phone: '123456789',
    };
    const result = isFormValid(formState);
    expect(result).toBe(true);
  });

  test('isFormValid Fn: it return false if any required field are empty!', () => {
    const formState = {
      date: '',
      time: '17:00',
      numOfGuests: 1,
      name: 'john',
      email: 'john@gmail.com',
      phone: '123456789',
    };
    const result = isFormValid(formState);
    expect(result).toBe(false);
  });

  test('isFormValid Fn: it return false if any required field are not valid!', () => {
    const formState = {
      date: new Date(),
      time: '17:00',
      numOfGuests: -1,
      name: 'john',
      email: 'john@gmail.com',
      phone: '123456789',
    };
    const result = isFormValid(formState);
    expect(result).toBe(false);
  });
  // individual tests
  // date
  test('isValidDate Fn: it returns true if a user select a date!', () => {
    const date = new Date();
    const result = isValidDate(date);
    expect(result).toBe(true);
  });
  test('isValidDate Fn: it returns false if a user does not select a date!', () => {
    const date = '';
    const result = isValidDate(date);
    expect(result).toBe(false);
  });
  // time
  test('isValidTime Fn: it returns true if a user select a time!', () => {
    const time = '17:00';
    const result = isValidTime(time);
    expect(result).toBe(true);
  });
  test('isValidTime Fn: it returns false if a user does not select a time!', () => {
    const time = 'Select a Time';
    const result = isValidTime(time);
    expect(result).toBe(false);
  });
  // number of guests
  test('isValidNumOfGuests Fn: it returns true if a num is > 0 && <= 10!', () => {
    const numOfGuests = 1;
    const result = isValidNumOfGuests(numOfGuests);
    expect(result).toBe(true);
  });
  test('isValidNumOfGuests Fn: it returns false if a num <= 0!', () => {
    const numOfGuests = 0;
    const result = isValidNumOfGuests(numOfGuests);
    expect(result).toBe(false);
  });
  test('isValidNumOfGuests Fn: it returns false if a num > 10!', () => {
    const numOfGuests = 11;
    const result = isValidNumOfGuests(numOfGuests);
    expect(result).toBe(false);
  });
  // name
  test('isValidName Fn: it returns true if a name is >= 3!', () => {
    const name = 'bob';
    const result = isValidName(name);
    expect(result).toBe(true);
  });
  test('isValidName Fn: it returns false if a name < 3!', () => {
    const name = 'ab';
    const result = isValidName(name);
    expect(result).toBe(false);
  });
  test('isValidName Fn: it returns false if name is empty!', () => {
    const name = '';
    const result = isValidName(name);
    expect(result).toBe(false);
  });
  // email
  test('isValidEmail Fn: it returns true if a email is in valid format!', () => {
    const email = 'bob@gmail.com';
    const result = isValidEmail(email);
    expect(result).toBe(true);
  });
  test('isValidEmail Fn: it returns false if email is empty!', () => {
    const email = '';
    const result = isValidEmail(email);
    expect(result).toBe(false);
  });
  test('isValidEmail Fn: it returns false if email is NOT valid!', () => {
    const email = 'bobbobobobo';
    const result = isValidEmail(email);
    expect(result).toBe(false);
  });
  // phone
  test('isValidPhone Fn: it returns true if a phone is >= 6!', () => {
    const phone = '12345678';
    const result = isValidPhone(phone);
    expect(result).toBe(true);
  });
  test('isValidPhone Fn: it returns false if phone is empty!', () => {
    const phone = '';
    const result = isValidPhone(phone);
    expect(result).toBe(false);
  });
  test('isValidPhone Fn: it returns false if phone is < 6!', () => {
    const phone = '1234';
    const result = isValidPhone(phone);
    expect(result).toBe(false);
  });
});
