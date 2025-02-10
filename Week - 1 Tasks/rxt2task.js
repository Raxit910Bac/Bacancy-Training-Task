// Task 2 - while loop with forEach

// Create a program that uses a while loop to iterate through an array of strings. Inside the loop, use forEach to print each string with an appended exclamation mark. The loop should terminate once the length of the current string exceeds 8 characters. Comment on the differences between while and forEach in this context.


const arr2 = ["hello", "world", "newHelloo", "newWorld"];

console.log("Original Array: ", arr2);

let i = 0;

while (i < arr2.length) {
  if(arr2[i].length > 8) break;

  [arr2[i]].forEach(element => {
    console.log(element + "!");
  });
  i++;
}
