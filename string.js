// Task 1
const strlength = (str) => {
  const length = str.trim().length;
  if(length < 1){
    throw new Error("String must be at least 1 character long.");
  } else if(length > 10){
    throw new Error('String cannot be longer than 10 characters.');
  } else
      return length;
  }
  // console.log(strlength('char'));

   // // Task 2
const reverseString = (str) => {
  return str.split('').reverse().join('');
}

// Task 3

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}
module.exports = { strlength, reverseString, Calculator };