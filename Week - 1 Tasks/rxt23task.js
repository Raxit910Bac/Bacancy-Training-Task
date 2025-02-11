// Task 23 - Object constructor and prototype

// Create a constructor function called Person that takes name and age as parameters and assigns them as properties. Add a method greet to the prototype of the constructor, which logs a greeting message using the person's name. Instantiate two objects using the Person constructor and call the greet method on both.


// Constructor function for Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a greet method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello!! ${this.name}, Good Afternoon. You are ${this.age} years old.`);
};

// Instantiate two Person objects
let person1 = new Person("Vih", 40);
let person2 = new Person("Ade", 30);

// Call the greet method on both objects
person1.greet();  
person2.greet();


// Notes:

// 1. Constructor Function:
// - The Person constructor function initializes name and age properties.
// - When you create a new instance of Person, these properties are assigned to the newly created object.

// 2. Prototype Method:
// - Person.prototype.greet adds the greet method to the prototype of Person. This ensures that all instances of Person share the same greet method, saving memory.

// 3. Instantiation:
// - Two Person objects (person1 and person2) are created using the new keyword, each with its own name and age but sharing the same greet method. 