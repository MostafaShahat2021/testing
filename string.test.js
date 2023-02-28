const { strlength, reverseString, Calculator, capitalize } = require('./string')
// Task 1
test('char count', () => {
  expect(strlength('mostafa')).toBe(7)
})

test('check str les than one', () => {
  expect(() => strlength('')).toThrow(Error)
})

test('check str more than ten', () => {
  expect(() => strlength('01234567890')).toThrow(Error)
})

// Task 2
test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh')
})

// Task 3

test('adds positive numbers', () => {
  expect(new Calculator().add(2, 3)).toBe(5);
});

test('adds negative numbers', () => {
  expect(new Calculator().add(-2, -3)).toBe(-5);
});

test('adds a positive and a negative number', () => {
  expect(new Calculator().add(2, -3)).toBe(-1);
});


test('subtracts positive numbers', () => {
  expect(new Calculator().subtract(3, 2)).toBe(1);
});

test('subtracts negative numbers', () => {
  expect(new Calculator().subtract(-3, -2)).toBe(-1);
});

test('subtracts a negative from a positive number', () => {
  expect(new Calculator().subtract(3, -2)).toBe(5);
});


test('multiplies positive numbers', () => {
  expect(new Calculator().multiply(2, 3)).toBe(6);
});

test('multiplies negative numbers', () => {
  expect(new Calculator().multiply(-2, -3)).toBe(6);
});

test('multiplies a positive and a negative number', () => {
  expect(new Calculator().multiply(2, -3)).toBe(-6);
});



test('divides positive numbers', () => {
  expect(new Calculator().divide(6, 3)).toBe(2);
});

test('divides negative numbers', () => {
  expect(new Calculator().divide(-6, -3)).toBe(2);
});

test('divides a positive by a negative number', () => {
  expect(new Calculator().divide(6, -3)).toBe(-2);
});

test('throws an error when dividing by zero', () => {
  expect(() => new Calculator().divide(6, 0)).toThrow(Error);
});

// Task-4
test('capitalize first letter', () => {
  const input = 'hello world';
  const Output = 'Hello world';
  const result = capitalize(input);
  expect(result).toBe(Output);
});