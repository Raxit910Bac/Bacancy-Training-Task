// Task 3 - Nested loops with break

// Develop a JavaScript script that utilizes nested loops (either for or while). The outer loop should iterate from 1 to 3, and the inner loop from 1 to 5. Use break to exit the inner loop when the current iteration count of the inner loop is equal to the outer loop's current iteration count. Print the values of both loop variables to demonstrate the breaking condition.


for (let index = 1; index <= 3; index++) {

  console.log("Outer Loop Variable: ", index);

  for (let index2 = 1; index2 <= 5; index2++) {
    if (index == index2) {
      console.log("Breaking Inner Loop at Variable: ", index2);
      break;
    }
    console.log("Inner Loop Variable: ", index2);
  }
  console.log("");
  
}