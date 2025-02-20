// Task 2 - NodeJs Basic Script

// 1. Learn about node cli and npm cli commands.

// Node CLI (Command Line Interface)
// Node.js comes with a built-in CLI that allows you to run JavaScript files and interact with the Node environment.

// Some useful Node.js CLI commands:

// node -v → Check Node.js version.
// node filename.js → Run a JavaScript file.
// node → Open Node.js REPL (interactive shell).
// node --help → Display Node.js help.


// NPM CLI (Node Package Manager)
// NPM is used to manage Node.js packages.

// Common NPM commands:

// npm init -y → Create a default package.json file.
// npm install <package-name> → Install a package.
// npm install -g <package-name> → Install a package globally.
// npm list → List installed packages.
// npm run <script> → Run a script from package.json.

// 2. - Create script named `name.js` that prints passed arguments in node command.
// e.g ``node name.js {Pass your name here}`` that should print your name.



const args = process.argv; // Get command-line arguments

console.log(`Hello, ${args[2]}!`);   // Output: Hello, Khush!