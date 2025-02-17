// Task 1 - Function Currying

// Create example of function currying using closure and bind Ex. multiply by 2 from multiplication function


// 1. Using Closure:

function multiply(a) {
  return function (b) {
    return a * b;
  }
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5));   // Output: 10
console.log(multiplyBy2(10));   // Output: 20


// 2. Using Bind:
function newMultiply(a,b) {
  return a * b;
}

const newMultiplyBy2 = newMultiply.bind(null,2);
console.log(newMultiplyBy2(5));   // Output: 10
console.log(newMultiplyBy2(10));   // Output: 20