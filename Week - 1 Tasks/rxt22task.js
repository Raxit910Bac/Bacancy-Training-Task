// Task 22 - Object iteration and method

// Create an object called student with properties name, age, and an array grades. Add a method named calculateAverage to the object, which calculates and returns the average of the grades. Iterate through the object properties using a loop and log each property and its value. Call the calculateAverage method and log the result.


const student = {
  name: "Ryan",
  age: 30,
  grades: [90,93,96,91,95],
  calculateAverage: function() {
    // let sum = 0;
    // for (let index = 0; index < this.grades.length; index++) {
    //   sum += this.grades[index];
    // }

    // With using reduce
    let sum = this.grades.reduce((accumulator, grd) => accumulator + grd, 0);
    return sum/this.grades.length;
  }
}

console.log("Object Properties Iteration: ");
for(let key in student){
  if(typeof student[key] !== 'function'){
    console.log(`${key}: ${student[key]}`);
  }
}

console.log("Average of Grades: ", student.calculateAverage());