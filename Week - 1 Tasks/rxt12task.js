// Task 12 - Filter for selection

// Create a program that utilizes the filter function to extract even numbers from an array of integers. Print the original array and the filtered array containing only even numbers.

let arr12 = [1,2,3,4,5,6,7,8,9,10];
console.log("Original Array: ", arr12);

let newArr12 = arr12.filter(numbers => numbers % 2 === 0);
console.log("Filtered Array: ", newArr12);

