// Task 11 - Map for transformation

// Write a JavaScript program that uses the map function to transform an array of numbers. Square each element in the array and create a new array with the squared values. Print both the original and transformed arrays.

let arr11 = [1,2,3,4,5,6,7];
console.log("Original Array: ", arr11);


let newArr11 = arr11.map(numbers => numbers * numbers);
console.log("Transformed Array: ", newArr11);