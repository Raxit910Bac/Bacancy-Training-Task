// Task 4 - variable scope

// Write a JavaScript program with comments explaining the differences between let, var, and const in terms of variable declaration. Include examples that showcase the scope of each type of variable and any restrictions they might have.


// 1. var: Scope is local & global, redeclaration(yes), reassignment(yes), variables are hoisted.

// function varExample() {
//   var x = 10;
//   if (true) {
//     var x = 20;  // Same variable (redeclared within the same function scope)
//     console.log("Inside block (var):", x); // Output: 20
//   }
//   console.log("Outside block (var):", x); // Output: 20
// }
// varExample();

// 2. let: block-scoped, redeclaration(no), reassignment(yes), variables are hoisted but stay in the temporal dead zone until the initialization.

// function letExample() {
//   let y = 10;
//   if (true) {
//     let y = 20;  // New variable (block-scoped)
//     console.log("Inside block (let):", y); // Output: 20
//   }
//   console.log("Outside block (let):", y); // Output: 10
// }
// letExample();

// 3. const: block-scoped, redeclaration(no), reassignment(no), variables are hoisted but stays in the temporal dead zone until the initialization.

// function constExample() {
//   const z = 10;
//   console.log("Initial const value:", z); // Output: 10
  
//   // z = 20;  // Error: Assignment to constant variable
  
//   if (true) {
//     const z = 30;  // New block-scoped variable
//     console.log("Inside block (const):", z); // Output: 30
//   }
//   console.log("Outside block (const):", z); // Output: 10
// }
// constExample();