// Task 8 - Best Practices

// Create a document outlining best practices for variable declaration in modern JavaScript. Include guidelines on when to use let, var, or const, taking into consideration block scoping, hoisting, and the immutability of constants. Provide code examples to illustrate each best practice.

// 1. Use 'const' in maximum cases

// Declaring a constant for a fixed value
const MAX_USERS = 100;

// Using const for object and array references (properties can still be changed)
const user = { name: "Alice", age: 25 };
user.age = 26;  // Allowed (modifying property)
console.log(user);

const numbers = [1, 2, 3];
numbers.push(4);  // Allowed (modifying array)
console.log(numbers);


// Note: While const prevents reassignment, objects and arrays declared with const can still have their contents modified.


// 2. use 'let' for variables that will change

let count = 0;
for (let i = 0; i < 5; i++) {
  count += i;
}
console.log("Final count:", count);  // Output: 10


// 3. 'var' should generally be avoided in favor of let and const 

// Why You Should Avoid var: Hoisting can lead to unexpected behavior by moving declarations to the top of their scope and initializing them with undefined.

function testVar() {
  console.log(x);  // Output: undefined (due to hoisting)
  var x = 10;
  console.log(x);  // Output: 10
}
testVar();


// 4. Scoping: Prefer block scoping (let and const) over function scoping (var).

function processNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;  // Output: 0, 'i' is not accessible outside the loop
}
console.log(processNumbers(15));


// 5. Avoid Global Variables

// Bad Practice: Global variable
var globalVar = "I am global";

// Good Practice: Encapsulated within a function
function example() {
  let localVar = "I am local";
  console.log(localVar); // Output: I am local
}
example();

// 6. Hoisting 

// - Variables declared with var are hoisted and initialized with undefined.
// - Variables declared with let and const are hoisted but not initialized until their declaration is encountered. Accessing them before the declaration results in a ReferenceError.

console.log(a);  // undefined (var is hoisted)
var a = 10;

// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 20;