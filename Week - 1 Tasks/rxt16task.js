// Task 16 - “this” with nested function4

// Create a constructor function named Car that takes a brand parameter. Inside the constructor, create an object property carInfo with a nested method named displayInfo. The displayInfo method should use the "this" keyword to access both the brand property of the object and a parameter passed to the displayInfo method. Instantiate a Car object and call the displayInfo method.


// Constructor function named Car
function Car(brand) {
  this.brand = brand;

  // Object property carInfo with a nested method displayInfo
  this.carInfo = {
    displayInfo: function(insideInfo){
      console.log(`Brand of Car: ${this.brand}, and another details are: ${insideInfo}`);
    }.bind(this)   // Use .bind(this) to ensure 'this' refers to the Car object
  }
}

// Instantiate a Car object
let myCar = new Car("Mazda");

// Call the displayInfo method with an additional parameter
myCar.carInfo.displayInfo("It's an International Company.")


// Notes:
// - When you do this.carInfo, you are attaching carInfo as a property of the newly created Car object. This means every instance of Car will have its own carInfo property.
// - Here, this.carInfo means the carInfo object belongs to each specific Car instance.
// - If you declare carInfo without this, it becomes a local variable inside the constructor function and is not attached to the Car instance. It would be lost once the function finishes execution.

// - If you omit .bind(this), this.brand will be undefined because this would refer to carInfo rather than the Car object.


// Alternate Method using Arrow Function:

// Constructor function named Car
function Car(brand) {
  this.brand = brand;
  this.carInfo = {
    // Using an arrow function for displayInfo
    displayInfo: (extraInfo) => {
      console.log(`Car brand: ${this.brand}, Additional info: ${extraInfo}`);
    }
  };
}

// Instantiate a Car object
let newCar = new Car("Tesla");

// Call the displayInfo method with an additional parameter
newCar.carInfo.displayInfo("This car is electric and high-tech.");