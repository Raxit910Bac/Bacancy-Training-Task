// Task 7 - Callback practical

// Create a function that takes an array and a callback function specifying the operation to be performed on each element of the array. The function should return a new modified array. (Don’t use map).


function returnsNewArray(arr7, callback) {

  let ans = [];

  arr7.forEach(element => {
    ans.push(callback(element));  // Apply callback to each element
  });
  
  return ans;  // Return the modified array
}

const sample = [1,2,3,4,5];

function square(params) {
  return params * params;
}

function double(params) {
  return params * 2;
}

console.log(returnsNewArray(sample, square));   // Output: [1, 4, 9, 16, 25]
console.log(returnsNewArray(sample, double));   // Output: [2, 4, 6, 8, 10]