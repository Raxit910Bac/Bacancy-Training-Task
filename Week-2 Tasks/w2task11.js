// Task 11 - Create magic function

// Create function that in which you have to pass number in diff function call and when you want result at the end you have to call function with no argument.

// Ex. magicFunction(2)(3)(4)(5)()
// output: 14

function magicFunction(num) {
  let sum = num; // Store the running sum

  function inner(nextNum) {
      if (nextNum === undefined) {
          return sum; // Return sum when called with no arguments
      }
      sum += nextNum; // Add next number to sum
      return inner; // Return inner function to allow further calls
  }

  return inner;
}


console.log(magicFunction(2)(3)(4)(5)());   // Output: 14
console.log(magicFunction(10)(20)(30)());   // Output: 60
console.log(magicFunction(1)(1)(1)(1)(1)());   // Output: 5
