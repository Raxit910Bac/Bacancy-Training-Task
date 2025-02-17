// Task 4 - Constructor function and this

// Create Car constructor function that takes parameters such as name, brand, and year. Include a method displayInfo that prints the car details. Create an instance using the constructor function and call the displayInfo method.


function Car(name, brand, year) {
  this.name = name;
  this.brand = brand;
  this.year = year;

  this.displayInfo = function() {
    console.log(`The Car name is ${this.name}, it is of ${this.brand} brans, and manufactured in ${this.year}.`);
  };
}

// Creating an instance of Car
const carDemo = new Car("Elevate", "Honda", 2024);

// Calling the method
carDemo.displayInfo();   // Output: The Car name is Elevate, it is of Honda brans, and manufactured in 2024.