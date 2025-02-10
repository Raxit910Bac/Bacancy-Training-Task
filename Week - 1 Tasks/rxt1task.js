// Task 1 - For loops with break and continue

// Write a JavaScript program that uses a for loop to iterate over an array of numbers. Within the loop, implement a condition to break out of the loop when a number greater than 5 is encountered. Additionally, use continue to skip the iteration when the number is exactly 3. Print the elements before and after applying these control flow statements.

const arr1 = [1,2,3,5,6,7];

console.log("Original Array: ", arr1);

console.log("Edited Array: ");


for (let index = 0; index < arr1.length; index++) {
  
  if(arr1[index] == 3) continue;
  if(arr1[index] > 5) break;

  console.log(arr1[index]);
  
}
