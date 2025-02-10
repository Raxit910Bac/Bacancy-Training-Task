// Task 13 - Reduce for Aggregation

// Develop a script that employs the reduce function to find the sum of all elements in an array. Print the original array and the final sum.

let arr13 = [1,2,3,4,5,6,7,8,9,10];
console.log("Original Array: ", arr13);

let newArr13 = arr13.reduce((accumulator, numbers) => accumulator + numbers, 0);
console.log("Final Sum: ", newArr13);

