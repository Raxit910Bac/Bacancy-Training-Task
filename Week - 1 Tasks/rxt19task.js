// Task 19 - reference and modification

// Create two objects named originalObject and modifiedObject. Assign the same properties to both objects. Modify one property in modifiedObject and observe how it affects the other object due to reference. Log the properties of both objects to the console.

const originalObject = {
  id: 101,
  name: "Aryan",
  city: "Tokyo"
}

const modifiedObject = originalObject;

modifiedObject.city = "London";

console.log("Original Object: ", originalObject);
console.log("Modified Object: ", modifiedObject);


// Explanation:
// 1. Reference Assignment:
// - let modifiedObject = originalObject; makes modifiedObject reference the same memory location as originalObject.
// - Both variables point to the same object, not a copy.

// 2. Modification Effect:
// - When you modify modifiedObject.age = 30, it also changes originalObject.age because they reference the same object.
