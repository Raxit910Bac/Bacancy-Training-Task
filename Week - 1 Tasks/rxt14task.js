// Task 14 - basic “this”

// Create an object called person with properties name and age. Add a method named introduce to the object, which logs a message using the "this" keyword to reference the name and age properties. Call the introduce method to introduce the person.


const person = {
  name: "joy",
  age: 25,
  introduce(){
    console.log(`Hello ${this.name}, Good Morning. You are ${this.age} years old.`);
  }
}

person.introduce();