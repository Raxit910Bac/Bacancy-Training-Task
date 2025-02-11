// Task 21 - Object comparison

// Create two objects user1 and user2 with similar properties. Write a function compareObjects that compares the properties of both objects. The function should log whether the objects are equal or not based on their properties. Test the function with user1 and user2


const user1 = {
  name: "p1",
  address: "Mumbai",
}

const user2 = {
  name: "p1",
  address: "Mumbai"
}

// Function to compare two objects
function compareObjects(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  // Check if they have the same number of keys
  if (keys1.length !== keys2.length) {
    console.log("Objects are not equal.");
    return;
  }

  // Check if all keys and values are equal
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      console.log("Objects are not equal.");
      return;
    }
  }

  console.log("Objects are equal.");
}

compareObjects(user1, user2);