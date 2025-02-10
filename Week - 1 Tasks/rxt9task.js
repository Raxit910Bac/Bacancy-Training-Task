// Task 9 - working with numbers and strings

// Create a program that declares variables with different data types: a number (age), a string (name), and a boolean (isStudent). Perform operations like concatenating the name with a greeting, converting the age to a string, and combining the boolean value with a string to form a sentence. Print the results.

let age = 25;   // number
let name = "Person1";   // string
let isStudent = true;   // boolean

// 1. Concatenating the name with a greeting
let greeting = "Hello, " + name + "!";
console.log(greeting);  // Output: Hello, Person1!

// 2. Converting age to a string and combining it with another string
let ageString = "Your age is " + age.toString() + " years.";
console.log(ageString);  // Output: Your age is 25 years.

// 3. Combining the boolean value with a string to form a sentence
let studentStatus = "Are you a student? " + isStudent;
console.log(studentStatus);  // Output: Are you a student? true

// 4. More meaningful sentence using template literals
let fullSentence = `Hello, ${name}. You are ${age} years old. Student status: ${isStudent}.`;
console.log(fullSentence);  // Output: Hello, Person1. You are 25 years old. Student status: true.