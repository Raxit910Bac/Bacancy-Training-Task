// Basic

// const args = process.argv; // get command-line arguments

// const a = args[2];
// const b = args[3];
// const c = args[4];

// let ans;

// if (c === "+") {
//   ans = a+b;
// } else if(c === "-") {
//   ans = a-b;
// } else if(c === "*") {
//   ans = a*b;
// } else if(c === "/") {
//   ans = a/b;
// }

// console.log(ans);


// Advanced

// Get command line arguments (skip first two default ones)
const args = process.argv.slice(2);

// Validate arguments
if (args.length !== 3) {
  console.log("❌ Usage: node actions.js <num1> <num2> <operation>");
  console.log("   Example: node actions.js 5 10 add");
  process.exit(1);
}

// Parse numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);
const operation = args[2].toLowerCase();

// Check if num1 and num2 are valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log("❌ Error: First two arguments must be numbers.");
  process.exit(1);
}

// Perform the operation
let result;
switch (operation) {
    case "add":
    case "plus":
    case "+":
        result = num1 + num2;
        break;

    case "subtract":
    case "minus":
    case "-":
        result = num1 - num2;
        break;

    case "multiply":
    case "times":
    case "*":
        result = num1 * num2;
        break;

    case "divide":
    case "by":
    case "/":
        if (num2 === 0) {
            console.log("❌ Error: Cannot divide by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;

    default:
        console.log("❌ Error: Unsupported operation. Use add, subtract, multiply, or divide.");
        process.exit(1);
}

// Print result
console.log(`✅ Result: ${num1} ${operation} ${num2} = ${result}`);