const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "source.txt");
const destinationPath = path.join(__dirname, "destination.txt");

fs.readFile(sourcePath, "utf-8", (err, data) => {
  if (err) {
    return console.log("Error Reading source file: ", err);
  }
  console.log("Source file Content: ", data);
  fs.writeFile(destinationPath, data, "utf-8", (err) => {
    if(err) {
      return console.error("Error writing file: ", err);
    }
    console.log("Data successfully written in destination.txt file (Asynchronously).");
  });
});
