const { strlength, reverseString } = require('./string')
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