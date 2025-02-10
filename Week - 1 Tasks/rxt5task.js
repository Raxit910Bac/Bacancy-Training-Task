// Task 5 - Hoisting

// Create a program that demonstrates variable hoisting in JavaScript. Declare variables using both var and let within functions and blocks, and then attempt to access these variables before and after their declarations. Explain the behavior observed in the comments.



// // 1. Hoisting with var
// function varHoisting() {
//   console.log("Before declaration (var):", a);  // Output: undefined (hoisted but not initialized)
  
//   var a = 10;  // Variable declared and initialized
//   console.log("After declaration (var):", a);  // Output: 10
// }
// varHoisting();

// // 2. Hoisting with let
// function letHoisting() {
//   // console.log("Before declaration (let):", b);  // Error: Cannot access 'b' before initialization
  
//   let b = 20;  // Variable declared and initialized
//   console.log("After declaration (let):", b);  // Output: 20
// }
// letHoisting();

// // 3. Hoisting in blocks (var vs let)
// function blockHoisting() {
//   if (true) {
//     console.log("Before declaration (var in block):", c);  // Output: undefined (hoisted to the function scope)
//     var c = 30;
//     console.log("After declaration (var in block):", c);  // Output: 30
//   }

//   // console.log("Before declaration (let in block):", d);  // Error: Cannot access 'd' before initialization
//   if (true) {
//     let d = 40;
//     console.log("After declaration (let in block):", d);  // Output: 40
//   }
// }
// blockHoisting();

// Behavior: 

// - var: It is function-scoped, hoisted with an initial value of undefined, and accessible before declaration.

// - let: It is block-scoped, hoisted without initialization, and accessing it before declaration causes a ReferenceError.