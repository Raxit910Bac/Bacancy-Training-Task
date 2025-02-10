// Task 7 - Let vs Var

// Develop a program that highlights the differences in scoping between let and var. Create a block-scoped variable using let and a function-scoped variable using var. Attempt to access these variables outside their respective scopes and explain the results in the comments.

// 1. block-scoped variable using let
function varExample() {
  var exp = 7;
  console.log(exp);
}
varExample();
// console.log(exp); // Error: [ReferenceError: exp is not defined]


// 2. function-scoped variable using var
if(true){
  let newExp = 10;
  console.log(newExp);
}
// console.log(newExp); // Error: [ReferenceError: newExp is not defined]


// Result Explanation: 
// Var:
// - var is function-scoped
// - If declared outside a function, it becomes globally scoped.
// - It is accessible outside block statements like if, for, or while.

// Let:
// - let is scoped to the block where it is declared ({ }).
// - It cannot be accessed outside the block, resulting in a ReferenceError if you try.