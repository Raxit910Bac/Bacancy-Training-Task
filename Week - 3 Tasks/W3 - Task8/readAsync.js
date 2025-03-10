const fs = require("fs");

// Function to read file asynchronously
const asyncRead = (filePath) => {
    console.log("📝 Reading file asynchronously...");
    
    fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
            console.error("❌ Error reading file:", error.message);
            return;
        }
        console.log("📖 File content:\n", data);
    });
};

// Other operations to test timing
console.log("🚀 Script started here.");

// Calling the async file reading function
asyncRead("readFile.txt");

// Using other timing functions
setTimeout(() => console.log("⏳ Timeout executed after 1 second."), 1000);
setImmediate(() => console.log("🔄 Immediate execution."));
Promise.resolve().then(() => console.log("✅ Promise resolved."));

// This will execute **BEFORE** file reading is completed
console.log("🏁 Script execution completed.");