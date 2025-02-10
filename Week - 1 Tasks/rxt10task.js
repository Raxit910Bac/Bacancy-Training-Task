// Task 10 - Array and Array methods

// Develop a script that uses an array to store the days of the week. Use array methods such as push, pop, shift, or unshift to modify the array. Print the array after each modification. Additionally, use the indexOf method to find the index of a specific day.


let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
console.log("Original array: ", daysOfWeek);

// 1. Use push() to add "Saturday" and "Sunday" at the end
daysOfWeek.push("Saturday", "Sunday");
console.log("After push operation: ", daysOfWeek);  // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// 2. Use pop() to remove the last element
let removedDay = daysOfWeek.pop();
console.log("After pop (removed day): ", removedDay);  // "Sunday"
console.log("Array after pop operation: ", daysOfWeek);  // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// 3. Use unshift() to add "Sunday" back at the beginning
daysOfWeek.unshift("Sunday");
console.log("After unshift operation: ", daysOfWeek);  // ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// 4. Use shift() to remove the first element
let shiftedDay = daysOfWeek.shift();
console.log("After shift (removed day from first):", shiftedDay);  // "Sunday"
console.log("Array after shift operation: ", daysOfWeek);  // ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// 5. Use indexOf() to find the index of "Thursday"
let index = daysOfWeek.indexOf("Thursday");
console.log("Index of 'Thursday':", index);  // 3

// 6. Print the final state of the array
console.log("Final array:", daysOfWeek); // [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]