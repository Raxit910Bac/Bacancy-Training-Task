const { log } = require("console");
const fs = require("fs");

const syncRead = (filePath) => {
  console.log("📝 Reading File Synchronously...");
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    console.log("📖 File Content:\n", data);
  } catch (error) {
    console.log("❌ Error reading file: ", error.message);
  }
};

// Other operations to test timing
console.log("🚀 Script started running from here.");

// Calling the sync file reading function
syncRead("readFile.txt");

// Other timing functions
setTimeout(() => console.log("⏳ TimeOut executed after 1 second."), 1000);
setImmediate(() => console.log("🔄 Immediate time function execution."));
Promise.resolve().then(() => console.log("✅ Promise resolved."));

// This will execute AFTER file reading is completed
console.log("🏁 Script execution completed.");