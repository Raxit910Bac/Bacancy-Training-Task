// Task 2 - map, filter and reduce

// // Create program of which required map, filter chaining, and after that replace that with reduce
// Ex. 
// const students = [
// { name: 'jeel', age: 21 },
// { name: 'franklin', age: 25 },
// { name: 'vivek', age: 26 },
// { name: 'hardik', age: 23 },
// ]

// create array of name of student  whose age is greater than 18


const students = [
  { name: 'jeel', age: 21 },
  { name: 'franklin', age: 25 },
  { name: 'vivek', age: 26 },
  { name: 'hardik', age: 23 },
];

// 1. Using map() and filter() chaining:

const names = students
  .filter(student => student.age > 18) // Filter students with age > 18
  .map(student => student.name); // Extract names

console.log(names); // Output: ['jeel', 'franklin', 'vivek', 'hardik']



// 2. Using reduce() to Replace map() and filter():

const namesWithReduce = students.reduce((acc, student) => {
  if (student.age > 18) {
      acc.push(student.name); // Push name if age > 18
  }
  return acc;
}, []);

console.log(namesWithReduce); // Output: ['jeel', 'franklin', 'vivek', 'hardik']