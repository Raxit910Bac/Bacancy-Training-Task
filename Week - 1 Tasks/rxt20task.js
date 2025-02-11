// Task 20 - shallow vs deep copy *IMP*

// Create an object called originalPerson with properties name, age, and an array hobbies. Use both shallow copy and deep copy techniques to create a new object called shallowCopyPerson and deepCopyPerson. Modify the hobbies array in one of the copies and observe how it affects the original object. Log the properties of all three objects. 


const originalPerson = {
  name: "Yug",
  age: 23,
  hobbies: ["Cricket", "Travel", "Skating"]
}
console.log("Original Object: ", originalPerson);


const shallowCopyPerson = {...originalPerson};
shallowCopyPerson.hobbies = ["Cooking", "Dancing", "Travel"];
console.log("Original Object after shallow copy: ", originalPerson);
console.log("Shallow Copy: ", shallowCopyPerson);

const deepCopyPerson = JSON.parse(JSON.stringify(originalPerson));
deepCopyPerson.hobbies = ["Photography"];
console.log("Original object after deep copy: ", originalPerson);
console.log("Deep Copy: ", deepCopyPerson);

// Notes:
// 1. Shallow Copy:
// - It only creates a shallow copy—nested objects or arrays (like hobbies) are still shared between the original and the copy.
// - When you modify shallowCopyPerson.hobbies, it affects originalPerson.hobbies.

// 2. Deep Copy:
// - This method creates a deep copy by converting the object to a string and back to an object.
// - Changes in deepCopyPerson.hobbies do not affect the original object.

// 3. Shallow Copy shares nested objects/arrays, so changes in one reflect in the other.

// 4. Deep Copy creates an entirely separate copy, ensuring no shared references for nested objects.

// 5. Replacing Whole Array:

// In Shallow Copy: 
// - This does not affect originalPerson because you are assigning a new array to shallowCopyPerson.hobbies.
// - Since the reference to the original array is broken, the original object remains unchanged.

// In Deep Copy:
// - As expected, deepCopyPerson.hobbies is completely independent of the original object.
// - Modifying it won’t affect originalPerson.

// 6. Key Difference:

// - Modifying a nested array element (e.g., hobbies.push()) affects the original object in the shallow copy.

// - Replacing the entire array (hobbies = [...]) breaks the reference, so the original object is no longer affected.
