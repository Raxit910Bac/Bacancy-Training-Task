const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "source.txt");
const destinationPath = path.join(__dirname, "destination.txt");

const readStream = fs.createReadStream(sourcePath, "utf-8");
const writeStream = fs.createWriteStream(destinationPath);

readStream.pipe(writeStream);

readStream.on("end", () => {
  console.log("File data successfully copied using Streams.");
});

readStream.on("error", (err) => {
  console.error("Error reading file: ", err);
});

writeStream.on("error", (err) => {
  console.error("Error writing file: ", err);
});