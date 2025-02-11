// Task 15 - “this” with arrow functions

// Define an object called calculator with properties x and y. Add a method named calculate to the object, which takes an operation string ("add", "subtract", "multiply", "divide") and uses an arrow function to perform the corresponding operation on x and y. Inside the arrow function, use the "this" keyword to access the object properties. Test the calculator with different operations.


const calculator ={
  x: 5,
  y: 10,
  calculate(operation){
    const performOperation = () => {
      switch (operation) {
        case "add":
          return this.x + this.y;
        case "subtract":
          return this.x - this.y;
        case "multiply":
          return this.x * this.y;
        case "divide":
          return this.y !== 0 ? this.x / this.y : "Division by zero is not allowed";
        default:
          return "Invalid operation";
      }
    };
    return performOperation();
  }
}

console.log("Addition:", calculator.calculate("add"));   // 5 + 10 = 15
console.log("Subtraction:", calculator.calculate("subtract"));   // 5 - 10 = -5
console.log("Multiplication:", calculator.calculate("multiply"));   // 5 * 10 = 50
console.log("Division:", calculator.calculate("divide"));   // 5 / 10 = 0.5
console.log("Invalid operation:", calculator.calculate("mod")); // "Invalid operation"