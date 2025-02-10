// Task 6 - Constants

// Write a script that utilizes const for declaring constants. Attempt to reassign values to these constants and observe the behavior. Include comments explaining the concept of immutability with const and when it is appropriate to use it.


// 1. with variable 

const exp = "hello people";
// exp = "hello new people"; // Error: Assignment to constant variable
console.log(exp);


// 2. with object

const obj = { name: "John", age: 30 };
console.log("Initial object:", obj);

// Changing a property (allowed)
obj.age = 31;
console.log("Modified object:", obj);

// Adding a new property (allowed)
obj.city = "New York";
console.log("Object after adding a new property:", obj);

// Reassigning the entire object (not allowed)


// 3. with Arrays

const arr = [1, 2, 3];
console.log("Initial array:", arr);

// Modifying an element (allowed)
arr[0] = 10;
console.log("Modified array:", arr);

// Adding a new element (allowed)
arr.push(4);
console.log("Array after adding a new element:", arr);

// Reassigning the entire array (not allowed)


// Concept: const declarations are only accessible within the block where they are defined
// Immutability: 
// - For primitive values (numbers, strings, booleans), the value itself is immutable. You cannot reassign a new value.
// - For objects and arrays, the reference is immutable, but the properties or elements can be changed.
// When to use const: 
// - Use const when you want to declare a variable that should not be reassigned.
// - for values that represent constants.