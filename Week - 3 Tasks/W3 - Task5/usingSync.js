const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "source.txt");
const destinationPath = path.join(__dirname, "destination.txt");

try{
  const data = fs.readFileSync(sourcePath, "utf-8");
  console.log("Source File Content: ", data);
  fs.writeFileSync(destinationPath, data, "utf-8");
  console.log("Data successfully written in destination.txt file (Synchronously).");
} catch (err) {
  console.log("Error: ", err);
}